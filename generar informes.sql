-- informe general de reservas
-- requiere un año para consultar las reservas 
CREATE OR ALTER PROCEDURE pd_informe_reserva_gen
(@agno int)
as
begin
select
        concat(c.nom_cnd , ' '  , d.num_dpto) as "Departamento",
        concat(u.nom_usr , ' ' , u.appat_usr , ' ' , u.apmat_usr) as "Cliente",
        r.estado_rva as "Estado_reserva",
        concat(convert(varchar,r.fec_ini_rva,103) , ' - ' , convert(varchar,r.fec_fin_rva,103)) as "Fecha"
    from usuario u join reserva r
        on u.id_usr = r.id_usr 
    join departamento d 
        on r.id_dpto = d.id_dpto
    join condominio c
        on d.id_cnd = c.id_cnd
    where r.estado_rva != 'cancelada' 
        and year(r.fec_ini_rva) = @agno
    order by  "Fecha", "Departamento";
end;
go
----------------------------------------------------------------------

-- Informe de reservas detallado 
-- requiere la id de la reserva (traida desde una lista en la interfaz)

create or alter procedure pd_informe_reserva_det(@id_reserva int)
as

begin
	select
			DISTINCT(r.id_rva) as "Idreserva",
			concat(c.nom_cnd , ' '  , d.num_dpto) as "Departamento",
			concat(u.nom_usr , ' ' , u.appat_usr , ' ' , u.apmat_usr) as "Cliente",
			r.estado_rva as "Estado_reserva",
			concat(convert(varchar,r.fec_ini_rva,103) , ' - ' , convert(varchar,r.fec_fin_rva,103)) as "FechaReserva",
			concat('$',p.monto_total) as "Costo_total",
			concat('$',p.monto_arr) as "Costo_arriendo",
			concat('$',p.monto_serv_extra) as "Costoserviciosextra",
			concat('$',p.monto_multas)as "CostoMultas",
			concat('$',p.monto_pagado) as "MontoPagado",
			isnull(ckin.deta_chi,'Check-in todavia no registrado') as "Detalle_check-in",
			isnull(ckout.deta_cho,'Check-out todavia no registrado') as "Detalle_check-out"
		from reserva r join usuario u
			on u.id_usr = r.id_usr
		left join checkin ckin
			on r.id_rva = ckin.id_rva
		left join checkout ckout
			on r.id_rva = ckout.id_rva
		join departamento d 
			on r.id_dpto = d.id_dpto
		join condominio c
			on d.id_cnd = c.id_cnd
		join pago p
		on r.id_rva = p.id_rva
		-- @id_reserva es la que se solicita al "usuario" / sistema        
		where r.id_rva = @id_reserva
		order by "Departamento";
end;
go

---- trae el detalle de los servicios contratados, se usan en conjunto
create or alter procedure pd_informe_reserva_det_serv(@id_reserva int)
as
begin
select 
        s.nom_serv as "Nombre_del_servicio",
        c.deta_cont as "Detalle_del_servicio",
        convert(varchar,c.fec_cont,103) as "Fecha_de_contratación",
        concat(convert(varchar,c.fec_acord,103), ' ', convert(varchar,c.hora_acord,103)) as "Fecha_servicio", 
        concat('$',c.costo_total) as "Costo_servicio_extra"
    from cont_serv c left join servextras s
        on c.id_serv = s.id_serv
    -- @id_reserva es la que se solicita al "usuario" / sistema     
    where c.id_rva = @id_reserva
    order by "Fecha_servicio";
end;
go



----------------------------------------------------------------------
-- Informe de ganancia por zona
-- Se debe especificar la id de region y el año a consultar


-- Ganancia diaria
SELECT 
	rg.nom_rgn as "Region",
	case
		when DATEPART(MONTH, r.fec_ini_rva) = 1 then 'Enero'
		when DATEPART(MONTH, r.fec_ini_rva) = 2 then 'Febrero'
		when DATEPART(MONTH, r.fec_ini_rva) = 3 then 'Marzo'
		when DATEPART(MONTH, r.fec_ini_rva) = 4 then 'Abril'
		when DATEPART(MONTH, r.fec_ini_rva) = 5 then 'Mayo'
		when DATEPART(MONTH, r.fec_ini_rva) = 6 then 'Junio'
		when DATEPART(MONTH, r.fec_ini_rva) = 7 then 'Julio'
		when DATEPART(MONTH, r.fec_ini_rva) = 8 then 'Agosto'
		when DATEPART(MONTH, r.fec_ini_rva) = 9 then 'Septiembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 10 then 'Octubre'
		when DATEPART(MONTH, r.fec_ini_rva) = 11 then 'Noviembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, r.fec_ini_rva,103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "departamento",
	SUM(p.monto_pagado) as "Ganancia diaria"
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
		on d.id_dpto = r.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, r.fec_ini_rva, DATEPART(MONTH, r.fec_ini_rva), year(r.fec_ini_rva),concat(cn.nom_cnd, ' #' , d.num_dpto)
having rg.id_rgn = @id_region and year(r.fec_ini_rva) = @agno;

