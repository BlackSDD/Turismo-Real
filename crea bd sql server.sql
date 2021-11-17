Go

begin transaction createDataBase

use TurismoReal;

drop table cont_serv;

drop table conductor;

drop table vehiculo;

drop table modelo;

drop table marca;

drop table transporte;

drop table tour;

drop table servextras;

drop table agencia_externa;

drop table checkout;

drop table checkin;

drop table pago;

drop table reserva;

drop table mantencion;

drop table res_mant;

drop table articulo;

drop table gastos;

drop table disponibilidad;

drop table departamento;

drop table condominio;

drop table comuna;

drop table region;

drop table usuario;

drop table tipo_usuario;

-------------------
CREATE TABLE agencia_externa (
    id_agencia    INT IDENTITY(1,1) NOT NULL,
    nom_age       NVARCHAR(100) NOT NULL,
    email_age     NVARCHAR(100) NOT NULL,
    tel_age       INT NOT NULL,
    id_com        INT NOT NULL
);

CREATE TABLE articulo (
    id_arti     INT IDENTITY(1,1) NOT NULL,
    nom_arti    NVARCHAR (100) NOT NULL,
    cant_arti   INT,
    deta_arti   NVARCHAR(2000) NOT NULL,
    valor_arti  INT NOT NULL,
    id_dpto     INT NOT NULL
);

CREATE TABLE checkin (
    id_rva     INT NOT NULL,
    deta_chi   NVARCHAR(2000) NOT NULL,
    id_usr     INT NOT NULL
);

CREATE TABLE checkout (
    id_rva       INT NOT NULL,
    cost_multa   INT NOT NULL,
    deta_cho     NVARCHAR(2000) NOT NULL,
    id_usr       INT NOT NULL
);


CREATE TABLE comuna (
    id_com    INT IDENTITY(1,1) NOT NULL,
    nom_com   NVARCHAR(100) NOT NULL,
    id_rgn    INT NOT NULL
);

CREATE TABLE condominio (
    id_cnd        INT IDENTITY(1,1) NOT NULL,
    nom_cnd       NVARCHAR(100) NOT NULL,
    id_com        INT NOT NULL
);

CREATE TABLE cont_serv (
    id_cont_serv       INT IDENTITY(1,1) NOT NULL,
    fec_cont           DATE NOT NULL,
    costo_total        INT NOT NULL,
    deta_cont          NVARCHAR(2000) NOT NULL,
    fec_acord          DATE NOT NULL,
    hora_acord         CHAR (5) NOT NULL, 
    lugar_recogida     NVARCHAR(100),
    lugar_destino      NVARCHAR(100),
    km_rec             DECIMAL(6,3),
    cant_adult         INT,
    cant_nigno         INT,
    cant_3ra           INT,     
    est_cont           NVARCHAR(30),
    id_rva             INT NOT NULL,
    id_serv            INT NOT NULL
);

CREATE TABLE departamento (
    id_dpto           INT IDENTITY(1,1) NOT NULL,
    dir_dpto          NVARCHAR(100) NOT NULL,
    num_dpto          INT NOT NULL,
    n_amb_dpto        INT NOT NULL,
    desc_dpto         NVARCHAR(2000) NOT NULL,
    costo_arri_dpto   INT NOT NULL,
    img_1_dpto        IMAGE NOT NULL,
    img_2_dpto        IMAGE,
    img_3_dpto        IMAGE,
    img_4_dpto        IMAGE,
    img_5_dpto        IMAGE,
    id_cnd            INT NOT NULL
);

CREATE TABLE disponibilidad (
    fec_disp     DATE NOT NULL,
    esta_disp    CHAR(2) DEFAULT 'Si' NOT NULL,
    id_dpto      INT NOT NULL
);

CREATE TABLE gastos (
    id_dpto     INT NOT NULL,
    gast_mes    INT NOT NULL,
    gast_agno   INT NOT NULL
);

CREATE TABLE mantencion (
    id_rmant    INT NOT NULL,
    cost_mant   INT NOT NULL,
    deta_mant   NVARCHAR(2000) NOT NULL    
);

CREATE TABLE pago(
    id_rva           INT NOT NULL,
    monto_total      INT NOT NULL,
    monto_arr        INT NOT NULL,
    abono_req        INT NOT NULL,
    monto_serv_extra INT NOT NULL,
    monto_multas     INT NOT NULL,
    monto_pagado     INT NOT NULL,
    est_pago         NVARCHAR(30) NOT NULL
);

