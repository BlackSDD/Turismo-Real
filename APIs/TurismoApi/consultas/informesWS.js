const cnx = require('../cnx');

const sql = require('mssql');


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
    UpCancelarReserva: UpCancelarReserva,
    getReservaId: getReservaId
}
