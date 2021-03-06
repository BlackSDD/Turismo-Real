
const cnx = require('../cnx');

const sql = require('mssql');


//lista CheckIn por dpto
async function getCheckIns(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_dpto', sql.Int, id_dpto)
        .query('SELECT * FROM checkin as che inner join reserva as res on che.id_rva = res.id_rva  inner join departamento  as dep on res.id_dpto = dep.id_dpto where dep.id_dpto = @id_dpto');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}




//lista 1 checkin
async function getCheckIn(id_rva){
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

async function newCheckIn(CheckIn){
    try{
        let pool = await sql.connect(cnx);
        let newCheckIn = await pool.request()
            .input("id_rva", sql.Int , CheckIn.id_rva)
            .input("deta_chi", sql.NVarChar , CheckIn.deta_chi)
            .input("id_usr", sql.Int , CheckIn.id_usr)
            .execute('pd_agregarCheckin');
        return newCheckIn.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


//actualiza la agencia
async function upCheckIn(CheckIn){
    try{
        let pool = await sql.connect(cnx);
        let newCheckIn = await pool.request()
            .input("id_rva", sql.Int , CheckIn.id_rva)
            .input("deta_chi", sql.NVarChar , CheckIn.deta_chi)
            .execute('pd_modificarCheckin');
        return newCheckIn.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getCheckIns: getCheckIns,
    getCheckIn: getCheckIn,
    newCheckIn: newCheckIn,
    upCheckIn: upCheckIn
}