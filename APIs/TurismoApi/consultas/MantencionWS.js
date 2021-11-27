const cnx = require('../cnx');

const sql = require('mssql');

async function getMantencion(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[mantencion]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



async function newMantencion(mantencion){
    try{
        let pool = await sql.connect(cnx);
        let newMantencion = await pool.request()
            .input("cost_mant", sql.Int , mantencion.cost_mant)
            .input("deta_mant", sql.NVarChar , mantencion.deta_mant)
            .input("id_rmant", sql.Int , mantencion.id_rmant)
            .execute('pd_agregarMantencion');
        console.log('Se a registrado la mantención')
        return newMantencion.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

async function upMantencion(mantencion){
    try{
        let pool = await sql.connect(cnx);
        let newMantencion = await pool.request()
        .input("cost_mant", sql.Int , mantencion.cost_mant)
        .input("deta_mant", sql.NVarChar , mantencion.deta_mant)
        .input("id_rmant", sql.Int , mantencion.id_rmant)
        .execute('pd_modificarMantencion');
        console.log('Se a actualizado la mantención')
        return newMantencion.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

// elimina una comuna
async function delMantencion(id_rmant){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_rmant', sql.Int, id_rmant)
        .execute('pd_eliminarMantencion');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getMantencion: getMantencion,
    newMantencion : newMantencion,
    upMantencion : upMantencion,
    delMantencion: delMantencion
}
