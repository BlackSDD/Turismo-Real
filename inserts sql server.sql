insert into tipo_usuario (tipo_usr) values ('administrador');
insert into tipo_usuario (tipo_usr) values ('funcionario');
insert into tipo_usuario (tipo_usr) values ('cliente');

insert into usuario (email_usr, contr_usr, nom_usr, appat_usr, apmat_usr, tel_usr, rut_usr, dv_usr, cant_res, est_cta, tipo_cli, id_tipo_usr) values ('admin@admin.cl','1234','admin','general','CEO',976097795,1111111,1,null,'activa',null,1);
insert into usuario (email_usr, contr_usr, nom_usr, appat_usr, apmat_usr, tel_usr, rut_usr, dv_usr, cant_res, est_cta, tipo_cli, id_tipo_usr) values ('funcionario@funcionario.cl','1234','funcionario','que','trabaja',981866966,2222222,2,null,'activa',null,2);
insert into usuario (email_usr, contr_usr, nom_usr, appat_usr, apmat_usr, tel_usr, rut_usr, dv_usr, cant_res, est_cta, tipo_cli, id_tipo_usr) values ('matias76097795@gmail.com','1234','matias','fuentes','venegas',948821386,19409965,7,6,'activa','frecuente',3);
insert into usuario (email_usr, contr_usr, nom_usr, appat_usr, apmat_usr, tel_usr, rut_usr, dv_usr, cant_res, est_cta, tipo_cli, id_tipo_usr) values ('cristian.prieto.f@gmail.com','1234','cristian','prieto','fariña',920503942,19793681,9,0,'activa','normal',3);


insert into region (nom_rgn) values ('Región de Tarapacá');
insert into region (nom_rgn) values ('Región de Antofagasta');
insert into region (nom_rgn) values ('Región de Atacama');
insert into region (nom_rgn) values ('Región de Coquimbo');
insert into region (nom_rgn) values ('Región de Valparaíso');
insert into region (nom_rgn) values ('Región del Libertador General Bernardo O''higgins');
insert into region (nom_rgn) values ('Región del Maule');
insert into region (nom_rgn) values ('Región del Biobío');
insert into region (nom_rgn) values ('Región de la Araucanía');
insert into region (nom_rgn) values ('Región de los Lagos');
insert into region (nom_rgn) values ('Región de Aysén del General Carlos Ibañez del Campo');
insert into region (nom_rgn) values ('Región de Magallanes y Antártica Chilena');
insert into region (nom_rgn) values ('Región Metropolitana de Santiago');
insert into region (nom_rgn) values ('Región de los Ríos');
insert into region (nom_rgn) values ('Región de Arica y Parinacota');
insert into region (nom_rgn) values ('Región de Ñuble');


insert into comuna (nom_com, id_rgn) values ('Viña del mar',5);
insert into comuna (nom_com, id_rgn) values ('La serena',4);
insert into comuna (nom_com, id_rgn) values ('Pucón',9);


insert into condominio (nom_cnd, id_com) values ('Miraflores',1);
insert into condominio (nom_cnd, id_com) values ('Las camelias',2);
insert into condominio (nom_cnd, id_com) values ('Entre Lagos',3);


insert into departamento (dir_dpto, num_dpto, n_amb_dpto, desc_dpto, costo_arri_dpto, id_cnd) values ('1 Norte 1540',315,3,'Departamento con habitación principal y baño en suite, living-comedor y cocina independiente',58000,1);
insert into departamento (dir_dpto, num_dpto, n_amb_dpto, desc_dpto, costo_arri_dpto, id_cnd) values ('AV Walter Martinez 3564',103,2,'Departamento de 2 ambientes, habitación principal con baño en suite, cocina concepto abierto y living',37000,2);
insert into departamento (dir_dpto, num_dpto, n_amb_dpto, desc_dpto, costo_arri_dpto, id_cnd) values ('El Arrayan 760',708,4,'Departamento amplio con vista al lago Villarica, habitación principal con baño en suite, habitación secundaria con 2 camas, baño de visitas living - comedor y concina independiente',115000,3);


insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, fec_compra, id_dpto) values ('cama king', 1,'cama habitación principal, nueva',750000, getdate(), 1);
insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, fec_compra, id_dpto) values ('refrigerador', 1,'refrigerador de 2 puertas, semi-nuevo',380000, getdate(), 1);
insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, fec_compra, id_dpto) values ('cama de 2 plazas', 1,'cama habitación principal, nueva',450000, getdate(),2);
insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, fec_compra, id_dpto) values ('set copas de vino', 6,'copas de vidrio, nuevos', 10000, getdate(),2);
insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, fec_compra, id_dpto) values ('refrigerador', 1,'refrigerador de 2 puertas, semi-nuevo',380000, getdate(),3);
insert into articulo (nom_arti, cant_arti, deta_arti, valor_arti, fec_compra, id_dpto) values ('lavadora', 1,'lavadora convencional, en reparación',160000, getdate(),3);

insert into gastos (id_dpto, fec_ingreso, gasto_luz, gasto_agua, gasto_gas, gasto_servicios, gasto_dividendo, gasto_comunes) values (1, getdate(), 35000, 30000, 40000, 40000, 550000, 45000);
insert into gastos (id_dpto, fec_ingreso, gasto_luz, gasto_agua, gasto_gas, gasto_servicios, gasto_dividendo, gasto_comunes) values (2, getdate(), 25000, 30000, 30000, 30000, 350000, 35000);
insert into gastos (id_dpto, fec_ingreso, gasto_luz, gasto_agua, gasto_gas, gasto_servicios, gasto_dividendo, gasto_comunes) values (3, getdate(), 40000, 40000, 45000, 45000, 750000, 55000);


