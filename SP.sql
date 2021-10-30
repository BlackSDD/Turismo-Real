---TABLA AGENCIA_EXTERNA

create  or replace procedure sp_eliminarAgenciaExterna
(
	v_id_agencia number
)
as
begin
	delete  from agencia_externa where id_agencia = v_id_agencia;
	commit;
end;

/*create or replace procedure sp_listaAgenciaExterna
AS
	select email_age, nom_age  from agencia_externa
	order b4 nom_age asc;
end;*/

create or replace procedure sp_agregarAgenciaExterna
(
	
	v_nom_age NVARCHAR2,
	v_email_age NVARCHAR2,
	v_tel_age number,
    v_id_com number,
	v_salida out number
)
as
begin
	insert into Agencia_externa values
	(
	SEQ_AGENCIA_EXTERNA.nextval,
	v_nom_age ,
	v_email_age ,
	v_tel_age,
    v_id_com
	);
    commit;
end;


create or replace procedure sp_modificarAgenciaExterna
(
	v_id_age number,
	v_nom_age NVARCHAR2,
	v_email_age NVARCHAR2,
	v_tel_age number
)
as
begin
	update agencia_externa 
    set nom_age = v_nom_age,
        email_age = v_email_age,
        tel_age = v_tel_age
	where ID_AGENCIA = v_id_age;
    commit;
	
end;

---------------------------------------------------------------------------

----TABLA ARTICULO

create or replace procedure sp_eliminarArticulo
(
	v_id_arti number
)
as
begin
	delete  from articulo where id_arti = v_id_arti;
    commit;
end;
/

create or replace procedure sp_listaArticulo(articulo out SYS_REFCURSOR)
is
begin
	open categorias for select * from core_articulo;
end	; 
/


create or replace procedure sp_agregarArticulo
(
	
	v_nom_arti NVARCHAR2,
	v_cant_arti number,
	v_deta_arti NVARCHAR2,
	v_valor_arti number,
    v_id_depto number
	v_salida OUT number
)
as
begin
	insert into core_articulo
	(
		id_arti,
		nom_arti
		cant_arti,
		deta_arti
		valor_arti
		id_dpto
	)
	(
	SEQ_ARTICULO.nextval,
	v_nom_arti ,
	v_cant_arti,
	v_deta_arti,
	v_valor_arti,
    v_id_depto
	);
    commit;
	v_salida:=1;
	when others then 
		v_salida:=0;
end;
/

create or replace procedure sp_modificarArticulo
(
	v_id_arti number,
	v_nom_arti NVARCHAR2,
	v_cant_arti number,
	v_deta_arti nvarchar2,
	v_valor_arti number
)
as
begin
	update articulo set nom_arti = v_nom_arti, cant_arti = v_cant_arti, deta_arti = v_deta_arti, valor_arti = v_valor_arti
	where id_arti = v_id_arti;
    commit;
	
end;

---------------------------------------------------------------------------

--TABLA CHECK IN


-- create store procedure sp_agregarCheckin
-- (
-- 	v_deta_chi NVARCHAR2,	
-- )
-- as
-- begin
-- 	insert into checkin values
-- 	(
-- 	v_id_rva.nextval
-- 	v_deta_chi NVARCHAR2
-- 	);
-- end


-- create store procedure sp_listarCheckin

-- as
-- begin
-- 	select deta_chi from checkin
-- 	order by deta_chi asc;
-- end;	


-- create store procedure sp_modificarCheckin
-- (
-- 	v_id_rva number,
-- 	v_deta_chi NVARCHAR2
	
-- )
-- as
-- begin
-- 	update checkin set deta_chi = v_deta_chi
-- 	where id_rva = v_id_rva
	
-- end

---------------------------------------------------------------------------

-- TABLA CHECK OUT

-- create store procedure sp_listarCheckout

-- as
-- begin
-- 	select v_cost_multa, v_deta_cho
-- 	order v_deta_cho asc
-- end	



