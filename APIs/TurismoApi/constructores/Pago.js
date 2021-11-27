class Pago{
    constructor(
        id_rva,
        monto_total,
        monto_arr,
        abono_req,
        monto_serv_extra,
        monto_multas,
        monto_pagado,
        est_pago
    ){
        id_rva = id_rva,
        monto_total = monto_total,
        monto_arr = monto_arr,
        abono_req = abono_req,
        monto_serv_extra = monto_serv_extra,
        monto_multas = monto_multas,
        monto_pagado = monto_pagado,
        est_pago = est_pago

    }
}

module.exports = Pago