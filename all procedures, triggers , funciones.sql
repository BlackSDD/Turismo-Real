-- Funciones que calculan los costos

-- Calcula el costo de arriendo del depto en la fecha de la reserva ( dias * costo por dia)
create or ALTER function fn_arriendo (@id_rva int) returns int
as 
BEGIN
	declare @v1 int
	select @v1 = (datediff(DAY, r.fec_ini_rva, r.fec_fin_rva ) * d.costo_arri_dpto) 
		from reserva r join departamento d 
			on r.id_dpto = d.id_dpto 
		where r.id_rva = @id_rva; 
	return @v1
end;
go


-- Calcula el monto que falta por pagar 
create or ALTER FUNCTION fn_monto_pago ( @ID_RVA INT) RETURNS INT
AS 
   BEGIN
      DECLARE @V_MONTO INT
      SELECT @V_MONTO = monto_total - monto_pagado
      FROM pago
      WHERE ID_RVA = @ID_RVA
      RETURN @V_MONTO
   END 
go


-- Calcula el monto de los costos de servicios extras
create or ALTER  function fn_servicios (@id_rva int) returns int
as
begin
declare @v_servicio int
	select @v_servicio = sum(c.costo_total) 
		from reserva r join cont_serv c
			on r.id_rva = c.id_rva 
		group by c.id_rva   
		having c.id_rva = @id_rva;
    return @v_servicio;
end;
go

-- Funcion que calcula el costo del contrato de un tour según cantidad de personas y tipo
create or alter function fn_costo_tour (@c_adult int , @c_ninos int, @c_3ra int , @id_serv int) returns int
as 
begin
    declare @costo int;
    declare @p_adult int = (select cost_adult from tour where id_serv = @id_serv);
    declare @p_nino int = (select cost_nigno from tour where id_serv = @id_serv);
    declare @p_3ra int = (select cost_3ra from tour where id_serv = @id_serv);
    set @costo = (@p_adult * @c_adult) + (@p_nino * @c_ninos) + (@p_3ra * @c_3ra);
	return @costo;
end;
go

-- Funcion que calcula el costo de un servicio de transporte según la hora 
create or alter function fn_costo_transporte (@id_serv int, @hora char(5) , @km_rec decimal(6,3)) returns int
as 
begin
	declare @costo int;
    declare @km int;
	declare @compare int = (cast(SUBSTRING(@hora,1,2)as int));
    if @compare between 06 and 18
    begin
		set @km = (select cost_km_dia
					from transporte 
					where id_serv = @id_serv);
    end;
    else if @compare between 00 and 05 or @compare >= 19
    begin
		set @km = (select cost_km_noc
					from transporte
					where id_serv = @id_serv);
    end;
	set @costo = @km_rec * @km;
	set @costo= CONVERT(INT,ROUND(@costo,0,0),0);
	return @costo;
end;
go

-- Trigger para insertar 10 años de fechas una vez insertado un depto;
create or alter trigger tr_insert_disponibilidad
	on departamento
	after insert
as
	declare @i int = 0;
	declare @v_id_dpto int = (select id_dpto from inserted);
	declare @v_fecha date = getdate();
begin
	WHILE @I <= 3652
	BEGIN
            INSERT disponibilidad (FEC_DISP, ESTA_DISP, ID_DPTO)
               VALUES (@v_fecha, 'Si', @v_id_dpto);
            SET @v_fecha = DATEADD(day, 1, @v_fecha);
            SET @I = @I + 1;
	END;
end;
go


-- Trigger para cambiar la disponibidad del departamento al insertar una reserva
create or alter trigger tr_insert_reserva_fechas
	on reserva 
	after insert
as
	declare @v_ini date = (select fec_ini_rva from inserted);
	declare @v_fin date = (select fec_fin_rva from inserted);
	declare @day date = @v_ini;
	declare @id_dpto int = (select id_dpto from inserted);
	declare @id_usr int = (select id_usr from inserted);
begin 
    WHILE @day <= @v_fin
    BEGIN
        update disponibilidad set
            esta_disp = 'No'
            where fec_disp = @day and 
            id_dpto = @id_dpto;
        set @day = DATEADD(day, 1, @day);
    END; 
    update usuario set
            cant_res = cant_res + 1
            where id_usr = @id_usr;
end;
go


-- trigger para cambiar la disponibiliad de un depto al modificar una fecha
create or alter trigger tr_update_reserva_fechas
	on reserva
	after update
as
	declare @v_ini date = (select fec_ini_rva from inserted);
	declare @v_fin date = (select fec_fin_rva from inserted);
	declare @day date = @v_ini;
	declare @id_dpto int = (select id_dpto from inserted);
	declare @id_usr int = (select id_usr from inserted);
	declare @estado_rva nvarchar(30) = (select estado_rva from inserted);
	declare @id_rva int = (select id_rva from inserted);
