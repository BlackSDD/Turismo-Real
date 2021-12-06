-- Funciones que calculan los costos

-- Calcula el costo de arriendo del depto en la fecha de la reserva ( dias * costo por dia)
create or ALTER function fn_arriendo (@id_rva int) returns int
as 
BEGIN
	declare @v1 int;
	declare @depto int;
	
	select @depto = id_dpto from reserva where id_rva = @id_rva; 
	
	select @v1 = (datediff(DAY, r.fec_ini_rva, r.fec_fin_rva ) * d.costo_arri_dpto) 
		from reserva r join departamento d 
			on r.id_dpto = d.id_dpto 
		where r.id_rva = @id_rva; 
	
	if @v1 = 0 begin
		select @v1 = costo_arri_dpto from departamento where id_dpto = @depto
	end;
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



