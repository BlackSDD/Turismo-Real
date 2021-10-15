insert into agencia_externa values (seq_agencia_externa.NEXTVAL,'Taxis del Pacífico','agencia1@email.com','211111111','1');
insert into agencia_externa values (seq_agencia_externa.NEXTVAL,'Movilizate','agencia2@email.com','233333333','2');
insert into agencia_externa values (seq_agencia_externa.NEXTVAL,'Villarica Tour','agencia3@email.com','222222222','3');


insert into articulo values (seq_articulo.NEXTVAL,'cama king', 1,'cama habitación principal, nueva',750000,1);
insert into articulo values (seq_articulo.NEXTVAL,'refrigerador', 1,'refrigerador de 2 puertas, semi-nuevo',380000,1);
insert into articulo values (seq_articulo.NEXTVAL,'cama de 2 plazas', 1,'cama habitación principal, nueva',450000,2);
insert into articulo values (seq_articulo.NEXTVAL,'set copas de vino', 6,'copas de vidrio, nuevos', 10000,2);
insert into articulo values (seq_articulo.NEXTVAL,'refrigerador', 1,'refrigerador de 2 puertas, semi-nuevo',380000,3);
insert into articulo values (seq_articulo.NEXTVAL,'lavadora', 1,'lavadora convencional, en reparación',160000,3);


insert into checkin values (seq_checkin.NEXTVAL,'Se hace entrega del departamento con el inventario completo');
insert into checkin values (seq_checkin.NEXTVAL,'Se hace entrega del departamento con el inventario completo');
insert into checkin values (seq_checkin.NEXTVAL,'Se hace entrega del departamento, la lavadora está en mantención así que se entregan fichas para lavanderia');


insert into checkout values (seq_checkout.NEXTVAL,0,'Se devuelve el departamento en perfecto estado');
insert into checkout values (seq_checkout.NEXTVAL,0,'Se devuelve el departamento en perfecto estado');
insert into checkout values (seq_checkout.NEXTVAL,0,'Se devuelve el departamento en perfecto estado');


insert into cliente values (19409965,7,'matias','fuentes','venegas','matias76097795@gmail.com',948821386,'frecuente',6);
insert into cliente values (19793681,9,'cristian','prieto','fariña','cristian.prieto.f@gmail.com',920503942,'normal',0);


insert into comuna values (seq_comuna.NEXTVAL,'Viña del mar',5);
insert into comuna values (seq_comuna.NEXTVAL,'La serena',4);
insert into comuna values (seq_comuna.NEXTVAL,'Pucón',9);


insert into region values (seq_region.NEXTVAL,'Región de Tarapacá');
insert into region values (seq_region.NEXTVAL,'Región de Antofagasta');
insert into region values (seq_region.NEXTVAL,'Región de Atacama');
insert into region values (seq_region.NEXTVAL,'Región de Coquimbo');
insert into region values (seq_region.NEXTVAL,'Región de Valparaíso');
insert into region values (seq_region.NEXTVAL,'Región del Libertador General Bernardo O''higgins');
insert into region values (seq_region.NEXTVAL,'Región del Maule');
insert into region values (seq_region.NEXTVAL,'Región del Biobío');
insert into region values (seq_region.NEXTVAL,'Región de la Araucanía');
insert into region values (seq_region.NEXTVAL,'Región de los Lagos');
insert into region values (seq_region.NEXTVAL,'Región de Aysén del General Carlos Ibañez del Campo');
insert into region values (seq_region.NEXTVAL,'Región de Magallanes y Antártica Chilena');
insert into region values (seq_region.NEXTVAL,'Región Metropolitana de Santiago');
insert into region values (seq_region.NEXTVAL,'Región de los Ríos');
insert into region values (seq_region.NEXTVAL,'Región de Arica y Parinacota');
insert into region values (seq_region.NEXTVAL,'Región de Ñuble');


insert into condominio values (seq_condominio.NEXTVAL,'Miraflores',1);
insert into condominio values (seq_condominio.NEXTVAL,'Las camelias',2);
insert into condominio values (seq_condominio.NEXTVAL,'Entre Lagos',3);