-- create store procedure sp_agregarCheckout
-- (
-- 	v_cost_multa number,
-- 	v_deta_cho nvarchar,
	
-- )
-- as
-- begin
-- 	insert into Checkout values
-- 	(
-- 	v_id_rva.nextval,
-- 	v_cost_multa number,
-- 	v_deta_cho nvarchar
-- 	)
-- end



-- create store procedure sp_modificarCheckout
-- (
-- 	v_cost_multa number,
-- 	v_deta_cho nvarchar
	
-- )
-- as
-- begin
-- 	update checkout set costo_multa = v_costo_multa , v_deta_cho = v_deta_cho
-- 	where id_cho = v_id_cho
	
-- end

---------------------------------------------------------------------------

--TABLA COMUNA

create or replace procedure sp_eliminarComuna
(
	v_id_com number
)
as
begin
	delete  from comuna where id_com = v_id_com;
    commit;
end;


/*create or replace procedure sp_listaComuna

as
begin
	select nom_com, nom_rgn
	from comuna c inner join region r on c.id_rgn = r.id_rgn;
end	;*/


create or replace procedure sp_agregarComuna
(
	
	v_nom_com NVARCHAR2,
    v_id_rgn NUMBER
)
as
begin
	insert into Comuna values
	(
	SEQ_COMUNA.nextval,
	v_nom_com,
    v_id_rgn
	);
    commit;
end;


create or replace procedure sp_modificarComuna
(
	v_id_com number,
	v_nom_com NVARCHAR2
)
as
begin
	update comuna set nom_com = v_nom_com
	where id_com = v_id_com;
	commit;
end;

---------------------------------------------------------------------------

--TABLA CONDOMINIO

create or replace procedure sp_eliminarCondominio
(
	v_id_cnd number
)
as
begin
	delete  from condominio where id_cnd = v_id_cnd;
	commit;
end;


/*create or replace procedure sp_listaCondominio

as
begin
	select nom_cnd, nom_com
	from condominio n inner join comuna c on n.v_id_com = c.v_id_com;
end	;*/


create or replace procedure sp_agregarCondominio
(
	
	v_nom_cnd NVARCHAR2,
	v_id_com number
)
as
begin
	insert into condominio values
	(
	SEQ_CONDOMINIO.nextval,
	v_nom_cnd,
    v_id_com
	);
    commit;
end;


create or replace procedure sp_modificarCondominio
(
	v_id_cnd number,
	v_nom_cnd NVARCHAR2
)
as
begin
	update condominio set nom_cnd = v_nom_cnd
	where id_cnd = v_id_cnd;
	commit;
end;


---------------------------------------------------------------------------

--TABLA CONT_SERV

create or replace procedure sp_eliminarContServ
(
	v_id_cont_serv number
)
as
begin
	delete  from cont_serv where id_cont_serv = v_id_cont_serv;
    commit;
end;


/*create or replace procedure sp_listaContServ

as
begin
	select fec_cont, costo_total, deta_cont, fec_acord, lugar_recogida, lugar_destino, km_rec from cont_serv
	order by fec_cont asc;
end	;*/


create or replace procedure sp_agregarContServ
(
	
	v_fec_cont date,
	v_costo_total number,
	v_deta_cont NVARCHAR2,
	v_fec_acord date,
	v_lugar_recogida NVARCHAR2,
	v_lugar_destino NVARCHAR2,
	v_km_rec number,
    v_id_rva number,
    v_id_serv number
	
)
as
begin
	insert into cont_serv values
	(
	SEQ_CONT_SERV.nextval,
	v_fec_cont ,
	v_costo_total ,
	v_deta_cont ,
	v_fec_acord ,
	v_lugar_recogida ,
	v_lugar_destino ,
	v_km_rec,
    v_id_rva,
    v_id_serv
	);
    commit;
end;


