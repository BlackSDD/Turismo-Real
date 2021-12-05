const cnx = require('../cnx');

const sql = require('mssql');

async function getReservasMantenciones(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT * FROM res_mant');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

async function getReservaMantencionID(mantencion){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_rmant', sql.Int, mantencion.id_rmant)
        .execute('pd_getMantencionID');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}


//crea una reserva de mantencion

async function newReservaMantencion(res_mant){
    try{
        let pool = await sql.connect(cnx);
        let newResMantencion = await pool.request()
            .input("fec_rmant", sql.Date , res_mant.fec_rmant)
            .input("id_dpto", sql.Int , res_mant.id_dpto)
            .input("id_usr", sql.Int , res_mant.id_usr)
            .execute('pd_agregarResMant');
        return newResMantencion.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


//actualiza la comuna
async function upReservaMantenciont(res_mant){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_rmant", sql.Int , res_mant.id_rmant)
            .input("fec_rmant", sql.Date , res_mant.fec_rmant)
        .execute('pd_modificarResMant');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}







module.exports = {
    getReservaMantencionID: getReservaMantencionID,
    getReservasMantenciones: getReservasMantenciones,
    newReservaMantencion: newReservaMantencion,
    upReservaMantenciont: upReservaMantenciont
}