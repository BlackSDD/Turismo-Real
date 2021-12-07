const cnx = require('../cnx');

const sql = require('mssql');

//////////////////////////INFORME RESERVAS GENERAL///////////////////////////////

async function Departamentoxdia(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Depto_x_dia');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}
//////////////////////////////////////////////////////////
async function DepartamentoxSemana(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Depto_x_semana');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

//////////////////////////////////////////////////////////
async function DepartamentoxMensual(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Depto_mensual');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

//////////////////////////////////////////////////////////
async function DepartamentoAnual(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Depto_agno');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}


////////////////////////INFORME RESERVAS DETALLADO/////////////////////////////////////////
async function getInformeReservaDet(id_rva){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
            .input("id_reserva", sql.Int , id_rva)
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

async function Zonaxdia(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Zona_Diaria');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

/////////////////////////////////////////////////////////////////
async function ZonaxSemanal(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Zona_Semanal');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}


/////////////////////////////////////////////////////////////////
async function ZonaxMensual(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Zona_mensual');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

/////////////////////////////////////////////////////////////////

async function ZonaAnual(){

    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().execute('pd_balance_Zona_anual');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////

module.exports = {
    getInformeReservaDet: getInformeReservaDet,
    getInformeReservaDetServ: getInformeReservaDetServ,

    Departamentoxdia:Departamentoxdia,
    DepartamentoxSemana:DepartamentoxSemana,
    DepartamentoxMensual:DepartamentoxMensual,
    DepartamentoAnual:DepartamentoAnual,

    Zonaxdia:Zonaxdia,
    ZonaxSemanal:ZonaxSemanal,
    ZonaxMensual:ZonaxMensual,
    ZonaAnual:ZonaAnual
}
