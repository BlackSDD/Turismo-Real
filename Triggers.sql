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


CREATE OR REPLACE TRIGGER arc_cliente BEFORE
    INSERT OR UPDATE OF email_usr ON cliente
    FOR EACH ROW
DECLARE
    d NVARCHAR2(20);
BEGIN
    SELECT
        a.tipo_usr
    INTO d
    FROM
        usuario a
    WHERE
        a.email_usr = :new.email_usr;

    IF ( d IS NULL OR d <> 'cliente' ) THEN
        raise_application_error(-20223,
                               'FK Cliente_usuario_FK in Table cliente violates Arc constraint on Table usuario - discriminator column tipo_usr doesn''t have value ''cliente''');
    END IF;

EXCEPTION
    WHEN no_data_found THEN
        NULL;
    WHEN OTHERS THEN
        RAISE;
END;


CREATE OR REPLACE TRIGGER arc_funcionario BEFORE
    INSERT OR UPDATE OF email_usr ON funcionario
    FOR EACH ROW
DECLARE
    d NVARCHAR2(20);
BEGIN
    SELECT
        a.tipo_usr
    INTO d
    FROM
        usuario a
    WHERE
        a.email_usr = :new.email_usr;

    IF ( d IS NULL OR d <> 'funcionario' ) THEN
        raise_application_error(-20223,
                               'FK usuario_FK in Table funcionario violates Arc constraint on Table usuario - discriminator column tipo_usr doesn''t have value ''funcionario''');
    END IF;

EXCEPTION
    WHEN no_data_found THEN
        NULL;
    WHEN OTHERS THEN
        RAISE;
END;


CREATE OR REPLACE TRIGGER arc_administrador BEFORE
    INSERT OR UPDATE OF email_usr ON administrador
    FOR EACH ROW
DECLARE
    d NVARCHAR2(20);
BEGIN
    SELECT
        a.tipo_usr
    INTO d
    FROM
        usuario a
    WHERE
        a.email_usr = :new.email_usr;

    IF ( d IS NULL OR d <> 'administrador' ) THEN
        raise_application_error(-20223,
                               'FK usuario_FKv2 in Table administrador violates Arc constraint on Table usuario - discriminator column tipo_usr doesn''t have value ''administrador''');
    END IF;

EXCEPTION
    WHEN no_data_found THEN
        NULL;
    WHEN OTHERS THEN
        RAISE;
END;

commit;
