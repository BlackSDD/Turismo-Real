-- Drop sequences

DROP SEQUENCE seq_agencia_externa;
DROP SEQUENCE seq_articulo;
DROP SEQUENCE seq_checkin;
DROP SEQUENCE seq_checkout;
DROP SEQUENCE seq_comuna;
DROP SEQUENCE seq_condominio;
DROP SEQUENCE seq_cont_serv;
DROP SEQUENCE seq_departamento;
DROP SEQUENCE seq_gastos;
DROP SEQUENCE seq_mantencion;
DROP SEQUENCE seq_marca;
DROP SEQUENCE seq_region;
DROP SEQUENCE seq_res_mant;
DROP SEQUENCE seq_reserva;
DROP SEQUENCE seq_servextras;
DROP SEQUENCE seq_tour;
DROP SEQUENCE seq_transporte;

--Create a new Sequence

CREATE SEQUENCE seq_agencia_externa
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_articulo
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_checkin
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

CREATE SEQUENCE seq_checkout
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

CREATE SEQUENCE seq_tranpsorte
    START WITH 1
    INCREMENT by 1
    NOCYCLE;

