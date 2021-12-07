insert into tipo_usuario values (1,'administrador');
insert into tipo_usuario values (2,'funcionario');
insert into tipo_usuario values (3,'cliente');

insert into usuario values (seq_usuario.NEXTVAL,'admin@admin.cl','1234','admin','general','CEO',976097795,1111111,1,null,null,null,1);
insert into usuario values (seq_usuario.NEXTVAL,'funcionario@funcionario.cl','1234','funcionario','que','trabaja',981866966,2222222,2,null,null,null,2);
insert into usuario values (seq_usuario.NEXTVAL,'matias76097795@gmail.com','1234','matias','fuentes','venegas',948821386,19409965,7,6,'activa','frecuente',3);
insert into usuario values (seq_usuario.NEXTVAL,'cristian.prieto.f@gmail.com','1234','cristian','prieto','fariña',920503942,19793681,9,0,'activa','normal',3);


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


insert into comuna values (seq_comuna.NEXTVAL,'Viña del mar',5);
insert into comuna values (seq_comuna.NEXTVAL,'La serena',4);
insert into comuna values (seq_comuna.NEXTVAL,'Pucón',9);


insert into condominio values (seq_condominio.NEXTVAL,'Miraflores',1);
insert into condominio values (seq_condominio.NEXTVAL,'Las camelias',2);
insert into condominio values (seq_condominio.NEXTVAL,'Entre Lagos',3);


insert into departamento values (seq_departamento.NEXTVAL,'1 Norte 1540',315,3,'Departamento con habitación principal y baño en suite, living-comedor y cocina independiente',58000,1);
insert into departamento values (seq_departamento.NEXTVAL,'AV Walter Martinez 3564',103,2,'Departamento de 2 ambientes, habitación principal con baño en suite, cocina concepto abierto y living',37000,2);
insert into departamento values (seq_departamento.NEXTVAL,'El Arrayan 760',708,4,'Departamento amplio con vista al lago Villarica, habitación principal con baño en suite, habitación secundaria con 2 camas, baño de visitas living - comedor y concina independiente',115000,3);


insert into articulo values (seq_articulo.NEXTVAL,'cama king', 1,'cama habitación principal, nueva',750000,1);
insert into articulo values (seq_articulo.NEXTVAL,'refrigerador', 1,'refrigerador de 2 puertas, semi-nuevo',380000,1);
insert into articulo values (seq_articulo.NEXTVAL,'cama de 2 plazas', 1,'cama habitación principal, nueva',450000,2);
insert into articulo values (seq_articulo.NEXTVAL,'set copas de vino', 6,'copas de vidrio, nuevos', 10000,2);
insert into articulo values (seq_articulo.NEXTVAL,'refrigerador', 1,'refrigerador de 2 puertas, semi-nuevo',380000,3);
insert into articulo values (seq_articulo.NEXTVAL,'lavadora', 1,'lavadora convencional, en reparación',160000,3);

insert into gastos values (1,85000,1020000);
insert into gastos values (2,55000,660000);
insert into gastos values (3,125000,1500000);


insert into res_mant values (seq_res_mant.NEXTVAL,'01/11/2021','agendada',3,1);


insert into mantencion values (1,112000,'Se entrega la lavadora al técnico para que la repare con periodo de 1 semana');


insert into agencia_externa values (seq_agencia_externa.NEXTVAL,'Taxis del Pacífico','agencia1@email.com','211111111','1');
insert into agencia_externa values (seq_agencia_externa.NEXTVAL,'Movilizate','agencia2@email.com','233333333','2');
insert into agencia_externa values (seq_agencia_externa.NEXTVAL,'Villarica Tour','agencia3@email.com','222222222','3');


insert into servextras values (seq_servextras.NEXTVAL,'Taxis del Pacífico','V','Servicios de transporte para Viña, Valparaiso y cercanías, horario 24 hrs todos los días del año',1);
insert into servextras values (seq_servextras.NEXTVAL,'Movilizate','V','Servicio de transporte para la región de Coquimbo, horario continuo inclusive feriados',2);
insert into servextras values (seq_servextras.NEXTVAL,'Ascenso al volcán Villarica','T','Expedición al volcán villarica a más de 2000 metros de altura, disfrute de las vistas únicas hacia la cordillera, bosques y lagos, para mayores de 13 años, incluye seguro contra accidentes, transporte y colación',3);


insert into transporte values (1,950,1150);
insert into transporte values (2,870,1070);
insert into tour values (3,9,30,95000,0,87000,'El Arrayan 760','El Arrayan 760','Si','Si');


insert into marca values (seq_marca.NEXTVAL,'Nissan');
insert into marca values (seq_marca.NEXTVAL,'Chevrolet');


insert into modelo values (seq_modelo.NEXTVAL,'Versa Sense MT',1);
insert into modelo values (seq_modelo.NEXTVAL,'Traverse 3.6L LT FWD',2);


insert into vehiculo values ('AAAA01','Negro',to_date('2017','YYYY'),4,4,466,'No','No',1);
insert into vehiculo values('AAAA02','Blanco',to_date('2020','YYYY'),4,7,650,'Si','Si',2);


insert into conductor values (18469230,9,'mario','serrano','cantillana','marioserrano.c@gmail.com',975759027,'AAAA02',1);
insert into conductor values (19315176,0,'jesus','aguayo','rojas','jesus.aguayo.06@gmail.com',952346288,'AAAA01',2);


insert into reserva values (seq_reserva.NEXTVAL,'01/01/2022','09/01/2022',2,'reservada',1,3);
insert into reserva values (seq_reserva.NEXTVAL,'01/02/2022','09/02/2022',2,'reservada',2,4);
insert into reserva values (seq_reserva.NEXTVAL,'01/03/2022','09/03/2022',4,'reservada',3,3);

-- insert into pago values(1,115000,100000,10000,15000,0,10000,'abonado');
-- insert into pago values(2,100000,100000,10000,0,0,10000,'abonado');
-- insert into pago values(3,100000,100000,10000,0,0,10000,'abonado');


insert into checkin values (1,'Se hace entrega del departamento con el inventario completo',2);
insert into checkin values (2,'Se hace entrega del departamento con el inventario completo',2);
insert into checkin values (3,'Se hace entrega del departamento, la lavadora está en mantención así que se entregan fichas para lavanderia',2);


insert into checkout values (1,0,'Se devuelve el departamento en perfecto estado',2);
insert into checkout values (2,0,'Se devuelve el departamento en perfecto estado',2);
insert into checkout values (3,0,'Se devuelve el departamento en perfecto estado',2);


insert into cont_serv values (seq_cont_serv.NEXTVAL,'01/01/2022',15000,'Se solicitó transporte desde el terminal de buses hasta el edificio','01/01/2022','10:30','Avenida Valparaíso 1055','1 Norte 1540',24.500,'reservado',1,1);

commit;
