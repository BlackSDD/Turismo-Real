const cnx = require('../cnx');

const sql = require('mssql');


//lista todos los departamentos
async function getMarca(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[marca]');
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }

}


async function getModelo(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[modelo]');
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }

}


async function getVehiculo(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[vehiculo]');
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }

}

async function getConductor(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[vehiculo]');
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }

}


async function getTipo(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[tipo_usuario]');
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }

}



module.exports = {
    getMarca: getMarca,
    getModelo: getModelo,
    getVehiculo: getVehiculo,
    getConductor: getConductor,
    getTipo: getTipo,
}