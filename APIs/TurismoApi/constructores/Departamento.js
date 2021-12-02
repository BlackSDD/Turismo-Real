class Departamento{
    constructor(
        id_dpto,
        dir_dpto , 
	    num_dpto , 
	    n_amb_dpto , 
	    desc_dpto , 
	    costo_arri_dpto ,
        id_cnd,
    ){
        this.id_dpto = id_dpto;
        this.dir_dpto = dir_dpto;
        this.num_dpto = num_dpto;
        this.n_amb_dpto = n_amb_dpto;
        this.desc_dpto = desc_dpto;
        this.costo_arri_dpto = costo_arri_dpto;
        this.id_cnd = id_cnd;
    }
}


module.exports =Departamento;