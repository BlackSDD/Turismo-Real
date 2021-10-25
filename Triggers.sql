-- Triggers para hacer la relacion de supertipo -- 
-- Deben hacerse por separado

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

-- triggers y procedure para insertar disponibilidad de 10 años al crear un depto

create or replace procedure pd_insert_fechas( v_id_depto in departamento.id_dpto%type )
is
begin
insert into disponibilidad (fec_disp, esta_disp, id_dpto)
      select sysdate + level - 1, 'Si', v_id_depto
      from dual
      connect by level <= 3652;
 end;


create or replace trigger insert_fechas 
after insert on departamento
for each row
begin
 pd_fechas(:new.id_dpto);
end;
/


commit;
