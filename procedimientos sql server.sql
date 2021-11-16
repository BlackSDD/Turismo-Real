---TABLA AGENCIA_EXTERNA

--Eliminar
create or alter procedure sp_eliminarAgenciaExterna
(
	@id_agencia INT
)
as
begin
	delete  from agencia_externa where id_agencia = @id_agencia;
	commit;
end;

--Agregar
create or alter procedure sp_agregarAgenciaExterna
(
	
	@nom_age NVARCHAR(100),
	@email_age NVARCHAR(100),
	@tel_age INT,
        @id_com INT
)
as
begin
	insert into agencia_externa values
	(
	@nom_age ,
	@email_age ,
	@tel_age,
    @id_com
	);
    commit;
end;

--Modificar
create or alter procedure sp_modificarAgenciaExterna
(
	@id_age INT,
	@nom_age NVARCHAR(100),
	@email_age NVARCHAR(100),
	@tel_age INT
)
as
begin
	update agencia_externa 
    set nom_age = @nom_age,
        email_age = @email_age,
        tel_age = @tel_age
	where ID_AGENCIA = @id_age;
    commit;
	
end;
------------------------------------------------------
----TABLA ARTICULO
--Eliminar
create or alter procedure sp_eliminarArticulo
(
	@id_arti INT
)
as
begin
	delete  from articulo where id_arti = @id_arti;
    commit;
end;

---Agregar
create or alter procedure sp_agregarArticulo
(
	
	@nom_arti NVARCHAR(100),
	@cant_arti INT,
	@deta_arti NVARCHAR(2000),
	@valor_arti INT,
    @id_depto INT
)
as
begin
	insert into articulo values
	(
	@nom_arti ,
	@cant_arti ,
	@deta_arti,
    @valor_arti,
	@id_depto
	);
    commit;
end;

---Modificar
create or alter procedure sp_modificarArticulo
(
	@id_arti INT,
	@nom_arti NVARCHAR(100),
	@cant_arti INT,
	@deta_arti NVARCHAR(2000),
	@valor_arti INT
)
as
begin
	update articulo set nom_arti = @nom_arti, cant_arti = @cant_arti, deta_arti = @deta_arti, valor_arti = @valor_arti
	where id_arti = @id_arti;
    commit;
end;

---------------------------------------------------------------------------

--TABLA CHECK IN


create or alter procedure sp_agregarCheckin
(
    @id_rva INT,
 	@deta_chi NVARCHAR(2000),
    @id_usr INT
)
as
begin
	insert into checkin values
	(
	@id_rva,
 	@deta_chi,
    @id_usr
    );
end;

--Modificar

create or alter procedure sp_modificarCheckin
(
 	@id_rva INT,
	@deta_chi NVARCHAR(2000)	
)
as
begin
 	update checkin set deta_chi = @deta_chi
 	where id_rva = @id_rva;	
end;

---------------------------------------------------------------------------

-- TABLA CHECK OUT


create or alter procedure sp_agregarCheckout
(
    @cost_multa INT,
    @deta_cho NVARCHAR(2000),
    @id_rva INT,
    @id_usr INT
)
as
begin
    insert into checkout values
    (
        @id_rva,
        @cost_multa,
        @deta_cho,
        @id_usr
    );
end;

--modificar
create or alter procedure sp_modificarCheckout
(
	@cost_multa INT,
	@deta_cho NVARCHAR(2000),
	@id_rva INT
)
as
begin
    update checkout set 
        cost_multa = @cost_multa, 
        deta_cho = @deta_cho
        where id_rva = @id_rva;
end;

---------------------------------------------------------------------------

--TABLA COMUNA
--Agregar
create or alter procedure sp_agregarComuna
(
	@nom_com NVARCHAR(100),
    @id_rgn INT
)
as
begin
	insert into Comuna values
	(
	@nom_com,
    @id_rgn
	);
commit;
end;

--Modificar
create or alter procedure sp_modificarComuna
(
	@id_com INT,
	@nom_com NVARCHAR(100)
)
as
begin
	update comuna set
        nom_com = @nom_com
        where id_com = @id_com;
	commit;
end;

--eliminar

