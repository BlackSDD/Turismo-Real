-- Script para crear las tablas -- 

CREATE TABLE agencia_externa (
    id_agencia    NUMBER(10) NOT NULL,
    nom_age       NVARCHAR2(100) NOT NULL,
    email_age     NVARCHAR2(100) NOT NULL,
    tel_age       NUMBER(9) NOT NULL,
    comuna_id_com NUMBER(4) NOT NULL
);

CREATE TABLE articulo (
    id_arti              NUMBER(10) NOT NULL,
    nom_arti             NVARCHAR2(100) NOT NULL,
    cant_arti            NUMBER(2),
    deta_arti            NVARCHAR2(2000) NOT NULL,
    valor_arti           NUMBER(8) NOT NULL,
    departamento_id_dpto NUMBER(10) NOT NULL
);

CREATE TABLE checkin (
    reserva_id_rva     NUMBER(10) NOT NULL,
    deta_chi NVARCHAR2(2000) NOT NULL
);

CREATE TABLE checkout (
    reserva_id_rva     NUMBER(10) NOT NULL,
    cost_multa NUMBER(8),
    deta_cho   NVARCHAR2(2000)
);

CREATE TABLE cliente (
    rut_cli   NUMBER(8) NOT NULL,
    dv_cli    CHAR(1) NOT NULL,
    nom_cli   NVARCHAR2(50) NOT NULL,
    appat_cli NVARCHAR2(50) NOT NULL,
    apmat_cli NVARCHAR2(50) NOT NULL,
    email_cli NVARCHAR2(100) NOT NULL,
    tel_cli   NUMBER(9) NOT NULL,
    tipo_cli  NVARCHAR2(20) DEFAULT 'normal' NOT NULL,
    cant_res  NUMBER(4) NOT NULL,
    estado_cta NVARCHAR2(25) NOT NULL
);

CREATE TABLE comuna (
    id_com        NUMBER(4) NOT NULL,
    nom_com       NVARCHAR2(100) NOT NULL,
    region_id_rgn NUMBER(2) NOT NULL
);


CREATE TABLE condominio (
    id_cnd        NUMBER(4) NOT NULL,
    nom_cnd       NVARCHAR2(100) NOT NULL,
    comuna_id_com NUMBER(4) NOT NULL
);

CREATE TABLE cont_serv (
    id_cont_serv       NUMBER(10) NOT NULL,
    fec_cont           DATE NOT NULL,
    costo_total        NUMBER(7) NOT NULL,
    descripcion        NVARCHAR2(2000) NOT NULL,
    fec_acord          DATE NOT NULL,
    lugar_recogida     NVARCHAR2(100),
    lugar_destino      NVARCHAR2(100),
    km_rec             NUMBER(6,3),
    reserva_id_rva     NUMBER(10) NOT NULL,
    servextras_id_serv NUMBER(10) NOT NULL
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
    condominio_id_cnd NUMBER(4) NOT NULL
);

CREATE TABLE disponibilidad (
    fec_disp             DATE NOT NULL,
    esta_disp            CHAR(2) DEFAULT 'Si' NOT NULL,
    departamento_id_dpto NUMBER(10) NOT NULL
);

CREATE TABLE gastos (
    id_gastos            NUMBER(10) NOT NULL,
    gast_mes             NUMBER(10) NOT NULL,
    gast_agno            NUMBER(10) NOT NULL,
    departamento_id_dpto NUMBER(10) NOT NULL
);

CREATE TABLE mantencion (
    id_mant           NUMBER(10) NOT NULL,
    cost_mant         NUMBER(8) NOT NULL,
    deta_mant         NVARCHAR2(2000) NOT NULL,
    res_mant_id_rmant NUMBER(10) NOT NULL
);

CREATE TABLE region (
    id_rgn  NUMBER(2) NOT NULL,
    nom_rgn NVARCHAR2(100) NOT NULL
);

CREATE TABLE res_mant (
    id_rmant             NUMBER(10) NOT NULL,
    fec_rmant            DATE NOT NULL,
    departamento_id_dpto NUMBER(10) NOT NULL
);