-- Gastos mensuales para informe diario
select 
	rg.nom_rgn as "Region",
    year(g.fec_ingreso) as "Año",
	case
		when DATEPART(MONTH, g.fec_ingreso) = 1 then 'Enero'
		when DATEPART(MONTH, g.fec_ingreso) = 2 then 'Febrero'
		when DATEPART(MONTH, g.fec_ingreso) = 3 then 'Marzo'
		when DATEPART(MONTH, g.fec_ingreso) = 4 then 'Abril'
		when DATEPART(MONTH, g.fec_ingreso) = 5 then 'Mayo'
		when DATEPART(MONTH, g.fec_ingreso) = 6 then 'Junio'
		when DATEPART(MONTH, g.fec_ingreso) = 7 then 'Julio'
		when DATEPART(MONTH, g.fec_ingreso) = 8 then 'Agosto'
		when DATEPART(MONTH, g.fec_ingreso) = 9 then 'Septiembre'
		when DATEPART(MONTH, g.fec_ingreso) = 10 then 'Octubre'
		when DATEPART(MONTH, g.fec_ingreso) = 11 then 'Noviembre'
		when DATEPART(MONTH, g.fec_ingreso) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, g.fec_ingreso, 103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz día factura",
	sum(g.gasto_agua) as "Gastos de agua día factura",
	sum(g.gasto_gas) as "Gastos de gas día factura",
	sum(g.gasto_servicios) as "Gastos de servicios día factura",
	sum(g.gasto_comunes) as "Gastos comunes día factura",
	sum(g.gasto_dividendo) as "Dividendo día factura"
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, g.fec_ingreso), g.fec_ingreso
having  rg.id_rgn = @id_region and year(g.fec_ingreso) = @agno
order by "Día", "Departamento" asc;

-- Gastos en articulos por día
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	case
		when DATEPART(MONTH, a.fec_compra) = 1 then 'Enero'
		when DATEPART(MONTH, a.fec_compra) = 2 then 'Febrero'
		when DATEPART(MONTH, a.fec_compra) = 3 then 'Marzo'
		when DATEPART(MONTH, a.fec_compra) = 4 then 'Abril'
		when DATEPART(MONTH, a.fec_compra) = 5 then 'Mayo'
		when DATEPART(MONTH, a.fec_compra) = 6 then 'Junio'
		when DATEPART(MONTH, a.fec_compra) = 7 then 'Julio'
		when DATEPART(MONTH, a.fec_compra) = 8 then 'Agosto'
		when DATEPART(MONTH, a.fec_compra) = 9 then 'Septiembre'
		when DATEPART(MONTH, a.fec_compra) = 10 then 'Octubre'
		when DATEPART(MONTH, a.fec_compra) = 11 then 'Noviembre'
		when DATEPART(MONTH, a.fec_compra) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, a.fec_compra ,103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos por día"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, a.fec_compra), convert(varchar, a.fec_compra ,103)
having rg.id_rgn = @id_region and year(a.fec_compra) = @agno
order by DATEPART(MONTH, a.fec_compra),"Día" , "Departamento" asc;

-- Gastos en mantenciones por día
select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	case
		when DATEPART(MONTH, rm.fec_rmant) = 1 then 'Enero'
		when DATEPART(MONTH, rm.fec_rmant) = 2 then 'Febrero'
		when DATEPART(MONTH, rm.fec_rmant) = 3 then 'Marzo'
		when DATEPART(MONTH, rm.fec_rmant) = 4 then 'Abril'
		when DATEPART(MONTH, rm.fec_rmant) = 5 then 'Mayo'
		when DATEPART(MONTH, rm.fec_rmant) = 6 then 'Junio'
		when DATEPART(MONTH, rm.fec_rmant) = 7 then 'Julio'
		when DATEPART(MONTH, rm.fec_rmant) = 8 then 'Agosto'
		when DATEPART(MONTH, rm.fec_rmant) = 9 then 'Septiembre'
		when DATEPART(MONTH, rm.fec_rmant) = 10 then 'Octubre'
		when DATEPART(MONTH, rm.fec_rmant) = 11 then 'Noviembre'
		when DATEPART(MONTH, rm.fec_rmant) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, rm.fec_rmant ,103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones por día"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, rm.fec_rmant), convert(varchar, rm.fec_rmant ,103)
having rg.id_rgn = @id_region and year(rm.fec_rmant) = @agno
order by DATEPART(MONTH, rm.fec_rmant), "Día" , "Departamento" asc;

----------------------------------------------------------------------

-- Ganancia por semana

SELECT 
	rg.nom_rgn as "Region",
    year(r.fec_ini_rva) as "Año",
	case
		when DATEPART(MONTH, r.fec_ini_rva) = 1 then 'Enero'
		when DATEPART(MONTH, r.fec_ini_rva) = 2 then 'Febrero'
		when DATEPART(MONTH, r.fec_ini_rva) = 3 then 'Marzo'
		when DATEPART(MONTH, r.fec_ini_rva) = 4 then 'Abril'
		when DATEPART(MONTH, r.fec_ini_rva) = 5 then 'Mayo'
		when DATEPART(MONTH, r.fec_ini_rva) = 6 then 'Junio'
		when DATEPART(MONTH, r.fec_ini_rva) = 7 then 'Julio'
		when DATEPART(MONTH, r.fec_ini_rva) = 8 then 'Agosto'
		when DATEPART(MONTH, r.fec_ini_rva) = 9 then 'Septiembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 10 then 'Octubre'
		when DATEPART(MONTH, r.fec_ini_rva) = 11 then 'Noviembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, r.fec_ini_rva) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "departamento",
	SUM(p.monto_pagado) as "Ganancia semanal"
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
		on d.id_dpto = r.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, DATEPART(week, r.fec_ini_rva), year(r.fec_ini_rva), concat(cn.nom_cnd, ' #' , d.num_dpto),DATEPART(MONTH, r.fec_ini_rva)
having rg.id_rgn = @id_region and year(r.fec_ini_rva) = @agno;

