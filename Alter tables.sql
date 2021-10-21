ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_pk PRIMARY KEY ( id_agencia );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_email_age_un UNIQUE ( email_age );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_tel_age_un UNIQUE ( tel_age );

ALTER TABLE agencia_externa
    ADD CONSTRAINT agencia_comuna_fk FOREIGN KEY ( id_com )
        REFERENCES comuna ( id_com );

ALTER TABLE articulo ADD CONSTRAINT articulo_pk PRIMARY KEY ( id_arti );

ALTER TABLE articulo
    ADD CONSTRAINT articulo_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE checkin
    ADD CONSTRAINT reserva_checkin_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva (id_rva);

ALTER TABLE checkin
    ADD CONSTRAINT checkin_pk PRIMARY KEY (id_rva);

ALTER TABLE checkout
    ADD CONSTRAINT reserva_checkout_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva (id_rva);

ALTER TABLE checkout
    ADD CONSTRAINT checkout_pk PRIMARY KEY (id_rva);

ALTER TABLE cliente
    ADD CONSTRAINT dv_cli CHECK ( dv_cli IN ( '0', '1', '2', '3', '4',
                                          '5', '6', '7', '8', '9',
                                          'K', 'k' )
);

ALTER TABLE cliente
    ADD CONSTRAINT estado_cta CHECK ( est_cta IN ( 'activa', 'suspendida', 'en verificacion' ) 
);

ALTER TABLE cliente
    ADD CONSTRAINT val_tipo_cli CHECK ( tipo_cli IN ( 'frecuente', 'normal' )
);

ALTER TABLE cliente
    ADD CONSTRAINT cliente_usuario_fk FOREIGN KEY ( email_usr )
        REFERENCES usuario ( email_usr );

ALTER TABLE cliente ADD CONSTRAINT cliente_pk PRIMARY KEY ( email_usr, rut_cli );

ALTER TABLE comuna ADD CONSTRAINT comuna_pk PRIMARY KEY ( id_com );

ALTER TABLE comuna
    ADD CONSTRAINT comuna_region_fk FOREIGN KEY ( id_rgn )
        REFERENCES region ( id_rgn );

ALTER TABLE condominio ADD CONSTRAINT condominio_pk PRIMARY KEY ( id_cnd );

ALTER TABLE condominio
    ADD CONSTRAINT condominio_comuna_fk FOREIGN KEY ( id_com )
        REFERENCES comuna ( id_com );

ALTER TABLE cont_serv ADD CONSTRAINT cont_serv_pk PRIMARY KEY ( id_cont_serv );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_reserva_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva ( id_rva );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE departamento ADD CONSTRAINT departamento_pk PRIMARY KEY ( id_dpto );

ALTER TABLE departamento
    ADD CONSTRAINT departamento_condominio_fk FOREIGN KEY ( id_cnd )
        REFERENCES condominio ( id_cnd );

