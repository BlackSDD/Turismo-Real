class ContratarServicio{
    constructor(
        deta_cont,
        fec_acord,
        hora_acord,
        lugar_recogida,
        lugar_destino,
        km_rec,
        id_rva,
        id_serv,
        cant_adult,
        cant_nino,
        cant_3ra
    ){
        this.deta_cont = deta_cont,
        this.fec_acord = fec_acord,
        this.hora_acord = hora_acord,
        this.lugar_recogida = lugar_recogida,
        this.lugar_destino = lugar_destino,
        this.km_rec = km_rec,
        this.id_rva = id_rva,
        this.id_serv = id_serv,
        this.cant_adult = cant_adult,
        this.cant_nino = cant_nino,
        this.cant_3ra = cant_3ra

    }
}

module.exports = ContratarServicio