const cnx = require('../cnx');
const sql = require('mssql');


async function getDestinos(servicio){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_serv", sql.Int , servicio.id_serv)
        .input("id_dpto", sql.Int, servicio.id_dpto)
        .execute('pd_getDestinos');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}

async function newDestino(servicio){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_serv", sql.Int , servicio.id_serv)
        .input("id_dpto", sql.Int, servicio.id_dpto)
        .input("trayecto", sql.NVarChar, servicio.trayecto)
        .input("tipo", sql.Char, servicio.tipo)
        .input("km_rec", sql.Decimal, servicio.km_rec)
        .input("direccion", sql.NVarChar, servicio.direccion)
        .execute('pd_agregar_destino');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procedimiento ${err.procName}...${err.message}`);
    }
}

async function deleteDestino(servicio){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_destino", sql.Int , servicio.id_destino)
        .execute('pd_eliminar_destino');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procedimiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    getDestinos: getDestinos,
    newDestino: newDestino,
    deleteDestino: deleteDestino
}