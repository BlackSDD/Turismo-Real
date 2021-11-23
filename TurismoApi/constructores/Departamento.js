class Departamento{
    constructor(
        id_dpto,
        dir_dpto , 
	    num_dpto , 
	    n_amb_dpto , 
	    desc_dpto , 
	    costo_arri_dpto , 
	    img_1_dpto , 
	    img_2_dpto , 
	    img_3_dpto ,
	    img_4_dpto , 
	    img_5_dpto ,
        id_cnd,
        nom_rgn 	
    ){
        this.id_dpto = id_dpto;
        this.dir_dpto = dir_dpto;
        this.num_dpto = num_dpto;
        this.n_amb_dpto = n_amb_dpto;
        this.desc_dpto = desc_dpto;
        this.costo_arri_dpto = costo_arri_dpto;
        this.img_1_dpto = img_1_dpto;
        this.img_2_dpto = img_2_dpto;
        this.img_3_dpto = img_3_dpto;
        this.img_4_dpto = img_4_dpto;
        this.img_5_dpto = img_5_dpto;
        this.id_cnd = id_cnd;
        this.nom_rgn = nom_rgn;
    }
}


module.exports =Departamento;