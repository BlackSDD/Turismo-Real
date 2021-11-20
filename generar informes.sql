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



-- Informe de ganancia por zona
-- Se debe especificar la id de region y el año a consultar

-- Ganancia por semana

SELECT 
	rg.nom_rgn as "Region",
	DATEPART(week, r.fec_ini_rva) as "Semana",
	concat(cn.nom_cnd, ' #' , d.num_dpto) as "Departamento",
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
GROUP BY rg.id_rgn, rg.nom_rgn, DATEPART(week, r.fec_ini_rva), year(r.fec_ini_rva), concat(cn.nom_cnd, ' #' , d.num_dpto)
having rg.id_rgn = @id_region and year(r.fec_ini_rva) = @agno;


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