create or replace procedure sp_modificarContServ
(
	v_id_cont_serv number,
	v_fec_cont date,
	v_costo_total number,
	v_deta_cont NVARCHAR2,
	v_fec_acord date,
	v_lugar_recogida NVARCHAR2,
	v_lugar_destino NVARCHAR2,
	v_km_rec number
)
as
begin
	update Cont_serv set fec_cont = v_fec_cont, costo_total = v_costo_total, deta_cont = v_deta_cont, fec_acord = v_fec_acord, lugar_recogida = v_lugar_recogida,
	lugar_destino = v_lugar_destino, km_rec = v_km_rec
	where id_cont_serv = v_id_cont_serv;
	commit;
end;

---------------------------------------------------------------------------

---------------------------------------------------------------------------

--TABLA DEPARTAMENTO

create or replace procedure sp_eliminarDepartamento
(
	v_id_dpto number
)
as
begin
	delete  from Departamento where id_dpto = v_id_dpto;
    commit;
end;


/*create or replace procedure sp_listaDepartamento

as
begin
	select dir_dpto, num_dpto, n_amb_dpto, desc_dpto, costo_arri_dpto, img_1_dpto, img_2_dpto, img_3_dpto, img_4_dpto, img_5_dpto from departamento
	order by dir_dpto asc;
end;*/


create  or replace procedure sp_agregarDepartamento
(
	
	v_dir_dpto NVARCHAR2, 
	v_num_dpto number, 
	v_n_amb_dpto number, 
	v_desc_dpto NVARCHAR2, 
	v_costo_arri_dpto number, 
	v_img_1_dpto BLOB, 
	v_img_2_dpto blob, 
	v_img_3_dpto blob,
	v_img_4_dpto blob, 
	v_img_5_dpto blob,
    v_id_cnd number
	
)
as
begin
	insert into departamento values
	(
	seq_departamento.nextval,
	v_dir_dpto , 
	v_num_dpto , 
	v_n_amb_dpto , 
	v_desc_dpto , 
	v_costo_arri_dpto, 
	v_img_1_dpto , 
	v_img_2_dpto , 
	v_img_3_dpto ,
	v_img_4_dpto , 
	v_img_5_dpto ,
    v_id_cnd
	);
    commit;
end;


create or replace procedure sp_modificarDepartamento
(
	v_id_dpto number,
	v_dir_dpto NVARCHAR2, 
	v_num_dpto number, 
	v_n_amb_dpto number, 
	v_desc_dpto NVARCHAR2, 
	v_costo_arri_dpto number, 
	v_img_1_dpto blob, 
	v_img_2_dpto blob, 
	v_img_3_dpto blob,
	v_img_4_dpto blob, 
	v_img_5_dpto blob
)
as
begin
	update departamento set dir_dpto = v_dir_dpto, num_dpto = v_num_dpto, n_amb_dpto = v_n_amb_dpto, desc_dpto = v_desc_dpto, costo_arri_dpto = v_costo_arri_dpto,
	img_1_dpto = v_img_1_dpto, img_2_dpto = v_img_2_dpto, img_3_dpto = v_img_3_dpto, img_4_dpto = v_img_4_dpto, img_5_dpto = v_img_5_dpto
	where id_dpto = v_id_dpto;
    commit;
	
end;


---------------------------------------------------------------------------
--TABLA DISPONIBILIDAD

 /*create or replace procedure sp_listarDisponibilidad

as
begin
	select fec_disp, esta_disp from disponibilidad
	order esta_disp asc;
end	;*/



create or replace procedure sp_agregarDisponibilidad
(
	
	v_fec_disp date,
	v_esta_disp char,
    v_id_dpto number
)
as
begin
	insert into disponibilidad values
	(
	v_fec_disp ,
	v_esta_disp,
    v_id_dpto
	);
    commit;
end;



create OR REPLACE procedure sp_modificarDisponibilidad
(
	v_fec_disp date,
	v_esta_disp char
)
as
begin
	update disponibilidad set esta_disp = v_esta_disp
	where fec_disp = v_fec_disp;
	commit;
end;

---------------------------------------------------------------------------