create or alter procedure sp_eliminarComuna
(
	@id_com INT
)
as
begin
	delete from comuna where id_com = @id_com;
	commit;
end;
---------------------------------------------------------------------------

--TABLA CONDOMINIO
--Eliminar
create or alter procedure sp_eliminarCondominio
(
	@id_cnd INT
)
as
begin
	delete from condominio where id_cnd = @id_cnd;
	commit;
end;

--agregar
create or alter procedure sp_agregarCondominio
(
	
	@nom_cnd NVARCHAR(100),
	@id_com INT
)
as
begin
	insert into condominio values
	(
	@nom_cnd,
    @id_com
	);
    commit;
end;

--modificar
create or alter procedure sp_modificarCondominio
(
	@id_cnd INT,
	@nom_cnd NVARCHAR(100)
)
as
begin
	update condominio set
        nom_cnd = @nom_cnd
        where id_cnd = @id_cnd;
	commit;
end;

---------------------------------------------------------------------------

--TABLA CONT_SERV

--Eliminar
create or alter procedure sp_eliminarContServ
(
	@id_cont_serv INT
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
	where id_cont_serv = @id_cont_serv;
	commit;
end;


------------------Agregar Contrato Servicio
CREATE or alter PROCEDURE sp_agregarContServ

   @costo_total int,
   @deta_cont nvarchar(2000),
   @fec_acord date,
   @hora_acord char(5),
   @lugar_recogida nvarchar(100),
   @lugar_destino nvarchar(100),
   @km_rec decimal(6,3),
   @est_cont nvarchar(30),
   @id_rva int,
   @id_serv int
AS 
   BEGIN

      DECLARE
         @fec_cont date = sysdatetime()

      INSERT cont_serv
	  ( 
         FEC_CONT, 
         COSTO_TOTAL, 
         DETA_CONT, 
         FEC_ACORD, 
         HORA_ACORD, 
         LUGAR_RECOGIDA, 
         LUGAR_DESTINO, 
         KM_REC, 
         EST_CONT, 
         ID_RVA, 
         ID_SERV)
         VALUES (
            @fec_cont, 
			@costo_total, 
			@deta_cont, 
			@fec_acord, 
			@hora_acord, 
			@lugar_recogida, 
			@lugar_destino, 
			@km_rec, 
			'reservado', 
			@id_rva, 
			@id_serv
			)

      IF @@TRANCOUNT > 0
         COMMIT TRANSACTION 

   END
---------------------------------------------------------------------------

--TABLA DEPARTAMENTO
--eliminar
create or alter procedure sp_eliminarDepartamento
(
	@id_dpto INT
)
as
begin
    delete from disponibilidad where id_dpto = @id_dpto;
    delete from articulo where id_dpto = @id_dpto;
    delete from gastos where id_dpto = @id_dpto;
	update departamento set
        desc_dpto = 'departamento no disponible',
        costo_arri_dpto = '0',
        img_1_dpto = 0x,
        img_2_dpto = 0x,
        img_3_dpto = 0x,
        img_4_dpto = 0x,
        img_5_dpto = 0x
        where id_dpto = @id_dpto;        
    commit;
end;

--agregar
create or alter procedure sp_agregarDepartamento
(
	@dir_dpto NVARCHAR(100), 
	@num_dpto INT, 
	@n_amb_dpto INT, 
	@desc_dpto NVARCHAR(2000), 
	@costo_arri_dpto INT, 
	@img_1_dpto image, 
	@img_2_dpto image, 
	@img_3_dpto image,
	@img_4_dpto image, 
	@img_5_dpto image,
    @id_cnd INT	
)
as
begin
	insert into departamento values
	(
	@dir_dpto , 
	@num_dpto , 
	@n_amb_dpto , 
	@desc_dpto , 
	@costo_arri_dpto, 
	@img_1_dpto , 
	@img_2_dpto , 
	@img_3_dpto ,
	@img_4_dpto , 
	@img_5_dpto ,
    @id_cnd
	);
    commit;
end;

--Modificar
create or alter procedure sp_modificarDepartamento
(
	@id_dpto INT,
	@dir_dpto NVARCHAR(100), 
	@num_dpto INT, 
	@n_amb_dpto INT, 
	@desc_dpto NVARCHAR(2000), 
	@costo_arri_dpto INT, 
	@img_1_dpto image, 
	@img_2_dpto image, 
	@img_3_dpto image,
	@img_4_dpto image, 
	@img_5_dpto image
)
as
begin
	update departamento set 
    dir_dpto = @dir_dpto,
    num_dpto = @num_dpto,
    n_amb_dpto = @n_amb_dpto,
    desc_dpto = @desc_dpto,
    costo_arri_dpto = @costo_arri_dpto,
	img_1_dpto = @img_1_dpto,
    img_2_dpto = @img_2_dpto,
    img_3_dpto = @img_3_dpto,
    img_4_dpto = @img_4_dpto,
    img_5_dpto = @img_5_dpto
	where id_dpto = @id_dpto;
    commit;
end;

---------------------------------------------------------------------------

--TABLA GASTOS
--eliminar
create or alter procedure sp_eliminarGastos
(
	@id_dpto INT
)
as
begin
	delete  from Gastos where id_dpto = @id_dpto;
    commit;
end;

--agregar
create or alter procedure sp_agregarGastos
(
	@gast_mes INT,
	@gast_agno INT,
    @id_dpto INT
)
as
begin
	insert into gastos values
	(
	@id_dpto,
	@gast_mes ,
	@gast_agno
	);
    commit;
end;

--Modificar
create or alter procedure sp_modificarGastos
(
	@id_dpto INT,
	@gast_mes INT,
	@gast_agno INT
)
as
begin
	update gastos set gast_mes = @gast_mes,
    gast_agno = @gast_agno
	where id_dpto = @id_dpto;
	commit;
end;

---------------------------------------------------------------------------

--TABLA MANTENCION
--agregar
create or alter procedure sp_agregarMantencion
(
	
	@cost_mant INT,
	@deta_mant NVARCHAR(2000),
    @id_rmant INT
)
as
begin
	insert into mantencion values
	(
	@id_rmant,
	@cost_mant ,
	@deta_mant 
	);
    commit;
end;

--Modificar
create or alter procedure sp_modificarMantencion
(
    @id_rmant INT,
	@cost_mant INT,
	@deta_mant NVARCHAR(2000)
)
as
begin
	update mantencion set 
        cost_mant = @cost_mant,
        deta_mant = @deta_mant
	where id_rmant = @id_rmant;
    commit;
end;

---------------------------------------------------------------------------
---------------------------------------------------------------------------

--TABLA PAGO


create or alter procedure sp_agregarPago
(
	@id_rva INT,
	@monto_pagado INT
)
as
begin
	update pago set
        monto_pagado = @monto_pagado
        where id_rva = @id_rva;
    commit;
end;

---------------------------------------------------------------------------

--TABLA REGION
--eliminar
create or alter procedure sp_eliminarRegion
(
	@id_rgn INT
)
as
begin
	delete from Region 
        where id_rgn = @id_rgn;
    commit;
end;

--agregar
create or alter procedure sp_agregarRegion
(
	@nom_rgn NVARCHAR(100)	
)
as
begin
	insert into region values
	(
	@nom_rgn 
	);
    commit;
end;

--modificar
create or alter procedure sp_modificarRegion
(
	@id_rgn INT,
	@nom_rgn NVARCHAR(100)
)
as
begin
	update region set 
        nom_rgn = @nom_rgn
        where id_rgn = @id_rgn;
	commit;
end;

---------------------------------------------------------------------------

--TABLA RES_MANT
--eliminar
create or alter procedure sp_eliminarMantencion
(
	@id_rmant INT
)
as
begin
	update res_mant set
        est_man = 'cancelada'
    where id_rmant = @id_rmant;
    commit;
end;

--agregar
create or alter procedure sp_agregarResMant
(
	@fec_rmant date,
    @id_dpto INT,
    @id_usr INT
)
as
begin
	insert into Res_mant values
	(
	@fec_rmant,
    'agendada',
    @id_dpto,
    @id_usr
	);
    commit;
end;

--modificar
create or alter procedure sp_modificarResMant
(
	@id_rmant INT,
	@fec_rmant date
)
as
begin
	update Res_mant set 
        fec_rmant = @fec_rmant
	where id_rmant = @id_rmant;
	commit;
end;

---------------------------------------------------------------------------

--TABLA RESERVA
create or ALTER PROCEDURE sp_agregarReserva  
   @FEC_INI_RVA date,
   @FEC_FIN_RVA date,
   @NUM_PERS INT,
   @ID_DPTO INT,
   @ID_USR INT
AS 
   BEGIN
      DECLARE
         @CUR_ROWCOUNT int
      DECLARE
         @CUR_REC$FEC_DISP date, 
         @CUR_REC$ESTA_DISP nvarchar(30), 
         @CUR_REC$ID_DPTO INT, 
         @MSG varchar(100)

      DECLARE
          CUR CURSOR LOCAL FOR 
            SELECT DISPONIBILIDAD.FEC_DISP, DISPONIBILIDAD.ESTA_DISP, DISPONIBILIDAD.ID_DPTO
            FROM DISPONIBILIDAD
            WHERE 
               FEC_DISP BETWEEN @FEC_INI_RVA AND @FEC_FIN_RVA AND 
               ID_DPTO = @ID_DPTO AND 
               ESTA_DISP = 'No'

      SET @CUR_ROWCOUNT = 0

      OPEN CUR

      WHILE 1 = 1
      
         BEGIN

            FETCH CUR
                INTO @CUR_REC$FEC_DISP, @CUR_REC$ESTA_DISP, @CUR_REC$ID_DPTO

            IF @@FETCH_STATUS = 0
               SET @CUR_ROWCOUNT = @CUR_ROWCOUNT + 1

            IF @@FETCH_STATUS <> 0
               BREAK

         END

      IF @CUR_ROWCOUNT >= 1
         SET @MSG = 'las fechas de la reserva no están disponibles'
      ELSE 
         BEGIN

            INSERT RESERVA( 
               FEC_INI_RVA, 
               FEC_FIN_RVA, 
               NUM_PERS, 
               ESTADO_RVA, 
               ID_DPTO, 
               ID_USR)
               VALUES ( 
                  CAST(@FEC_INI_RVA AS DATETIME), 
                  CAST(@FEC_FIN_RVA AS DATETIME), 
                  @NUM_PERS, 
                  'en verificación', 
                  @ID_DPTO, 
                  @ID_USR)

            IF @@TRANCOUNT > 0
               COMMIT TRANSACTION 

         END

      CLOSE CUR

      DEALLOCATE CUR

   END

--eliminar
create or alter procedure sp_eliminarReserva
(
	@id_rva INT
)
as
begin
	update reserva set
        estado_rva = 'cancelada'
    where id_rva = @id_rva;
    commit;
end;

--modificar
create or alter procedure sp_modificarReserva
(
	@id_rva INT,
	@num_pers INT,
	@estado_rva NVARCHAR(30)
)
as
begin
	update Reserva set 
        num_pers = @num_pers,
        estado_rva = @estado_rva
	where id_rva = @id_rva;
	commit;
end;


---------------------------------------------------------------------------

--TABLA SERVEXTRAS

create or ALTER PROCEDURE sp_eliminarServExtras  

   @id_serv int
AS 
   BEGIN

      DECLARE
         @tipo char(1)

      SELECT @tipo = tipo_serv
      FROM servextras
      WHERE id_serv = @id_serv

      IF @tipo = 'T'
         BEGIN

            DELETE tour
            WHERE id_serv = @id_serv

            UPDATE servextras
               SET 
                  desc_serv = 'Servicio no disponible'
            WHERE id_serv = @id_serv

         END
      ELSE 
         BEGIN
            IF @tipo = 'V'
               BEGIN

                  DELETE conductor
                  WHERE id_serv = @id_serv

                  BEGIN

                     DECLARE
                        @rut_conduc int, 
                        @dv_conduc char(1), 
                        @nom_conduc nvarchar(50), 
                        @appat_conduc nvarchar(50), 
                        @apmat_conduc nvarchar(50), 
                        @email_conduc nvarchar(100), 
                        @tel_conduc int, 
                        @patente char(8)

                     DECLARE
                         COND CURSOR LOCAL FORWARD_ONLY FOR 
                           SELECT 
                              CONDUCTOR.RUT_CONDUC, 
                              CONDUCTOR.DV_CONDUC, 
                              CONDUCTOR.NOM_CONDUC, 
                              CONDUCTOR.APPAT_CONDUC, 
                              CONDUCTOR.APMAT_CONDUC, 
                              CONDUCTOR.EMAIL_CONDUC, 
                              CONDUCTOR.TEL_CONDUC, 
                              CONDUCTOR.PATENTE, 
                              CONDUCTOR.ID_SERV
                           FROM CONDUCTOR
                           WHERE ID_SERV = @ID_SERV

                     OPEN COND

                     WHILE 1 = 1
                     
                        BEGIN

                           FETCH COND
                               INTO 
                                 @rut_conduc, 
								@dv_conduc , 
								@nom_conduc , 
								@appat_conduc , 
								@apmat_conduc , 
								@email_conduc, 
								@tel_conduc , 
								@patente , 
								@id_serv 

                           IF @@FETCH_STATUS = -1
                              BREAK

                           DELETE vehiculo
                           WHERE patente = @patente

                        END

                     CLOSE COND

                     DEALLOCATE COND

                  END

                  DELETE transporte
                  WHERE id_serv = @id_serv

                  UPDATE servextras
                     SET 
                        desc_serv = 'Servicio no disponible'
                  WHERE id_serv = @id_serv

               END
         END

      IF @@TRANCOUNT > 0
         COMMIT TRANSACTION 

   END

---agregar
create or alter procedure sp_agregarServExtras
(
	@nom_serv NVARCHAR(100),
	@tipo_serv char,
	@desc_serv NVARCHAR(2000),
    @id_agencia INT
)
as
begin
	insert into servExtras values
	(
	@nom_serv,
	@tipo_serv,
	@desc_serv,
    @id_agencia
	);
    commit;
end;

--modificar
create or alter procedure sp_modificarServExtras
(
	@id_serv INT,
	@nom_serv NVARCHAR(100),
	@desc_serv NVARCHAR(2000)
)
as
begin
	update servExtras set 
        nom_serv = @nom_serv,  
        desc_serv = @desc_serv
	where id_serv = @id_serv;
	commit;
end;

---------------------------------------------------------------------------


--TABLA TOUR
--agregar
create or alter procedure sp_agregarTour
(
	@id_serv INT,
	@dur_hra INT,
	@dur_min INT,
	@cost_adult INT,
	@cost_nigno INT,
	@cost_3ra INT,
	@ubi_partida NVARCHAR(100),
	@ubi_fin NVARCHAR(100),
	@alimentacion char(2),
	@transporte char(2)
)
as
begin
	insert into Tour values
	(
	@id_serv,
	@dur_hra,
	@dur_min,
	@cost_adult ,
	@cost_nigno ,
	@cost_3ra ,
	@ubi_partida,
	@ubi_fin ,
	@alimentacion,
	@transporte 
	);
    commit;
end;
---modificar
create or alter procedure sp_modificarTour
(
	@id_serv INT,
	@dur_hra INT,
	@dur_min INT,
	@cost_adult INT,
	@cost_nigno INT,
	@cost_3ra INT,
	@ubi_partida NVARCHAR(100),
	@ubi_fin NVARCHAR(100),
	@alimentacion char(2),
	@transporte char(2)
)
as
begin
	update Tour set 
        dur_hra = @dur_hra,
        dur_min = @dur_min,
        cost_adult = @cost_adult,
        cost_nigno = @cost_nigno, 
        cost_3ra = @cost_3ra, 
        ubi_partida = @ubi_partida, 
        ubi_fin = @ubi_fin, 
        alimentacion = @alimentacion, 
        Transporte = @transporte
	where id_serv = @id_serv;
	commit;
end;

---------------------------------------------------------------------------

--TABLA TRANSPORTE
--agregar
create or alter procedure sp_agregarTransporte
(
    @id_serv  INT,
	@cost_km_dia INT,
	@cost_km_noc INT
)
as
begin
	insert into Transporte values
	(
	@id_serv,
	@cost_km_dia ,
	@cost_km_noc
	);
    commit;
end;

--modificar
create or alter procedure sp_modificarTransporte
(
	@id_serv INT,
	@cost_km_dia INT,
	@cost_km_noc INT
)
as
begin
	update Transporte set 
        cost_km_dia = @cost_km_dia,
        cost_km_noc = @cost_km_noc
	where id_serv = @id_serv;
	commit;
end;

---------------------------------------------------------------------------

--TABLA USUARIO

create or alter procedure sp_suspenderUsr
(
	@id_usr INT
)
as
begin
	update usuario set
        est_cta = 'suspendida',
        tipo_cli = 'inhabilitado'
    where id_usr = @id_usr;
end;

---Agregar Usuario
create or alter procedure sp_agregarUsr
(
	@email_usr NVARCHAR(100),
	@contr_usr NVARCHAR(50),
	@nom_usr NVARCHAR(50),
	@appat_usr NVARCHAR(50),
	@apmat_usr NVARCHAR(50),
	@tel_usr INT,
	@rut_usr INT,
	@dv_usr char(1),
	@cant_res INT,
	@est_cta NVARCHAR(20),
	@tipo_cli NVARCHAR(25),
    @id_tipo_usr INT
)
as
begin
	insert into usuario values
	(
	@email_usr ,
	@contr_usr ,
	@nom_usr,
	@appat_usr ,
	@apmat_usr,
	@tel_usr ,
	@rut_usr ,
	@dv_usr ,
	@cant_res,
	@est_cta ,
	@tipo_cli ,
    @id_tipo_usr
	);
    commit;
end;


--modificar
create or alter procedure sp_modificarDatosUsr
(
	@id_usr INT,
	@email_usr NVARCHAR(100),
	@contr_usr NVARCHAR(50),
	@tel_usr INT
)
as
begin
	update usuario set 
        email_usr = @email_usr, 
        contr_usr = @contr_usr, 
        tel_usr = @tel_usr
	where id_usr = @id_usr;
	commit;
end;

--validar
create or alter procedure sp_validarUsr
(
    @id_usr INT
)
as
begin
    update usuario set
        est_cta = 'activa',
        tipo_cli = 'normal'
    where id_usr = @id_usr;
end;

-------------Cambiar Tipo Cliente
create or ALTER PROCEDURE sp_cambiarTipoCliente

   @id_usr int
AS 
   BEGIN

      DECLARE
         @tipo nvarchar(30)

      SELECT @tipo = tipo_cli
      FROM usuario
      WHERE id_usr = @id_usr

      IF @tipo = 'normal'
         UPDATE usuario
            SET 
               tipo_cli = 'frecuente'
         WHERE id_usr = @id_usr
      ELSE 
         BEGIN
            IF @tipo = 'frecuente'
               UPDATE usuario
                  SET 
                     tipo_cli = 'normal'
               WHERE id_usr = @id_usr
         END

      IF @@TRANCOUNT > 0
         COMMIT TRANSACTION 
   END

------TRIGGER + PROCEDIMIENTOS insertar fechas------------------------------------------

---TR insertar fechas
create or alter trigger tr_insert_fechas 
 On departamento
after insert
as
declare @id_depto int
set @id_depto = (select max(id_dpto) from departamento)
 exec sp_insert_fechas @id_depto


--PD insertar fechas
CREATE OR ALTER PROCEDURE sp_insert_fechas
   (@ID_DEPTO INT)
AS 
   BEGIN
      DECLARE
         @FECHA datetime2(0) = CAST(sysdatetime() AS DATETIME)
      DECLARE
         @I int
      SET @I = 0
      WHILE @I <= 3652
         BEGIN
            INSERT disponibilidad(FEC_DISP, ESTA_DISP, ID_DPTO)
               VALUES (@FECHA, 'Si', @ID_DEPTO)
            SET @FECHA = CAST(DATEADD(D, 1, @FECHA) AS DATETIME)
            SET @I = @I + 1
         END
   END
