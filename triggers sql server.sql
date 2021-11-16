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


		if @pago >= @abono and @pago < @total 
        begin
			update pago set
				est_pago = 'abonado'
				where id_rva = @id;
			update reserva set
				estado_rva = 'reservada'
				where id_rva = @id;
		end;
		else if @pago < @abono 
        begin
			update pago set
				est_pago = 'pago pendiente'
				where id_rva = @id;
		end;
		else if @pago = @total 
        begin
			update pago set
				est_pago = 'pagado totalmente'
				where id_rva = @id;    
		end;
end;
go