begin 
    if @estado_rva in ('terminada','cancelada') 
	begin
        WHILE @day <= @v_fin
        begin
			update disponibilidad set
				esta_disp = 'Si'
                where fec_disp = @day and
                id_dpto = @id_dpto;
            set @day = DATEADD(day, 1, @day);
        END;    
    end;

    if @estado_rva = 'cancelada' 
	begin
        update usuario set
            cant_res = cant_res -1
            where id_usr = @id_usr;
        update pago set
            est_pago = 'pago cancelado'
            where id_rva = @id_rva;
    end;
end;   
go


-- Cambia el estado de la reserva cuando se agrega el checkin respectivo
create or ALTER trigger tr_insert_checkin_rva  on checkin
after insert
as
	declare @id_rva int = (select id_rva from inserted);
begin
    update reserva set
        estado_rva = 'en progreso'
        where id_rva = @id_rva;
end;
go


-- Cambia el estado de la reserva y el monto del pago al ingresar un checkout
create or alter trigger tr_insert_checkout_rva on checkout
after insert
as
	declare @id_reserva int = (select id_rva from inserted);
	declare @multa int = (select cost_multa from inserted);
	declare @estado nvarchar(30);
begin
	if @multa = 0 
	begin
		set @estado = (select est_pago from pago where id_rva = @id_reserva); 
	end;
	else
	begin
		set @estado = 'pago pendiente';
	end;

		update reserva set
			estado_rva = 'terminada'
			where id_rva = @id_reserva;

		update pago set
			monto_total = monto_total + @multa,
			monto_multas = monto_multas + @multa,
			est_pago = @estado
			where id_rva = @id_reserva;
end;
go


-- Trigger que inserta el monto del pago inicial (abono y costo por reserva) al realizar una reserva
create or alter trigger tr_insert_abono_reserva on reserva
for insert
as
	declare @total int;  
	declare @id int = (select id_rva from inserted);
	declare @arriendo int = (select dbo.fn_arriendo(@id));
	declare @abono int = (@arriendo*0.1);
	set @total = @arriendo;
begin
	insert into pago values (@id,@total,@arriendo,@abono,0,0,0,'abono pendiente');
end;
go


-- Trigger que modifica la disponibilidad cuando se ingresa una reserva de mantención
create or alter trigger tr_ingreso_mantencion_res_mant on res_mant
after insert 
as 
	declare @fec_rmant date = (select fec_rmant from inserted);
	declare @id_dpto int = (select id_dpto from inserted);
begin
	update disponibilidad 
		set esta_disp = 'No' 
		where id_dpto = @id_dpto and fec_disp = @fec_rmant;
end;
go


-- Trigger que modifica la disponibildad según el estado actualizado de una reserva de mantención
create or alter trigger tr_update_mantencion_res_mant on res_mant
after update 
as
	declare @id_dpto int = (select id_dpto from inserted);
	declare @est_man nvarchar(30) = (select est_man from inserted);
	declare @new_fec_rmant date = (select fec_rmant from inserted);
	declare @old_fec_rmant date = (select fec_rmant from deleted);
begin
		if @est_man in ('cancelada','realizada')
			begin
				update disponibilidad set 
					esta_disp = 'Si'
					where id_dpto = @id_dpto and fec_disp = @old_fec_rmant;
			end;
		else
			begin
				if @old_fec_rmant != @new_fec_rmant 
				begin
				update disponibilidad set 
						esta_disp = 'No'
						where id_dpto = @id_dpto and fec_disp = @new_fec_rmant;
				update disponibilidad set 
					esta_disp = 'Si'
					where id_dpto = @id_dpto and fec_disp = @old_fec_rmant;
			end;
		 end;
end;
go


-- Trigger que cambia el estado de la reserva de mantención al insertar una mantención en detalle
create or alter trigger tr_ingreso_mantencion on mantencion
after insert 
AS
		DECLARE @id INT = (SELECT id_rmant FROM inserted)
begin
		update res_mant set
			est_man = 'realizada'
		where id_rmant = @id;
end;
go


-- trigger que añade el costo de un servicio extra en el pago de la reserva
create or alter trigger tr_insert_costo_extra on cont_serv
after insert 
as
	declare @new_costo_total int = (select costo_total from inserted);
	declare @id int = (select id_rva from inserted); 
begin
    update pago set 
        monto_total = monto_total + @new_costo_total,
        monto_serv_extra = monto_serv_extra + @new_costo_total,
        est_pago = 'pago pendiente'
    where id_rva = @id;
end;
go

-- Trigger que actualiza el estado de los pagos según el monto que se pague
create or alter trigger tr_estado_pago on pago
after update
as
	declare @pago int = (select monto_pagado from inserted);
    declare @id int = (select id_rva from deleted);
    declare @abono int =(select abono_req from deleted) ;    
    declare @total int = (select monto_total from deleted);
