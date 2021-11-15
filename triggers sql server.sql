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

