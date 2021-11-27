const cnx = require('../cnx');

const sql = require('mssql');


//lista todos los departamentos
async function getDepartamentos(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('SELECT *  FROM [TurismoReal].[dbo].[departamento]');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



//lista 1 departamento
async function getDepartamento(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input("id_dpto", sql.Int , id_dpto)
        .query('SELECT *  FROM departamento where id_dpto = @id_dpto');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}


//crea un departamento

async function newDepartamento(departamento){
    try{
        let pool = await sql.connect(cnx);
        let newDepartamento = await pool.request()
            .input('dir_dpto', sql.NVarChar , departamento.dir_dpto)
            .input('num_dpto', sql.Int , departamento.num_dpto)
            .input('n_amb_dpto', sql.Int , departamento.n_amb_dpto)
            .input('desc_dpto', sql.NVarChar , departamento.desc_dpto)
            .input('costo_arri_dpto', sql.Int , departamento.costo_arri_dpto)
            .input('img_1_dpto', sql.Image , departamento.img_1_dpto)
            .input('img_2_dpto', sql.Image , departamento.img_2_dpto)
            .input('img_3_dpto', sql.Image , departamento.img_3_dpto)
            .input('img_4_dpto', sql.Image , departamento.img_4_dpto)
            .input('img_5_dpto', sql.Image , departamento.img_5_dpto)
            .input('id_cnd', sql.NVarChar , departamento.id_cnd)
            .execute('pd_agregarDepartamento');
        return newDepartamento.recordsets;
        
        
    } 
    catch(err){
        console.log(err);
    }
}



//actualiza la agencia
async function upDepartamento(departamento){
    try{
        let pool = await sql.connect(cnx);
        let newComuna = await pool.request()
            .input("id_dpto", sql.Int , departamento.id_dpto)
            .input("dir_dpto", sql.Int , departamento.dir_dpto)
            .input('dir_dpto', sql.NVarChar , departamento.dir_dpto)
            .input('num_dpto', sql.Int , departamento.num_dpto)
            .input('n_amb_dpto', sql.Int , departamento.n_amb_dpto)
            .input('desc_dpto', sql.NVarChar , departamento.desc_dpto)
            .input('costo_arri_dpto', sql.Int , departamento.costo_arri_dpto)
            .input('img_1_dpto', sql.Image , departamento.img_1_dpto)
            .input('img_2_dpto', sql.Image , departamento.img_2_dpto)
            .input('img_3_dpto', sql.Image , departamento.img_3_dpto)
            .input('img_4_dpto', sql.Image , departamento.img_4_dpto)
            .input('img_5_dpto', sql.Image , departamento.img_5_dpto)
            .execute('pd_modificarDepartamento');
        return newComuna.recordsets;    
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}




// elimina una comuna
async function delDepartamento(id_dpto){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('id_dpto', sql.Int, id_dpto)
        .execute('pd_eliminarDepartamento');
        console.log(salida.recordsets);
        return salida.recordsets;
    } 
    catch(err){
        throw new Error (`Error en el procidemiento ${err.procName}...${err.message}`);
    }
}


// buscar depto por comuna
async function getDepartamentoReg(nom_rgn){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request()
        .input('nom_rgn', sql.NVarChar, nom_rgn)
        .query('SELECT *  FROM departamento  as dep inner join condominio as con on dep.id_cnd = con.id_cnd inner join comuna as com on con.id_com = com.id_com inner join region as reg on com.id_rgn = reg.id_rgn where reg.nom_rgn = @nom_rgn');
        console.log(salida.recordsets);
        return salida.recordsets;
        
    } 
    catch(err){
        console.log(err);
    }
}



module.exports = {
    getDepartamentos: getDepartamentos,
    newDepartamento: newDepartamento,
    upDepartamento: upDepartamento,
    delDepartamento : delDepartamento,
    getDepartamentoReg: getDepartamentoReg,
    getDepartamento: getDepartamento
}