ALTER TABLE disponibilidad
    ADD CONSTRAINT val_disp CHECK ( esta_disp IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE disponibilidad
    ADD CONSTRAINT disponibilidad_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE disponibilidad ADD CONSTRAINT disponibilidad_pk PRIMARY KEY ( fec_disp , id_dpto );

ALTER TABLE funcionario
    ADD CONSTRAINT usuario_fk FOREIGN KEY ( email_usr )
        REFERENCES usuario ( email_usr );

ALTER TABLE funcionario ADD CONSTRAINT funcionario_pk PRIMARY KEY ( email_usr, id_func );

ALTER TABLE gastos ADD CONSTRAINT gastos_pk PRIMARY KEY ( id_gastos );

ALTER TABLE gastos
    ADD CONSTRAINT gastos_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE mantencion ADD CONSTRAINT mantencion_pk PRIMARY KEY ( id_mant );

ALTER TABLE mantencion
    ADD CONSTRAINT mantencion_res_mant_fk FOREIGN KEY ( id_rmant )
        REFERENCES res_mant ( id_rmant );

ALTER TABLE region ADD CONSTRAINT region_pk PRIMARY KEY ( id_rgn );

ALTER TABLE res_mant ADD CONSTRAINT res_mant_pk PRIMARY KEY ( id_rmant );

ALTER TABLE res_mant
    ADD CONSTRAINT res_mant_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE res_mant
    ADD CONSTRAINT administrador_fk FOREIGN KEY ( id_admin )
        REFERENCES administrador ( id_admin );

ALTER TABLE reserva ADD CONSTRAINT reserva_pk PRIMARY KEY ( id_rva );

ALTER TABLE reserva ADD CONSTRAINT estado_rva CHECK ( estado_rva IN ( 'en progreso', 'cancelada', 'reservada', 'terminada' ) );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_cliente_fk FOREIGN KEY ( rut_cli )
        REFERENCES cliente ( rut_cli );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE servextras
    ADD CONSTRAINT val_tipo_serv CHECK ( tipo_serv IN ( 'T', 'V' ) 
);

ALTER TABLE servextras ADD CONSTRAINT servextras_pk PRIMARY KEY ( id_serv );

ALTER TABLE servextras
    ADD CONSTRAINT servextras_agencia_externa_fk FOREIGN KEY ( id_agencia )
        REFERENCES agencia_externa ( id_agencia );

ALTER TABLE tour
    ADD CONSTRAINT val_aliment CHECK ( alimentacion IN ( 'No', 'Si', 'no', 'si' )
);

ALTER TABLE tour
    ADD CONSTRAINT val_trans CHECK ( transporte IN ( 'No', 'Si', 'no', 'si' )
);

ALTER TABLE tour
    ADD CONSTRAINT tour_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE tour ADD CONSTRAINT tour_pk PRIMARY KEY ( id_serv );

ALTER TABLE transporte ADD CONSTRAINT transporte_pk PRIMARY KEY ( id_serv );

ALTER TABLE transporte
    ADD CONSTRAINT transporte_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );

ALTER TABLE usuario ADD CONSTRAINT tipo_usr CHECK ( tipo_usr IN ( 'administrador', 'cliente', 'funcionario' ) );

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( email_usr );

ALTER TABLE usuario ADD CONSTRAINT usuario_tel_usr_un UNIQUE ( tel_usr );

ALTER TABLE conductor ADD CONSTRAINT conductor_pk PRIMARY KEY (rut_conduc);

ALTER TABLE conductor
    ADD CONSTRAINT dv_conduc CHECK ( dv_conduc IN ( '0', '1', '2', '3', '4',
                                          '5', '6', '7', '8', '9',
                                          'K', 'k' )
);

ALTER TABLE conductor ADD CONSTRAINT conductor_email_un UNIQUE (email_conduc);

ALTER TABLE conductor ADD CONSTRAINT conductor_tel_conduc_un UNIQUE (tel_conduc);

ALTER TABLE conductor ADD CONSTRAINT conductor_vehiculo_fk FOREIGN KEY (patente)
                        REFERENCES vehiculo (patente);

ALTER TABLE conductor ADD CONSTRAINT conductor_transporte_fk FOREIGN KEY (id_serv)
                    REFERENCES transporte ( id_serv );


ALTER TABLE vehiculo
    ADD CONSTRAINT valor_asiento CHECK ( asiento_nigno IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE vehiculo
    ADD CHECK ( per_silla IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_pk PRIMARY KEY (patente);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_modelo_fk FOREIGN KEY (id_modelo)
                        REFERENCES modelo ( id_modelo);

ALTER TABLE marca ADD CONSTRAINT marca_pk PRIMARY KEY (id_marca);

ALTER TABLE modelo ADD CONSTRAINT modelo_pk PRIMARY KEY (id_modelo);

ALTER TABLE modelo ADD CONSTRAINT modelo_marca_fk FOREIGN KEY (id_marca)
                        REFERENCES marca ( id_marca);

commit;
