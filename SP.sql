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
/


create or replace procedure sp_agregarAgenciaExterna
(
	
	v_nom_age NVARCHAR2,
	v_email_age NVARCHAR2,
	v_tel_age number,
    v_id_com number
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
/

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
/
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

create or replace procedure sp_agregarArticulo
(
	
	v_nom_arti NVARCHAR2,
	v_cant_arti number,
	v_deta_arti NVARCHAR2,
	v_valor_arti number,
    v_id_depto number
)
as
begin
	insert into articulo
	(
		id_arti,
		nom_arti,
		cant_arti,
		deta_arti,
		valor_arti,
		id_dpto
	)
	values (
	SEQ_ARTICULO.nextval,
	v_nom_arti ,
	v_cant_arti,
	v_deta_arti,
	v_valor_arti,
    v_id_depto
	);
    commit;
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
/
---------------------------------------------------------------------------

--TABLA CHECK IN


create or replace procedure sp_agregarCheckin
(
    v_id_rva number,
 	v_deta_chi NVARCHAR2,
    v_id_usr number
)
as
begin
	insert into checkin values
	(
	v_id_rva,
 	v_deta_chi,
    v_id_usr
    );
end;
/



create or replace procedure sp_modificarCheckin
(
 	v_id_rva number,
	v_deta_chi NVARCHAR2	
)
as
begin
 	update checkin set deta_chi = v_deta_chi
 	where id_rva = v_id_rva;	
end;
/

---------------------------------------------------------------------------

-- TABLA CHECK OUT


create or replace procedure sp_agregarCheckout
(
    v_cost_multa number,
    v_deta_cho nvarchar2,
    v_id_rva number,
    v_id_usr number
)
as
begin
    insert into checkout values
    (
        v_id_rva,
        v_cost_multa,
        v_deta_cho,
        v_id_usr
    );
end;
/

create or replace procedure sp_modificarCheckout
(
v_cost_multa number,
v_deta_cho nvarchar2,
v_id_rva number
)
as
begin
    update checkout set 
        cost_multa = v_cost_multa, 
        deta_cho = v_deta_cho
        where id_rva = v_id_rva;
end;
/


---------------------------------------------------------------------------

--TABLA COMUNA

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
/


create or replace procedure sp_modificarComuna
(
	v_id_com number,
	v_nom_com NVARCHAR2
)
as
begin
	update comuna set
        nom_com = v_nom_com
        where id_com = v_id_com;
	commit;
end;
/
---------------------------------------------------------------------------

--TABLA CONDOMINIO

create or replace procedure sp_eliminarCondominio
(
	v_id_cnd number
)
as
begin
	delete from condominio where id_cnd = v_id_cnd;
	commit;
end;
/


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
/

create or replace procedure sp_modificarCondominio
(
	v_id_cnd number,
	v_nom_cnd NVARCHAR2
)
as
begin
	update condominio set
        nom_cnd = v_nom_cnd
        where id_cnd = v_id_cnd;
	commit;
end;
/


---------------------------------------------------------------------------

--TABLA CONT_SERV

create or replace procedure sp_agregarContServ
(
	v_costo_total number,
	v_deta_cont NVARCHAR2,
	v_fec_acord date,
    v_hora_acord char,
	v_lugar_recogida NVARCHAR2,
	v_lugar_destino NVARCHAR2,
	v_km_rec number,
    v_est_cont nvarchar2,
    v_id_rva number,
    v_id_serv number
)
as  
    v_fec_cont date := sysdate;
begin
	insert into cont_serv values
	(
	SEQ_CONT_SERV.nextval,
	v_fec_cont,
	v_costo_total ,
	v_deta_cont ,
	v_fec_acord ,
    v_hora_acord,
	v_lugar_recogida,
	v_lugar_destino,
	v_km_rec,
    v_est_cont,
    v_id_rva,
    v_id_serv
	);
    commit;
end;
/



create or replace procedure sp_modificarContServ
(
	v_id_cont_serv number,
	v_fec_cont date,
	v_costo_total number,
	v_deta_cont NVARCHAR2,
	v_fec_acord date,
    v_hora_acord char,
	v_lugar_recogida NVARCHAR2,
	v_lugar_destino NVARCHAR2,
	v_km_rec number,
    v_est_cont nvarchar2
)
as
begin
	update Cont_serv set 
    fec_cont = v_fec_cont, 
    costo_total = v_costo_total, 
    deta_cont = v_deta_cont, 
    fec_acord = v_fec_acord, 
    hora_acord = v_hora_acord,
    lugar_recogida = v_lugar_recogida,
	lugar_destino = v_lugar_destino,
    km_rec = v_km_rec,
    est_cont = v_est_cont
	where id_cont_serv = v_id_cont_serv;
	commit;
end;
/
---------------------------------------------------------------------------

---------------------------------------------------------------------------

--TABLA DEPARTAMENTO

create or replace procedure sp_eliminarDepartamento
(
	v_id_dpto number
)
as
begin
    delete from disponibilidad where id_dpto = v_id_dpto;
    delete from articulo where id_dpto = v_id_dpto;
    delete from gastos where id_dpto = v_id_dpto;
	update departamento set
        desc_dpto = 'departamento no disponible',
        costo_arri_dpto = '0',
        img_1_dpto = empty_blob(),
        img_2_dpto = empty_blob(),
        img_3_dpto = empty_blob(),
        img_4_dpto = empty_blob(),
        img_5_dpto = empty_blob()
        where id_dpto = v_id_dpto;        
    commit;
end;
/




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
/

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
	update departamento set 
    dir_dpto = v_dir_dpto,
    num_dpto = v_num_dpto,
    n_amb_dpto = v_n_amb_dpto,
    desc_dpto = v_desc_dpto,
    costo_arri_dpto = v_costo_arri_dpto,
	img_1_dpto = v_img_1_dpto,
    img_2_dpto = v_img_2_dpto,
    img_3_dpto = v_img_3_dpto,
    img_4_dpto = v_img_4_dpto,
    img_5_dpto = v_img_5_dpto
	where id_dpto = v_id_dpto;
    commit;
end;
/

---------------------------------------------------------------------------

--TABLA GASTOS

create or replace procedure sp_eliminarGastos
(
	v_id_dpto number
)
as
begin
	delete  from Gastos where id_dpto = v_id_dpto;
    commit;
end;
/


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
	v_id_dpto,
	v_gast_mes ,
	v_gast_agno
	);
    commit;
