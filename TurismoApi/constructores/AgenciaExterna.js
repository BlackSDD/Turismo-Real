class AgenciaExterna{
    constructor(

        id_agencia,
        nom_age,
        email_age,
        tel_age,
	    id_com ,
        id_rgn 
    ){
        this.id_agencia = id_agencia;
        this.nom_age = nom_age;
        this.email_age = email_age;
        this.tel_age = tel_age;
        this.id_com = id_com;
        this.id_rgn = id_rgn;
    }
}


module.exports = AgenciaExterna;