-- Gastos de servicios semana de facturazión
select 
	rg.nom_rgn as "Region",
    year(g.fec_ingreso) as "Año",
	case
		when DATEPART(MONTH, g.fec_ingreso) = 1 then 'Enero'
		when DATEPART(MONTH, g.fec_ingreso) = 2 then 'Febrero'
		when DATEPART(MONTH, g.fec_ingreso) = 3 then 'Marzo'
		when DATEPART(MONTH, g.fec_ingreso) = 4 then 'Abril'
		when DATEPART(MONTH, g.fec_ingreso) = 5 then 'Mayo'
		when DATEPART(MONTH, g.fec_ingreso) = 6 then 'Junio'
		when DATEPART(MONTH, g.fec_ingreso) = 7 then 'Julio'
		when DATEPART(MONTH, g.fec_ingreso) = 8 then 'Agosto'
		when DATEPART(MONTH, g.fec_ingreso) = 9 then 'Septiembre'
		when DATEPART(MONTH, g.fec_ingreso) = 10 then 'Octubre'
		when DATEPART(MONTH, g.fec_ingreso) = 11 then 'Noviembre'
		when DATEPART(MONTH, g.fec_ingreso) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, g.fec_ingreso) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz semana factura",
	sum(g.gasto_agua) as "Gastos de agua semana factura",
	sum(g.gasto_gas) as "Gastos de gas semana factura",
	sum(g.gasto_servicios) as "Gastos de servicios semana factura",
	sum(g.gasto_comunes) as "Gastos comunes semana factura",
	sum(g.gasto_dividendo) as "Dividendo semana factura"
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, g.fec_ingreso),DATEPART(week, g.fec_ingreso)
having rg.id_rgn =  @id_region and year(g.fec_ingreso) = @agno
order by DATEPART(MONTH, g.fec_ingreso), "Semana", "Departamento" asc ;

-- Gastos en articulos por semana 
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	case
		when DATEPART(MONTH, a.fec_compra) = 1 then 'Enero'
		when DATEPART(MONTH, a.fec_compra) = 2 then 'Febrero'
		when DATEPART(MONTH, a.fec_compra) = 3 then 'Marzo'
		when DATEPART(MONTH, a.fec_compra) = 4 then 'Abril'
		when DATEPART(MONTH, a.fec_compra) = 5 then 'Mayo'
		when DATEPART(MONTH, a.fec_compra) = 6 then 'Junio'
		when DATEPART(MONTH, a.fec_compra) = 7 then 'Julio'
		when DATEPART(MONTH, a.fec_compra) = 8 then 'Agosto'
		when DATEPART(MONTH, a.fec_compra) = 9 then 'Septiembre'
		when DATEPART(MONTH, a.fec_compra) = 10 then 'Octubre'
		when DATEPART(MONTH, a.fec_compra) = 11 then 'Noviembre'
		when DATEPART(MONTH, a.fec_compra) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, a.fec_compra) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos comprados por semana"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, a.fec_compra), DATEPART(week, a.fec_compra)
having rg.id_rgn = @id_region and year(a.fec_compra) = @agno
order by "Semana", "Departamento" asc;

-- Gastos en mantenciones por semana 
select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	case
		when DATEPART(MONTH, rm.fec_rmant) = 1 then 'Enero'
		when DATEPART(MONTH, rm.fec_rmant) = 2 then 'Febrero'
		when DATEPART(MONTH, rm.fec_rmant) = 3 then 'Marzo'
		when DATEPART(MONTH, rm.fec_rmant) = 4 then 'Abril'
		when DATEPART(MONTH, rm.fec_rmant) = 5 then 'Mayo'
		when DATEPART(MONTH, rm.fec_rmant) = 6 then 'Junio'
		when DATEPART(MONTH, rm.fec_rmant) = 7 then 'Julio'
		when DATEPART(MONTH, rm.fec_rmant) = 8 then 'Agosto'
		when DATEPART(MONTH, rm.fec_rmant) = 9 then 'Septiembre'
		when DATEPART(MONTH, rm.fec_rmant) = 10 then 'Octubre'
		when DATEPART(MONTH, rm.fec_rmant) = 11 then 'Noviembre'
		when DATEPART(MONTH, rm.fec_rmant) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, rm.fec_rmant) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones por semana"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, rm.fec_rmant), DATEPART(week, rm.fec_rmant)
having rg.id_rgn = @id_region and year(rm.fec_rmant) = @agno
order by DATEPART(MONTH, rm.fec_rmant), "Semana" , "Departamento" asc;

----------------------------------------------------------------------

-- Ganancia por mes 
SELECT 
	rg.nom_rgn as "Region",
	case
		when DATEPART(MONTH, r.fec_ini_rva) = 1 then 'Enero'
		when DATEPART(MONTH, r.fec_ini_rva) = 2 then 'Febrero'
		when DATEPART(MONTH, r.fec_ini_rva) = 3 then 'Marzo'
		when DATEPART(MONTH, r.fec_ini_rva) = 4 then 'Abril'
		when DATEPART(MONTH, r.fec_ini_rva) = 5 then 'Mayo'
		when DATEPART(MONTH, r.fec_ini_rva) = 6 then 'Junio'
		when DATEPART(MONTH, r.fec_ini_rva) = 7 then 'Julio'
		when DATEPART(MONTH, r.fec_ini_rva) = 8 then 'Agosto'
		when DATEPART(MONTH, r.fec_ini_rva) = 9 then 'Septiembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 10 then 'Octubre'
		when DATEPART(MONTH, r.fec_ini_rva) = 11 then 'Noviembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 12 then 'Diciembre'
	end as "Mes",
	year(r.fec_ini_rva) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "departamento",
	SUM(p.monto_pagado) as "Ganancia Mensual"
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
	    on d.id_dpto = r.id_dpto
	join condominio cn
        on cn.id_cnd = d.id_cnd
	join comuna cm
		on cm.id_com = cn.id_com
	join region rg
		on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, DATEPART(MONTH, r.fec_ini_rva), year(r.fec_ini_rva),concat(cn.nom_cnd, ' #' , d.num_dpto) 
