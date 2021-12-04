const cnx = require('../cnx');

const sql = require('mssql');

//////////////////////////INFORME RESERVAS GENERAL///////////////////////////////

async function getInformeReservaGen(InformeGeneral){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
            .input("agno", sql.Int , InformeGeneral.agno)
            .execute('pd_informe_reserva_gen');
        console.log('salida.recordsets');
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (err);
    }
}


////////////////////////INFORME RESERVAS DETALLADO/////////////////////////////////////////
async function getInformeReservaDet(id_rva){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
            .input("id_rva", sql.Int , id_rva.reserva)
            .execute('pd_informe_reserva_det');
        console.log('salida.recordsets');
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (err);s
    }
}

async function getInformeReservaDetServ(id_reserva){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
            .input("id_reserva", sql.Int , id_reserva)
            .execute('pd_informe_reserva_det_serv');
        console.log('salida.recordsets');
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (err);
    }
}
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////

module.exports = {
    getInformeReservaDet: getInformeReservaDet,
    getInformeReservaDetServ: getInformeReservaDetServ,
    getInformeReservaGen:getInformeReservaGen,

}
