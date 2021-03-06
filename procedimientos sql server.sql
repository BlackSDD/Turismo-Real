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
begin
	insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, id_dpto)
	values(
	@nom_arti ,
	@cant_arti ,
	@deta_arti,
    @valor_arti,
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
		deta_cont = 'Se cancel?? la reserva del servicio',
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
    delete from gastos where id_dpto = @id_dpto;
	update departamento set
        desc_dpto = 'departamento no disponible',
        costo_arri_dpto = '0'
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
    @id_cnd INT	
)
as
begin
	insert into departamento (dir_dpto, num_dpto, n_amb_dpto, desc_dpto, costo_arri_dpto, id_cnd)
	values
	(
	@dir_dpto , 
	@num_dpto , 
	@n_amb_dpto , 
	@desc_dpto , 
	@costo_arri_dpto, 
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
	@costo_arri_dpto INT
)
as
begin
	update departamento set 
		dir_dpto = @dir_dpto,
		num_dpto = @num_dpto,
		n_amb_dpto = @n_amb_dpto,
		desc_dpto = @desc_dpto,
		costo_arri_dpto = @costo_arri_dpto
	where id_dpto = @id_dpto;
end;
go

---- LISTAR DEPTOS
create or alter procedure pd_listar_deptos 
as
begin
select 
	rg.id_rgn,
	rg.nom_rgn,
	cm.id_com,
	cm.nom_com,
	cn.id_cnd,
	concat( cn.nom_cnd, ' #' ,d.num_dpto ) as "depto",
	d.id_dpto,
	d.dir_dpto,
	d.n_amb_dpto,
	d.desc_dpto,
	d.costo_arri_dpto
	from 
	departamento d join condominio cn
		on d.id_cnd = cn.id_cnd
	join comuna cm
		on cm.id_com = cn.id_com
	join region rg
		on rg.id_rgn = cm.id_rgn
	order by rg.id_rgn, cm.id_com, id_cnd , "depto";
end;

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
create or alter procedure pd_agregarGastos
(
	@gast_mes INT,
	@gast_agno INT,
    @id_dpto INT
)
as
begin
	insert into gastos (id_dpto, gast_mes, gast_agno) 
	values
	(
	@id_dpto,
	@gast_mes ,
	@gast_agno
	);
end;
go

-- Modificar
create or alter procedure pd_modificarGastos
(
	@id_dpto INT,
	@gast_mes INT,
	@gast_agno INT
)
as
begin
	update gastos set 
		gast_mes = @gast_mes,
		gast_agno = @gast_agno
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

create or alter procedure pd_getMantenciones (@id_depto int, @agno int)
as 
begin 
	select 
		rm.id_rmant as "id_rmant",
		convert(varchar,rm.fec_rmant,103) as "Fecha",
		rm.id_dpto as "id_dpto",
		rm.id_usr as "id_usr",
		rm.est_man as "est_man",
		m.cost_mant as "cost_mant",
		m.deta_mant as "deta_mant",
		concat(cn.nom_cnd , ' '  , d.num_dpto) as "Departamento",
		concat(u.nom_usr, ' ', u.appat_usr, ' ', u.apmat_usr) as "Solicitante"
		from mantencion m join res_mant rm
			on m.id_rmant = rm.id_rmant 
		join usuario u
			on u.id_usr = rm.id_usr
		join departamento d
			on d.id_dpto = rm.id_dpto
		join condominio cn
			on cn.id_cnd = d.id_cnd
		where rm.id_dpto = @id_depto and year(rm.fec_rmant) = @agno
		order by "Fecha"
end
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
			 SET @MSG = 'Las fechas de la reserva no est??n disponibles';
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
					'en verificaci??n', 
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

--Trae el id de la reserva en proceso de compra/arriendo
create or alter procedure pd_reserva_ondoing (@id_usr int)
as
begin
	select 
		max(id_rva) as "curr_id"
		from reserva where id_usr = @id_usr
end;
go

create or alter procedure pd_reservas_chek
as

begin
	select * from reserva where estado_rva = 'reservada'
end
go

create or alter procedure pd_reservas_in_progress
as

begin
	select * from reserva where estado_rva = 'en progreso'
end
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
	@id_usr INT,
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
	where id_usr = @id_usr;	
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

