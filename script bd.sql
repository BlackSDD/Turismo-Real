-- Drop de as tablas--

DROP TABLE agencia_externa CASCADE CONSTRAINTS;

DROP TABLE articulo CASCADE CONSTRAINTS;

DROP TABLE checkin CASCADE CONSTRAINTS;

DROP TABLE checkout CASCADE CONSTRAINTS;

DROP TABLE comuna CASCADE CONSTRAINTS;

DROP TABLE condominio CASCADE CONSTRAINTS;

DROP TABLE conductor CASCADE CONSTRAINTS;

DROP TABLE cont_serv CASCADE CONSTRAINTS;

DROP TABLE departamento CASCADE CONSTRAINTS;

DROP TABLE disponibilidad CASCADE CONSTRAINTS;

DROP TABLE gastos CASCADE CONSTRAINTS;

DROP TABLE mantencion CASCADE CONSTRAINTS;

DROP TABLE marca CASCADE CONSTRAINTS;

DROP TABLE modelo CASCADE CONSTRAINTS;

DROP TABLE pago CASCADE CONSTRAINTS;

DROP TABLE region CASCADE CONSTRAINTS;

DROP TABLE res_mant CASCADE CONSTRAINTS;

DROP TABLE reserva CASCADE CONSTRAINTS;

DROP TABLE servextras CASCADE CONSTRAINTS;

DROP TABLE tour CASCADE CONSTRAINTS;

DROP TABLE tipo_usuario CASCADE CONSTRAINTS;

DROP TABLE transporte CASCADE CONSTRAINTS;

DROP TABLE usuario CASCADE CONSTRAINTS;

DROP TABLE vehiculo CASCADE CONSTRAINTS;

-- Drop sequences
DROP SEQUENCE seq_agencia_externa;
DROP SEQUENCE seq_articulo;
DROP SEQUENCE seq_comuna;
DROP SEQUENCE seq_condominio;
DROP SEQUENCE seq_cont_serv;
DROP SEQUENCE seq_departamento;
DROP SEQUENCE seq_gastos;
DROP SEQUENCE seq_mantencion;
DROP SEQUENCE seq_marca;
DROP SEQUENCE seq_modelo;
DROP SEQUENCE seq_region;
DROP SEQUENCE seq_res_mant;
DROP SEQUENCE seq_reserva;
DROP SEQUENCE seq_servextras;
DROP SEQUENCE seq_tour;
DROP SEQUENCE seq_transporte;
DROP SEQUENCE seq_usuario;

--Create a new Sequence

CREATE SEQUENCE seq_agencia_externa
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_articulo
    START WITH 1
    INCREMENT by 1
    NOCYCLE;


CREATE SEQUENCE seq_comuna
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_condominio
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_cont_serv
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_departamento
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_gastos
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_mantencion
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_marca
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_modelo
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_region
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_res_mant
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_reserva
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_servextras
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_tour
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_transporte
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_usuario
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

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
    hora_acord         CHAR (5) NOT NULL, 
    lugar_recogida     NVARCHAR2(100),
    lugar_destino      NVARCHAR2(100),
    km_rec             NUMBER(6,3),
    est_cont           NVARCHAR2(25),
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
    id_rva           NUMBER(10) NOT NULL,
    monto_total      NUMBER(8) NOT NULL,
    monto_arr        NUMBER(8) NOT NULL,
    abono_req        NUMBER(8) NOT NULL,
    monto_serv_extra NUMBER(8) NOT NULL,
    monto_multas     NUMBER(8) NOT NULL,
    monto_pagado     NUMBER(8) NOT NULL,
    est_pago         NVARCHAR2(30) NOT NULL
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
    estado_rva   NVARCHAR2(30) NOT NULL,
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
    ADD CONSTRAINT val_tipo_cli CHECK ( tipo_cli IN ( 'frecuente', 'normal' )
);

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

