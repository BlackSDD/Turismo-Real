-- informe general de reservas
-- requiere un año para consultar las reservas 
select
        c.nom_cnd || ' '  || d.num_dpto as "Departamento",
        initcap(u.nom_usr || ' ' || u.appat_usr || ' ' || u.apmat_usr) as "Cliente",
        r.estado_rva as "Estado reserva",
        r.fec_ini_rva || ' - ' || r.fec_fin_rva as "Fecha"
    from usuario u join reserva r
        on u.id_usr = r.id_usr 
    join departamento d 
        on r.id_dpto = d.id_dpto
    join condominio c
        on d.id_cnd = c.id_cnd
    where r.estado_rva != 'cancelada' 
        and extract(year from r.fec_ini_rva) = v_fecha
    order by "Departamento";

--Informe de reservas detallado 
-- requiere la id de la reserva (traida desde una lista en la interfaz)

select
        DISTINCT(r.id_rva) as "Id reserva",
        c.nom_cnd || ' '  || d.num_dpto as "Departamento",
        initcap(u.nom_usr || ' ' || u.appat_usr || ' ' || u.apmat_usr) as "Cliente",
        r.estado_rva as "Estado reserva",
        r.fec_ini_rva || ' - ' || r.fec_fin_rva as "Fecha Reserva",
        to_char(p.monto_total,'L99,999,999') as "Costo total",
        to_char(p.monto_arr,'L99,999,999')as "Costo arriendo",
        to_char(p.monto_serv_extra,'L99,999,999') as "Costo servicios extra",
        to_char(p.monto_multas,'L99,999,999')as "Costo Multas",
        to_char(p.monto_pagado,'L99,999,999') as "Monto Pagado",
        nvl(ckin.deta_chi,'Checkin todavia no registrado') as "Detalle check-in",
        nvl(ckout.deta_cho,'Check out todavia no registrado') as "Detalle check-in"
    from usuario u join reserva r
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
    --v_id es la que se solicita al "usuario" / sistema        
    where r.id_rva = v_id
    order by "Departamento";

select 
        s.nom_serv as "Nombre del servicio",
        c.deta_cont as "Detalle del servicio",
        c.fec_cont as "Fecha de contratación",
        c.fec_acord || ' ' || c.hora_acord as "Fecha realización de servicio", 
        to_char(c.costo_total,'L99,999,999') as "Costo servicio extra"
    from cont_serv c left join servextras s
        on c.id_serv = s.id_serv
    --v_id es la que se solicita al "usuario" / sistema     
    where c.id_rva = v_id
    order by "Fecha realización de servicio";


-- Informe de ganancia por zona

--Por semana ganancia
SELECT 
        to_char(r.fec_ini_rva - 7/24,'IYYY')as "Año", 
        to_char(r.fec_ini_rva  - 7/24,'IW') as "Semana" ,
        SUM(p.monto_pagado) as "Ganancia semanal"
    FROM reserva r join pago p
        on r.id_rva = p.id_rva
    GROUP BY to_char(r.fec_ini_rva  - 7/24,'IYYY'), to_char(r.fec_ini_rva  - 7/24,'IW')
    order by "Año","Semana" asc

create table informe_zona
(
    id_rgn number(2),
    region varchar2(100),
    ganancia_promedio number(10)
);

create or replace procedure pd_informe_semanal_zona
as
    cursor regiones is select * from region;
    region_f regiones%rowtype;
    promedio number;
begin
    delete from informe_zona;
    for region_f in regiones loop
            SELECT 
                avg(SUM(p.monto_pagado)) as "Ganancia semanal"
            into promedio
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
        GROUP BY rg.id_rgn, rg.nom_rgn,to_char(r.fec_ini_rva  - 7/24,'IYYY'), to_char(r.fec_ini_rva  - 7/24,'IW')
        having rg.id_rgn = region_f.id_rgn;
        insert into informe_zona values(region_f.id_rgn, region_f.nom_rgn, promedio);
    end loop;
end pd_informe_semanal_zona;
/

create or replace procedure pd_informe_diario_zona
as
    cursor regiones is select * from region;
    region_f regiones%rowtype;
    promedio number;
begin
    delete from informe_zona;
    for region_f in regiones loop
            SELECT  avg(SUM(p.monto_pagado))
                into promedio
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
                GROUP BY  rg.id_rgn,r.fec_ini_rva
                HAVING rg.id_rgn=region_f.id_rgn;
        insert into informe_zona values(region_f.id_rgn, region_f.nom_rgn, promedio);
    end loop;
end pd_informe_diario_zona;
/

-- ganan