having rg.id_rgn = @id_region and year(r.fec_ini_rva) = @agno;


-- Gastos por mes
select 
	rg.nom_rgn as "Region",
    year(g.fec_ingreso) as "Año",
	case
		when DATEPART(MONTH, g.fec_ingreso) = 1 then 'Enero'
		when DATEPART(MONTH, g.fec_ingreso) = 2 then 'Febrero'
		when DATEPART(MONTH, g.fec_ingreso) = 3 then 'Marzo'
		when DATEPART(MONTH, g.fec_ingreso) = 4 then 'Abril'
		when DATEPART(MONTH, g.fec_ingreso) = 5 then 'Mayo'
		when DATEPART(MONTH, g.fec_ingreso) = 6 then 'Junio'
		when DATEPART(MONTH, g.fec_ingreso) = 7 then 'Julio'
		when DATEPART(MONTH, g.fec_ingreso) = 8 then 'Agosto'
		when DATEPART(MONTH, g.fec_ingreso) = 9 then 'Septiembre'
		when DATEPART(MONTH, g.fec_ingreso) = 10 then 'Octubre'
		when DATEPART(MONTH, g.fec_ingreso) = 11 then 'Noviembre'
		when DATEPART(MONTH, g.fec_ingreso) = 12 then 'Diciembre'
	end as "Mes",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz mensual",
	sum(g.gasto_agua) as "Gastos de agua mensual",
	sum(g.gasto_gas) as "Gastos de gas mensual",
	sum(g.gasto_servicios) as "Gastos de servicios mensual",
	sum(g.gasto_comunes) as "Gastos comunes mensual",
	sum(g.gasto_dividendo) as "Dividendo mensual"
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, g.fec_ingreso)
having rg.id_rgn = @id_region and year(g.fec_ingreso) = @agno;


-- Gastos en articulos por mes
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	case
		when DATEPART(MONTH, a.fec_compra) = 1 then 'Enero'
		when DATEPART(MONTH, a.fec_compra) = 2 then 'Febrero'
		when DATEPART(MONTH, a.fec_compra) = 3 then 'Marzo'
		when DATEPART(MONTH, a.fec_compra) = 4 then 'Abril'
		when DATEPART(MONTH, a.fec_compra) = 5 then 'Mayo'
		when DATEPART(MONTH, a.fec_compra) = 6 then 'Junio'
		when DATEPART(MONTH, a.fec_compra) = 7 then 'Julio'
		when DATEPART(MONTH, a.fec_compra) = 8 then 'Agosto'
		when DATEPART(MONTH, a.fec_compra) = 9 then 'Septiembre'
		when DATEPART(MONTH, a.fec_compra) = 10 then 'Octubre'
		when DATEPART(MONTH, a.fec_compra) = 11 then 'Noviembre'
		when DATEPART(MONTH, a.fec_compra) = 12 then 'Diciembre'
	end as "Mes",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos comprados por mes"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, a.fec_compra)
having rg.id_rgn = @id_region and year(a.fec_compra) = @agno
order by DATEPART(MONTH, a.fec_compra), "Departamento" asc;

-- Gastos en mantenciones por mes
select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	case
		when DATEPART(MONTH, rm.fec_rmant) = 1 then 'Enero'
		when DATEPART(MONTH, rm.fec_rmant) = 2 then 'Febrero'
		when DATEPART(MONTH, rm.fec_rmant) = 3 then 'Marzo'
		when DATEPART(MONTH, rm.fec_rmant) = 4 then 'Abril'
		when DATEPART(MONTH, rm.fec_rmant) = 5 then 'Mayo'
		when DATEPART(MONTH, rm.fec_rmant) = 6 then 'Junio'
		when DATEPART(MONTH, rm.fec_rmant) = 7 then 'Julio'
		when DATEPART(MONTH, rm.fec_rmant) = 8 then 'Agosto'
		when DATEPART(MONTH, rm.fec_rmant) = 9 then 'Septiembre'
		when DATEPART(MONTH, rm.fec_rmant) = 10 then 'Octubre'
		when DATEPART(MONTH, rm.fec_rmant) = 11 then 'Noviembre'
		when DATEPART(MONTH, rm.fec_rmant) = 12 then 'Diciembre'
	end as "Mes",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones por mes"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, rm.fec_rmant)
having rg.id_rgn = 5 and year(rm.fec_rmant) = 2021
order by DATEPART(MONTH, rm.fec_rmant),  "Departamento" asc;

----------------------------------------------------------------------

-- Ganancia anual
SELECT 
	rg.nom_rgn as "Region",
	year(r.fec_ini_rva) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "departamento",
	SUM(p.monto_pagado) as "Ganancia anual"
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
		on d.id_dpto = r.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(r.fec_ini_rva) ,concat(cn.nom_cnd, ' #' , d.num_dpto)
having rg.id_rgn = @id_region and year(r.fec_ini_rva) = @agno;

