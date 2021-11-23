console.log('inicio')

/////Departamento
const DepartamentoWS = require('./consultas/DepartamentoWS');
const Departamento = require('./constructores/Departamento');
/////EXTRAS
const ExtrasWS = require('./consultas/ExtrasWS');
////COMUNA
const ComunaWS = require('./consultas/ComunaWS');
const Comuna = require('./constructores/Comuna');
//CONDOMINIO
const CondominioWS = require('./consultas/CondominioWS');
const Condominio = require('./constructores/Condominio');
////AGENCIA EXTERNA
const AgenciaExternaWS = require('./consultas/AgenciaExternaWS');
const AgenciaExterna = require('./constructores/AgenciaExterna');
////CHECK IN
const CheckInWS = require('./consultas/CheckInWS');
const CheckIn = require('./constructores/CheckIn');
////CHECK OUT
const CheckOutWS = require('./consultas/CheckOutWS');
const CheckOut = require('./constructores/CheckOut');
////////////////////prueba
const UsuarioWS = require('./consultas/UsuarioWS');
const Usuario = require('./constructores/Usuario');

var express = require('express');
var bodyP = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');


var app = express();
var router = express.Router();

app.use(bodyP.urlencoded({extended: true}));
app.use(bodyP.json());
app.use(cors());
app.use('/API', router);





////////////////////PRUEBA


router.route('/usuario').post((request, response) => {
    let Usuario = {...request.body}
    UsuarioWS.getUsuari(Usuario).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});





////////////////EXTRAS//////////////////////
///listar marca
router.route('/marca').get((request, response) => {
    ExtrasWS.getMarca().then(result =>{
        response.json(result[0]);
    });
});

///listar modelos
router.route('/modelo').get((request, response) => {
    ExtrasWS.getModelo().then(result =>{
        response.json(result[0]);
    });
});

///listar vehiculos
router.route('/vehiculo').get((request, response) => {
    ExtrasWS.getVehiculo().then(result =>{
        response.json(result[0]);
    });
});

///listar marca
router.route('/conducto').get((request, response) => {
    ExtrasWS.getVehiculo().then(result =>{
        response.json(result[0]);
    });
});




////////////////COMUNA/////////////////////
//listar todas las comuna 

router.route('/comuna').get((request, response) => {
    ComunaWS.getComunas().then(result =>{
        response.json(result[0]);
    });
});

//listar 1 comuna

router.route('/comuna/:id_com').get((request, response) => {
    ComunaWS.getComuna(request.params.id_com).then(result =>{
        response.json(result[0]);
    });
});

//agregar comuna
router.route('/comuna').post((request, response) => {
    let Comuna = {...request.body}
    ComunaWS.newComuna(Comuna).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});


