class Articulo{
    constructor(
        id_arti,
        nom_arti, 
	    cant_arti,
        deta_arti,
        valor_arti,
        id_dpto
    ){
        this.id_arti = id_arti;
        this.nom_arti = nom_arti;
        this.cant_arti = cant_arti;
        this.deta_arti = deta_arti;
        this.valor_arti = valor_arti;
        this.id_dpto = id_dpto;
    }
}


module.exports =Articulo;