-- Gastos anuales
select 
	rg.nom_rgn as "Region",
	year(g.fec_ingreso) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz anual",
	sum(g.gasto_agua) as "Gastos de agua anual",
	sum(g.gasto_gas) as "Gastos de gas anual",
	sum(g.gasto_servicios) as "Gastos de servicios anual",
	sum(g.gasto_comunes) as "Gastos comunes anual",
	sum(g.gasto_dividendo) as "Dividendo anual"
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto)
having rg.id_rgn = @id_region and year(g.fec_ingreso) = @agno;

-- Gastos en articulos por año
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos anual"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto) 
having rg.id_rgn = @id_region and year(a.fec_compra) = @agno
order by "Año" , "Departamento" asc;

-- Gastos de mantencion por año

select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones por año"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto) 
having rg.id_rgn = @id_region and year(rm.fec_rmant) = @agno
order by  "Departamento" asc;

---------------------------------------------------------------------------------------------------
-- Informe de estadísticas por depto

-- Ganancias por día
SELECT 
	rg.nom_rgn as "Region",
	year(r.fec_ini_rva) as "Año",
	case
		when DATEPART(MONTH, r.fec_ini_rva) = 1 then 'Enero'
		when DATEPART(MONTH, r.fec_ini_rva) = 2 then 'Febrero'
		when DATEPART(MONTH, r.fec_ini_rva) = 3 then 'Marzo'
		when DATEPART(MONTH, r.fec_ini_rva) = 4 then 'Abril'
		when DATEPART(MONTH, r.fec_ini_rva) = 5 then 'Mayo'
		when DATEPART(MONTH, r.fec_ini_rva) = 6 then 'Junio'
		when DATEPART(MONTH, r.fec_ini_rva) = 7 then 'Julio'
		when DATEPART(MONTH, r.fec_ini_rva) = 8 then 'Agosto'
		when DATEPART(MONTH, r.fec_ini_rva) = 9 then 'Septiembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 10 then 'Octubre'
		when DATEPART(MONTH, r.fec_ini_rva) = 11 then 'Noviembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, r.fec_ini_rva,103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	SUM(p.monto_pagado) as "Ganancia diaria",
	count(r.id_rva) as "Reservas" 
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
		on d.id_dpto = r.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, r.fec_ini_rva, DATEPART(MONTH, r.fec_ini_rva), year(r.fec_ini_rva),concat(cn.nom_cnd, ' #' , d.num_dpto), d.id_dpto, year(r.fec_ini_rva)
having d.id_dpto = 1 and year(r.fec_ini_rva) = 2022
order by "Día";

-- Gastos para informe diario
select 
	rg.nom_rgn as "Region",
    year(g.fec_ingreso) as "Año",
	case
		when DATEPART(MONTH, g.fec_ingreso) = 1 then 'Enero'
		when DATEPART(MONTH, g.fec_ingreso) = 2 then 'Febrero'
		when DATEPART(MONTH, g.fec_ingreso) = 3 then 'Marzo'
		when DATEPART(MONTH, g.fec_ingreso) = 4 then 'Abril'
		when DATEPART(MONTH, g.fec_ingreso) = 5 then 'Mayo'
		when DATEPART(MONTH, g.fec_ingreso) = 6 then 'Junio'
		when DATEPART(MONTH, g.fec_ingreso) = 7 then 'Julio'
		when DATEPART(MONTH, g.fec_ingreso) = 8 then 'Agosto'
		when DATEPART(MONTH, g.fec_ingreso) = 9 then 'Septiembre'
		when DATEPART(MONTH, g.fec_ingreso) = 10 then 'Octubre'
		when DATEPART(MONTH, g.fec_ingreso) = 11 then 'Noviembre'
		when DATEPART(MONTH, g.fec_ingreso) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, g.fec_ingreso, 103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz día factura",
	sum(g.gasto_agua) as "Gastos de agua día factura",
	sum(g.gasto_gas) as "Gastos de gas día factura",
	sum(g.gasto_servicios) as "Gastos de servicios día factura",
	sum(g.gasto_comunes) as "Gastos comunes día factura",
	sum(g.gasto_dividendo) as "Dividendo día factura"
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, g.fec_ingreso), g.fec_ingreso, d.id_dpto
having  d.id_dpto = 1 and year(g.fec_ingreso) = 2022
order by "Día", "Departamento" asc;

-- Gastos de articulos por día
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	case
		when DATEPART(MONTH, a.fec_compra) = 1 then 'Enero'
		when DATEPART(MONTH, a.fec_compra) = 2 then 'Febrero'
		when DATEPART(MONTH, a.fec_compra) = 3 then 'Marzo'
		when DATEPART(MONTH, a.fec_compra) = 4 then 'Abril'
		when DATEPART(MONTH, a.fec_compra) = 5 then 'Mayo'
		when DATEPART(MONTH, a.fec_compra) = 6 then 'Junio'
		when DATEPART(MONTH, a.fec_compra) = 7 then 'Julio'
		when DATEPART(MONTH, a.fec_compra) = 8 then 'Agosto'
		when DATEPART(MONTH, a.fec_compra) = 9 then 'Septiembre'
		when DATEPART(MONTH, a.fec_compra) = 10 then 'Octubre'
		when DATEPART(MONTH, a.fec_compra) = 11 then 'Noviembre'
		when DATEPART(MONTH, a.fec_compra) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, a.fec_compra ,103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos por día"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, a.fec_compra), convert(varchar, a.fec_compra ,103), d.id_dpto
having d.id_dpto = 1 and year(a.fec_compra) = 2022
order by DATEPART(MONTH, a.fec_compra),"Día" , "Departamento" asc;

