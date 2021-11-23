class Condominio{
    constructor(
        id_cnd,
        nom_cnd, 
	    id_com ,
        id_rgn 
    ){
        this.id_cnd = id_cnd;
        this.nom_cnd = nom_cnd;
        this.id_com = id_com;
        this.id_rgn = id_rgn;
    }
}


module.exports = Condominio;