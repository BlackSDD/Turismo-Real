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
end tr_reserva_fechas;
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
        monto_multas = monto_multas + :new.cost_multa
        where id_rva = :new.cost_multa;
    
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
end fn_arriendo;

commit;