begin
	if @pago > @abono and @pago < @total 
    begin
		update pago set
			est_pago = 'pago pendiente'
			where id_rva = @id;
	end;
	else if @pago < @abono 
	begin
		update pago set
			est_pago = 'abono pendiente'
			where id_rva = @id;
	end;
	else if @pago = @total 
    begin
		update pago set
			est_pago = 'pagado totalmente'
			where id_rva = @id;    
	end;
	else if @pago = @abono 
	begin
		update pago set
			est_pago = 'abonado'
			where id_rva = @id;
		update reserva set
			estado_rva = 'reservada'
			where id_rva = @id;
	end;
end;
go

-- TABLA AGENCIA_EXTERNA

-- Eliminar
create or alter procedure pd_eliminarAgenciaExterna
(
	@id_agencia INT
)
as 
begin
	delete  from agencia_externa where id_agencia = @id_agencia;
end;
go

-- Agregar
create or alter procedure pd_agregarAgenciaExterna
(
	@nom_age NVARCHAR(100),
	@email_age NVARCHAR(100),
	@tel_age INT,
    @id_com INT
)
as
begin
	insert into agencia_externa (nom_age, email_age, tel_age, id_com)
	values(
	@nom_age,
	@email_age ,
	@tel_age,
    @id_com
	);
end;
go

-- Modificar
create or alter procedure pd_modificarAgenciaExterna
(
	@id_age INT,
	@nom_age NVARCHAR(100),
	@email_age NVARCHAR(100),
	@tel_age INT
)
as
begin
	update agencia_externa 
    set nom_age = @nom_age,
		email_age = @email_age,
        tel_age = @tel_age
	where ID_AGENCIA = @id_age;
end;
go

------------------------------------------------------

-- TABLA ARTICULO
-- Eliminar
create or alter procedure pd_eliminarArticulo
(
	@id_arti INT
)
as
begin
	delete  from articulo where id_arti = @id_arti;
end;
go

-- Agregar
create or alter procedure pd_agregarArticulo
(
	@nom_arti NVARCHAR(100),
	@cant_arti INT,
	@deta_arti NVARCHAR(2000),
	@valor_arti INT,
    @id_depto INT
)
as
    declare @compra date = getdate();
begin
	insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, fec_compra , id_dpto)
	values(
	@nom_arti ,
	@cant_arti ,
	@deta_arti,
    @valor_arti,
    @compra,
	@id_depto
	);
end;
go

-- Modificar
create or alter procedure pd_modificarArticulo
(
	@id_arti INT,
	@nom_arti NVARCHAR(100),
	@cant_arti INT,
	@deta_arti NVARCHAR(2000),
	@valor_arti INT
)
as
begin
	update articulo set 
		nom_arti = @nom_arti, 
		cant_arti = @cant_arti, 
		deta_arti = @deta_arti, 
		valor_arti = @valor_arti
	where id_arti = @id_arti;
end;
go

---------------------------------------------------------------------------

--TABLA CHECK IN

-- Agregar
create or alter procedure pd_agregarCheckin
(
    @id_rva INT,
 	@deta_chi NVARCHAR(2000),
    @id_usr INT
)
as
begin
	insert into checkin (id_rva, deta_chi, id_usr) 
	values(
	@id_rva,
 	@deta_chi,
    @id_usr
    );
end;
go

--Modificar
create or alter procedure pd_modificarCheckin
(
 	@id_rva INT,
	@deta_chi NVARCHAR(2000)	
)
as
begin
 	update checkin set
	deta_chi = @deta_chi
 	where id_rva = @id_rva;	
end;
go

---------------------------------------------------------------------------

-- TABLA CHECK OUT

create or alter procedure pd_agregarCheckout
(
    @cost_multa INT,
    @deta_cho NVARCHAR(2000),
    @id_rva INT,
    @id_usr INT
)
as
begin
    insert into checkout (id_rva, cost_multa, deta_cho, id_usr)
	values(
        @id_rva,
        @cost_multa,
        @deta_cho,
        @id_usr
    );
end;
go

-- Modificar
create or alter procedure pd_modificarCheckout
(
	@cost_multa INT,
	@deta_cho NVARCHAR(2000),
	@id_rva INT
)
as
begin
    update checkout set 
        cost_multa = @cost_multa, 
        deta_cho = @deta_cho
        where id_rva = @id_rva;
end;
go

---------------------------------------------------------------------------

-- TABLA COMUNA

-- Agregar
create or alter procedure pd_agregarComuna
(
	@nom_com NVARCHAR(100),
    @id_rgn INT
)
as
begin
	insert into Comuna (nom_com, id_rgn)
	values(
	@nom_com,
    @id_rgn
	);
end;
go

-- Modificar
create or alter procedure pd_modificarComuna
(
	@id_com INT,
	@nom_com NVARCHAR(100)
)
as
begin
	update comuna set
        nom_com = @nom_com
        where id_com = @id_com;
