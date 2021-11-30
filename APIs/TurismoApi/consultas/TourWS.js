const cnx = require('../cnx');

const sql = require('mssql');


//Listar Tours
async function getTours(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[tour]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

//Agregar Tour
async function NewTour(Tour){
    try{
        let pool = await sql.connect(cnx);
        let newTour = await pool.request()
            .input('id_serv', sql.Int , Tour.id_serv)
            .input('dur_hra', sql.Int , Tour.dur_hra)
            .input('dur_min', sql.Int , Tour.dur_min)
            .input('cost_adult', sql.Int , Tour.cost_adult)
            .input('cost_nigno', sql.Int , Tour.cost_nigno)
            .input('cost_3ra', sql.Int , Tour.cost_3ra)
            .input('ubi_partida', sql.NVarChar , Tour.ubi_partida)
            .input('ubi_fin', sql.NVarChar , Tour.ubi_fin)
            .input('alimentacion', sql.Char , Tour.alimentacion)
            .input('transporte', sql.Char , Tour.transporte)
            .execute('pd_agregarTour');
        return newTour.recordsets;
        
        
    } 
    catch(err){
        console.log(err);
    }
}

async function UpTour(Tour){
    try{
        let pool = await sql.connect(cnx);
        let upTour = await pool.request()
        .input('id_serv', sql.Int , Tour.id_serv)
        .input('dur_hra', sql.Int , Tour.dur_hra)
        .input('dur_min', sql.Int , Tour.dur_min)
        .input('cost_adult', sql.Int , Tour.cost_adult)
        .input('cost_nigno', sql.Int , Tour.cost_nigno)
        .input('cost_3ra', sql.Int , Tour.cost_3ra)
        .input('ubi_partida', sql.NVarChar , Tour.ubi_partida)
        .input('ubi_fin', sql.NVarChar , Tour.ubi_fin)
        .input('alimentacion', sql.Char , Tour.alimentacion)
        .input('transporte', sql.Char , Tour.transporte)
        .execute('pd_modificarTour');
        return upTour.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

module.exports = {
    getTours: getTours,
    NewTour: NewTour,
    UpTour: UpTour
}

