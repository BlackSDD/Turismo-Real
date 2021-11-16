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