end;
go

-- Eliminar
create or alter procedure pd_eliminarComuna
(
	@id_com INT
)
as
begin
	delete from comuna 
	where id_com = @id_com;
end;
go

---------------------------------------------------------------------------

-- TABLA CONDOMINIO

-- Eliminar
create or alter procedure pd_eliminarCondominio
(
	@id_cnd INT
)
as
begin
	delete from condominio 
	where id_cnd = @id_cnd;
end;
go

-- Agregar
create or alter procedure pd_agregarCondominio
(
	@nom_cnd NVARCHAR(100),
	@id_com INT
)
as
begin
	insert into condominio (nom_cnd, id_com)
	values(
	@nom_cnd,
    @id_com
	);
end;
go

-- Modificar
create or alter procedure pd_modificarCondominio
(
	@id_cnd INT,
	@nom_cnd NVARCHAR(100)
)
as
begin
	update condominio set
        nom_cnd = @nom_cnd
        where id_cnd = @id_cnd;
end;
go

---------------------------------------------------------------------------

--TABLA CONT_SERV

-- Eliminar
-- Se cambia a estado contrato cancelado
create or alter procedure pd_eliminarContServ
(
	@id_cont_serv INT
)
as
begin
	update cont_serv set 
		deta_cont = 'Se canceló la reserva del servicio',
		est_cont = 'cancelado',
		km_rec = 0,
		lugar_recogida = ' ',
		lugar_destino = ' ',
		hora_acord = ' ' ,
		costo_total = 0
	where id_cont_serv = @id_cont_serv;
end;
go

-- Agregar 
-- al verificar que tipo de servicio es, llama a la funcion respectiva para calcular el monto total el contrato
create or alter procedure pd_agregarContServ
(
	@deta_cont NVARCHAR(100),
	@fec_acord date,
    @hora_acord char(5),
	@lugar_recogida NVARCHAR(100),
	@lugar_destino NVARCHAR(100),
	@km_rec decimal(6,3),
    @id_rva int,
    @id_serv int,
    @cant_adult int,
    @cant_nino int,
    @cant_3ra int
)
as  
    declare @fec_cont date = getdate();
    declare @costo_total int;
    declare @tipo char(1) = (select tipo_serv from servextras where id_serv = @id_serv);
begin
    if @tipo = 'T' 
		begin
			set @costo_total = dbo.[fn_costo_tour](@cant_adult, @cant_nino, @cant_3ra, @id_serv);
		end;
    else if @tipo = 'V' 
		begin
			set @costo_total = dbo.[fn_costo_transporte](@id_serv, @hora_acord, @km_rec);
		end;
	insert into cont_serv (fec_cont, costo_total, deta_cont, fec_acord, hora_acord, lugar_recogida, lugar_destino, km_rec, cant_adult, cant_nigno, cant_3ra, est_cont, id_rva, id_serv)
    values
	(
	@fec_cont,
	@costo_total ,
	@deta_cont,
	@fec_acord ,
    @hora_acord,
	@lugar_recogida,
	@lugar_destino,
	@km_rec,
	@cant_adult,
    @cant_nino,
    @cant_3ra,
    'reservado',
    @id_rva,
    @id_serv
	);
end;
go

-- Modificar
create or alter procedure pd_modificarContServ
(
	@id_cont int,
	@deta_cont NVARCHAR(100),
	@fec_acord date,
    @hora_acord char(5),
	@lugar_recogida NVARCHAR(100),
	@lugar_destino NVARCHAR(100),
	@km_rec decimal(6,3),
    @cant_adult int,
    @cant_nigno int,
    @cant_3ra int
)
as
begin
	declare @costo_total int;
	declare @id_serv int  = (select id_serv from cont_serv where id_cont_serv = @id_cont);
    declare @tipo char(1) = (select tipo_serv from servextras where id_serv = @id_serv );
	if @tipo = 'T' 
		begin
			set @costo_total = dbo.[fn_costo_tour](@cant_adult, @cant_nigno, @cant_3ra, @id_serv);
		end;
    else if @tipo = 'V' 
		begin
			set @costo_total = dbo.[fn_costo_transporte](@id_serv, @hora_acord, @km_rec);
		end;
	update cont_serv set
		deta_cont = @deta_cont,
		fec_acord = @fec_acord,
		hora_acord = @hora_acord,
		lugar_recogida = @lugar_recogida,
		lugar_destino = @lugar_destino,
		km_rec = @km_rec,
		cant_adult = @cant_adult,
		cant_nigno = @cant_nigno,
		cant_3ra = @cant_3ra
	where id_cont_serv = @id_cont;
end;
go

---------------------------------------------------------------------------

-- TABLA DEPARTAMENTO

