const cnx = require('../cnx');

const sql = require('mssql');


//lista articulos por dpto
async function getArticulos(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_dpto', sql.Int, id_dpto)
        .query('SELECT * FROM articulo where id_dpto = @id_dpto');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}




//lista 1 articulo
async function getArticulo(id_arti){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_arti', sql.Int, id_arti)
        .query('SELECT *  FROM condominio where id_agencia = @id_arti');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}





//crea una agencia

async function newArticulo(Articulo){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("nom_arti", sql.NVarChar , Articulo.nom_arti)
            .input("cant_arti", sql.Int , Articulo.cant_arti)
            .input("deta_arti", sql.NVarChar , Articulo.deta_arti)
            .input("valor_arti", sql.Int , Articulo.valor_arti)
            .input("id_dpto", sql.Int , Articulo.id_dpto)
            .execute('pd_agregarArticulo');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


//actualiza la agencia
async function upArticulo(Articulo){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_arti", sql.Int , Articulo.id_arti)
            .input("nom_arti", sql.NVarChar , Articulo.nom_arti)
            .input("cant_arti", sql.Int , Articulo.cant_arti)
            .input("deta_arti", sql.NVarChar , Articulo.deta_arti)
            .input("valor_arti", sql.Int , Articulo.valor_arti)
            .execute('pd_modificarArticulo');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}




// elimina una comuna
async function delArticulo(Articulo){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
        .input("id_arti", sql.Int , Articulo.id_arti)
            .execute('pd_eliminarArticulo');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getArticulos: getArticulos,
    getArticulo: getArticulo,
    newArticulo: newArticulo,
    upArticulo: upArticulo,
    delArticulo: delArticulo
}

