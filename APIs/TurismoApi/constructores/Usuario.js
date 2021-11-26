class Usuario{
    constructor(
        email_usr,
        contr_usr,
        nom_usr,
        appat_usr,
        apmat_usr,
        tel_usr,
        rut_usr,
        dv_usr,
        cant_res,
        est_cta,
        tipo_cli,
        id_tipo_usr
    
    ){

        this.email_usr = email_usr,
        this.contr_usr = contr_usr,
        this.nom_usr = nom_usr,
        this.appat_usr = appat_usr,
        this.apmat_usr = appat_usr,
        this.tel_usr = tel_usr,
        this.rut_usr = rut_usr,
        this.dv_usr = dv_usr,
        this.cant_res = cant_res,
        this.est_cta = est_cta,
        this.tipo_cli = tipo_cli,
        this.id_tipo_usr = id_tipo_usr
    }
}


module.exports =Usuario;