-- Eliminar
-- No se elimina de la base de datos sino que se deja inhabilitado
create or alter procedure pd_eliminarDepartamento
(
	@id_dpto INT
)
as
begin
    delete from disponibilidad where id_dpto = @id_dpto;
    delete from articulo where id_dpto = @id_dpto;
	update departamento set
        desc_dpto = 'departamento no disponible',
        costo_arri_dpto = '0',
        img_1_dpto = 0x,
        img_2_dpto = 0x,
        img_3_dpto = 0x,
        img_4_dpto = 0x,
        img_5_dpto = 0x
        where id_dpto = @id_dpto;        
	update disponibilidad set
		esta_disp = 'No'
		where id_dpto = @id_dpto;
end;
go

-- Agregar
create or alter procedure pd_agregarDepartamento
(
	@dir_dpto NVARCHAR(100), 
	@num_dpto INT, 
	@n_amb_dpto INT, 
	@desc_dpto NVARCHAR(2000), 
	@costo_arri_dpto INT, 
	@img_1_dpto image, 
	@img_2_dpto image, 
	@img_3_dpto image,
	@img_4_dpto image, 
	@img_5_dpto image,
    @id_cnd INT	
)
as
begin
	insert into departamento (dir_dpto, num_dpto, n_amb_dpto, desc_dpto, costo_arri_dpto, img_1_dpto, img_2_dpto, img_3_dpto, img_4_dpto, img_5_dpto, id_cnd)
	values
	(
	@dir_dpto , 
	@num_dpto , 
	@n_amb_dpto , 
	@desc_dpto , 
	@costo_arri_dpto, 
	@img_1_dpto , 
	@img_2_dpto , 
	@img_3_dpto ,
	@img_4_dpto , 
	@img_5_dpto ,
    @id_cnd
	); 
end;
go

-- Modificar
create or alter procedure pd_modificarDepartamento
(
	@id_dpto INT,
	@dir_dpto NVARCHAR(100), 
	@num_dpto INT, 
	@n_amb_dpto INT, 
	@desc_dpto NVARCHAR(2000), 
	@costo_arri_dpto INT, 
	@img_1_dpto image, 
	@img_2_dpto image, 
	@img_3_dpto image,
	@img_4_dpto image, 
	@img_5_dpto image
)
as
begin
	update departamento set 
		dir_dpto = @dir_dpto,
		num_dpto = @num_dpto,
		n_amb_dpto = @n_amb_dpto,
		desc_dpto = @desc_dpto,
		costo_arri_dpto = @costo_arri_dpto,
		img_1_dpto = @img_1_dpto,
		img_2_dpto = @img_2_dpto,
		img_3_dpto = @img_3_dpto,
		img_4_dpto = @img_4_dpto,
		img_5_dpto = @img_5_dpto
	where id_dpto = @id_dpto;
end;
go

---------------------------------------------------------------------------

-- TABLA GASTOS

-- Eliminar
create or alter procedure pd_eliminarGastos
(
	@id_dpto INT
)
as
begin
	delete  from Gastos where id_dpto = @id_dpto;
end;
go

-- Agregar
-- Verifica si ya se añadio una boleta de gastos el mismo mes, de no haberse hecho, ingresa los datos
create or alter procedure pd_agregarGastos
(
	@gasto_luz       INT,
    @gasto_agua      INT,
    @gasto_gas       INT,
    @gasto_servicios INT,
    @gasto_dividendo INT,
    @gasto_comunes   INT,
    @id_dpto INT
)
as
    declare @ingreso date = getdate();
    declare @fec_compare date = (select fec_ingreso from gastos 
        where id_dpto = @id_dpto and 
            month(fec_ingreso) = month(@ingreso) and
            year(fec_ingreso) = year(@ingreso));
begin
    if month(@fec_compare) = month(@ingreso) and year(@fec_compare) = year(@ingreso) begin
        declare @mserror nvarchar(1000) =  'Ya se ingresaron gastos este mes, debe modificar para cambiarlos';
        print @mserror;
    end;
    else begin
        insert into gastos (id_dpto, fec_ingreso, gasto_luz, gasto_agua, gasto_gas, gasto_servicios, gasto_dividendo, gasto_comunes) 
        values
        (
        @id_dpto,
        @ingreso,
        @gasto_luz,
        @gasto_agua,
        @gasto_gas,
        @gasto_servicios,
        @gasto_dividendo,
        @gasto_comunes
        );
    end;
end;
go

-- Modificar
create or alter procedure pd_modificarGastos
(
	@gasto_luz       INT,
    @gasto_agua      INT,
    @gasto_gas       INT,
    @gasto_servicios INT,
    @gasto_dividendo INT,
    @gasto_comunes   INT,
    @id_dpto INT
)
as
begin
	update gastos set 
		gasto_luz = @gasto_luz,
        gasto_agua = @gasto_agua,
        gasto_gas = @gasto_gas,
        gasto_servicios = @gasto_servicios,
        gasto_dividendo = @gasto_dividendo,
        gasto_comunes = @gasto_comunes
	where id_dpto = @id_dpto;