CREATE TABLE reserva (
    id_rva               NUMBER(10) NOT NULL,
    cliente_rut_cli      NUMBER(8) NOT NULL,
    departamento_id_dpto NUMBER(10) NOT NULL,
    fec_ini_rva          DATE NOT NULL,
    fec_fin_rva          DATE NOT NULL,
    num_pers             NUMBER(2) NOT NULL,
    estado_rva           NVARCHAR2(25)  DEFAULT 'En progreso' NOT NULL
);

CREATE TABLE servextras (
    id_serv                    NUMBER(10) NOT NULL,
    nom_serv                   NVARCHAR2(100) NOT NULL,
    tipo_serv                  CHAR(1) DEFAULT 'T' NOT NULL,
    desc_serv                  NVARCHAR2(2000) NOT NULL,
    agencia_externa_id_agencia NUMBER(10) NOT NULL
);

CREATE TABLE tour (
    id_serv      NUMBER(10) NOT NULL,
    dur_hra      NUMBER(2) NOT NULL,
    dur_min      NUMBER(2) NOT NULL,
    cost_adult   NUMBER(6) NOT NULL,
    cost_nigno  NUMBER(6) NOT NULL,
    cost_3ra    NUMBER(6) NOT NULL,
    ubi_partida  NVARCHAR2(100) NOT NULL,
    ubi_fin      NVARCHAR2(100) NOT NULL,
    alimentacion CHAR(2) DEFAULT 'No' NOT NULL,
    transporte CHAR(2) DEFAULT 'No' NOT NULL
);

CREATE TABLE transporte (
    id_serv       NUMBER(10) NOT NULL,
    cost_km_dia   NUMBER(5) NOT NULL,
    cost_km_noc   NUMBER(5) NOT NULL,
    extra_fest  NUMBER(5) NOT NULL
);

CREATE TABLE usuario (
    email_usr NVARCHAR2(100) NOT NULL,
    contr_usr NVARCHAR2(50) NOT NULL,
    nom_usr   NVARCHAR2(50) NOT NULL,
    appat_usr NVARCHAR2(50) NOT NULL,
    apmat_usr NVARCHAR2(50) NOT NULL,
    tel_usr   NUMBER(9) NOT NULL,
    tipo_usr  NVARCHAR2(20) DEFAULT 'cliente' NOT NULL
);

--Nuevas tablas segun acordado para visualizar documento de acuerdo de transporte --
CREATE TABLE conductor (
    rut_conduc  NUMBER(8) NOT NULL,    
    dv_conduc   CHAR(1) NOT NULL,
    nom_conduc   NVARCHAR2(50) NOT NULL,
    appat_conduc NVARCHAR2(50) NOT NULL,
    apmat_conduc NVARCHAR2(50) NOT NULL,
    email_conduc NVARCHAR2(100) NOT NULL,
    tel_conduc   NUMBER(9) NOT NULL,
    vehiculo_patente CHAR (8) NOT NULL,
    transporte_id_serv NUMBER(10) NOT NULL
);

CREATE TABLE vehiculo (
    patente CHAR(8) NOT NULL,
    color NVARCHAR2(30) NOT NULL,
    agno DATE NOT NULL,
    cant_puertas NUMBER(1) NOT NULL,
    cap_pasaj NUMBER(2) NOT NULL, 
    cap_male NUMBER (4) NOT NULL,
    asiento_nigno CHAR(2) NOT NULL,
    per_silla     CHAR(2) NOT NULL,
    modelo_id_modelo NUMBER(4) NOT NULL    
);

CREATE TABLE modelo (
    id_modelo NUMBER(4) NOT NULL,
    nombre_modelo NVARCHAR2(100) NOT NULL,
    marca_id_marca NUMBER(3) NOT NULL
);

CREATE TABLE marca (
    id_marca NUMBER (3) NOT NULL,
    nombre_marca NVARCHAR2 (100) NOT NULL
);

