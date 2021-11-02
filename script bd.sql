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
    est_cont           NVARCHAR2(30),
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
    id_dpto     NUMBER(10) NOT NULL,
    gast_mes    NUMBER(10) NOT NULL,
    gast_agno   NUMBER(10) NOT NULL
);

CREATE TABLE mantencion (
    id_rmant    NUMBER(10) NOT NULL,
    cost_mant   NUMBER(8) NOT NULL,
    deta_mant   NVARCHAR2(2000) NOT NULL    
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
    est_man    NVARCHAR2(30) NOT NULL,
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
    cost_km_noc   NUMBER(5) NOT NULL
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
    ADD CONSTRAINT val_tipo_cli CHECK ( tipo_cli IN ( 'frecuente', 'normal', 'inhabilitado' )
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
END arc_transporte;
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
END arc_tour;
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
    update usuario set
            cant_res = cant_res + 1
            where id_usr = :new.id_usr;
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
    if :new.estado_rva = 'cancelada' then
        update usuario set
            cant_res = cant_res -1
            where id_usr = :new.id_usr;
        update pago set
            est_pago = 'pago cancelado'
            where id_rva = :new.id_rva;
    end if;
end if;    
end;
/


create or replace trigger tr_checkin_rva 
    after insert on checkin
    for each row
begin
    update reserva set
        estado_rva = 'en progreso'
        where id_rva = :new.id_rva;
end tr_checkin_rva;
/

create or replace trigger tr_checkout_rva 
    after insert on checkout
    for each row
begin
    update reserva set
        estado_rva = 'terminada'
        where id_rva = :new.id_rva;
        
    update pago set
        monto_total = monto_total + :new.cost_multa,
        monto_multas = monto_multas + :new.cost_multa,
        est_pago = 'abonado'
        where id_rva = :new.id_rva;
end tr_checkout_rva;
/


-- funciones para calcular valor arriendo, costos de servicios y multas
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


-- trigger para cargar el abono en la tabla pago al momento de generar una reserva
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


--trigger para sumar los costos extra por cada servicio que se adquiera
create or replace trigger tr_add_costo_extra
    after insert or update on cont_serv
    for each row
begin
if inserting then
    update pago set 
        monto_total = monto_total + :new.costo_total,
        monto_serv_extra = monto_serv_extra + :new.costo_total,
        est_pago = 'abonado'
    where id_rva = :new.id_rva;
elsif updating then
     update pago set 
        monto_total = monto_total - :old.costo_total,
        monto_serv_extra = monto_serv_extra - :old.costo_total
    where id_rva = :new.id_rva;
end if;
end tr_add_costo_extra;
/


-- Calcula el monto a pagar por webpay
create or replace function fn_monto_pago (v_id_rva reserva.id_rva%type)return number
as
 v_monto number;
begin
    select monto_total - monto_pagado
        into v_monto
        from pago
        where id_rva = v_id_rva;
return v_monto;
end fn_monto_pago;
/


-- trigger para modificar el estado de un pago segun la cantidad 
--que se pague hasta el momento
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
        update reserva set
            estado_rva = 'reservada'
            where id_rva = v_id;
    elsif v_pago < v_abono then
        update pago set
            est_pago = 'abono pendiente'
            where id_rva = v_id;
    elsif v_pago = v_total then
        update pago set
            est_pago = 'pagado totalmente'
            where id_rva = v_id;    
    end if;
end after statement;
end tr_estado_pago;
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

create or replace trigger tr_mantencion
after insert or update on res_mant
for each row 
begin
    if inserting then
        update disponibilidad set 
            esta_disp = 'No'
            where id_dpto = :new.id_dpto and fec_disp = :new.fec_rmant;
    elsif updating then
        if :new.est_man in ('cancelada','realizada') then
            update disponibilidad set 
                esta_disp = 'Si'
                where id_dpto = :new.id_dpto and fec_disp = :old.fec_rmant;
        elsif :old.fec_rmant != :new.fec_rmant then
            update disponibilidad set 
                    esta_disp = 'No'
                    where id_dpto = :new.id_dpto and fec_disp = :new.fec_rmant;
            update disponibilidad set 
                esta_disp = 'Si'
                where id_dpto = :new.id_dpto and fec_disp = :old.fec_rmant;
        end if;
    end if;
end tr_mantencion;
/

create or replace trigger tr_ingreso_mantencion
after insert on mantencion
for each row
begin
    update res_mant set
        est_man = 'realizada'
    where id_rmant = :new.id_rmant;
end tr_ingreso_mantencion;
/

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

create or replace function fn_costo_tour (c_adult number , c_ninos number, c_3ra number ,v_id_serv number)
return number
as 
    v_costo number;
    p_adult number;
    p_nino number;
    p_3ra number;
begin
    select cost_adult, cost_nigno, cost_3ra
        into p_adult, p_nino, p_3ra
        from tour
        where id_serv = v_id_serv;
    v_costo := (p_adult * c_adult) + (p_nino * c_ninos) + (p_3ra * c_3ra);
return v_costo;
end fn_costo_tour;
/


create or replace function fn_costo_transporte (v_id_serv number, v_hora char , v_km_rec number)
return number
as
    v_costo number;
    v_km number;
begin
    if to_number(substr(v_hora,0,2)) < 19 then
        select cost_km_dia
            into v_km
            from transporte 
            where id_serv = v_id_serv;
    elsif to_number(substr(v_hora,0,2)) >= 19 then
        select cost_km_noc
            into v_km
            from transporte
            where id_serv = v_id_serv;
    end if;
    v_costo := v_km_rec * v_km;
return v_costo;
end fn_costo_transporte;
/

create or replace procedure sp_agregarContServ
(
	v_deta_cont NVARCHAR2,
	v_fec_acord date,
    v_hora_acord char,
	v_lugar_recogida NVARCHAR2,
	v_lugar_destino NVARCHAR2,
	v_km_rec nvarchar2,
    v_id_rva number,
    v_id_serv number,
    v_cant_adult number,
    v_cant_nino number,
    v_cant_3ra number
)
as  
    v_fec_cont date := sysdate;
    v_costo_total number;
    v_tipo char(1);
    v_rec number;
begin
    v_rec := to_number(v_km_rec);

    select tipo_serv
        into v_tipo
    from servextras
    where id_serv = v_id_serv;
    
    if v_tipo = 'T' then
        v_costo_total := fn_costo_tour(v_cant_adult, v_cant_nino, v_cant_3ra, v_id_serv);
        
    elsif v_tipo = 'V' then
        v_costo_total := fn_costo_transporte(v_id_serv, v_hora_acord,v_rec);
    end if;
    
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
    'reservado',
    v_id_rva,
    v_id_serv
	);
    commit;
end;
/






create or replace procedure sp_eliminarContServ
(
	v_id_cont_serv number
)
as
begin
	update cont_serv set 
    deta_cont = 'Se canceló la reserva del servicio',
    est_cont = 'cancelado',
    km_rec = 0,
    lugar_recogida = ' ',
    lugar_destino = ' ',
    hora_acord = ' ' ,
    costo_total = 0
	where id_cont_serv = v_id_cont_serv;
	commit;
end;
/


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

----

commit;









