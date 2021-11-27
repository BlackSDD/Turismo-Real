const cnx = require('../cnx');

const sql = require('mssql');

async function getContratarServicio(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[cont_serv]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



async function newContratarServicio(ContratarServicio){
    try{
        let pool = await sql.connect(cnx);
        let newServicio = await pool.request()
            .input('deta_cont', sql.NVarChar , ContratarServicio.deta_cont)
            .input('fec_acord', sql.Date , ContratarServicio.fec_acord)
            .input('hora_acord', sql.Char , ContratarServicio.hora_acord)
            .input('lugar_recogida', sql.NVarChar , ContratarServicio.lugar_recogida)
            .input('lugar_destino', sql.NVarChar , ContratarServicio.lugar_destino)
            .input('km_rec', sql.Decimal , ContratarServicio.km_rec)
            .input('id_rva', sql.Int , ContratarServicio.id_rva)
            .input('id_serv', sql.Int , ContratarServicio.id_serv)
            .input('cant_adult', sql.Int , ContratarServicio.cant_adult)
            .input('cant_nino', sql.Int , ContratarServicio.cant_nino)
            .input('cant_3ra', sql.Int , ContratarServicio.cant_3ra)
            .execute('pd_agregarContServ');
        return newServicio.recordsets;
              
    } 
    catch(err){
        console.log(err);
    }
}

async function upContratarServicio(ContratarServicio){
    try{
        let pool = await sql.connect(cnx);
        let newServicio = await pool.request()
            
            .input('id_cont', sql.Int , ContratarServicio.id_cont)
            .input('deta_cont', sql.NVarChar , ContratarServicio.deta_cont)
            .input('fec_acord', sql.Date , ContratarServicio.fec_acord)
            .input('hora_acord', sql.Char , ContratarServicio.hora_acord)
            .input('lugar_recogida', sql.NVarChar , ContratarServicio.lugar_recogida)
            .input('lugar_destino', sql.NVarChar , ContratarServicio.lugar_destino)
            .input('km_rec', sql.Decimal , ContratarServicio.km_rec)
            .input('cant_adult', sql.Int , ContratarServicio.cant_adult)
            .input('cant_nigno', sql.Int , ContratarServicio.cant_nigno)
            .input('cant_3ra', sql.Int , ContratarServicio.cant_3ra)
            .execute('pd_modificarContServ');
        
        return newServicio.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

async function delContratarServicio(id_cont_serv){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_cont_serv', sql.Int, id_cont_serv)
        .execute('pd_eliminarContServ');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



module.exports = {
    getContratarServicio: getContratarServicio,
    newContratarServicio: newContratarServicio,
    upContratarServicio: upContratarServicio,
    delContratarServicio: delContratarServicio
}