-- Se modifican las tablas para agregar constraints --

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_pk PRIMARY KEY ( id_agencia );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_email_age_un UNIQUE ( email_age );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_tel_age_un UNIQUE ( tel_age );

ALTER TABLE articulo ADD CONSTRAINT articulo_pk PRIMARY KEY ( id_arti );

ALTER TABLE cliente
    ADD CONSTRAINT dv CHECK ( dv_cli IN ( '0', '1', '2', '3', '4',
                                          '5', '6', '7', '8', '9',
                                          'K', 'k' )
);

ALTER TABLE cliente
    ADD CONSTRAINT val_tipo_cli CHECK ( tipo_cli IN ( 'frecuente', 'normal' )
);

ALTER TABLE cliente ADD CONSTRAINT cliente_pk PRIMARY KEY ( rut_cli );

ALTER TABLE cliente ADD CONSTRAINT cliente_email_cli_un UNIQUE ( email_cli );

ALTER TABLE cliente ADD CONSTRAINT cliente_tel_cli_un UNIQUE ( tel_cli );

ALTER TABLE cliente
    ADD CONSTRAINT estado_cta CHECK ( estado_cta IN ( 'activa', 'suspendida', 'en verificacion' ) 
);

ALTER TABLE comuna ADD CONSTRAINT comuna_pk PRIMARY KEY ( id_com );

ALTER TABLE condominio ADD CONSTRAINT condominio_pk PRIMARY KEY ( id_cnd );

ALTER TABLE cont_serv ADD CONSTRAINT cont_serv_pk PRIMARY KEY ( id_cont_serv );

ALTER TABLE departamento ADD CONSTRAINT departamento_pk PRIMARY KEY ( id_dpto );

