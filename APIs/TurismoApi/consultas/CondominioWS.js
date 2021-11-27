const cnx = require('../cnx');

const sql = require('mssql');


//lista todos los condominio
async function getCondominios(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT * FROM condominio');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}




//lista 1 condominio
async function getCondominio(id_cnd){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_cnd', sql.Int, id_cnd)
        .query('SELECT *  FROM condominio where id_cnd = @id_cnd');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



//lista condominios por comuna
async function getCondominioCom(id_com){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_com', sql.Int, id_com)
        .query('select * from condominio as con inner join comuna as com on con.id_com = com.id_com  where com.id_com = @id_com');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



//lista condominios por region
async function getCondominioReg(id_rgn){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_rgn', sql.Int, id_rgn)
        .query('select * from condominio as con inner join comuna as com on con.id_com = com.id_com inner join  region as reg on com.id_rgn = reg.id_rgn where reg.id_rgn = @id_rgn');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



//crea una comuna

async function newCondominio(Condominio){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("nom_cnd", sql.NVarChar , Condominio.nom_cnd)
            .input("id_com", sql.Int , Condominio.id_com)
            .execute('pd_agregarCondominio');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


//actualiza la comuna
async function upCondominio(Condominio){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_cnd", sql.Int , Condominio.id_cnd)
            .input("nom_cnd", sql.NVarChar , Condominio.nom_cnd)
            .execute('pd_modificarCondominio');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}




// elimina una condominio
async function delCondominio(id_cnd){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_cnd', sql.Int, id_cnd)
        .execute('pd_eliminarCondominio');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getCondominio: getCondominio,
    getCondominios: getCondominios,
    newCondominio: newCondominio,
    upCondominio: upCondominio,
    delCondominio: delCondominio,
    getCondominioCom: getCondominioCom,
    getCondominioReg: getCondominioReg
}