const cnx = require('../cnx');

const sql = require('mssql');
//Listar pagos
async function getPago(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[pago]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

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
    getPago: getPago,
    NewPago: NewPago
}