--TABLA GASTOS

create or replace procedure sp_eliminarGastos
(
	v_id_gastos number
)
as
begin
	delete  from Gastos where id_gastos = v_id_gastos;
    commit;
end;



/*create or replace procedure sp_listarGastos

as
begin
	select gast_mes, gast_agno from gastos
	order by gast_agno asc;
    commit;
end	;*/



create or replace procedure sp_agregarGastos
(
	
	v_gast_mes number,
	v_gast_agno number,
    v_id_dpto number
)
as
begin
	insert into gastos values
	(
	SEQ_GASTOS.nextval,
	v_gast_mes ,
	v_gast_agno,
    v_id_dpto
	);
    commit;
end;



create or replace procedure sp_modificarGastos
(
	v_id_gastos number,
	v_gast_mes number,
	v_gast_agno number
)
as
begin
	update gastos set gast_mes = v_gast_mes, gast_agno = v_gast_agno
	where id_gastos = v_id_gastos;
	commit;
end;

---------------------------------------------------------------------------

--TABLA MANTENCION

create or replace procedure sp_eliminarMantencion
(
	v_id_mant number
)
as
begin
	delete from Mantencion where id_mant = v_id_mant;
    commit;
end;


/*create or replace procedure sp_listarMantencion

as
begin
	select cost_mant, deta_mant, fec_rmant
	from mantencion m inner join Res_mant r on m.id_rmant = b.id_rmant;
end	;*/


create or replace procedure sp_agregarMantencion
(
	
	v_cost_mant number,
	v_deta_mant NVARCHAR2,
    v_id_rmant number
)
as
begin
	insert into mantencion values
	(
	SEQ_MANTENCION.nextval,
	v_cost_mant ,
	v_deta_mant ,
    v_id_rmant
	);
    commit;
end;


create or replace procedure sp_modificarMantencion
(
    v_id_mant number,
	v_cost_mant number,
	v_deta_mant NVARCHAR2
)
as
begin
	update mantencion set deta_mant = v_deta_mant
	where id_mant = v_id_mant;
    commit;
end;


---------------------------------------------------------------------------

--TABLA PAGO

create or replace procedure sp_eliminarPago
(
	v_id_rva number
)
as
begin
	delete from pago where id_rva = v_id_rva;
    commit;
end;


/*create or replace procedure sp_listarPago

as
begin
	select monto_total, monto_pagado, esta_pago from pago
	order by esta_pago asc;
end	;*/


create or replace procedure sp_agregarPago
(
	v_id_rva number,
	v_monto_total number,
	v_monto_pagado number,
	v_esta_pago nvarchar2
)
as
begin
	insert into mantencion values
	(
    v_id_rva,
	v_monto_total,
	v_monto_pagado,
	v_esta_pago
    
	);
    commit;
end;


create or replace procedure sp_modificarMantencion
(
	v_id_rva number,
    v_monto_total number,
    v_monto_pagado number,
    v_est_pago nvarchar2
)
as
begin
	update pago set monto_total = v_monto_total,
                    monto_pagado = v_monto_pagado,
                    est_pago = v_est_pago
	where id_rva = v_id_rva;
	commit;
end;

---------------------------------------------------------------------------

--TABLA REGION

create or replace procedure sp_eliminarRegion
(
	v_id_rgn number
)
as
begin
	delete from Region where id_rgn = v_id_rgn;
    commit;
end;


/*create or replace procedure sp_listaRegion

as
begin
	select nom_rgn from region
	order by nom_rgn asc;
end	;*/


create or replace procedure sp_agregarRegion
(
	
	v_nom_rgn NVARCHAR2
	
)
as
begin
	insert into region values
	(
	SEQ_REGION.nextval,
	v_nom_rgn 
	);
    commit;
end;


create or replace procedure sp_modificarRegion
(
	v_id_rgn number,
	v_nom_rgn NVARCHAR2
)
as
begin
	update region set nom_rgn = v_nom_rgn
	where id_rgn = v_id_rgn;
	commit;