CREATE TABLE region (
    id_rgn  INT IDENTITY(1,1) NOT NULL,
    nom_rgn NVARCHAR(100) NOT NULL
);

CREATE TABLE res_mant (
    id_rmant  INT IDENTITY(1,1) NOT NULL,
    fec_rmant  DATE NOT NULL,
    est_man    NVARCHAR(30) NOT NULL,
    id_dpto    INT NOT NULL,
    id_usr     INT NOT NULL
);

CREATE TABLE reserva (
    id_rva       INT IDENTITY(1,1) NOT NULL,
    fec_ini_rva  DATE NOT NULL,
    fec_fin_rva  DATE NOT NULL,
    num_pers     INT NOT NULL,
    estado_rva   NVARCHAR(30) NOT NULL,
    id_dpto      INT NOT NULL,
    id_usr       INT NOT NULL  
);

CREATE TABLE servextras (
    id_serv        INT IDENTITY(1,1) NOT NULL,
    nom_serv       NVARCHAR(100) NOT NULL,
    tipo_serv      CHAR(1) DEFAULT 'T' NOT NULL,
    desc_serv      NVARCHAR(2000) NOT NULL,
    id_agencia     INT NOT NULL
);

CREATE TABLE tipo_usuario (
    id_tipo_usr INT IDENTITY(1,1) NOT NULL,
    tipo_usr    NVARCHAR(25) DEFAULT 'cliente' NOT NULL
);

CREATE TABLE tour (
    id_serv      INT NOT NULL,
    dur_hra      INT NOT NULL,
    dur_min      INT NOT NULL,
    cost_adult   INT NOT NULL,
    cost_nigno   INT NOT NULL,
    cost_3ra     INT NOT NULL,
    ubi_partida  NVARCHAR(100) NOT NULL,
    ubi_fin      NVARCHAR(100) NOT NULL,
    alimentacion CHAR(2)  NOT NULL,
    transporte   CHAR(2)  NOT NULL
);

CREATE TABLE transporte (
    id_serv       INT NOT NULL,
    cost_km_dia   INT NOT NULL,
    cost_km_noc   INT NOT NULL
);

CREATE TABLE usuario (
    id_usr      INT IDENTITY(1,1) NOT NULL,  
    email_usr   NVARCHAR(100) NOT NULL,
    contr_usr   NVARCHAR(50) NOT NULL,
    nom_usr     NVARCHAR(50) NOT NULL,
    appat_usr   NVARCHAR(50) NOT NULL,
    apmat_usr   NVARCHAR(50) NOT NULL,
    tel_usr     INT NOT NULL,
    rut_usr     INT NOT NULL,
    dv_usr      CHAR(1) NOT NULL,
    cant_res    INT,
    est_cta     NVARCHAR(20),
    tipo_cli    NVARCHAR(25),
    id_tipo_usr INT NOT NULL
);

CREATE TABLE conductor (
    rut_conduc   INT NOT NULL,    
    dv_conduc    CHAR(1) NOT NULL,
    nom_conduc   NVARCHAR(50) NOT NULL,
    appat_conduc NVARCHAR(50) NOT NULL,
    apmat_conduc NVARCHAR(50) NOT NULL,
    email_conduc NVARCHAR(100) NOT NULL,
    tel_conduc   INT NOT NULL,
    patente      CHAR (8) NOT NULL,
    id_serv      INT NOT NULL
);

CREATE TABLE vehiculo (
    patente          CHAR(8) NOT NULL,
    color            NVARCHAR(30) NOT NULL,
    agno             DATE NOT NULL,
    cant_puertas     INT NOT NULL,
    cap_pasaj        INT NOT NULL, 
    cap_male         INT NOT NULL,
    asiento_nigno    CHAR(2) NOT NULL,
    per_silla        CHAR(2) NOT NULL,
    id_modelo        INT NOT NULL    
);

CREATE TABLE modelo (
    id_modelo      INT IDENTITY(1,1) NOT NULL,
    nombre_modelo  NVARCHAR(100) NOT NULL,
    id_marca       INT NOT NULL
);

CREATE TABLE marca (
    id_marca INT IDENTITY(1,1) NOT NULL,
    nombre_marca NVARCHAR (100) NOT NULL
);

ALTER TABLE tipo_usuario ADD CONSTRAINT id_tipo_usr PRIMARY KEY (id_tipo_usr);

