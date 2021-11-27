
const cnx = require('../cnx');

const sql = require('mssql');


//lista CheckIn por dpto
async function getCheckOuts(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_dpto', sql.Int, id_dpto)
        .query('SELECT * FROM checkout as che inner join reserva as res on che.id_rva = res.id_rva  inner join departamento  as dep on res.id_dpto = dep.id_dpto where dep.id_dpto = @id_dpto');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}




//lista 1 checkin
async function getCheckOut(id_rva){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_rva', sql.Int, id_rva)
        .query('SELECT *  FROM checkin where id_rva = @id_rva');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}





//crea un check in

async function newCheckOut(CheckOut){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_rva", sql.Int , CheckOut.id_rva)
            .input("deta_chi", sql.NVarChar , CheckOut.deta_chi)
            .input("id_usr", sql.Int , CheckOut.id_usr)
            .execute('pd_agregarCheckin');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


//actualiza la agencia
async function upCheckOut(CheckOut){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_rva", sql.Int , CheckOut.id_rva)
            .input("deta_chi", sql.NVarChar , CheckOut.deta_chi)
            .input("id_usr", sql.Int , CheckOut.id_usr)
            .execute('pd_modificarCheckout');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getCheckOuts: getCheckOuts,
    getCheckOut: getCheckOut,
    newCheckOut: newCheckOut,
    upCheckOut: upCheckOut
}