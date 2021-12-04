const cnx = require('../cnx');

const sql = require('mssql');

//Get reserva por id 

async function getReservaId(id_rva){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_rva", sql.Int , id_rva)
        .query('SELECT *  FROM reserva where id_rva = @id_rva');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}

async function getReservasCheck(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .execute('pd_reservas_chek');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}

async function getReservasProgress(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .execute('pd_reservas_in_progress');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}

//Listar todas las reservas
async function getReservas(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[reserva]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}


//Registrar una reserva
async function NewReserva(Reserva){
    try{
        let pool = await sql.connect(cnx);
        let newReserva = await pool.request()
            .input('fec_ini_rva', sql.Date , Reserva.fec_ini_rva)
            .input('fec_fin_rva', sql.Date , Reserva.fec_fin_rva)
            .input('num_pers', sql.Int , Reserva.num_pers)
            .input('id_dpto', sql.Int , Reserva.id_dpto)
            .input('id_usr', sql.Int , Reserva.id_usr)
            .execute('pd_agregarReserva');
        return newReserva.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}

//Modificar reserva
async function UpReserva(Reserva){
    try{
        let pool = await sql.connect(cnx);
        let upReserva = await pool.request()
            .input("id_rva", sql.Int , Reserva.id_dpto)
            .input("num_per", sql.Int , Reserva.dir_dpto)
            .input('estado_rva', sql.NVarChar , Reserva.estado_rva)
            .execute('pd_modificarReserva');
            console.log('Reserva cancelada');
            return upReserva.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

// Eliminar reserva

async function UpCancelarReserva(id_rva){

    try{
        let pool = await sql.connect(cnx);
        let upCancelarReserva = await pool.request()
            .input("id_rva", sql.Int , id_rva)
            .execute('pd_eliminarReserva');
        console.log('Reserva cancelada');
        return upCancelarReserva.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

async function getCurrentRva(id_usr){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
            .input("id_usr", sql.Int, id_usr.id_usr)
            .execute('pd_reserva_ondoing');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        console.log(err);
    }
}


module.exports = {
    getReservas: getReservas,
    NewReserva: NewReserva,
    UpReserva: UpReserva,
    UpCancelarReserva: UpCancelarReserva,
    getReservaId: getReservaId,
    getCurrentRva: getCurrentRva,
    getReservasProgress: getReservasProgress,
    getReservasCheck: getReservasCheck
}

