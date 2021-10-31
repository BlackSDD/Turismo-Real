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
    after insert on cont_serv
    for each row
begin
    update pago set 
        monto_total = monto_total + :new.costo_total,
        monto_serv_extra = monto_serv_extra + :new.costo_total,
        est_pago = 'abonado'
    where id_rva = :new.id_rva;
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
begin
    OPEN cur;
        LOOP
            FETCH cur INTO cur_rec;  
            EXIT WHEN cur%notfound;
        END LOOP;
        if cur%rowcount >= 1 then
            dbms_output.put_line('fechas no disponibles para reservar');  
        else
            insert into reserva values
            (
            SEQ_RESERVA.nextval,
            v_fec_ini_rva ,
            v_fec_fin_rva ,
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



commit;

