const cnx = require('../cnx');

const sql = require('mssql');


//lista todas las agencias
async function getAgencias(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT * FROM agencia_externa');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}




//lista 1 agencia
async function getAgencia(id_agencia){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_agencia', sql.Int, id_agencia)
        .query('SELECT *  FROM condominio where id_agencia = @id_agencia');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



//lista agencias por comuna
async function getAgenciaCom(id_com){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_com', sql.Int, id_com)
        .query('select * from agencia_externa as age inner join comuna as com on age.id_com = com.id_com  where com.id_com = @id_com');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



//lista agencias por region
async function getAgenciaReg(id_rgn){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_rgn', sql.Int, id_rgn)
        .query('select * from agencia_externa as age inner join comuna as com on age.id_com = com.id_com inner join  region as reg on com.id_rgn = reg.id_rgn where reg.id_rgn = @id_rgn');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



//crea una agencia

async function newAgencia(AgenciaExterna){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("nom_age", sql.NVarChar , AgenciaExterna.nom_age)
            .input("email_age", sql.NVarChar , AgenciaExterna.email_age)
            .input("tel_age", sql.Int , AgenciaExterna.tel_age)
            .input("id_com", sql.Int , AgenciaExterna.id_com)
            .execute('pd_agregarAgenciaExterna');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


//actualiza la agencia
async function upAgencia(AgenciaExterna){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_agencia", sql.Int , AgenciaExterna.id_agencia)
            .input("nom_age", sql.NVarChar , AgenciaExterna.nom_age)
            .input("email_age", sql.NVarChar , AgenciaExterna.email_age)
            .input("tel_age", sql.Int , AgenciaExterna.tel_age)
            .execute('pd_modificarAgenciaExterna');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}




// elimina una comuna
async function delAgencia(AgenciaExterna){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
        .input("id_agencia", sql.Int , AgenciaExterna.id_agencia)
            .execute('pd_eliminarAgenciaExterna');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getAgencias: getAgencias,
    getAgencia: getAgencia,
    getAgenciaCom: getAgenciaCom,
    getAgenciaReg: getAgenciaReg,
    newAgencia: newAgencia,
    upAgencia: upAgencia,
    delAgencia: delAgencia
}