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




module.exports = {
    getDisponibilidad: getDisponibilidad,
    
}