end;

---------------------------------------------------------------------------

--TABLA RES_MANT

create or replace procedure sp_eliminarResMant
(
	v_id_rmant number
)
as
begin
	delete from res_mant where id_rmant = v_id_rmant;
    commit;
end;


/*create or replace procedure sp_listaRestMant

as
begin
	select v_fec_rmant from res_mant
	order by v_fec_rmant asc;
end	;*/


create or replace procedure sp_agregarResMant
(
	
	v_fec_rmant date,
    v_id_dpto number,
    v_id_usr number
)
as
begin
	insert into Res_mant values
	(
	SEQ_RES_MANT.nextval,
	v_fec_rmant,
    v_id_dpto,
    v_id_usr
	);
    commit;
end;


create or replace procedure sp_modificarResMant
(
	v_id_rmant NUMBER,
	v_fec_rmant date
)
as
begin
	update Res_mant set fec_rmant = v_fec_rmant
	where id_rmant = v_id_rmant;
	commit;
end;

---------------------------------------------------------------------------

--TABLA RESERVA


create or replace procedure sp_eliminarReserva
(
	v_id_rva number
)
as
begin
	delete from reserva where id_rva = v_id_rva;
    commit;
end;


/*create or replace procedure sp_listaReserva

as
begin
	select fec_ini_rva, fec_fin_rva, num_pers, estado_rva from reserva
	order by estado_rva asc;
end	;*/


create or replace procedure sp_agregarReserva
(
	
	v_fec_ini_rva date,
	v_fec_fin_rva date,
	v_num_pers number, 
	v_estado_rva NVARCHAR2,
    v_id_dpto number,
    v_id_usr number
)
as
begin
	insert into reserva values
	(
	SEQ_RESERVA.nextval,
	v_fec_ini_rva ,
	v_fec_fin_rva ,
	v_num_pers ,
	v_estado_rva,
    v_id_dpto,
    v_id_usr
	);
    commit;
end;


create or replace procedure sp_modificarReserva
(
	v_id_rva number,
	v_fec_ini_rva date,
	v_fec_fin_rva date,
	v_num_pers number,
	v_estado_rva NVARCHAR2
)
as
begin
	update Reserva set fec_ini_rva = v_fec_ini_rva, fec_fin_rva = v_fec_fin_rva, num_pers = v_num_pers, estado_rva = v_estado_rva
	where id_rva = v_id_rva;
	commit;
end;

---------------------------------------------------------------------------

--TABLA SERVEXTRAS


create or replace procedure sp_eliminarSerExtras
(
	v_id_serv number
)
as
begin
	delete from servExtras where id_serv = v_id_serv;
    commit;
end;


/*create or replace procedure sp_listaServExtras

as
begin
	select nom_serv, tipo_serv, desc_serv from servExtras
	order by v_nom_serv asc;
end	;*/


create or replace procedure sp_agregarServExtras
(
	
	v_nom_serv NVARCHAR2,
	v_tipo_serv char,
	v_desc_serv NVARCHAR2,
    v_id_agencia number
	
)
as
begin
	insert into servExtras values
	(
	SEQ_SERVEXTRAS.nextval,
	v_nom_serv ,
	v_tipo_serv ,
	v_desc_serv,
    v_id_agencia
	);
    commit;
end;


create or replace procedure sp_modificarServExtras
(
	v_id_serv number,
	v_nom_serv NVARCHAR2,
	v_tipo_serv char,
	v_desc_serv NVARCHAR2
)
as
begin
	update servExtras set nom_serv = v_nom_serv, tipo_serv = v_tipo_serv, desc_serv = v_desc_serv
	where id_serv = v_id_serv;
	commit;
end;


---------------------------------------------------------------------------

-- TABLA TIPO USUARIO


-- create or replace procedure sp_eliminarTipoUsr
-- (
-- 	v_id_tipo_usr number
-- )
-- as
-- begin
-- 	delete from tipo_usuario where id_tipo_usr = v_id_tipo_usr;
--     commit:
-- end;


