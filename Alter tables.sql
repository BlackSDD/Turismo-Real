ALTER TABLE tipo_usuario ADD CONSTRAINT id_tipo_usr PRIMARY KEY (id_tipo_usr);

ALTER TABLE tipo_usuario ADD CONSTRAINT tipo_usr CHECK ( tipo_usr IN ( 'administrador', 'cliente', 'funcionario' ) );

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( id_usr );

ALTER TABLE usuario ADD CONSTRAINT usuario_tel_usr_un UNIQUE ( tel_usr );

ALTER TABLE usuario ADD CONSTRAINT usuario_email_usr_un UNIQUE ( email_usr );        

ALTER TABLE usuario ADD CONSTRAINT usuario_rut_usr_un UNIQUE ( rut_usr );

ALTER TABLE usuario
    ADD CONSTRAINT dv_usr CHECK ( dv_usr IN ( '0', '1', '2', '3', '4',
                                          '5', '6', '7', '8', '9',
                                          'K', 'k' )
);

ALTER TABLE usuario
    ADD CONSTRAINT est_cta CHECK ( est_cta IN ( 'activa', 'suspendida', 'en verificacion' ) 
);

ALTER TABLE usuario
    ADD CONSTRAINT val_tipo_cli CHECK ( tipo_cli IN ( 'frecuente', 'normal' )
);

ALTER TABLE region ADD CONSTRAINT region_pk PRIMARY KEY ( id_rgn );

ALTER TABLE comuna ADD CONSTRAINT comuna_pk PRIMARY KEY ( id_com );

ALTER TABLE comuna
    ADD CONSTRAINT comuna_region_fk FOREIGN KEY ( id_rgn )
        REFERENCES region ( id_rgn );

ALTER TABLE condominio ADD CONSTRAINT condominio_pk PRIMARY KEY ( id_cnd );

ALTER TABLE condominio
    ADD CONSTRAINT condominio_comuna_fk FOREIGN KEY ( id_com )
        REFERENCES comuna ( id_com );

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

ALTER TABLE gastos ADD CONSTRAINT gastos_pk PRIMARY KEY ( id_gastos );

ALTER TABLE gastos
    ADD CONSTRAINT gastos_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE articulo ADD CONSTRAINT articulo_pk PRIMARY KEY ( id_arti );

ALTER TABLE articulo
    ADD CONSTRAINT articulo_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE res_mant ADD CONSTRAINT res_mant_pk PRIMARY KEY ( id_rmant );

ALTER TABLE res_mant
    ADD CONSTRAINT res_mant_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE res_mant
    ADD CONSTRAINT res_mant_usuario_fk FOREIGN KEY ( id_usr )
        REFERENCES usuario ( id_usr );

ALTER TABLE mantencion ADD CONSTRAINT mantencion_pk PRIMARY KEY ( id_mant );

ALTER TABLE mantencion
    ADD CONSTRAINT mantencion_res_mant_fk FOREIGN KEY ( id_rmant )
        REFERENCES res_mant ( id_rmant );

ALTER TABLE reserva ADD CONSTRAINT reserva_pk PRIMARY KEY ( id_rva );

ALTER TABLE reserva ADD CONSTRAINT estado_rva CHECK ( estado_rva IN ( 'en progreso', 'cancelada', 'reservada', 'terminada' ) );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_usuario_fk FOREIGN KEY ( id_usr )
        REFERENCES usuario ( id_usr );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_departamento_fk FOREIGN KEY ( id_dpto )
        REFERENCES departamento ( id_dpto );

ALTER TABLE pago
    ADD CONSTRAINT pago_reserva_fk FOREIGN KEY (id_rva)
        REFERENCES reserva (id_rva);

ALTER TABLE pago ADD CONSTRAINT pago_pk PRIMARY KEY (id_rva);

ALTER TABLE pago
    ADD CONSTRAINT est_pago CHECK (est_pago IN ('abonado','abono pendiente','pagado totalmente','cancelado'));

ALTER TABLE checkin
    ADD CONSTRAINT checkin_reserva_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva (id_rva);

ALTER Table checkin 
    ADD CONSTRAINT checkin_usuario_fk FOREIGN KEY (id_usr)
        REFERENCES usuario (id_usr);

ALTER TABLE checkin
    ADD CONSTRAINT checkin_pk PRIMARY KEY (id_rva);

ALTER TABLE checkout
    ADD CONSTRAINT checkout_reserva_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva (id_rva);

ALTER TABLE checkout    
    ADD CONSTRAINT checkout_usuario_fk FOREIGN KEY (id_usr)
        REFERENCES usuario (id_usr);

ALTER TABLE checkout
    ADD CONSTRAINT checkout_pk PRIMARY KEY (id_rva);


ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_pk PRIMARY KEY ( id_agencia );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_email_age_un UNIQUE ( email_age );

ALTER TABLE agencia_externa ADD CONSTRAINT agencia_externa_tel_age_un UNIQUE ( tel_age );

ALTER TABLE agencia_externa
    ADD CONSTRAINT agencia_comuna_fk FOREIGN KEY ( id_com )
        REFERENCES comuna ( id_com );

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

ALTER TABLE marca ADD CONSTRAINT marca_pk PRIMARY KEY (id_marca);

ALTER TABLE modelo ADD CONSTRAINT modelo_pk PRIMARY KEY (id_modelo);

ALTER TABLE modelo ADD CONSTRAINT modelo_marca_fk FOREIGN KEY (id_marca)
                        REFERENCES marca ( id_marca);

ALTER TABLE vehiculo
    ADD CONSTRAINT valor_asiento CHECK ( asiento_nigno IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE vehiculo
    ADD CHECK ( per_silla IN ( 'No', 'Si', 'no', 'si' ) 
);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_pk PRIMARY KEY (patente);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_modelo_fk FOREIGN KEY (id_modelo)
                        REFERENCES modelo ( id_modelo);

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


ALTER TABLE cont_serv 
    ADD CONSTRAINT est_cont CHECK (est_cont IN ('cancelado','reservado','realizado')
);

ALTER TABLE cont_serv ADD CONSTRAINT cont_serv_pk PRIMARY KEY ( id_cont_serv );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_reserva_fk FOREIGN KEY ( id_rva )
        REFERENCES reserva ( id_rva );

ALTER TABLE cont_serv
    ADD CONSTRAINT cont_serv_servextras_fk FOREIGN KEY ( id_serv )
        REFERENCES servextras ( id_serv );
        

commit;
