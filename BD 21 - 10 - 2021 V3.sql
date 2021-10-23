-- Script para crear las tablas -- 

CREATE TABLE agencia_externa (
    id_agencia    NUMBER(10) NOT NULL,
    nom_age       NVARCHAR2(100) NOT NULL,
    email_age     NVARCHAR2(100) NOT NULL,
    tel_age       NUMBER(9) NOT NULL,
    id_com        NUMBER(4) NOT NULL
);

CREATE TABLE articulo (
    id_arti     NUMBER(10) NOT NULL,
    nom_arti    NVARCHAR2(100) NOT NULL,
    cant_arti   NUMBER(2),
    deta_arti   NVARCHAR2(2000) NOT NULL,
    valor_arti  NUMBER(8) NOT NULL,
    id_dpto     NUMBER(10) NOT NULL
);

CREATE TABLE checkin (
    id_rva     NUMBER(10) NOT NULL,
    deta_chi   NVARCHAR2(2000) NOT NULL,
    id_usr     NUMBER(10) NOT NULL
);

CREATE TABLE checkout (
    id_rva       NUMBER(10) NOT NULL,
    cost_multa   NUMBER(8) NOT NULL,
    deta_cho     NVARCHAR2(2000) NOT NULL,
    id_usr       NUMBER(10) NOT NULL
);


CREATE TABLE comuna (
    id_com    NUMBER(4) NOT NULL,
    nom_com   NVARCHAR2(100) NOT NULL,
    id_rgn    NUMBER(2) NOT NULL
);


CREATE TABLE condominio (
    id_cnd        NUMBER(4) NOT NULL,
    nom_cnd       NVARCHAR2(100) NOT NULL,
    id_com        NUMBER(4) NOT NULL
);

CREATE TABLE cont_serv (
    id_cont_serv       NUMBER(10) NOT NULL,
    fec_cont           DATE NOT NULL,
    costo_total        NUMBER(7) NOT NULL,
    deta_cont          NVARCHAR2(2000) NOT NULL,
    fec_acord          DATE NOT NULL,
    lugar_recogida     NVARCHAR2(100),
    lugar_destino      NVARCHAR2(100),
    km_rec             NUMBER(6,3),
    id_rva             NUMBER(10) NOT NULL,
    id_serv            NUMBER(10) NOT NULL
);

CREATE TABLE departamento (
    id_dpto           NUMBER(10) NOT NULL,
    dir_dpto          NVARCHAR2(100) NOT NULL,
    num_dpto          NUMBER(4) NOT NULL,
    n_amb_dpto        NUMBER(1) NOT NULL,
    desc_dpto         NVARCHAR2(2000) NOT NULL,
    costo_arri_dpto   NUMBER(6) NOT NULL,
    img_1_dpto        BLOB NOT NULL,
    img_2_dpto        BLOB,
    img_3_dpto        BLOB,
    img_4_dpto        BLOB,
    img_5_dpto        BLOB,
    id_cnd            NUMBER(4) NOT NULL
);

CREATE TABLE disponibilidad (
    fec_disp     DATE NOT NULL,
    esta_disp    CHAR(2) DEFAULT 'Si' NOT NULL,
    id_dpto      NUMBER(10) NOT NULL
);

CREATE TABLE gastos (
    id_gastos   NUMBER(10) NOT NULL,
    gast_mes    NUMBER(10) NOT NULL,
    gast_agno   NUMBER(10) NOT NULL,
    id_dpto     NUMBER(10) NOT NULL
);

CREATE TABLE mantencion (
    id_mant     NUMBER(10) NOT NULL,
    cost_mant   NUMBER(8) NOT NULL,
    deta_mant   NVARCHAR2(2000) NOT NULL,
    id_rmant    NUMBER(10) NOT NULL
);

CREATE TABLE pago(
    id_rva        NUMBER(10) NOT NULL,
    monto_total   NUMBER(8) NOT NULL,
    monto_pagado  NUMBER(8) NOT NULL,
    est_pago      NVARCHAR2(30) NOT NULL
);

CREATE TABLE region (
    id_rgn  NUMBER(2) NOT NULL,
    nom_rgn NVARCHAR2(100) NOT NULL
);

CREATE TABLE res_mant (
    id_rmant   NUMBER(10) NOT NULL,
    fec_rmant  DATE NOT NULL,
    id_dpto    NUMBER(10) NOT NULL,
    id_usr     NUMBER(10) NOT NULL
);

