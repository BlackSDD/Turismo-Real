const cnx = require('../cnx');
const sql = require('mssql');

//Listar todas las regiones
async function getRegion(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[region]');
        console.log(salida.recordsets);
        return salida.recordsets; 
    } 
    catch(err){
        console.log(err);
    }
}

module.exports = {
    getRegion: getRegion
}