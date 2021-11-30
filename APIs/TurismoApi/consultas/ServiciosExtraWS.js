const cnx = require('../cnx');

const sql = require('mssql');

//Listar Servicios extra
async function getServiciosExtras(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from servextras');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}
//Ver un servicio extra
async function getServicoExtra(id_serv){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_serv', sql.Int, id_serv)
        .query('SELECT *  FROM servextras where id_serv = @id_serv');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}


//Agregar un servicio extra
async function newServicioExtra(ServiciosExtras){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("nom_serv", sql.NVarChar , ServiciosExtras.nom_serv)
            .input("tipo_serv", sql.Char , ServiciosExtras.tipo_serv)
            .input("desc_serv", sql.NVarChar , ServiciosExtras.desc_serv)
            .input("id_agencia", sql.Int , ServiciosExtras.id_agencia)
            .execute('pd_agregarServExtras');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


module.exports = {
    getServiciosExtras: getServiciosExtras,
    getServicoExtra: getServicoExtra,
    newServicioExtra: newServicioExtra
}