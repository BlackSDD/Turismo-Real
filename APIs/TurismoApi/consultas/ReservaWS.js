const cnx = require('../cnx');

const sql = require('mssql');
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
            .input('id_rva', sql.Int , Reserva.id_rva)
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

module.exports = {
    getReservas: getReservas,
    NewReserva: NewReserva,
    UpReserva: UpReserva,
    UpCancelarReserva: UpCancelarReserva
}