-- create or replace procedure sp_listaTipoUsr

-- as
-- begin
-- 	select tipo_usr from tipo_usuario
-- 	order by tipo_usr asc;
-- end	;


-- create or replace procedure sp_agregarTipoUsr
-- (
-- 	v_id_tipo_usr number,
-- 	v_tipo_usr NVARCHAR2
	
-- )
-- as
-- begin
-- 	insert into tipo_usuario values
-- 	(
-- 	v_id_tipo_usr,
-- 	v_tipo_usr 
-- 	);
-- end;


-- create or replace procedure sp_modificarTipoUsr
-- (
-- 	v_id_tipo_usr number,
-- 	v_tipo_usr nvarchar
-- )
-- as
-- begin
-- 	update tipo_usuario set tipo_usr = v_tipo_usr
-- 	where id_tipo_usr = v_id_tipo_usr;
-- 	commit;
-- end;

---------------------------------------------------------------------------

---------------------------------------------------------------------------

--TABLA TOUR

create or replace procedure sp_eliminarTour
(
	v_id_serv number
)
as
begin
	delete from tour where id_serv = v_id_serv;
    commit;
end;



/*create or replace procedure sp_listarTour

as
begin
	select dur_hra, dur_min, cost_adult, costo_nigno, costo_3ra, ubi_partida, ubi_fin, alimentacion, transporte from tour
	order by v_dur_hra asc;
end	;*/



create or replace procedure sp_agregarTour
(
	
	v_dur_hra number,
	v_dur_min number,
	v_cost_adult number,
	v_costo_nigno number,
	v_costo_3ra number,
	v_ubi_partida NVARCHAR2,
	v_ubi_fin NVARCHAR2,
	v_alimentacion char,
	v_transporte char
)
as
begin
	insert into Tour values
	(
	SEQ_SERVEXTRAS.nextval,
	v_dur_hra ,
	v_dur_min ,
	v_cost_adult ,
	v_costo_nigno ,
	v_costo_3ra ,
	v_ubi_partida ,
	v_ubi_fin ,
	v_alimentacion ,
	v_transporte 
	);
    commit;
end;



create or replace procedure sp_modificarTour
(
	v_id_serv number,
	v_dur_hra number,
	v_dur_min number,
	v_cost_adult number,
	v_cost_nigno number,
	v_cost_3ra number,
	v_ubi_partida NVARCHAR2,
	v_ubi_fin NVARCHAR2,
	v_alimentacion char,
	v_transporte char
)
as
begin
	update Tour set dur_hra = v_dur_hra, dur_min = v_dur_min, cost_adult = v_cost_adult, cost_nigno = v_cost_nigno, cost_3ra = v_cost_3ra, ubi_partida = v_ubi_partida, ubi_fin = v_ubi_fin, alimentacion = v_alimentacion, Transporte = v_transporte
	where id_serv = v_id_serv;
	commit;
end;

---------------------------------------------------------------------------

--TABLA TRANSPORTE

create or replace procedure sp_eliminarTransporte
(
	v_id_serv number
)
as
begin
	delete from transporte where id_serv = v_id_serv;
    commit;
end;



/*create or replace procedure sp_listarTransporte

as
begin
	select cost_km_dia, cost_km_noc, extra_fest from transporte
	order by cost_km_dia asc;
end	;*/



create or replace procedure sp_agregarTransporte
(
	v_cost_km_dia number,
	v_cost_km_noc number,
	v_extra_fest number
)
as
begin
	insert into Transporte values
	(
	SEQ_SERVEXTRAS.nextval,
	v_cost_km_dia ,
	v_cost_km_noc ,
	v_extra_fest
	);
    commit;
end;
 

create or replace procedure sp_modificarTransporte
(
	v_id_serv number,
	v_cost_km_dia number,
	v_cost_km_noc number,
	v_extra_fest number
)
as
begin
	update Transporte set cost_km_dia = v_cost_km_dia, cost_km_noc = v_cost_km_noc, extra_fest = v_extra_fest
	where id_serv = v_id_serv;
	commit;