end;
go

---------------------------------------------------------------------------

-- TABLA MANTENCION

-- Agregar
create or alter procedure pd_agregarMantencion
(
	@cost_mant INT,
	@deta_mant NVARCHAR(2000),
    @id_rmant INT
)
as
begin
	insert into mantencion (id_rmant, cost_mant, deta_mant)
	values
	(
	@id_rmant,
	@cost_mant ,
	@deta_mant 
	);
end;
go

-- Modificar
create or alter procedure pd_modificarMantencion
(
    @id_rmant INT,
	@cost_mant INT,
	@deta_mant NVARCHAR(2000)
)
as
begin
	update mantencion set 
        cost_mant = @cost_mant,
        deta_mant = @deta_mant
	where id_rmant = @id_rmant;
end;
go

---------------------------------------------------------------------------

--TABLA PAGO


create or alter procedure pd_agregarPago
(
	@id_rva INT,
	@monto_pagado INT
)
as
begin
	update pago set
        monto_pagado = @monto_pagado
	where id_rva = @id_rva; 
end;
go

---------------------------------------------------------------------------

--TABLA REGION

-- Eliminar
create or alter procedure pd_eliminarRegion
(
	@id_rgn INT
)
as
begin
	delete from Region 
        where id_rgn = @id_rgn; 
end;
go

-- Agregar
create or alter procedure pd_agregarRegion
(
	@nom_rgn NVARCHAR(100)	
)
as
begin
	insert into region (nom_rgn) values
	(
	@nom_rgn 
	);
end;
go

--modificar
create or alter procedure pd_modificarRegion
(
	@id_rgn INT,
	@nom_rgn NVARCHAR(100)
)
as
begin
	update region set 
        nom_rgn = @nom_rgn
    where id_rgn = @id_rgn;
end;
go

---------------------------------------------------------------------------

-- TABLA RES_MANT

-- Eliminar
create or alter procedure pd_eliminarMantencion
(
	@id_rmant INT
)
as
begin
	update res_mant set
        est_man = 'cancelada'
    where id_rmant = @id_rmant;
end;
go

-- Agregar
create or alter procedure pd_agregarResMant
(
	@fec_rmant date,
    @id_dpto INT,
    @id_usr INT
)
as
begin
	insert into Res_mant (fec_rmant, est_man, id_dpto, id_usr)
	values
	(
	@fec_rmant,
    'agendada',
    @id_dpto,
    @id_usr
	);
end;
go

-- Modificar
create or alter procedure pd_modificarResMant
(
	@id_rmant INT,
	@fec_rmant date
)
as
begin
	update Res_mant set 
        fec_rmant = @fec_rmant
	where id_rmant = @id_rmant;
end;
go

---------------------------------------------------------------------------

--TABLA RESERVA

-- Agregar
create or ALTER PROCEDURE pd_agregarReserva  
   @FEC_INI_RVA date,
   @FEC_FIN_RVA date,
   @NUM_PERS INT,
   @ID_DPTO INT,
   @ID_USR INT
AS 
BEGIN
	DECLARE
		@CUR_ROWCOUNT int;
    DECLARE
        @CUR_REC$FEC_DISP date, 
        @CUR_REC$ESTA_DISP nvarchar(30), 
        @CUR_REC$ID_DPTO INT, 
        @MSG varchar(100);
    DECLARE
        CUR CURSOR LOCAL FOR 
		    SELECT DISPONIBILIDAD.FEC_DISP, DISPONIBILIDAD.ESTA_DISP, DISPONIBILIDAD.ID_DPTO
            FROM DISPONIBILIDAD
            WHERE	FEC_DISP BETWEEN @FEC_INI_RVA AND @FEC_FIN_RVA AND 
					ID_DPTO = @ID_DPTO AND 
					ESTA_DISP = 'No'
	SET @CUR_ROWCOUNT = 0
    OPEN CUR;
		WHILE @CUR_ROWCOUNT < 1
        BEGIN
            FETCH CUR
                INTO @CUR_REC$FEC_DISP, @CUR_REC$ESTA_DISP, @CUR_REC$ID_DPTO;
            IF @@FETCH_STATUS = 0 begin
				SET @CUR_ROWCOUNT = @CUR_ROWCOUNT + 1;
			end;
			IF @@FETCH_STATUS <> 0 begin
				BREAK;
			end;
        END;
		IF @CUR_ROWCOUNT >= 1
		begin
			 SET @MSG = 'Las fechas de la reserva no están disponibles';
			 print @MSG;
		end;
		ELSE 
		BEGIN
			INSERT into RESERVA( 
				FEC_INI_RVA, 
				FEC_FIN_RVA, 
				NUM_PERS, 
				ESTADO_RVA, 
				ID_DPTO, 
				ID_USR)
				VALUES ( 
					CAST(@FEC_INI_RVA AS DATETIME), 
					CAST(@FEC_FIN_RVA AS DATETIME), 
					@NUM_PERS, 
					'en verificación', 
					@ID_DPTO, 
					@ID_USR);
		end;
    CLOSE CUR;
    DEALLOCATE CUR;