-- Gastos de mantenciones por dia
select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	case
		when DATEPART(MONTH, rm.fec_rmant) = 1 then 'Enero'
		when DATEPART(MONTH, rm.fec_rmant) = 2 then 'Febrero'
		when DATEPART(MONTH, rm.fec_rmant) = 3 then 'Marzo'
		when DATEPART(MONTH, rm.fec_rmant) = 4 then 'Abril'
		when DATEPART(MONTH, rm.fec_rmant) = 5 then 'Mayo'
		when DATEPART(MONTH, rm.fec_rmant) = 6 then 'Junio'
		when DATEPART(MONTH, rm.fec_rmant) = 7 then 'Julio'
		when DATEPART(MONTH, rm.fec_rmant) = 8 then 'Agosto'
		when DATEPART(MONTH, rm.fec_rmant) = 9 then 'Septiembre'
		when DATEPART(MONTH, rm.fec_rmant) = 10 then 'Octubre'
		when DATEPART(MONTH, rm.fec_rmant) = 11 then 'Noviembre'
		when DATEPART(MONTH, rm.fec_rmant) = 12 then 'Diciembre'
	end as "Mes",
	convert(varchar, rm.fec_rmant ,103) as "Día",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones por día"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, rm.fec_rmant), convert(varchar, rm.fec_rmant ,103), d.id_dpto
having d.id_dpto = 1 and year(rm.fec_rmant) = 2022
order by DATEPART(MONTH, rm.fec_rmant), "Día" , "Departamento" asc;

------------------------------------------------------------------------------------------

-- Ganancias por semana
SELECT 
	rg.nom_rgn as "Region",
	year(r.fec_ini_rva) as "Año",
	case
		when DATEPART(MONTH, r.fec_ini_rva) = 1 then 'Enero'
		when DATEPART(MONTH, r.fec_ini_rva) = 2 then 'Febrero'
		when DATEPART(MONTH, r.fec_ini_rva) = 3 then 'Marzo'
		when DATEPART(MONTH, r.fec_ini_rva) = 4 then 'Abril'
		when DATEPART(MONTH, r.fec_ini_rva) = 5 then 'Mayo'
		when DATEPART(MONTH, r.fec_ini_rva) = 6 then 'Junio'
		when DATEPART(MONTH, r.fec_ini_rva) = 7 then 'Julio'
		when DATEPART(MONTH, r.fec_ini_rva) = 8 then 'Agosto'
		when DATEPART(MONTH, r.fec_ini_rva) = 9 then 'Septiembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 10 then 'Octubre'
		when DATEPART(MONTH, r.fec_ini_rva) = 11 then 'Noviembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, r.fec_ini_rva) as "Semana" ,
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	SUM(p.monto_pagado) as "Ganancia semanal",
	count(r.id_rva) as "Reservas" 
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
		on d.id_dpto = r.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn,  DATEPART(MONTH, r.fec_ini_rva), year(r.fec_ini_rva), concat(cn.nom_cnd, ' #' , d.num_dpto), d.id_dpto, DATEPART(week, r.fec_ini_rva)
having d.id_dpto = 1 and year(r.fec_ini_rva) = 2022
order by DATEPART(MONTH, r.fec_ini_rva), "Semana";

-- Gastos servicios por semana de facturación
select 
	rg.nom_rgn as "Region",
    year(g.fec_ingreso) as "Año",
	case
		when DATEPART(MONTH, g.fec_ingreso) = 1 then 'Enero'
		when DATEPART(MONTH, g.fec_ingreso) = 2 then 'Febrero'
		when DATEPART(MONTH, g.fec_ingreso) = 3 then 'Marzo'
		when DATEPART(MONTH, g.fec_ingreso) = 4 then 'Abril'
		when DATEPART(MONTH, g.fec_ingreso) = 5 then 'Mayo'
		when DATEPART(MONTH, g.fec_ingreso) = 6 then 'Junio'
		when DATEPART(MONTH, g.fec_ingreso) = 7 then 'Julio'
		when DATEPART(MONTH, g.fec_ingreso) = 8 then 'Agosto'
		when DATEPART(MONTH, g.fec_ingreso) = 9 then 'Septiembre'
		when DATEPART(MONTH, g.fec_ingreso) = 10 then 'Octubre'
		when DATEPART(MONTH, g.fec_ingreso) = 11 then 'Noviembre'
		when DATEPART(MONTH, g.fec_ingreso) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, g.fec_ingreso) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz semana factura",
	sum(g.gasto_agua) as "Gastos de agua semana factura",
	sum(g.gasto_gas) as "Gastos de gas semana factura",
	sum(g.gasto_servicios) as "Gastos de servicios semana factura",
	sum(g.gasto_comunes) as "Gastos comunes semana factura",
	sum(g.gasto_dividendo) as "Dividendo semana factura"
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, g.fec_ingreso),  d.id_dpto, DATEPART(week, g.fec_ingreso)
having  d.id_dpto = 1 and year(g.fec_ingreso) = 2022
order by DATEPART(MONTH, g.fec_ingreso), "Semana" , "Departamento" asc;

-- Gastos en articulos por semana
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	case
		when DATEPART(MONTH, a.fec_compra) = 1 then 'Enero'
		when DATEPART(MONTH, a.fec_compra) = 2 then 'Febrero'
		when DATEPART(MONTH, a.fec_compra) = 3 then 'Marzo'
		when DATEPART(MONTH, a.fec_compra) = 4 then 'Abril'
		when DATEPART(MONTH, a.fec_compra) = 5 then 'Mayo'
		when DATEPART(MONTH, a.fec_compra) = 6 then 'Junio'
		when DATEPART(MONTH, a.fec_compra) = 7 then 'Julio'
		when DATEPART(MONTH, a.fec_compra) = 8 then 'Agosto'
		when DATEPART(MONTH, a.fec_compra) = 9 then 'Septiembre'
		when DATEPART(MONTH, a.fec_compra) = 10 then 'Octubre'
		when DATEPART(MONTH, a.fec_compra) = 11 then 'Noviembre'
		when DATEPART(MONTH, a.fec_compra) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, a.fec_compra) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos por semana"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, a.fec_compra), d.id_dpto, DATEPART(week, a.fec_compra)