end;
/

create or replace procedure sp_modificarGastos
(
	v_id_dpto number,
	v_gast_mes number,
	v_gast_agno number
)
as
begin
	update gastos set gast_mes = v_gast_mes,
    gast_agno = v_gast_agno
	where id_dpto = v_id_dpto;
	commit;
end;
/

---------------------------------------------------------------------------

--TABLA MANTENCION

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
	v_id_rmant,
	v_cost_mant ,
	v_deta_mant 
	);
    commit;
end;
/


create or replace procedure sp_modificarMantencion
(
    v_id_rmant number,
	v_cost_mant number,
	v_deta_mant NVARCHAR2
)
as
begin
	update mantencion set 
        cost_mant = v_cost_mant,
        deta_mant = v_deta_mant
	where id_rmant = v_id_rmant;
    commit;
end;
/

---------------------------------------------------------------------------
---------------------------------------------------------------------------

--TABLA PAGO


create or replace procedure sp_agregarPago
(
	v_id_rva number,
	v_monto_pagado number
)
as
begin
	update pago set
        monto_pagado = v_monto_pagado
        where id_rva = v_id_rva;
    commit;
end;
/

---------------------------------------------------------------------------

--TABLA REGION

create or replace procedure sp_eliminarRegion
(
	v_id_rgn number
)
as
begin
	delete from Region 
        where id_rgn = v_id_rgn;
    commit;
end;
/

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
/

create or replace procedure sp_modificarRegion
(
	v_id_rgn number,
	v_nom_rgn NVARCHAR2
)
as
begin
	update region set 
        nom_rgn = v_nom_rgn
        where id_rgn = v_id_rgn;
	commit;
end;
/

---------------------------------------------------------------------------

--TABLA RES_MANT

create or replace procedure sp_eliminarMantencion
(
	v_id_rmant number
)
as
begin
	update res_mant set
        est_man = 'cancelada'
    where id_rmant = v_id_rmant;
    commit;
end;
/

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
    'agendada',
    v_id_dpto,
    v_id_usr
	);
    commit;
end;
/

create or replace procedure sp_modificarResMant
(
	v_id_rmant NUMBER,
	v_fec_rmant date
)
as
begin
	update Res_mant set 
        fec_rmant = v_fec_rmant
	where id_rmant = v_id_rmant;
	commit;
end;
/
---------------------------------------------------------------------------

--TABLA RESERVA

create or replace procedure sp_eliminarReserva
(
	v_id_rva number
)
as
begin
	update reserva set
        estado_rva = 'cancelada'
    where id_rva = v_id_rva;
    commit;
end;
/


create or replace procedure sp_agregarReserva
(
	v_fec_ini_rva date,
	v_fec_fin_rva date,
	v_num_pers number, 
    v_id_dpto number,
    v_id_usr number
)
as
    cursor cur is 
        SELECT * 
        FROM disponibilidad
        where fec_disp between v_fec_ini_rva and v_fec_fin_rva and id_dpto = v_id_dpto and esta_disp ='No'; 
    cur_rec disponibilidad%rowtype;   
    msg varchar2(100);
begin
    OPEN cur;
        LOOP
            FETCH cur INTO cur_rec;  
            EXIT WHEN cur%notfound;
        END LOOP;
        if cur%rowcount >= 1 then
            msg := 'las fechas de la reserva no están disponibles';  
        else
            insert into reserva values
            (
            SEQ_RESERVA.nextval,
            to_date(v_fec_ini_rva) ,
            to_date(v_fec_fin_rva ),
            v_num_pers ,
            'en verificación',
            v_id_dpto,
            v_id_usr
            );
            commit;
        end if;
    close cur;