END;
go

-- Eliminar
-- No se elimina, se pasa a estado cancelada
create or alter procedure pd_eliminarReserva
(
	@id_rva INT
)
as
begin
	update reserva set
        estado_rva = 'cancelada'
    where id_rva = @id_rva;
end;
go

-- Modificar
create or alter procedure pd_modificarReserva
(
	@id_rva INT,
	@num_pers INT,
	@estado_rva NVARCHAR(30)
)
as
begin
	update Reserva set 
        num_pers = @num_pers,
        estado_rva = @estado_rva
	where id_rva = @id_rva;
end;
go


---------------------------------------------------------------------------

--TABLA SERVEXTRAS

-- Eliminar
-- Elimina los conductores, tours , vehiculos y servicio de transporte
-- Cambia de estado el servextra a 'Servicio no disponible'
create or ALTER PROCEDURE pd_eliminarServExtras  
   @id_serv int
AS 
BEGIN
	DECLARE @tipo char(1) = (SELECT tipo_serv FROM servextras WHERE id_serv = @id_serv);
	IF @tipo = 'T'
	BEGIN
		DELETE tour
		WHERE id_serv = @id_serv;
        UPDATE servextras SET 
	        desc_serv = 'Servicio no disponible'
		WHERE id_serv = @id_serv;
	END;
	ELSE IF @tipo = 'V'
    BEGIN
		DECLARE @rut_conduc int; 
        DECLARE @dv_conduc char(1); 
        DECLARE @nom_conduc nvarchar(50); 
        DECLARE @appat_conduc nvarchar(50); 
        DECLARE @apmat_conduc nvarchar(50);
		DECLARE @email_conduc nvarchar(100); 
        DECLARE @tel_conduc int; 
		DECLARE @patente char(8);
        DECLARE
			COND CURSOR LOCAL FORWARD_ONLY FOR 
				SELECT 
					CONDUCTOR.RUT_CONDUC, 
					CONDUCTOR.DV_CONDUC, 
					CONDUCTOR.NOM_CONDUC, 
					CONDUCTOR.APPAT_CONDUC,	
					CONDUCTOR.APMAT_CONDUC, 
					CONDUCTOR.EMAIL_CONDUC, 
					CONDUCTOR.TEL_CONDUC, 
					CONDUCTOR.PATENTE, 
					CONDUCTOR.ID_SERV
				FROM CONDUCTOR
					WHERE ID_SERV = @ID_SERV;
			OPEN COND;
				WHILE 1 = 1
				BEGIN
					FETCH COND INTO 
				        @rut_conduc, 
						@dv_conduc, 
						@nom_conduc, 
						@appat_conduc, 
						@apmat_conduc, 
						@email_conduc, 
						@tel_conduc, 
						@patente, 
						@id_serv 
						IF @@FETCH_STATUS = -1 BEGIN
							BREAK
						END;
					DELETE conductor
						WHERE id_serv = @id_serv;
					DELETE vehiculo
						WHERE patente = @patente;
				END;
			CLOSE COND;
			DEALLOCATE COND;
			DELETE transporte
				WHERE id_serv = @id_serv
			UPDATE servextras SET 
				desc_serv = 'Servicio no disponible'
			WHERE id_serv = @id_serv;
	END;
END;
go

--- Agregar
create or alter procedure pd_agregarServExtras
(
	@nom_serv NVARCHAR(100),
	@tipo_serv char,
	@desc_serv NVARCHAR(2000),
    @id_agencia INT
)
as
begin
	insert into servExtras (nom_serv, tipo_serv, desc_serv, id_agencia)
	values
	(
	@nom_serv,
	@tipo_serv,
	@desc_serv,
    @id_agencia
	);
end;
go

-- Modificar
create or alter procedure pd_modificarServExtras
(
	@id_serv INT,
	@nom_serv NVARCHAR(100),
	@desc_serv NVARCHAR(2000)
)
as
begin
	update servExtras set 
        nom_serv = @nom_serv,  
        desc_serv = @desc_serv
	where id_serv = @id_serv;
end;
go

---------------------------------------------------------------------------

-- TABLA TOUR