having d.id_dpto = 1 and year(a.fec_compra) = 2022
order by DATEPART(MONTH, a.fec_compra),"Semana", "Departamento" asc;

--  Gastos mantenciones por semana
select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	case
		when DATEPART(MONTH, rm.fec_rmant) = 1 then 'Enero'
		when DATEPART(MONTH, rm.fec_rmant) = 2 then 'Febrero'
		when DATEPART(MONTH, rm.fec_rmant) = 3 then 'Marzo'
		when DATEPART(MONTH, rm.fec_rmant) = 4 then 'Abril'
		when DATEPART(MONTH, rm.fec_rmant) = 5 then 'Mayo'
		when DATEPART(MONTH, rm.fec_rmant) = 6 then 'Junio'
		when DATEPART(MONTH, rm.fec_rmant) = 7 then 'Julio'
		when DATEPART(MONTH, rm.fec_rmant) = 8 then 'Agosto'
		when DATEPART(MONTH, rm.fec_rmant) = 9 then 'Septiembre'
		when DATEPART(MONTH, rm.fec_rmant) = 10 then 'Octubre'
		when DATEPART(MONTH, rm.fec_rmant) = 11 then 'Noviembre'
		when DATEPART(MONTH, rm.fec_rmant) = 12 then 'Diciembre'
	end as "Mes",
	DATEPART(week, rm.fec_rmant) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones por semana"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, rm.fec_rmant),  d.id_dpto, DATEPART(week, rm.fec_rmant)
having d.id_dpto = 1 and year(rm.fec_rmant) = 2022
order by DATEPART(MONTH, rm.fec_rmant), "Semana", "Departamento" asc;

---------------------------------------------------------------------------------------------------------------

-- Ganancias por mes
SELECT 
	rg.nom_rgn as "Region",
	year(r.fec_ini_rva) as "Año",
	case
		when DATEPART(MONTH, r.fec_ini_rva) = 1 then 'Enero'
		when DATEPART(MONTH, r.fec_ini_rva) = 2 then 'Febrero'
		when DATEPART(MONTH, r.fec_ini_rva) = 3 then 'Marzo'
		when DATEPART(MONTH, r.fec_ini_rva) = 4 then 'Abril'
		when DATEPART(MONTH, r.fec_ini_rva) = 5 then 'Mayo'
		when DATEPART(MONTH, r.fec_ini_rva) = 6 then 'Junio'
		when DATEPART(MONTH, r.fec_ini_rva) = 7 then 'Julio'
		when DATEPART(MONTH, r.fec_ini_rva) = 8 then 'Agosto'
		when DATEPART(MONTH, r.fec_ini_rva) = 9 then 'Septiembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 10 then 'Octubre'
		when DATEPART(MONTH, r.fec_ini_rva) = 11 then 'Noviembre'
		when DATEPART(MONTH, r.fec_ini_rva) = 12 then 'Diciembre'
	end as "Mes",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	SUM(p.monto_pagado) as "Ganancia mensual",
	count(r.id_rva) as "Reservas" 
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
		on d.id_dpto = r.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn,  DATEPART(MONTH, r.fec_ini_rva), year(r.fec_ini_rva),concat(cn.nom_cnd, ' #' , d.num_dpto), d.id_dpto 
having d.id_dpto = 1 and year(r.fec_ini_rva) = 2022
order by DATEPART(MONTH, r.fec_ini_rva);

-- Gastos por servicios por mes
select 
	rg.nom_rgn as "Region",
    year(g.fec_ingreso) as "Año",
	case
		when DATEPART(MONTH, g.fec_ingreso) = 1 then 'Enero'
		when DATEPART(MONTH, g.fec_ingreso) = 2 then 'Febrero'
		when DATEPART(MONTH, g.fec_ingreso) = 3 then 'Marzo'
		when DATEPART(MONTH, g.fec_ingreso) = 4 then 'Abril'
		when DATEPART(MONTH, g.fec_ingreso) = 5 then 'Mayo'
		when DATEPART(MONTH, g.fec_ingreso) = 6 then 'Junio'
		when DATEPART(MONTH, g.fec_ingreso) = 7 then 'Julio'
		when DATEPART(MONTH, g.fec_ingreso) = 8 then 'Agosto'
		when DATEPART(MONTH, g.fec_ingreso) = 9 then 'Septiembre'
		when DATEPART(MONTH, g.fec_ingreso) = 10 then 'Octubre'
		when DATEPART(MONTH, g.fec_ingreso) = 11 then 'Noviembre'
		when DATEPART(MONTH, g.fec_ingreso) = 12 then 'Diciembre'
	end as "Mes",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz gasto mensual",
	sum(g.gasto_agua) as "Gastos de agua gasto mensual",
	sum(g.gasto_gas) as "Gastos de gas gasto mensual",
	sum(g.gasto_servicios) as "Gastos de servicios gasto mensual",
	sum(g.gasto_comunes) as "Gastos comunes gasto mensual",
	sum(g.gasto_dividendo) as "Dividendo gasto mensual "
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, g.fec_ingreso),  d.id_dpto
having  d.id_dpto = 1 and year(g.fec_ingreso) = 2022
order by DATEPART(MONTH, g.fec_ingreso),  "Departamento" asc;

