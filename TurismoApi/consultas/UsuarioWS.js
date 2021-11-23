const cnx = require('../cnx');

const sql = require('mssql');


async function getUsuari(Usuario){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('email_usr', sql.NVarChar, Usuario.email_usr)
        .input('contr_usr', sql.NVarChar, Usuario.contr_usr)
        .query('SELECT *  FROM  usuario where email_usr = @email_usr and contr_usr = @contr_usr');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

module.exports = {
    getUsuari : getUsuari
}