insert into res_mant (fec_rmant, est_man, id_dpto, id_usr) values ('01/11/2021','agendada',3,1);


insert into mantencion (id_rmant, cost_mant, deta_mant) values (1,112000,'Se entrega la lavadora al técnico para que la repare con periodo de 1 semana');


insert into agencia_externa (nom_age, email_age, tel_age, id_com) values ('Taxis del Pacífico','agencia1@email.com','211111111','1');
insert into agencia_externa (nom_age, email_age, tel_age, id_com) values ('Movilizate','agencia2@email.com','233333333','2');
insert into agencia_externa (nom_age, email_age, tel_age, id_com) values ('Villarica Tour','agencia3@email.com','222222222','3');


insert into servextras (nom_serv, tipo_serv, desc_serv, id_agencia) values ('Taxis del Pacífico','V','Servicios de transporte para Viña, Valparaiso y cercanías, horario 24 hrs todos los días del año',1);
insert into servextras (nom_serv, tipo_serv, desc_serv, id_agencia) values ('Movilizate','V','Servicio de transporte para la región de Coquimbo, horario continuo inclusive feriados',2);
insert into servextras (nom_serv, tipo_serv, desc_serv, id_agencia) values ('Ascenso al volcán Villarica','T','Expedición al volcán villarica a más de 2000 metros de altura, disfrute de las vistas únicas hacia la cordillera, bosques y lagos, para mayores de 13 años, incluye seguro contra accidentes, transporte y colación',3);


insert into transporte (id_serv, cost_km_dia, cost_km_noc) values (1,950,1150);
insert into transporte (id_serv, cost_km_dia, cost_km_noc) values (2,870,1070);
insert into tour (id_serv ,dur_hra, dur_min, cost_adult, cost_nigno, cost_3ra, ubi_partida, ubi_fin, alimentacion, transporte) values (3,9,30,95000,0,87000,'El Arrayan 760','El Arrayan 760','Si','Si');


insert into marca (nombre_marca) values ('Nissan');
insert into marca (nombre_marca) values ('Chevrolet');


insert into modelo (nombre_modelo, id_marca) values ('Versa Sense MT',1);
insert into modelo (nombre_modelo, id_marca) values ('Traverse 3.6L LT FWD',2);


insert into vehiculo (patente, color, agno, cant_puertas, cap_pasaj, cap_male, asiento_nigno, per_silla, id_modelo) values ('AAAA01','Negro','30/06/2017',4,4,466,'No','No',1);
insert into vehiculo (patente, color, agno, cant_puertas, cap_pasaj, cap_male, asiento_nigno, per_silla, id_modelo) values('AAAA02','Blanco','15/07/2020',4,7,650,'Si','Si',2);


insert into conductor (rut_conduc, dv_conduc, nom_conduc, appat_conduc, apmat_conduc, email_conduc, tel_conduc, patente, id_serv) values (18469230,9,'mario','serrano','cantillana','marioserrano.c@gmail.com',975759027,'AAAA02',1);
insert into conductor (rut_conduc, dv_conduc, nom_conduc, appat_conduc, apmat_conduc, email_conduc, tel_conduc, patente, id_serv) values (19315176,0,'jesus','aguayo','rojas','jesus.aguayo.06@gmail.com',952346288,'AAAA01',2);


insert into reserva (fec_ini_rva, fec_fin_rva, num_pers, estado_rva, id_dpto, id_usr) values ('01/01/2022','09/01/2022',2,'reservada',1,3);
insert into reserva (fec_ini_rva, fec_fin_rva, num_pers, estado_rva, id_dpto, id_usr) values ('01/02/2022','09/02/2022',2,'reservada',2,4);
insert into reserva (fec_ini_rva, fec_fin_rva, num_pers, estado_rva, id_dpto, id_usr) values ('01/03/2022','09/03/2022',4,'reservada',3,3);

insert into checkin (id_rva, deta_chi, id_usr) values (1,'Se hace entrega del departamento con el inventario completo',2);
insert into checkin (id_rva, deta_chi, id_usr) values (2,'Se hace entrega del departamento con el inventario completo',2);
insert into checkin (id_rva, deta_chi, id_usr) values (3,'Se hace entrega del departamento, la lavadora está en mantención así que se entregan fichas para lavanderia',2);


insert into checkout (id_rva, cost_multa, deta_cho, id_usr) values (1,0,'Se devuelve el departamento en perfecto estado',2);
insert into checkout (id_rva, cost_multa, deta_cho, id_usr) values (2,17000,'Se devuelve el departamento y se cobra el valor de un juego de vasos debido a un vaso roto',2);
insert into checkout (id_rva, cost_multa, deta_cho, id_usr) values (3,0,'Se devuelve el departamento en perfecto estado',2);


insert into cont_serv (fec_cont, costo_total, deta_cont, fec_acord, hora_acord, lugar_recogida, lugar_destino, km_rec, cant_adult, cant_nigno, cant_3ra ,est_cont, id_rva, id_serv ) values ('01/01/2022',15000,'Se solicitó transporte desde el terminal de buses hasta el edificio','01/01/2022','10:30','Avenida Valparaíso 1055','1 Norte 1540',24.500,0,0,0,'reservado',1,1);

commit;
