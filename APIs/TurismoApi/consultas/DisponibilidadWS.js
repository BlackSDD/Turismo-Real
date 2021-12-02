const cnx = require('../cnx');
const sql = require('mssql');

async function getDisponibilidad(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_dpto", sql.Int , id_dpto)
        .query('SELECT *  FROM disponibilidad where id_dpto = @id_dpto');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}

async function getNoDisponibe(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_dpto", sql.Int , id_dpto.Depto)
        .execute('pd_fechas_no_disp');
        console.log(salida.recordsets);
        return salida.recordsets; 
    } 
    catch(err){
        console.log(err);
    }
}

async function getNoDisponibleJson(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_dpto", sql.Int , id_dpto.id_dpto)
        .execute('pd_fechas_no_dispJson');
        console.log(salida.recordsets);
        return salida.recordsets; 
    } 
    catch(err){
        console.log(err);
    }
}




module.exports = {
    getDisponibilidad: getDisponibilidad,
    getNoDisponibe: getNoDisponibe,
    getNoDisponibleJson: getNoDisponibleJson
}