//eliminar
router.route('/comuna').delete((request, response) => {
    let Comuna = {...request.body}
    ComunaWS.delComuna(Comuna).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//modificar
router.route('/comuna').put((request, response) => {
    let Comuna = {...request.body}
    ComunaWS.upComuna(Comuna).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});





////////////////CONDOMINIO/////////////////////
//listar todos los condominios

router.route('/condominio').get((request, response) => {
    CondominioWS.getCondominios().then(result =>{
        response.json(result[0]);
    });
});



//listar 1 condominio

router.route('/condominio/:id_cnd').get((request, response) => {
    CondominioWS.getCondominio(request.params.id_cnd).then(result =>{
        response.json(result[0]);
    });
});

//agregar condominio
router.route('/condominio').post((request, response) => {
    let Condominio = {...request.body}
    CondominioWS.newCondominio(Condominio).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//eliminar
router.route('/condominio').delete((request, response) => {
    let Condominio = {...request.body}
    ComunaWS.delCondominio(Condominio).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//modificar
router.route('/condominio').put((request, response) => {
    let Condominio = {...request.body}
    CondominioWS.upCondominio(Condominio).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//listar condominios por region
router.route('/condominio/reg/:id_rgn').get((request, response) => {
    CondominioWS.getCondominioReg(request.params.id_rgn).then(result =>{
        response.json(result[0]);
    });
});



//listar condominios por comuna
router.route('/condominio/com/:id_com').get((request, response) => {
    CondominioWS.getCondominioCom(request.params.id_com).then(result =>{
        response.json(result[0]);
    });
});




////////////////AGENCIA EXTERNA/////////////////////
//listar todas las agencias

router.route('/agencia').get((request, response) => {
    AgenciaExternaWS.getAgencias().then(result =>{
        response.json(result[0]);
    });
});



//listar 1 agencia

router.route('/agencia/:id_agencia').get((request, response) => {
    AgenciaExternaWS.getAgencia(request.params.id_agencia).then(result =>{
        response.json(result[0]);
    });
});

//agregar agencia
router.route('/agencia').post((request, response) => {
    let AgenciaExterna = {...request.body}
    AgenciaExternaWS.newAgencia(AgenciaExterna).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//eliminar
router.route('/agencia').delete((request, response) => {
    let AgenciaExterna = {...request.body}
    AgenciaExternaWS.delAgencia(AgenciaExterna).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//modificar
router.route('/agencia').put((request, response) => {
    let AgenciaExterna = {...request.body}
    AgenciaExternaWS.upAgencia(AgenciaExterna).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//listar condominios por region
router.route('/agencia/reg/:id_rgn').get((request, response) => {
    AgenciaExternaWS.getAgenciaReg(request.params.id_rgn).then(result =>{
        response.json(result[0]);
    });
});


//listar condominios por comuna
router.route('/agencia/com/:id_com').get((request, response) => {
    AgenciaExternaWS.getAgenciaCom(request.params.id_com).then(result =>{
        response.json(result[0]);
    });
});


/////////////////////DEPARTAMENTO//////////////////////////
//Lista departamentos
router.route('/departamento').get((request, response) => {
    DepartamentoWS.getDepartamentos().then(result =>{
        response.json(result[0]);
    });
});


//agregar departamento
router.route('/departamento').post((request, response) => {
    let Departamento = {...request.body}
    DepartamentoWS.newDepartamento(Departamento).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//eliminar
router.route('/departamento').delete((request, response) => {
    let Departamento = {...request.body}
    DepartamentoWS.delDepartamento(Departamento).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//modificar
router.route('/departamento').put((request, response) => {
    let Departamento = {...request.body}
    DepartamentoWS.upDepartamento(Departamento).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});


//buscar departamento por id
router.route('/departamento/:id_dpto').get((request, response) => {
    DepartamentoWS.getDepartamento(request.params.id_dpto).then(result =>{
        response.json(result[0]);
    });
});


//buscar departamento por id region
router.route('/departamento/reg/:nom_rgn').get((request, response) => {
    DepartamentoWS.getDepartamentoReg(request.params.nom_rgn).then(result =>{
        response.json(result[0]);
    });
});


/////////////////////CheckIn//////////////////////////


//agregar Checkin
router.route('/checkin').post((request, response) => {
    let CheckIn = {...request.body}
    CheckInWS.newCheckIn(CheckIn).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});




//modificar
router.route('/checkin').put((request, response) => {
    let CheckIn = {...request.body}
    CheckInWS.upCheckIn(CheckIn).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});


//buscar checkin por reserva
router.route('/checkin/:id_rva').get((request, response) => {
    CheckInWS.getCheckIn(request.params.id_rva).then(result =>{
        response.json(result[0]);
    });
});


//buscar checkIn por departamento
router.route('/checkin/dpto/:id_dpto').get((request, response) => {
    CheckInWS.getCheckIns(request.params.id_dpto).then(result =>{
        response.json(result[0]);
    });
});




/////////////////////CheckOut//////////////////////////


//agregar departamento
router.route('/checkout').post((request, response) => {
    let CheckOut = {...request.body}
    CheckOutWS.newCheckOut(CheckOut).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});




//modificar
router.route('/checkout').put((request, response) => {
    let CheckOut = {...request.body}
    CheckOutWS.upCheckOut(CheckOut).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});


//buscar checkin por reserva
router.route('/checkout/:id_rva').get((request, response) => {
    CheckOutWS.getCheckOut(request.params.id_rva).then(result =>{
        response.json(result[0]);
    });
});


//buscar checkIn por departamento
router.route('/checkout/dpto/:id_dpto').get((request, response) => {
    CheckOutWS.getCheckOuts(request.params.id_dpto).then(result =>{
        response.json(result[0]);
    });
});






var portcnx = process.env.PORT || 3000;
app.listen(portcnx);
console.log('fin de consulta')

