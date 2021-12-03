const cnx = require('../cnx');

const sql = require('mssql');

///listar tarifas de transporte
async function getTransportes(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from transporte inner join servextras on transporte.id_serv = servextras.id_serv');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

///Registrar trasnporte
async function NewTransporte(Transporte){
    try{
        let pool = await sql.connect(cnx);
        let newTransporte = await pool.request()
            .input("id_serv", sql.Int , Transporte.id_serv)
            .input("cost_km_dia", sql.Int , Transporte.cost_km_dia)
            .input("cost_km_noc", sql.Int , Transporte.cost_km_noc)
            .execute('pd_agregarTransporte');
        return newTransporte.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}
//Modificar transporte
async function UpTransporte(Transporte){
    try{
        let pool = await sql.connect(cnx);
        let upTransporte = await pool.request()
        .input("id_serv", sql.Int , Transporte.id_serv)
        .input("cost_km_dia", sql.Int , Transporte.cost_km_dia)
        .input("cost_km_noc", sql.Int , Transporte.cost_km_noc)
        .execute('pd_modificarTransporte');
        return upTransporte.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    getTransportes: getTransportes,
    NewTransporte: NewTransporte,
    UpTransporte: UpTransporte
}