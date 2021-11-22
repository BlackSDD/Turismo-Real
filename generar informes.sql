-- informe general de reservas
-- requiere un año para consultar las reservas 
select
        concat(c.nom_cnd , ' '  , d.num_dpto) as "Departamento",
        concat(u.nom_usr , ' ' , u.appat_usr , ' ' , u.apmat_usr) as "Cliente",
        r.estado_rva as "Estado reserva",
        concat(convert(varchar,r.fec_ini_rva,103) , ' - ' , convert(varchar,r.fec_fin_rva,103)) as "Fecha"
    from usuario u join reserva r
        on u.id_usr = r.id_usr 
    join departamento d 
        on r.id_dpto = d.id_dpto
    join condominio c
        on d.id_cnd = c.id_cnd
    where r.estado_rva != 'cancelada' 
        and year(r.fec_ini_rva) = @agno
    order by "Departamento";


----------------------------------------------------------------------

-- Informe de reservas detallado 
-- requiere la id de la reserva (traida desde una lista en la interfaz)

select
        DISTINCT(r.id_rva) as "Id reserva",
        concat(c.nom_cnd , ' '  , d.num_dpto) as "Departamento",
        concat(u.nom_usr , ' ' , u.appat_usr , ' ' , u.apmat_usr) as "Cliente",
        r.estado_rva as "Estado reserva",
        concat(convert(varchar,r.fec_ini_rva,103) , ' - ' , convert(varchar,r.fec_fin_rva,103)) as "Fecha Reserva",
        concat('$',p.monto_total) as "Costo total",
        concat('$',p.monto_arr) as "Costo arriendo",
        concat('$',p.monto_serv_extra) as "Costo servicios extra",
        concat('$',p.monto_multas)as "Costo Multas",
        concat('$',p.monto_pagado) as "Monto Pagado",
        isnull(ckin.deta_chi,'Check-in todavia no registrado') as "Detalle check-in",
        isnull(ckout.deta_cho,'Check-out todavia no registrado') as "Detalle check-in"
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

-- Select que trae todos los contratos de servicio te la reserva detallada
-- Se usa en conjunto con el selec anterior
select 
        s.nom_serv as "Nombre del servicio",
        c.deta_cont as "Detalle del servicio",
        convert(varchar,c.fec_cont,103) as "Fecha de contratación",
        concat(convert(varchar,c.fec_acord,103), ' ', convert(varchar,c.hora_acord,103)) as "Fecha realización de servicio", 
        concat('$',c.costo_total) as "Costo servicio extra"
    from cont_serv c left join servextras s
        on c.id_serv = s.id_serv
    -- @id_reserva es la que se solicita al "usuario" / sistema     
    where c.id_rva = @id_reserva
    order by "Fecha realización de servicio";




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

-- Gastos mensuales para informe semanal
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
	sum(a.valor_arti) as "Gastos en articulos comprados por semana"
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
order by "Mes", "Departamento" asc;





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