end;

---------------------------------------------------------------------------

--TABLA USUARIO

create or replace procedure sp_eliminarUsr
(
	v_id_usr number
)
as
begin
	delete  from usuario where id_usr = v_id_usr;
end;



/*create or replace procedure sp_listarUsr

as
begin
	select email_usr, contr_usr, nom_usr, appat_usr, apmat_usr, tel_usr, rut_usr, dv_usr, cant_res, est_cta, tipo_cli from usuario
	order by tipo_cli asc;
end	;*/



create or replace procedure sp_agregarUsr
(
	v_email_usr NVARCHAR2,
	v_contr_usr NVARCHAR2,
	v_nom_usr NVARCHAR2,
	v_appat_usr NVARCHAR2,
	v_apmat_usr NVARCHAR2,
	v_tel_usr number,
	v_rut_usr number,
	v_dv_usr char,
	v_cant_res number,
	v_est_cta NVARCHAR2,
	v_tipo_cli NVARCHAR2 ,
    v_id_tipo_usr number
)
as
begin
	insert into usuario values
	(
	SEQ_USUARIO.nextval,
	v_email_usr ,
	v_contr_usr ,
	v_nom_usr,
	v_appat_usr ,
	v_apmat_usr,
	v_tel_usr ,
	v_rut_usr ,
	v_dv_usr ,
	v_cant_res,
	v_est_cta ,
	v_tipo_cli ,
    v_id_tipo_usr
	);
    commit;
end;



create or replace procedure sp_modificarUsr
(
	v_id_usr number,
	v_email_usr nvarchar2,
	v_contr_usr nvarchar2,
	v_nom_usr nvarchar2,
	v_appat_usr nvarchar2,
	v_apmat_usr nvarchar2,
	v_tel_usr number,
	v_rut_usr number,
	v_dv_usr char,
	v_cant_res number,
	v_est_cta nvarchar2,
	v_tipo_cli nvarchar2 
)
as
begin
	update usuario set email_usr = v_email_usr, contr_usr = v_contr_usr, nom_usr = v_nom_usr, appat_usr = v_appat_usr, apmat_usr = v_apmat_usr, tel_usr = v_tel_usr,
	rut_usr = v_rut_usr, dv_usr = v_dv_usr, cant_res = v_cant_res, est_cta = v_est_cta, tipo_cli = v_tipo_cli
	where id_usr = v_id_usr;
	commit;
end;

---------------------------------------------------------------------------

--TABLA CONDUCTOR


create or replace procedure sp_eliminarConductor
(
	v_rut_conduc number
)
as
begin
	delete from conductor where rut_conduc = v_rut_conduc;
end;


/*create or replace procedure sp_listaConductor

as
begin
	select rut_conduc, dv_conduc, nom_conduc, appat_conduc, apmat_conduc, email_conduc, tel_conduc, patente from conductor
	order by appat_conduc asc;
end	;*/


create or replace procedure sp_agregarConductor
(
	
	v_rut_conduc number,
	v_dv_conduc char,
	v_nom_conduc nvarchar2,
	v_appat_conduc nvarchar2,
	v_apmat_conduc nvarchar2,
	v_email_conduc nvarchar2,
	v_tel_conduc number,
	v_patente nvarchar2,
    v_id_serv number
	
)
as
begin
	insert into Conductor values
	(
	v_rut_conduc ,
	v_dv_conduc ,
	v_nom_conduc ,
	v_appat_conduc ,
	v_apmat_conduc ,
	v_email_conduc ,
	v_tel_conduc,
	v_patente,
    v_id_serv
	);
    commit;
end;


