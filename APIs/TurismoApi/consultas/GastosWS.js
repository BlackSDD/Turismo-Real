const cnx = require('../cnx');

const sql = require('mssql');

//listar todos los gastos
async function getGastos(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[gastos]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

// listar gastos de un departamento en especifico
async function getGastosPorDepartamento(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_dpto', sql.Int, id_dpto)
        .query('SELECT *  FROM gastos where id_dpto = @id_dpto');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

async function NewGastos(Gastos){
    try{
        let pool = await sql.connect(cnx);
        let newGastos = await pool.request()
        .input("gasto_luz ", sql.Int , Gastos.gasto_luz )
        .input("gasto_agua", sql.Int , Gastos.gasto_agua)
        .input("gasto_gas", sql.Int , Gastos.gasto_gas  )
        .input("gasto_servicios", sql.Int , Gastos.gasto_servicios)
        .input("gasto_dividendo", sql.Int , Gastos.gasto_dividendo)
        .input("gasto_comunes", sql.Int , Gastos.gasto_comunes)
        .input("id_dpto", sql.Int , Gastos.id_dpto)
        .execute('pd_agregarGastos');
        return newGastos.recordsets;
        
        
    } 
    catch(err){
        console.log(err);
    }
}


// Eliminar registro de gastos
async function delGastos(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_dpto', sql.Int, id_dpto)
        .execute('pd_eliminarGastos');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

async function UpGastos(Gastos){
    try{
        let pool = await sql.connect(cnx);
        let upGastos = await pool.request()
            .input("gasto_luz", sql.Int , Gastos.gasto_luz )
            .input("gasto_agua", sql.Int , Gastos.gasto_agua)
            .input("gasto_gas", sql.Int , Gastos.gasto_gas  )
            .input("gasto_servicios", sql.Int , Gastos.gasto_servicios)
            .input("gasto_dividendo", sql.Int , Gastos.gasto_dividendo)
            .input("gasto_comunes", sql.Int , Gastos.gasto_comunes)
            .input("id_dpto", sql.Int , Gastos.id_dpto)
            .execute('pd_modificarGastos');
        return upGastos.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


module.exports = {
    getGastos: getGastos,
    getGastosPorDepartamento : getGastosPorDepartamento,
    NewGastos: NewGastos,
    delGastos: delGastos,
    upGastos: UpGastos
}