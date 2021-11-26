const cnx = require('../cnx');

const sql = require('mssql');

//crea una Pago

async function NewPago(Pago){
    try{
        let pool = await sql.connect(cnx);
        let newPago = await pool.request()
            .input("id_rva", sql.Int , Pago.id_rva)
            .input("monto_pagado", sql.Int , Pago.monto_pagado)
            .execute('pd_agregarPago');
        return newPago.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    NewPago: NewPago
}