end sp_agregarReserva;
/


create or replace procedure sp_modificarReserva
(
	v_id_rva number,
	v_num_pers number,
	v_estado_rva NVARCHAR2
)
as
begin
	update Reserva set 
        num_pers = v_num_pers,
        estado_rva = v_estado_rva
	where id_rva = v_id_rva;
	commit;
end;
/

---------------------------------------------------------------------------

--TABLA SERVEXTRAS

create or replace procedure sp_eliminarServExtras
(
	v_id_serv number
)
as
    v_tipo char(1) ;
    cursor cond is 
        select * from conductor 
        where id_serv = v_id_serv;
begin
    select tipo_serv
        into v_tipo
        from servextras
        where id_serv = v_id_serv;
if v_tipo = 'T' then
	delete from tour where id_serv = v_id_serv;
    update servextras set
        desc_serv = 'Servicio no disponible'
        where id_serv = v_id_serv;
elsif v_tipo = 'V' then
    delete from conductor where id_serv = v_id_serv;
    for fila in cond loop
            delete vehiculo where patente = fila.patente;
    end loop;
    delete transporte where id_serv = v_id_serv;
    update servextras set
        desc_serv = 'Servicio no disponible'
        where id_serv = v_id_serv;
end if;
    commit;
end;
/

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
	v_nom_serv,
	v_tipo_serv,
	v_desc_serv,
    v_id_agencia
	);
    commit;
end;
/


create or replace procedure sp_modificarServExtras
(
	v_id_serv number,
	v_nom_serv NVARCHAR2,
	v_desc_serv NVARCHAR2
)
as
begin
	update servExtras set 
        nom_serv = v_nom_serv,  
        desc_serv = v_desc_serv
	where id_serv = v_id_serv;
	commit;
end;
/

---------------------------------------------------------------------------


--TABLA TOUR

create or replace procedure sp_agregarTour
(
	v_id_serv number,
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
	v_id_serv,
	v_dur_hra,
	v_dur_min,
	v_cost_adult,
	v_costo_nigno,
	v_costo_3ra,
	v_ubi_partida,
	v_ubi_fin,
	v_alimentacion,
	v_transporte 
	);
    commit;
end;
/

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
	update Tour set 
        dur_hra = v_dur_hra,
        dur_min = v_dur_min,
        cost_adult = v_cost_adult,
        cost_nigno = v_cost_nigno, 
        cost_3ra = v_cost_3ra, 
        ubi_partida = v_ubi_partida, 
        ubi_fin = v_ubi_fin, 
        alimentacion = v_alimentacion, 
        Transporte = v_transporte
	where id_serv = v_id_serv;
	commit;
end;
/

---------------------------------------------------------------------------

--TABLA TRANSPORTE

create or replace procedure sp_agregarTransporte
(
    v_id_serv  number,
	v_cost_km_dia number,
	v_cost_km_noc number
)
as
begin
	insert into Transporte values
	(
	v_id_serv,
	v_cost_km_dia ,
	v_cost_km_noc
	);
    commit;
end;
/


create or replace procedure sp_modificarTransporte
(
	v_id_serv number,
	v_cost_km_dia number,
	v_cost_km_noc number
)
as
begin
	update Transporte set 
        cost_km_dia = v_cost_km_dia,
        cost_km_noc = v_cost_km_noc
	where id_serv = v_id_serv;
	commit;
end;
/


---------------------------------------------------------------------------

--TABLA USUARIO

create or replace procedure sp_suspenderUsr
(
	v_id_usr number
)
as
begin
	update usuario set
        est_cta = 'suspendida',
        tipo_cli = 'inhabilitado'
    where id_usr = v_id_usr;
end;
/


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
/


create or replace procedure sp_modificarDatosUsr
(
	v_id_usr number,
	v_email_usr nvarchar2,
	v_contr_usr nvarchar2,
	v_tel_usr number
)
as
begin
	update usuario set 
        email_usr = v_email_usr, 
        contr_usr = v_contr_usr, 
        tel_usr = v_tel_usr
	where id_usr = v_id_usr;
	commit;
end;
/


create or replace procedure sp_validarUsr
(
    v_id_usr number
)
as
begin
    update usuario set
        est_cta = 'activa',
        tipo_cli = 'normal'
    where id_usr = v_id_usr;
end;
/

create or replace procedure sp_cambiarTipoCliente
(
    v_id_usr number
)
as
    v_tipo nvarchar2(30);
begin
    select tipo_cli
        into v_tipo
        from usuario
        where id_usr = v_id_usr;
    if v_tipo = 'normal' then
        update usuario set 
            tipo_cli = 'frecuente'
        where id_usr = v_id_usr;
    elsif v_tipo = 'frecuente' then
        update usuario set
            tipo_cli = 'normal'
        where id_usr = v_id_usr;
    end if;
    commit;
end;
/
