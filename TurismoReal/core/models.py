# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AgenciaExterna(models.Model):
    id_agencia = models.IntegerField(primary_key=True)
    nom_age = models.CharField(max_length=100)
    email_age = models.CharField(unique=True, max_length=100)
    tel_age = models.IntegerField(unique=True)
    id_com = models.ForeignKey('Comuna', models.DO_NOTHING, db_column='id_com')

    class Meta:
        managed = False
        db_table = 'agencia_externa'


class Articulo(models.Model):
    id_arti = models.IntegerField(primary_key=True)
    nom_arti = models.CharField(max_length=100)
    cant_arti = models.IntegerField(blank=True, null=True)
    deta_arti = models.CharField(max_length=2000)
    valor_arti = models.IntegerField()
    id_dpto = models.ForeignKey('Departamento', models.DO_NOTHING, db_column='id_dpto')

    class Meta:
        managed = False
        db_table = 'articulo'


class Checkin(models.Model):
    id_rva = models.OneToOneField('Reserva', models.DO_NOTHING, db_column='id_rva', primary_key=True)
    deta_chi = models.CharField(max_length=2000)
    id_usr = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usr')

    class Meta:
        managed = False
        db_table = 'checkin'


class Checkout(models.Model):
    id_rva = models.OneToOneField('Reserva', models.DO_NOTHING, db_column='id_rva', primary_key=True)
    cost_multa = models.IntegerField()
    deta_cho = models.CharField(max_length=2000)
    id_usr = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usr')

    class Meta:
        managed = False
        db_table = 'checkout'


class Comuna(models.Model):
    id_com = models.IntegerField(primary_key=True)
    nom_com = models.CharField(max_length=100)
    id_rgn = models.ForeignKey('Region', models.DO_NOTHING, db_column='id_rgn')

    class Meta:
        managed = False
        db_table = 'comuna'


class Condominio(models.Model):
    id_cnd = models.IntegerField(primary_key=True)
    nom_cnd = models.CharField(max_length=100)
    id_com = models.ForeignKey(Comuna, models.DO_NOTHING, db_column='id_com')

    class Meta:
        managed = False
        db_table = 'condominio'


class Conductor(models.Model):
    rut_conduc = models.IntegerField(primary_key=True)
    dv_conduc = models.CharField(max_length=1)
    nom_conduc = models.CharField(max_length=50)
    appat_conduc = models.CharField(max_length=50)
    apmat_conduc = models.CharField(max_length=50)
    email_conduc = models.CharField(unique=True, max_length=100)
    tel_conduc = models.IntegerField(unique=True)
    patente = models.ForeignKey('Vehiculo', models.DO_NOTHING, db_column='patente')
    id_serv = models.ForeignKey('Transporte', models.DO_NOTHING, db_column='id_serv')

    class Meta:
        managed = False
        db_table = 'conductor'


class ContServ(models.Model):
    id_cont_serv = models.IntegerField(primary_key=True)
    fec_cont = models.DateField()
    costo_total = models.IntegerField()
    deta_cont = models.CharField(max_length=2000)
    fec_acord = models.DateField()
    hora_acord = models.CharField(max_length=5)
    lugar_recogida = models.CharField(max_length=100, blank=True, null=True)
    lugar_destino = models.CharField(max_length=100, blank=True, null=True)
    km_rec = models.DecimalField(max_digits=6, decimal_places=3, blank=True, null=True)
    est_cont = models.CharField(max_length=25, blank=True, null=True)
    id_rva = models.ForeignKey('Reserva', models.DO_NOTHING, db_column='id_rva')
    id_serv = models.ForeignKey('Servextras', models.DO_NOTHING, db_column='id_serv')

    class Meta:
        managed = False
        db_table = 'cont_serv'


class Departamento(models.Model):
    id_dpto = models.IntegerField(primary_key=True)
    dir_dpto = models.CharField(max_length=100)
    num_dpto = models.IntegerField()
    n_amb_dpto = models.BooleanField()
    desc_dpto = models.CharField(max_length=2000)
    costo_arri_dpto = models.IntegerField()
    img_1_dpto = models.BinaryField()
    img_2_dpto = models.BinaryField(blank=True, null=True)
    img_3_dpto = models.BinaryField(blank=True, null=True)
    img_4_dpto = models.BinaryField(blank=True, null=True)
    img_5_dpto = models.BinaryField(blank=True, null=True)
    id_cnd = models.ForeignKey(Condominio, models.DO_NOTHING, db_column='id_cnd')

    class Meta:
        managed = False
        db_table = 'departamento'


class Disponibilidad(models.Model):
    fec_disp = models.DateField(primary_key=True)
    esta_disp = models.CharField(max_length=2)
    id_dpto = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='id_dpto')

    class Meta:
        managed = False
        db_table = 'disponibilidad'
        unique_together = (('fec_disp', 'id_dpto'),)


class Gastos(models.Model):
    id_gastos = models.IntegerField(primary_key=True)
    gast_mes = models.IntegerField()
    gast_agno = models.IntegerField()
    id_dpto = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='id_dpto')

    class Meta:
        managed = False
        db_table = 'gastos'


