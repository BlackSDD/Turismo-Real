const cnx = require('../cnx');

const sql = require('mssql');


async function getUsuarioAutentificar(Usuario){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('email_usr', sql.NVarChar, Usuario.email_usr)
        .input('contr_usr', sql.NVarChar, Usuario.contr_usr)
        .query('SELECT *  FROM  usuario where email_usr = @email_usr and contr_usr = @contr_usr');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

async function newUsuario(Usuario){
    try{
        let pool = await sql.connect(cnx);
        let newUsuario = await pool.request()
            .input('email_usr', sql.NVarChar , Usuario.email_usr)
            .input('contr_usr', sql.NVarChar , Usuario.contr_usr)
            .input('nom_usr', sql.NVarChar , Usuario.nom_usr)
            .input('appat_usr', sql.NVarChar , Usuario.appat_usr)
            .input('apmat_usr', sql.NVarChar , Usuario.apmat_usr)
            .input('tel_usr', sql.Int , Usuario.tel_usr)
            .input('rut_usr', sql.Int , Usuario.rut_usr)
            .input('dv_usr', sql.Char , Usuario.dv_usr)
            .input('est_cta', sql.NVarChar , Usuario.est_cta)
            .input('tipo_cli', sql.NVarChar , Usuario.tipo_cli)
            .input('id_tipo_usr', sql.Int , Usuario.id_tipo_usr)
            .execute('pd_agregarUsr');
        return newUsuario.recordsets;
        
        
    } 
    catch(err){
        console.log(err);
    }
}


async function getUsuarios(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT * FROM usuario');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

async function getUsuario(id_usr){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_usr', sql.NVarChar, id_usr)
        .query('SELECT *  FROM usuario where id_usr = @id_usr');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}

async function UpUsuario(Usuario){
    try{
        let pool = await sql.connect(cnx);
        let upUsuario = await pool.request()
            .input("rut_usr", sql.Int , Usuario.rut_usr)
            .input("dv_usr", sql.Int , Usuario.dv_usr)
            .input("email_usr", sql.NVarChar , Usuario.email_usr)
            .input("contr_usr", sql.NVarChar , Usuario.contr_usr)
            .input("tel_usr", sql.Int , Usuario.tel_usr)
            .execute('pd_modificarDatosUsr');
        console.log('Usuario actualizado');
        return upUsuario.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}



async function upSuspenderUsuario(id_usr){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_usr', sql.Int, id_usr)
        .execute('pd_suspenderUsr');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

    
async function upValidarUsuario(id_usr){

    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_usr", sql.Int , id_usr)
            .execute('pd_validarUsr');
        console.log('Usuario validado');
        return newComuna.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}

async function upCambiarCliente(id_usr){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_usr', sql.Int, id_usr)
        .execute('pd_cambiarTipoCliente');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}







module.exports = {
    getUsuarioAutentificar: getUsuarioAutentificar,
    newUsuario : newUsuario,
    getUsuario : getUsuario,
    getUsuarios: getUsuarios,
    upSuspenderUsuario: upSuspenderUsuario,
    upValidarUsuario: upValidarUsuario,
    UpUsuario: UpUsuario,
    upCambiarCliente: upCambiarCliente
}