ALTER TABLE disponibilidad
    ADD CONSTRAINT val_disp CHECK ( esta_disp IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE disponibilidad
    ADD CONSTRAINT disponibilidad_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE disponibilidad ADD CONSTRAINT disponibilidad_pk PRIMARY KEY ( fec_disp , id_dpto );

ALTER TABLE gastos ADD CONSTRAINT gastos_pk PRIMARY KEY ( id_gastos );

ALTER TABLE gastos
    ADD CONSTRAINT gastos_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

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

ALTER TABLE mantencion ADD CONSTRAINT mantencion_pk PRIMARY KEY ( id_mant );

ALTER TABLE mantencion
    ADD CONSTRAINT mantencion_res_mant_fk FOREIGN KEY ( id_rmant )
        REFERENCES res_mant ( id_rmant );

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
    ADD CONSTRAINT est_pago CHECK (est_pago IN ('abonado','abono pendiente','pagado totalmente','pago cancelado'));

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
        

-- Deben hacerse por separado

-- Triggers para hacer la relacion de supertipo -- 


CREATE OR REPLACE TRIGGER arc_transporte BEFORE
    INSERT OR UPDATE OF id_serv ON transporte
    FOR EACH ROW
DECLARE
    d CHAR(1);
BEGIN
    SELECT
        a.tipo_serv
    INTO d
    FROM
        servextras a
    WHERE
        a.id_serv = :new.id_serv;

    IF ( d IS NULL OR d <> 'V' ) THEN
        raise_application_error(-20223,
                               'FK transporte_servextras_FK in Table transporte violates Arc constraint on Table servextras - discriminator column tipo_serv doesn''t have value ''V''');
    END IF;

EXCEPTION
    WHEN no_data_found THEN
        NULL;
    WHEN OTHERS THEN
        RAISE;
END;
/

CREATE OR REPLACE TRIGGER arc_tour BEFORE
    INSERT OR UPDATE OF id_serv ON tour
    FOR EACH ROW
DECLARE
    d CHAR(1);
BEGIN
    SELECT
        a.tipo_serv
    INTO d
    FROM
        servextras a
    WHERE
        a.id_serv = :new.id_serv;

    IF ( d IS NULL OR d <> 'T' ) THEN
        raise_application_error(-20223,
                               'FK tour_servextras_FK in Table tour violates Arc constraint on Table servextras - discriminator column tipo_serv doesn''t have value ''T''');
    END IF;

EXCEPTION
    WHEN no_data_found THEN
        NULL;
    WHEN OTHERS THEN
        RAISE;
END;
/

--Trigger y procedimiento para poder insertar 10 años de fechas al registrar un departamento
create or replace procedure pd_insert_fechas( v_id_depto in departamento.id_dpto%type )
is
    v_fecha date := to_date(sysdate);
begin
    for i in 0..3652 loop
        insert into disponibilidad values (v_fecha,'Si',v_id_depto);   
        v_fecha := to_date( v_fecha + 1 );
    end loop;
end pd_insert_fechas;
/


create or replace trigger tr_insert_fechas 
    after insert on departamento
    for each row
begin
 pd_insert_fechas(:new.id_dpto);
end tr_insert_fechas;
/

-- Trigger que se ejecuta cuando se inserta o modifica una reserva
-- De acuerdo al estado se cambia la fecha de disponibilidad del departamento
create or replace trigger tr_reserva_fechas 
    after insert or update on reserva 
    for each row
declare
 v_ini date;
 v_fin date;
 day date;
begin
    v_ini := TO_DATE(:new.fec_ini_rva);
    v_fin := TO_DATE(:new.fec_fin_rva);
    day := v_ini;
if inserting then
    WHILE day <= v_fin
    LOOP 
           update disponibilidad set
                esta_disp = 'No'
                where fec_disp = to_date(day) and 
                id_dpto = :new.id_dpto;
           day := day + 1;
    END LOOP;
elsif updating then
    
    if :new.estado_rva in ('terminada' , 'cancelada') then
        WHILE day <= v_fin
        LOOP 
               update disponibilidad set
                    esta_disp = 'Si'
                    where fec_disp = to_date(day) and 
                    id_dpto = :new.id_dpto;
               day := day + 1;
        END LOOP;    
    end if;
end if;    
end;
/

-- trigger para modificar el estado de la reserva 
create or replace trigger tr_checkin_rva 
    after insert on checkin
    for each row
begin
    update reserva set
        estado_rva = 'en progreso'
        where id_rva = :new.id_rva;
end tr_checkin_rva;
/

--trigger que cambia el estado de la reserva y añade el precio de la multa al pago
create or replace trigger tr_checkout_rva 
    after insert on checkout
    for each row
begin
    update reserva set
        estado_rva = 'terminada'
        where id_rva = :new.id_rva;
        
    update pago set
        monto_total = monto_total + :new.cost_multa,
        monto_multas = monto_multas + :new.cost_multa
        where id_rva = :new.id_rva;
end tr_checkout_rva;
/

create or replace trigger tr_add_costo_extra
    after insert on cont_serv
    for each row
begin
    update pago set 
        monto_total = monto_total + :new.costo_total,
        monto_serv_extra = monto_serv_extra + :new.costo_total
    where id_rva = :new.id_rva;
end tr_add_costo_extra;
/

create or replace trigger tr_abono_reserva
    for insert on reserva compound trigger
    v_arriendo number;
    v_id number;    
after each row is
begin
    v_id := :new.id_rva;
end after each row;
after statement is
begin 
    v_arriendo := fn_arriendo(v_id);
    insert into pago values (v_id,v_arriendo,v_arriendo,v_arriendo*0.1,0,0,0,'abono pendiente');
end after statement;
end tr_abono_reserva;
/

create or replace function fn_arriendo( v_id_rva in reserva.id_rva%type) return number
is
    v_arriendo number;
begin
    select ((r.fec_fin_rva - r.fec_ini_rva) * d.costo_arri_dpto)
        into v_arriendo
        from reserva r join departamento d
        on r.id_dpto = d.id_dpto
        where r.id_rva = v_id_rva;    
        return v_arriendo;
exception when no_data_found then
    v_arriendo := 0;
    return v_arriendo;
end fn_arriendo;
/

create or replace function fn_servicios( v_id_rva in reserva.id_rva%type) return number
is
    v_servicio number;
begin
    select sum(c.costo_total)
    into v_servicio
    from reserva r join cont_serv c on r.id_rva = c.id_rva
    group by c.id_rva
    having c.id_rva = v_id_rva;
    return v_servicio;
exception when no_data_found then
    v_servicio := 0;
    return v_servicio;
end fn_servicios;
/

create or replace function fn_multa( v_id_rva in reserva.id_rva%type) return number
is
    v_multa number;
begin
    select cost_multa
    into v_multa
    from checkout
    where id_rva = v_id_rva;
    return v_multa;
exception when no_data_found then
    v_multa := 0;
    return v_multa;
end fn_multa;
/

create or replace trigger tr_estado_pago
for update of monto_pagado on pago compound trigger 
    v_pago number;
    v_id number;
    v_abono number;    
    v_total number;
after each row is
begin
    v_id := :old.id_rva;
    v_pago := :new.monto_pagado;
    v_abono := :old.abono_req;
    v_total := :old.monto_total;
end after each row;
after statement is
begin
    if v_pago >= v_abono and v_pago < v_total then
        update pago set
            est_pago = 'abonado'
            where id_rva = v_id;
    elsif v_pago = v_total then
        update pago set
            est_pago = 'pagado totalmente'
            where id_rva = v_id;    
    end if;
end after statement;
end tr_estado_pago;
/

commit;