ALTER TABLE disponibilidad
    ADD CONSTRAINT val_disp CHECK ( esta_disp IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE gastos ADD CONSTRAINT gastos_pk PRIMARY KEY ( id_gastos );

ALTER TABLE mantencion ADD CONSTRAINT mantencion_pk PRIMARY KEY ( id_mant );

ALTER TABLE region ADD CONSTRAINT region_pk PRIMARY KEY ( id_rgn );

ALTER TABLE res_mant ADD CONSTRAINT res_mant_pk PRIMARY KEY ( id_rmant );

ALTER TABLE reserva ADD CONSTRAINT reserva_pk PRIMARY KEY ( id_rva );

ALTER TABLE servextras
    ADD CONSTRAINT val_tipo_serv CHECK ( tipo_serv IN ( 'T', 'V' ) 
);

ALTER TABLE servextras ADD CONSTRAINT servextras_pk PRIMARY KEY ( id_serv );

ALTER TABLE tour
    ADD CONSTRAINT val_aliment CHECK ( alimentacion IN ( 'No', 'Si', 'no', 'si' )
);

ALTER TABLE tour
    ADD CONSTRAINT val_trans CHECK ( transporte IN ( 'No', 'Si', 'no', 'si' )
);

ALTER TABLE tour ADD CONSTRAINT tour_pk PRIMARY KEY ( id_serv );

ALTER TABLE vehiculo
    ADD CONSTRAINT valor_asiento CHECK ( asiento_nigno IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE vehiculo
    ADD CHECK ( per_silla IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE transporte ADD CONSTRAINT transporte_pk PRIMARY KEY ( id_serv );

ALTER TABLE usuario ADD CONSTRAINT tipo_usr CHECK ( tipo_usr IN ( 'administrador', 'cliente', 'funcionario' ) );

ALTER TABLE reserva ADD CONSTRAINT estado CHECK ( estado_rva IN ( 'en progreso', 'cancelada', 'reservada', 'terminada' ) );

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( email_usr );

ALTER TABLE usuario ADD CONSTRAINT usuario_tel_usr_un UNIQUE ( tel_usr );

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_pk PRIMARY KEY (patente);

ALTER TABLE conductor ADD CONSTRAINT conductor_pk PRIMARY KEY (rut_conduc);

ALTER TABLE conductor
    ADD CONSTRAINT dv_conduc CHECK ( dv_conduc IN ( '0', '1', '2', '3', '4',
                                          '5', '6', '7', '8', '9',
                                          'K', 'k' )
);

ALTER TABLE conductor ADD CONSTRAINT conductor_email_un UNIQUE (email_conduc);

ALTER TABLE conductor ADD CONSTRAINT conductor_tel_conduc_un UNIQUE (tel_conduc);

ALTER TABLE marca ADD CONSTRAINT marca_pk PRIMARY KEY (id_marca);

ALTER TABLE modelo ADD CONSTRAINT modelo_pk PRIMARY KEY (id_modelo);

ALTER TABLE conductor ADD CONSTRAINT conductor_vehiculo_fk FOREIGN KEY (vehiculo_patente)
                        REFERENCES vehiculo (patente);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_modelo_fk FOREIGN KEY (modelo_id_modelo)
                        REFERENCES modelo ( id_modelo);

ALTER TABLE modelo ADD CONSTRAINT modelo_marca_fk FOREIGN KEY (marca_id_marca)
                        REFERENCES marca ( id_marca);

ALTER TABLE conductor ADD CONSTRAINT conductor_transporte_fk FOREIGN KEY (transporte_id_serv)
                    REFERENCES transporte ( id_serv );

ALTER TABLE agencia_externa
    ADD CONSTRAINT agencia_externa_comuna_fk FOREIGN KEY ( comuna_id_com )
        REFERENCES comuna ( id_com );

ALTER TABLE articulo
    ADD CONSTRAINT articulo_departamento_fk FOREIGN KEY ( departamento_id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE comuna
    ADD CONSTRAINT comuna_region_fk FOREIGN KEY ( region_id_rgn )
        REFERENCES region ( id_rgn );

ALTER TABLE condominio
    ADD CONSTRAINT condominio_comuna_fk FOREIGN KEY ( comuna_id_com )
        REFERENCES comuna ( id_com );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_reserva_fk FOREIGN KEY ( reserva_id_rva )
        REFERENCES reserva ( id_rva );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_servextras_fk FOREIGN KEY ( servextras_id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE departamento
    ADD CONSTRAINT departamento_condominio_fk FOREIGN KEY ( condominio_id_cnd )
        REFERENCES condominio ( id_cnd );

ALTER TABLE disponibilidad
    ADD CONSTRAINT disponibilidad_departamento_fk FOREIGN KEY ( departamento_id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE disponibilidad ADD CONSTRAINT disponibilidad_pk PRIMARY KEY ( fec_disp , departamento_id_dpto );

ALTER TABLE gastos
    ADD CONSTRAINT gastos_departamento_fk FOREIGN KEY ( departamento_id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE mantencion
    ADD CONSTRAINT mantencion_res_mant_fk FOREIGN KEY ( res_mant_id_rmant )
        REFERENCES res_mant ( id_rmant );

ALTER TABLE res_mant
    ADD CONSTRAINT res_mant_departamento_fk FOREIGN KEY ( departamento_id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_cliente_fk FOREIGN KEY ( cliente_rut_cli )
        REFERENCES cliente ( rut_cli );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_departamento_fk FOREIGN KEY ( departamento_id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE servextras
    ADD CONSTRAINT servextras_agencia_externa_fk FOREIGN KEY ( agencia_externa_id_agencia )
        REFERENCES agencia_externa ( id_agencia );

ALTER TABLE tour
    ADD CONSTRAINT tour_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE transporte
    ADD CONSTRAINT transporte_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE checkin
    ADD CONSTRAINT reserva_checkin_fk FOREIGN KEY ( reserva_id_rva )
        REFERENCES reserva (id_rva);

ALTER TABLE checkout
    ADD CONSTRAINT reserva_checkout_fk FOREIGN KEY ( reserva_id_rva )
        REFERENCES reserva (id_rva);

ALTER TABLE checkin
    ADD CONSTRAINT checkin_pk PRIMARY KEY (reserva_id_rva);

ALTER TABLE checkout
    ADD CONSTRAINT checkout_pk PRIMARY KEY (reserva_id_rva);



commit;