create or replace procedure sp_modificarConductor
(
	v_rut_conduc number,
	v_dv_conduc char,
	v_nom_conduc nvarchar2,
	v_appat_conduc nvarchar2,
	v_apmat_conduc nvarchar2,
	v_email_conduc nvarchar2,
	v_tel_conduc number
	
)
as
begin
	update Conductor set rut_conduc = v_rut_conduc, dv_conduc = v_dv_conduc, nom_conduc = v_nom_conduc, appat_conduc = v_appat_conduc,
	apmat_conduc = v_apmat_conduc, email_conduc = v_email_conduc, tel_conduc = v_tel_conduc
	where rut_conduc = v_rut_conduc;
    commit;
end;

---------------------------------------------------------------------------

--TABLA VEHICULO


create or replace procedure sp_eliminarVehiculo
(
	v_patente char
)
as
begin
	delete from vehiculo where patente = v_patente;
end;


/*create or replace procedure sp_listaVehiculo

as
begin
	select patente, color, agno, cant_puertas, cap_pasaj, cap_male, asiento_nigno, per_silla from vehiculo
	order by cap_pasaj asc;
end	;*/


create or replace procedure sp_agregarVehiculo
(
	
	v_patente char, 
	v_color nvarchar2, 
	v_agno date, 
	v_cant_puertas number, 
	v_cap_pasaj number, 
	v_cap_male number, 
	v_asiento_nigno char, 
	v_per_silla char,
    v_id_modelo number
	
)
as
begin
	insert into vehiculo values
	(
	v_patente , 
	v_color, 
	v_agno , 
	v_cant_puertas , 
	v_cap_pasaj , 
	v_cap_male , 
	v_asiento_nigno , 
	v_per_silla,
    v_id_modelo
	);
    commit;
end;


create or replace procedure sp_modificarVehiculo
(
	v_patente char, 
	v_color nvarchar2, 
	v_agno date, 
	v_cant_puertas number, 
	v_cap_pasaj number, 
	v_cap_male number, 
	v_asiento_nigno char, 
	v_per_silla char
)
as
begin
	update vehiculo set patente = v_patente, color = v_color, agno = v_agno, cant_puertas = v_cant_puertas, cap_pasaj = v_cap_pasaj, cap_male = v_cap_male,
	asiento_nigno = v_asiento_nigno, per_silla = v_per_silla
	where patente = v_patente;
	commit;
end;

---------------------------------------------------------------------------

--TABLA MODELO


create or replace procedure sp_eliminarModelo
(
	v_id_modelo number
)
as
begin
	delete  from modelo where id_modelo = v_id_modelo;
    commit;
end;


/*create or replace procedure sp_listaModelo

as
begin
	select nombre_modelo from modelo
	order by nombre_modelo asc;
end	;*/


create or replace procedure sp_agregarModelo
(
	
	v_nombre_modelo nvarchar2,
    v_id_marca number
	
)
as
begin
	insert into modelo values
	(
	SEQ_MODELO.nextval,
	v_nombre_modelo,
    v_id_marca
	);
end;


create or replace procedure sp_modificarModelo
(
	v_id_modelo number,
	v_nombre_modelo nvarchar2
)
as
begin
	update modelo set nombre_modelo = v_nombre_modelo
	where id_modelo = v_id_modelo;
	commit;
end;
---------------------------------------------------------------------------

--TABLA MARCA

create or replace procedure sp_eliminarMarca
(
	v_id_marca number
)
as
begin
	delete from marca where id_marca = v_id_marca;
end;


/*create or replace procedure sp_listaMarca

as
begin
	select nombre_marca from marca
	order by nombre_marca asc;
end	;*/


create or replace procedure sp_agregarMarca
(
	
	v_nombre_marca nvarchar2
	
)
as
begin
	insert into marca values
	(
	SEQ_MARCA.nextval,
	v_nombre_marca
	);
    commit;
end;


create or replace procedure sp_modificarMarca
(
	v_id_marca number,
	v_nombre_marca nvarchar2
)
as
begin
	update marca set nombre_marca = v_nombre_marca
	where id_marca = v_id_marca;
	commit;
end;