-- Gastos en articulos por mes
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	case
		when DATEPART(MONTH, a.fec_compra) = 1 then 'Enero'
		when DATEPART(MONTH, a.fec_compra) = 2 then 'Febrero'
		when DATEPART(MONTH, a.fec_compra) = 3 then 'Marzo'
		when DATEPART(MONTH, a.fec_compra) = 4 then 'Abril'
		when DATEPART(MONTH, a.fec_compra) = 5 then 'Mayo'
		when DATEPART(MONTH, a.fec_compra) = 6 then 'Junio'
		when DATEPART(MONTH, a.fec_compra) = 7 then 'Julio'
		when DATEPART(MONTH, a.fec_compra) = 8 then 'Agosto'
		when DATEPART(MONTH, a.fec_compra) = 9 then 'Septiembre'
		when DATEPART(MONTH, a.fec_compra) = 10 then 'Octubre'
		when DATEPART(MONTH, a.fec_compra) = 11 then 'Noviembre'
		when DATEPART(MONTH, a.fec_compra) = 12 then 'Diciembre'
	end as "Mes",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos por mes"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, a.fec_compra), d.id_dpto
having d.id_dpto = 1 and year(a.fec_compra) = 2022
order by DATEPART(MONTH, a.fec_compra), "Departamento" asc;

-- Gastos de mantenciones por mes
select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	case
		when DATEPART(MONTH, rm.fec_rmant) = 1 then 'Enero'
		when DATEPART(MONTH, rm.fec_rmant) = 2 then 'Febrero'
		when DATEPART(MONTH, rm.fec_rmant) = 3 then 'Marzo'
		when DATEPART(MONTH, rm.fec_rmant) = 4 then 'Abril'
		when DATEPART(MONTH, rm.fec_rmant) = 5 then 'Mayo'
		when DATEPART(MONTH, rm.fec_rmant) = 6 then 'Junio'
		when DATEPART(MONTH, rm.fec_rmant) = 7 then 'Julio'
		when DATEPART(MONTH, rm.fec_rmant) = 8 then 'Agosto'
		when DATEPART(MONTH, rm.fec_rmant) = 9 then 'Septiembre'
		when DATEPART(MONTH, rm.fec_rmant) = 10 then 'Octubre'
		when DATEPART(MONTH, rm.fec_rmant) = 11 then 'Noviembre'
		when DATEPART(MONTH, rm.fec_rmant) = 12 then 'Diciembre'
	end as "Mes",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones por mes"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto) , DATEPART(MONTH, rm.fec_rmant), d.id_dpto
having d.id_dpto = 1 and year(rm.fec_rmant) = 2022
order by DATEPART(MONTH, rm.fec_rmant), "Departamento" asc;

-----------------------------------------------------------------------------------------------------------------------------

-- Ganancias por año
SELECT 
	rg.nom_rgn as "Region",
	year(r.fec_ini_rva) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	SUM(p.monto_pagado) as "Ganancia anual",
	count(r.id_rva) as "Reservas" 
    FROM reserva r join pago p
		on r.id_rva = p.id_rva 
    join departamento d 
		on d.id_dpto = r.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(r.fec_ini_rva),concat(cn.nom_cnd, ' #' , d.num_dpto), d.id_dpto 
having d.id_dpto = 1 and year(r.fec_ini_rva) = 2022
order by "Año";

-- Gastos en servicios por año
select 
	rg.nom_rgn as "Region",
    year(g.fec_ingreso) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(g.gasto_luz) as "Gastos de luz gasto anual",
	sum(g.gasto_agua) as "Gastos de agua gasto anual",
	sum(g.gasto_gas) as "Gastos de gas gasto anual",
	sum(g.gasto_servicios) as "Gastos de servicios gasto anual",
	sum(g.gasto_comunes) as "Gastos comunes gasto anual",
	sum(g.gasto_dividendo) as "Dividendo gasto anual "
	from departamento d join gastos g
		on d.id_dpto = g.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(g.fec_ingreso), concat(cn.nom_cnd, ' #' , d.num_dpto),  d.id_dpto
having  d.id_dpto = 1 and year(g.fec_ingreso) = 2022
order by  "Año" asc;

-- Gastos en articulos por año
select 
	rg.nom_rgn as "Region",
	year(a.fec_compra) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(a.valor_arti) as "Gastos en articulos anual"
	from departamento d join articulo a
		on d.id_dpto = a.id_dpto
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(a.fec_compra), concat(cn.nom_cnd, ' #' , d.num_dpto), d.id_dpto
having d.id_dpto = 1 and year(a.fec_compra) = 2022
order by  "Año" asc;

-- Gasto por mantenciones anual
select 
	rg.nom_rgn as "Region",
	year(rm.fec_rmant) as "Año",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
	sum(m.cost_mant) as "Gastos en mantenciones anual"
	from departamento d join res_mant rm
		on d.id_dpto = rm.id_dpto
	join mantencion m
		on rm.id_rmant = m.id_rmant
    join condominio cn
        on cn.id_cnd = d.id_cnd
    join comuna cm
		on cm.id_com = cn.id_com
    join region rg
        on rg.id_rgn = cm.id_rgn
GROUP BY rg.id_rgn, rg.nom_rgn, year(rm.fec_rmant), concat(cn.nom_cnd, ' #' , d.num_dpto), d.id_dpto
having d.id_dpto = 1 and year(rm.fec_rmant) = 2022
order by "Año" asc;