insert into cont_serv values (seq_cont_serv.NEXTVAL,'01/01/2022',15000,'Se solicitó transporte desde el terminal de buses hasta el edificio','01/01/2022','Avenida Valparaíso 1055','1 Norte 1540',1,1);


insert into departamento values (seq_departamento.NEXTVAL,'1 Norte 1540',315,3,'Departamento con habitación principal y baño en suite, living-comedor y cocina independiente',58000,empty_blob(),empty_blob(),empty_blob(),empty_blob(),empty_blob(),1);
insert into departamento values (seq_departamento.NEXTVAL,'AV Walter Martinez 3564',103,2,'Departamento de 2 ambientes, habitación principal con baño en suite, cocina concepto abierto y living',37000,empty_blob(),empty_blob(),empty_blob(),empty_blob(),empty_blob(),2);
insert into departamento values (seq_departamento.NEXTVAL,'El Arrayan 760',708,4,'Departamento amplio con vista al lago Villarica, habitación principal con baño en suite, habitación secundaria con 2 camas, baño de visitas living - comedor y concina independiente',115000,empty_blob(),empty_blob(),empty_blob(),empty_blob(),empty_blob(),3);


insert into gastos values (seq_gastos.NEXTVAL,85000,1020000,1);
insert into gastos values (seq_gastos.NEXTVAL,55000,660000,2);
insert into gastos values (seq_gastos.NEXTVAL,125000,1500000,3);


insert into mantencion values (seq_mantencion.NEXTVAL,112000,'Se entrega la lavadora al técnico para que la repare con periodo de 1 semana',1);


insert into res_mant values (seq_res_mant.NEXTVAL,'10/03/2022',3);


insert into reserva values (seq_reserva.NEXTVAL,19409965,1,'01/01/2022','09/01/2022',2,1,1);
insert into reserva values (seq_reserva.NEXTVAL,19793681,2,'01/02/2022','09/02/2022',2,2,2);
insert into reserva values (seq_reserva.NEXTVAL,19409965,3,'01/03/2022','09/03/2022',4,3,3);


insert into servextras values (seq_servextras.NEXTVAL,'Taxis del Pacífico','V','Servicios de transporte para Viña, Valparaiso y cercanías, horario 24 hrs todos los días del año',1);
insert into servextras values (seq_servextras.NEXTVAL,'Movilizate','V','Servicio de transporte para la región de Coquimbo, horario continuo inclusive feriados',2);
insert into servextras values (seq_servextras.NEXTVAL,'Ascenso al volcán Villarica','T','Expedición al volcán villarica a más de 2000 metros de altura, disfrute de las vistas únicas hacia la cordillera, bosques y lagos, para mayores de 13 años, incluye seguro contra accidentes, transporte y colación',3);


insert into transporte values (1,950,1150,500,9212587);
insert into transporte values (2,870,1070,600,10689445);
insert into tour values (3,9,30,95000,0,87000,'El Arrayan 760','El Arrayan 760','Si','Si');


insert into conductor values (18469230,9,'mario','serrano','cantillana','marioserrano.c@gmail.com',975759027,'AAAA02');
insert into conductor values (19315176,0,'jesus','aguayo','rojas','jesus.aguayo.06@gmail.com',952346288,'AAAA01');


insert into vehiculo values ('AAAA01','Negro',to_date('2017','YYYY'),4,4,466,'No','No',1);
insert into vehiculo values('AAAA02','Blanco',to_date('2020','YYYY'),4,7,650,'Si','Si',2);


insert into modelo values (seq_modelo.NEXTVAL,'Versa Sense MT',1);
insert into modelo values (seq_modelo.NEXTVAL,'Traverse 3.6L LT FWD',2);


insert into marca values (seq_marca.NEXTVAL,'Nissan');
insert into marca values (seq_marca.NEXTVAL,'Chevrolet');


insert into usuario values ('matias76097795@gmail.com','1234','matias','fuentes','venegas',948821386,'cliente');
insert into usuario values ('cristian.prieto.f@gmail.com','1234','cristian','prieto','fariña',920503942,'cliente');
insert into usuario values ('admin@admin.cl','1234','admin','general','CEO',948821386,'administrador');