ALTER TABLE tipo_usuario ADD CONSTRAINT tipo_usr CHECK ( tipo_usr IN ( 'administrador', 'cliente', 'funcionario' ) );

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( id_usr );

ALTER TABLE usuario ADD CONSTRAINT usuario_tel_usr_un UNIQUE ( tel_usr );

ALTER TABLE usuario ADD CONSTRAINT usuario_email_usr_un UNIQUE ( email_usr );        

ALTER TABLE usuario ADD CONSTRAINT usuario_rut_usr_un UNIQUE ( rut_usr );

ALTER TABLE usuario
    ADD CONSTRAINT dv_usr CHECK ( dv_usr IN ( '0', '1', '2', '3', '4',
                                          '5', '6', '7', '8', '9',
                                          'K', 'k' )
);

ALTER TABLE usuario
    ADD CONSTRAINT est_cta CHECK ( est_cta IN ( 'activa', 'suspendida', 'en verificacion' ) 
);

ALTER TABLE usuario
    ADD CONSTRAINT val_tipo_cli CHECK ( tipo_cli IN ( 'frecuente', 'normal', 'inhabilitado' )
);

ALTER TABLE usuario
    ADD CONSTRAINT tipo_usuario_fk FOREIGN KEY (id_tipo_usr)
	REFERENCES tipo_usuario(id_tipo_usr);

ALTER TABLE region ADD CONSTRAINT region_pk PRIMARY KEY ( id_rgn );

ALTER TABLE comuna ADD CONSTRAINT comuna_pk PRIMARY KEY ( id_com );

ALTER TABLE comuna
    ADD CONSTRAINT comuna_region_fk FOREIGN KEY ( id_rgn )
        REFERENCES region ( id_rgn );

ALTER TABLE condominio ADD CONSTRAINT condominio_pk PRIMARY KEY ( id_cnd );

ALTER TABLE condominio
    ADD CONSTRAINT condominio_comuna_fk FOREIGN KEY ( id_com )
        REFERENCES comuna ( id_com );

ALTER TABLE departamento ADD CONSTRAINT departamento_pk PRIMARY KEY ( id_dpto );

ALTER TABLE departamento
    ADD CONSTRAINT departamento_condominio_fk FOREIGN KEY ( id_cnd )
        REFERENCES condominio ( id_cnd );

ALTER TABLE departamento ADD CONSTRAINT departamento__un UNIQUE ( dir_dpto, num_dpto );    