class Mantencion(models.Model):
    id_mant = models.IntegerField(primary_key=True)
    cost_mant = models.IntegerField()
    deta_mant = models.CharField(max_length=2000)
    id_rmant = models.ForeignKey('ResMant', models.DO_NOTHING, db_column='id_rmant')

    class Meta:
        managed = False
        db_table = 'mantencion'


class Marca(models.Model):
    id_marca = models.IntegerField(primary_key=True)
    nombre_marca = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'marca'


class Modelo(models.Model):
    id_modelo = models.IntegerField(primary_key=True)
    nombre_modelo = models.CharField(max_length=100)
    id_marca = models.ForeignKey(Marca, models.DO_NOTHING, db_column='id_marca')

    class Meta:
        managed = False
        db_table = 'modelo'


class Pago(models.Model):
    id_rva = models.OneToOneField('Reserva', models.DO_NOTHING, db_column='id_rva', primary_key=True)
    monto_total = models.IntegerField()
    monto_arr = models.IntegerField()
    abono_req = models.IntegerField()
    monto_serv_extra = models.IntegerField()
    monto_multas = models.IntegerField()
    monto_pagado = models.IntegerField()
    est_pago = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'pago'


class Region(models.Model):
    id_rgn = models.IntegerField(primary_key=True)
    nom_rgn = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'region'


    def __str__(self):
        return self.nom_rgn

class ResMant(models.Model):
    id_rmant = models.IntegerField(primary_key=True)
    fec_rmant = models.DateField()
    id_dpto = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='id_dpto')
    id_usr = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usr')

    class Meta:
        managed = False
        db_table = 'res_mant'


class Reserva(models.Model):
    id_rva = models.IntegerField(primary_key=True)
    fec_ini_rva = models.DateField()
    fec_fin_rva = models.DateField()
    num_pers = models.IntegerField()
    estado_rva = models.CharField(max_length=30)
    id_dpto = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='id_dpto')
    id_usr = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usr')

    class Meta:
        managed = False
        db_table = 'reserva'


class Servextras(models.Model):
    id_serv = models.IntegerField(primary_key=True)
    nom_serv = models.CharField(max_length=100)
    tipo_serv = models.CharField(max_length=1)
    desc_serv = models.CharField(max_length=2000)
    id_agencia = models.ForeignKey(AgenciaExterna, models.DO_NOTHING, db_column='id_agencia')

    class Meta:
        managed = False
        db_table = 'servextras'


class TipoUsuario(models.Model):
    id_tipo_usr = models.BooleanField(primary_key=True)
    tipo_usr = models.CharField(max_length=25)

    class Meta:
        managed = False
        db_table = 'tipo_usuario'


class Tour(models.Model):
    id_serv = models.OneToOneField(Servextras, models.DO_NOTHING, db_column='id_serv', primary_key=True)
    dur_hra = models.IntegerField()
    dur_min = models.IntegerField()
    cost_adult = models.IntegerField()
    cost_nigno = models.IntegerField()
    cost_3ra = models.IntegerField()
    ubi_partida = models.CharField(max_length=100)
    ubi_fin = models.CharField(max_length=100)
    alimentacion = models.CharField(max_length=2)
    transporte = models.CharField(max_length=2)

    class Meta:
        managed = False
        db_table = 'tour'


class Transporte(models.Model):
    id_serv = models.OneToOneField(Servextras, models.DO_NOTHING, db_column='id_serv', primary_key=True)
    cost_km_dia = models.IntegerField()
    cost_km_noc = models.IntegerField()
    extra_fest = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'transporte'


class Usuario(models.Model):
    id_usr = models.IntegerField(primary_key=True)
    email_usr = models.CharField(unique=True, max_length=100)
    contr_usr = models.CharField(max_length=50)
    nom_usr = models.CharField(max_length=50)
    appat_usr = models.CharField(max_length=50)
    apmat_usr = models.CharField(max_length=50)
    tel_usr = models.IntegerField(unique=True)
    rut_usr = models.IntegerField(unique=True)
    dv_usr = models.CharField(max_length=1)
    cant_res = models.IntegerField(blank=True, null=True)
    est_cta = models.CharField(max_length=20, blank=True, null=True)
    tipo_cli = models.CharField(max_length=25, blank=True, null=True)
    id_tipo_usr = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'usuario'


class Vehiculo(models.Model):
    patente = models.CharField(primary_key=True, max_length=8)
    color = models.CharField(max_length=30)
    agno = models.DateField()
    cant_puertas = models.BooleanField()
    cap_pasaj = models.IntegerField()
    cap_male = models.IntegerField()
    asiento_nigno = models.CharField(max_length=2)
    per_silla = models.CharField(max_length=2)
    id_modelo = models.ForeignKey(Modelo, models.DO_NOTHING, db_column='id_modelo')

    class Meta:
        managed = False
        db_table = 'vehiculo'