-- Agregar
create or alter procedure pd_agregarTour
(
	@id_serv INT,
	@dur_hra INT,
	@dur_min INT,
	@cost_adult INT,
	@cost_nigno INT,
	@cost_3ra INT,
	@ubi_partida NVARCHAR(100),
	@ubi_fin NVARCHAR(100),
	@alimentacion char(2),
	@transporte char(2)
)
as
begin
	insert into Tour (id_serv, dur_hra, dur_min, cost_adult, cost_nigno, cost_3ra, ubi_partida, ubi_fin, alimentacion, transporte)
	values
	(
	@id_serv,
	@dur_hra,
	@dur_min,
	@cost_adult ,
	@cost_nigno ,
	@cost_3ra ,
	@ubi_partida,
	@ubi_fin ,
	@alimentacion,
	@transporte 
	);  
end;
go

-- Modificar
create or alter procedure pd_modificarTour
(
	@id_serv INT,
	@dur_hra INT,
	@dur_min INT,
	@cost_adult INT,
	@cost_nigno INT,
	@cost_3ra INT,
	@ubi_partida NVARCHAR(100),
	@ubi_fin NVARCHAR(100),
	@alimentacion char(2),
	@transporte char(2)
)
as
begin
	update Tour set 
		dur_hra = @dur_hra,
        dur_min = @dur_min,
        cost_adult = @cost_adult,
        cost_nigno = @cost_nigno, 
        cost_3ra = @cost_3ra, 
        ubi_partida = @ubi_partida, 
        ubi_fin = @ubi_fin, 
        alimentacion = @alimentacion, 
        Transporte = @transporte
	where id_serv = @id_serv;
end;
go

---------------------------------------------------------------------------

--TABLA TRANSPORTE

-- Agregar
create or alter procedure pd_agregarTransporte
(
    @id_serv  INT,
	@cost_km_dia INT,
	@cost_km_noc INT
)
as
begin
	insert into Transporte (id_serv, cost_km_dia, cost_km_noc)
	values
	(
	@id_serv,
	@cost_km_dia ,
	@cost_km_noc
	);
end;
go

-- Modificar
create or alter procedure pd_modificarTransporte
(
	@id_serv INT,
	@cost_km_dia INT,
	@cost_km_noc INT
)
as
begin
	update Transporte set 
        cost_km_dia = @cost_km_dia,
        cost_km_noc = @cost_km_noc
	where id_serv = @id_serv;	
end;
go

---------------------------------------------------------------------------

--TABLA USUARIO

-- Suspender usuario
create or alter procedure pd_suspenderUsr
(
	@id_usr INT
)
as
begin
	update usuario set
        est_cta = 'suspendida',
        tipo_cli = 'inhabilitado'
    where id_usr = @id_usr;
end;
go

-- Agregar Usuario
create or alter procedure pd_agregarUsr
(
	@email_usr NVARCHAR(100),
	@contr_usr NVARCHAR(50),
	@nom_usr NVARCHAR(50),
	@appat_usr NVARCHAR(50),
	@apmat_usr NVARCHAR(50),
	@tel_usr INT,
	@rut_usr INT,
	@dv_usr char(1),
	@est_cta NVARCHAR(20),
	@tipo_cli NVARCHAR(25),
    @id_tipo_usr INT
)
as
begin
	insert into usuario (email_usr, contr_usr, nom_usr, appat_usr, apmat_usr, tel_usr, rut_usr, dv_usr, cant_res, est_cta, tipo_cli, id_tipo_usr )
	values
	(
	@email_usr ,
	@contr_usr ,
	@nom_usr,
	@appat_usr ,
	@apmat_usr,
	@tel_usr ,
	@rut_usr ,
	@dv_usr ,
	0,
	@est_cta ,
	@tipo_cli ,
    @id_tipo_usr
	);
end;
go

-- Modificar
create or alter procedure pd_modificarDatosUsr
(
	@rut_usr INT,
	@dv_usr CHAR,
	@email_usr NVARCHAR(100),
	@contr_usr NVARCHAR(50),
	@tel_usr INT
)
as
begin
	update usuario set 
        email_usr = @email_usr, 
        contr_usr = @contr_usr, 
        tel_usr = @tel_usr
	where rut_usr = @rut_usr and dv_usr = @dv_usr;		
end;
go

-- Validar
create or alter procedure pd_validarUsr
(
    @id_usr INT
)
as
begin
    update usuario set
        est_cta = 'activa',
        tipo_cli = 'normal'
    where id_usr = @id_usr;
end;
go

-- Cambiar Tipo Cliente
create or ALTER PROCEDURE pd_cambiarTipoCliente
   @id_usr int
AS 
BEGIN
	DECLARE @tipo nvarchar(30) = (SELECT tipo_cli FROM usuario WHERE id_usr = @id_usr);
    IF @tipo = 'normal' 
	begin
		UPDATE usuario SET 
			tipo_cli = 'frecuente'
        WHERE id_usr = @id_usr
	END;
    ELSE if @tipo = 'frecuente'
    BEGIN
		UPDATE usuario SET 
			tipo_cli = 'normal'
        WHERE id_usr = @id_usr
    END;
END;
go