ALTER TABLE disponibilidad
    ADD CONSTRAINT val_disp CHECK ( esta_disp IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE disponibilidad
    ADD CONSTRAINT disponibilidad_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE disponibilidad ADD CONSTRAINT disponibilidad_pk PRIMARY KEY ( fec_disp , id_dpto );

ALTER TABLE gastos
    ADD CONSTRAINT gastos_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE gastos ADD CONSTRAINT gastos_pk PRIMARY KEY ( id_dpto );

ALTER TABLE articulo ADD CONSTRAINT articulo_pk PRIMARY KEY ( id_arti );

ALTER TABLE articulo
    ADD CONSTRAINT articulo_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE res_mant ADD CONSTRAINT res_mant_pk PRIMARY KEY ( id_rmant );

ALTER TABLE res_mant
    ADD CONSTRAINT res_mant_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE res_mant
    ADD CONSTRAINT res_mant_usuario_fk FOREIGN KEY ( id_usr )
        REFERENCES usuario ( id_usr );

ALTER TABLE res_mant
    ADD CONSTRAINT est_man CHECK ( est_man IN ( 'agendada', 'cancelada', 'realizada', 'en progreso' ) );

ALTER TABLE mantencion
    ADD CONSTRAINT mantencion_res_mant_fk FOREIGN KEY ( id_rmant )
        REFERENCES res_mant ( id_rmant );
        
ALTER TABLE mantencion ADD CONSTRAINT mantencion_pk PRIMARY KEY ( id_rmant );

ALTER TABLE reserva ADD CONSTRAINT reserva_pk PRIMARY KEY ( id_rva );

ALTER TABLE reserva ADD CONSTRAINT estado_rva CHECK ( estado_rva IN ( 'en progreso', 'cancelada', 'reservada', 'terminada', 'en verificación' ) );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_usuario_fk FOREIGN KEY ( id_usr )
        REFERENCES usuario ( id_usr );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE pago
    ADD CONSTRAINT pago_reserva_fk FOREIGN KEY (id_rva)
        REFERENCES reserva (id_rva);

ALTER TABLE pago ADD CONSTRAINT pago_pk PRIMARY KEY (id_rva);

ALTER TABLE pago
    ADD CONSTRAINT est_pago CHECK (est_pago IN ('abonado','abono pendiente','pagado totalmente','pago cancelado', 'pago pendiente'));

ALTER TABLE checkin
    ADD CONSTRAINT checkin_reserva_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva (id_rva);

ALTER Table checkin 
    ADD CONSTRAINT checkin_usuario_fk FOREIGN KEY (id_usr)
        REFERENCES usuario (id_usr);

ALTER TABLE checkin
    ADD CONSTRAINT checkin_pk PRIMARY KEY (id_rva);

ALTER TABLE checkout
    ADD CONSTRAINT checkout_reserva_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva (id_rva);

ALTER TABLE checkout    
    ADD CONSTRAINT checkout_usuario_fk FOREIGN KEY (id_usr)
        REFERENCES usuario (id_usr);

ALTER TABLE checkout
    ADD CONSTRAINT checkout_pk PRIMARY KEY (id_rva);


ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_pk PRIMARY KEY ( id_agencia );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_email_age_un UNIQUE ( email_age );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_tel_age_un UNIQUE ( tel_age );

ALTER TABLE agencia_externa
    ADD CONSTRAINT agencia_comuna_fk FOREIGN KEY ( id_com )
        REFERENCES comuna ( id_com );

ALTER TABLE servextras
    ADD CONSTRAINT val_tipo_serv CHECK ( tipo_serv IN ( 'T', 'V' ) 
);

ALTER TABLE servextras ADD CONSTRAINT servextras_pk PRIMARY KEY ( id_serv );

ALTER TABLE servextras
    ADD CONSTRAINT servextras_agencia_externa_fk FOREIGN KEY ( id_agencia )
        REFERENCES agencia_externa ( id_agencia );


ALTER TABLE tour
    ADD CONSTRAINT val_aliment CHECK ( alimentacion IN ( 'No', 'Si', 'no', 'si' )
);

ALTER TABLE tour
    ADD CONSTRAINT val_trans CHECK ( transporte IN ( 'No', 'Si', 'no', 'si' )
);

ALTER TABLE tour
    ADD CONSTRAINT tour_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE tour ADD CONSTRAINT tour_pk PRIMARY KEY ( id_serv );

ALTER TABLE transporte ADD CONSTRAINT transporte_pk PRIMARY KEY ( id_serv );

ALTER TABLE transporte
    ADD CONSTRAINT transporte_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE marca ADD CONSTRAINT marca_pk PRIMARY KEY (id_marca);

ALTER TABLE modelo ADD CONSTRAINT modelo_pk PRIMARY KEY (id_modelo);

ALTER TABLE modelo ADD CONSTRAINT modelo_marca_fk FOREIGN KEY (id_marca)
                        REFERENCES marca ( id_marca);

ALTER TABLE vehiculo
    ADD CONSTRAINT valor_asiento CHECK ( asiento_nigno IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE vehiculo
    ADD CHECK ( per_silla IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_pk PRIMARY KEY (patente);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_modelo_fk FOREIGN KEY (id_modelo)
                        REFERENCES modelo ( id_modelo);

ALTER TABLE conductor ADD CONSTRAINT conductor_pk PRIMARY KEY (rut_conduc);

ALTER TABLE conductor
    ADD CONSTRAINT dv_conduc CHECK ( dv_conduc IN ( '0', '1', '2', '3', '4',
                                          '5', '6', '7', '8', '9',
                                          'K', 'k' )
);

ALTER TABLE conductor ADD CONSTRAINT conductor_email_un UNIQUE (email_conduc);

ALTER TABLE conductor ADD CONSTRAINT conductor_tel_conduc_un UNIQUE (tel_conduc);

ALTER TABLE conductor ADD CONSTRAINT conductor_vehiculo_fk FOREIGN KEY (patente)
                        REFERENCES vehiculo (patente);

ALTER TABLE conductor ADD CONSTRAINT conductor_transporte_fk FOREIGN KEY (id_serv)
                    REFERENCES transporte ( id_serv );


ALTER TABLE cont_serv 
    ADD CONSTRAINT est_cont CHECK (est_cont IN ('cancelado','reservado','realizado')
);

ALTER TABLE cont_serv ADD CONSTRAINT cont_serv_pk PRIMARY KEY ( id_cont_serv );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_reserva_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva ( id_rva );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

commit transaction createDataBase