CREATE TABLE reserva (
    id_rva       NUMBER(10) NOT NULL,
    fec_ini_rva  DATE NOT NULL,
    fec_fin_rva  DATE NOT NULL,
    num_pers     NUMBER(2) NOT NULL,
    estado_rva   NVARCHAR2(25)  DEFAULT 'en progreso' NOT NULL,
    id_dpto      NUMBER(10) NOT NULL,
    id_usr       NUMBER(10) NOT NULL  
);

CREATE TABLE servextras (
    id_serv        NUMBER(10) NOT NULL,
    nom_serv       NVARCHAR2(100) NOT NULL,
    tipo_serv      CHAR(1) DEFAULT 'T' NOT NULL,
    desc_serv      NVARCHAR2(2000) NOT NULL,
    id_agencia     NUMBER(10) NOT NULL
);

CREATE TABLE tipo_usuario (
    id_tipo_usr NUMBER(1) NOT NULL,
    tipo_usr    NVARCHAR2(25) DEFAULT 'cliente' NOT NULL
);

CREATE TABLE tour (
    id_serv      NUMBER(10) NOT NULL,
    dur_hra      NUMBER(2) NOT NULL,
    dur_min      NUMBER(2) NOT NULL,
    cost_adult   NUMBER(6) NOT NULL,
    cost_nigno   NUMBER(6) NOT NULL,
    cost_3ra     NUMBER(6) NOT NULL,
    ubi_partida  NVARCHAR2(100) NOT NULL,
    ubi_fin      NVARCHAR2(100) NOT NULL,
    alimentacion CHAR(2)  NOT NULL,
    transporte   CHAR(2)  NOT NULL
);

CREATE TABLE transporte (
    id_serv       NUMBER(10) NOT NULL,
    cost_km_dia   NUMBER(5) NOT NULL,
    cost_km_noc   NUMBER(5) NOT NULL,
    extra_fest    NUMBER(5) NOT NULL
);

CREATE TABLE usuario (
    id_usr      NUMBER(10) NOT NULL,  
    email_usr   NVARCHAR2(100) NOT NULL,
    contr_usr   NVARCHAR2(50) NOT NULL,
    nom_usr     NVARCHAR2(50) NOT NULL,
    appat_usr   NVARCHAR2(50) NOT NULL,
    apmat_usr   NVARCHAR2(50) NOT NULL,
    tel_usr     NUMBER(9) NOT NULL,
    rut_usr     NUMBER(8) NOT NULL,
    dv_usr      CHAR(1) NOT NULL,
    cant_res    NUMBER(4),
    est_cta     NVARCHAR2(20),
    tipo_cli    NVARCHAR2(25),
    id_tipo_usr NUMBER(1) NOT NULL
);

--Nuevas tablas segun acordado para visualizar documento de acuerdo de transporte --

CREATE TABLE conductor (
    rut_conduc   NUMBER(8) NOT NULL,    
    dv_conduc    CHAR(1) NOT NULL,
    nom_conduc   NVARCHAR2(50) NOT NULL,
    appat_conduc NVARCHAR2(50) NOT NULL,
    apmat_conduc NVARCHAR2(50) NOT NULL,
    email_conduc NVARCHAR2(100) NOT NULL,
    tel_conduc   NUMBER(9) NOT NULL,
    patente      CHAR (8) NOT NULL,
    id_serv      NUMBER(10) NOT NULL
);

CREATE TABLE vehiculo (
    patente          CHAR(8) NOT NULL,
    color            NVARCHAR2(30) NOT NULL,
    agno             DATE NOT NULL,
    cant_puertas     NUMBER(1) NOT NULL,
    cap_pasaj        NUMBER(2) NOT NULL, 
    cap_male         NUMBER (4) NOT NULL,
    asiento_nigno    CHAR(2) NOT NULL,
    per_silla        CHAR(2) NOT NULL,
    id_modelo        NUMBER(4) NOT NULL    
);

CREATE TABLE modelo (
    id_modelo      NUMBER(4) NOT NULL,
    nombre_modelo  NVARCHAR2(100) NOT NULL,
    id_marca       NUMBER(3) NOT NULL
);

CREATE TABLE marca (
    id_marca NUMBER (3) NOT NULL,
    nombre_marca NVARCHAR2 (100) NOT NULL
);

commit;
