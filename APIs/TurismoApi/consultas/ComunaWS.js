const cnx = require('../cnx');

const sql = require('mssql');


//lista todas las comunas
async function getComunas(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[comuna]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}




//lista 1 comuna
async function getComuna(id_com){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_com', sql.Int, id_com)
        .query('SELECT *  FROM comuna where id_com = @id_com');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}


//crea una comuna

async function newComuna(Comuna){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("nom_com", sql.NVarChar , Comuna.nom_com)
            .input("id_rgn", sql.Int , Comuna.id_rgn)
            .execute('pd_agregarComuna');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


//actualiza la comuna
async function upComuna(Comuna){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_com", sql.Int , Comuna.id_com)
            .input("nom_com", sql.NVarChar , Comuna.nom_com)
            .execute('pd_modificarComuna');
        console.log('Accion realizada');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}




// elimina una comuna
async function delComuna(Comuna){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_com", sql.Int , Comuna.id_com)
            .execute('pd_eliminarComuna');
        console.log("se elimino la comuna")    
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getComunas: getComunas,
    getComuna: getComuna,
    newComuna: newComuna,
    upComuna: upComuna,
    delComuna: delComuna,
    getComuna: getComuna
}