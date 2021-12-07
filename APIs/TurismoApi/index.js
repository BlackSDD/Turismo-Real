console.log('inicio')
const nodemailer = require('nodemailer');

////Destinos/////
const DestinosWS = require('./consultas/DestinosWS');
const Destino = require('./constructores/Destino');
///Informes////
const InformesWS = require('./consultas/InformesWS');
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
////USUARIO
const UsuarioWS = require('./consultas/UsuarioWS');
const Usuario = require('./constructores/Usuario');
///CONTRATAR SERVICIO
const ContratarServicioSW = require('./consultas/ContratarServicioWS');
const ContratarServicio = require('./constructores/ContratarServicio');
///MANTENCION   
const MantencionSW = require('./consultas/MantencionWS');
const Mantencion = require('./constructores/Mantencion');
//RESERVA MANTENCION
const ResMantencionSW = require('./consultas/ResMantencionWS');
const ResMantencion = require('./constructores/ResMantencion')
// Disponibilidad
const DisponibilidadWS = require('./consultas/DisponibilidadWS');
//GATOS
const GastosWS = require('./consultas/GastosWS');
const Gastos = require('./constructores/Gastos')
//PAGO
const PagoWS = require('./consultas/PagoWS')
const Pago = require('./constructores/Pago')
//TOUR
const TourWS = require('./consultas/TourWS')
const Tour = require('./constructores/Tour')
//RESERVA
const ReservaWS = require('./consultas/ReservaWS')
const Reserva = require('./constructores/Reserva')
//TRANSPORTE
const TransporteWS = require('./consultas/TransporteWS')
const Transporte = require('./constructores/Transporte')
//ARTICULO
const ArticuloWS =  require('./consultas/ArticuloWS')
const Articulo = require('./constructores/Articulo')
//REGION
const RegionWS = require('./consultas/RegionWS')
const Region = require('./constructores/Region')
//SERVICIOS EXTRAS
const ServiciosExtra =  require('./constructores/ServiciosExtra')
const ServiciosExtraWS = require('./consultas/ServiciosExtraWS')

var express = require('express');
var bodyP = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
const { get } = require('request');

var app = express();
var router = express.Router();



var cors = require('cors');
const informesWS = require('./consultas/InformesWS');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors())     
app.use(cors(corsOptions));
app.use(bodyP.urlencoded({extended: true}));
app.use(bodyP.json());
app.use('/API', router);

///// Paypal /////

router.route('/paypal').get((request, response) =>{
    Paypal.generarTokenPaypal().then(result =>{
        response.json(result[t0]);
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
router.route('/agencia/:id_agencia').delete((request, response) => {
    AgenciaExternaWS.delAgencia(request.params.id_agencia).then(result => {
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

///////////ARTICULO////////////////////
//Listar todos los articulos
router.route('/articulo').get((request, response) => {
    ArticuloWS.getArticulos().then(result =>{
        response.json(result[0]);
    });
});
//Ver un articulo en especifico
router.route('/articulo/:id_arti').get((request, response) => {
    ArticuloWS.getArticulo(request.params.id_arti).then(result =>{
        response.json(result[0]);
    });
});
// Registrar articulo
router.route('/articulo').post((request, response) => {
    let Articulo = {...request.body}
    ArticuloWS.newArticulo(Articulo).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});
//Actualizar articulo
router.route('/articulo').put((request, response) => {
    let Articulo = {...request.body}
    ArticuloWS.UpArticulo(Articulo).then(result => {
        response.json(result[0]);
        console.log('Transporte actualizado')   

     }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});
//Eliminar articulo
router.route('/articulo/:id_arti').delete((request, response) => {
    ArticuloWS.delArticulo(request.params.id_arti).then(result => {
        response.json(result[0]);
        console.log('Se elimino el articulo')       
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
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


//buscar checkout por reserva
router.route('/checkout/:id_rva').get((request, response) => {
    CheckOutWS.getCheckOut(request.params.id_rva).then(result =>{
        response.json(result[0]);
    });
});


//buscar checkout por departamento
router.route('/checkout/dpto/:id_dpto').get((request, response) => {
    CheckOutWS.getCheckOuts(request.params.id_dpto).then(result =>{
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
router.route('/comuna/:id_com').delete((request, response) => {
    ComunaWS.delComuna(request.params.id_com).then(result => {
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
router.route('/condominio/:id_cnd').delete((request, response) => {
    CondominioWS.delCondominio(request.params.id_cnd).then(result => {
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

////CONTRATAR SERVICIO EXTRA

//listar servicios extras

router.route('/contServicio').get((request, response) => {
    ContratarServicioSW.getContratarServicio().then(result =>{
        response.json(result[0]);
    });
});

//agregar servicios extras
router.route('/contServicio').post((request, response) => {
    let ContratarServicio = {...request.body};
    ContratarServicioSW.newContratarServicio(ContratarServicio).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//eliminar
router.route('/contServicio/:id_cont_serv').put((request, response) => {
    ContratarServicioSW.delContratarServicio(request.params.id_cont_serv).then(result => {
        response.json(result[0]);
        console.log('Se elimino el registro de servicio contratado');
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//modificar
router.route('/contServicio').put((request, response) => {
    let ContratarServicio = {...request.body};
    ContratarServicioSW.upContratarServicio(ContratarServicio).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

/////////////////////DEPARTAMENTO//////////////////////////
//Lista departamentos
router.route('/departamento').get((request, response) => {
    DepartamentoWS.getDepartamentos().then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//agregar departamento
router.route('/departamento').post((request, response) => {
    let Departamento = {...request.body};
    DepartamentoWS.newDepartamento(Departamento).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//eliminar
router.route('/departamento/:id_dpto').delete((request, response) => {
    DepartamentoWS.delDepartamento(request.params.id_dpto).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//modificar
router.route('/departamento').put((request, response) => {
    let Departamento = {...request.body};
    DepartamentoWS.upDepartamento(Departamento).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//buscar departamento por id
router.route('/departamento/:id_dpto').get((request, response) => {
    DepartamentoWS.getDepartamento(request.params.id_dpto).then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});


//buscar departamento por id region
router.route('/departamento/reg/:nom_rgn').get((request, response) => {
    DepartamentoWS.getDepartamentoReg(request.params.nom_rgn).then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

////////////Destino////////////////

/// Get destino por id servicio y depto
router.route('/getDestinos').post((request, response) => {
    let datos = {...request.body};
    DestinosWS.getDestinos(datos).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

router.route('/newDestino').post((request, response) => {
    let datos = {...request.body};
    DestinosWS.newDestino(datos).then(result => {
        response.json(result[0]);
        console.log('Destino añadido')
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

router.route('/deleteDestino').delete((request, response) => {
    let datos = {...request.body};
    DestinosWS.deleteDestino(datos).then(result => {
        response.json(result[0]);
        console.log('Destino eliminado')
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});



/////////////// Disponibilidad ///////////////
router.route('/disponibilidad/:id_dpto').get((request, response) => {
    DisponibilidadWS.getDisponibilidad(request.params.id_dpto).then(result =>{
            response.json(result[0]);
        }, (err) => {
            console.log(err.message);
            response.json(err.message);
        });
    });

    // // array para traer id {"Depto": id_dpto}
// router.route('/disponibilidadNo').post((request, response) => {
//     let Depto = {...request.body}
//     DisponibilidadWS.getNoDisponibe(Depto).then(result => {
//         response.json(result[0]);
//     }, (err) => {
//         console.log(err.message);
//         response.json(err.message)
//     });
// });

// array para traer id {"Depto": id_dpto}
router.route('/disponibilidadNoId').post((request, response) => {
    let id_dpto = {...request.body};
    DisponibilidadWS.getNoDisponibleId(id_dpto).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//////////GASTOS//////////////
///Listar Gastos
router.route('/gastos').get((request, response) => {
    GastosWS.getGastos().then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

/// Mostrar gastos de un departamento especifico
router.route('/gastos/dpto/:id_dpto').get((request, response) => {
    GastosWS.getGastosPorDepartamento(request.params.id_dpto).then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//eliminar registro de gastos de un departamento
router.route('/gastos/:id_dpto').delete((request, response) => {
    GastosWS.delGastos(request.params.id_dpto).then(result => {
        response.json(result[0]);
        console.log('Se elimino el registro de gastos del departamento');       
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//modificar registro de gastos de un departamento
router.route('/gastos').put((request, response) => {
    let Gastos = {...request.body};
    GastosWS.upGastos(Gastos).then(result => {
        response.json(result[0]);
        console.log('Se acutalizó el registro de gastos del departamento');   
     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//Registrar gastos de gastos de un departamento
router.route('/gastos').post((request, response) => {
    let Gastos = {...request.body};
    GastosWS.NewGastos(Gastos).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//////// MANTENCION/////////

//listar Mantencion

router.route('/mantencion').get((request, response) => {
    MantencionSW.getMantencion().then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//agregar Mantencion
router.route('/mantencion').post((request, response) => {
    let Mantencion = {...request.body};
    MantencionSW.newMantencion(Mantencion).then(result => {
        response.json(result[0]);
    console.log('Se ha registrado la mantención')
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//eliminar Mantencion
router.route('/mantencion/:id_rmant').delete((request, response) => {
    MantencionSW.delMantencion(request.params.id_rmant).then(result => {
        response.json(result[0]);
        console.log('Se elimino el registro de mantencion');       
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//modificar Mantencion
router.route('/mantencion').put((request, response) => {
    let Mantencion = {...request.body};
    MantencionSW.upMantencion(Mantencion).then(result => {
        response.json(result[0]);
        console.log('Se acutalizó el registro de mantencion');   
     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});
// Trae mantenciones para el depto según año 
router.route('/mantencionDepto').post((request, response) => {
    let Mantencion = {...request.body}
    MantencionSW.getMantencionDepto(Mantencion).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

///Get mantenciones agendadas
router.route('/mantencionAgendada').get((request, response) => {
    MantencionSW.getMantencionesAgendadas().then(result =>{
        response.json(result[0]);
    });
});

////////////////////PAGO///////////////////
//Listar pagos
router.route('/pago').get((request, response) => {
    PagoWS.getPago().then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});
///

//Registrar pago
router.route('/pago').post((request, response) => {
    let Pago = {...request.body};
    PagoWS.NewPago(Pago).then(result => {
        response.json(result[0]);
    console.log('Se ha registrado el pago');
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//Calcular monto del pago
router.route('/pago/montoPago/').post((request, response) => {
    let id_rva = {...request.body};
    PagoWS.getMontoPago(id_rva).then(result =>{
        response.json(result[0]);
    });
});

router.route('/pago/abonoPago/').post((request, response) => {
    let id_rva = {...request.body};
    PagoWS.getMontoAbono(id_rva).then(result =>{
        response.json(result[0]);
    });
});

router.route('/pago/ReservaPago').post((request, response) => {
    let id_rva = {...request.body};
    PagoWS.getMontoPagoArriendo(id_rva).then(result =>{
        response.json(result[0]);
    });
});

///////////REGION//////////
router.route('/region').get((request, response) => {
    RegionWS.getRegion().then(result =>{
        response.json(result[0]);
    });
});

//////////// RESERVA MANTENCION//////////////////

//listar Reserva Mantencion

router.route('/reservaMantencion').get((request, response) => {
    ResMantencionSW.getReservasMantenciones().then(result =>{
        response.json(result[0]);
    });
});

/// Get reserva de mantencion por id reserva
router.route('/reservaMantencionID').post((request, response) => {
    let id_rmant = {...request.body}
    ResMantencionSW.getReservaMantencionID(id_rmant).then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//agregar Reserva Mantencion
router.route('/reservaMantencion').post((request, response) => {
    let ResMantencion = {...request.body};
    ResMantencionSW.newReservaMantencion(ResMantencion).then(result => {
        response.json(result[0]);
    console.log('Se a registrado la reserva de mantención');
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

/////modificar Reserva Mantencion
router.route('/reservaMantencion').put((request, response) => {
    let ResMantencion = {...request.body};
    ResMantencionSW.upReservaMantenciont(ResMantencion).then(result => {
        response.json(result[0]);
        console.log('Se acutalizó el registro de reserva de mantencion');   

     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});



/////////////RESERVA///////////////
///Listar reservas
router.route('/reserva').get((request, response) => {
    ReservaWS.getReservas().then(result =>{
        response.json(result[0]);
    });
});

//// Get reserva por id
router.route('/reserva/:id_rva').get((request, response) => {
    ReservaWS.getReservaId(request.params.id_rva).then(result =>{
        response.json(result[0]);
    });
});


//// Get reserva por usr
router.route('/reserva/usr').post((request, response) => {
    let Reserva = {...request.body}
    ReservaWS.getReservasUsr(Reserva).then(result =>{
        response.json(result[0]);
    });
});

///Crear reserva
router.route('/reserva').post((request, response) => {
    let Reserva = {...request.body};
    ReservaWS.NewReserva(Reserva).then(result => {
        response.json(result[0]);
        console.log('Reserva solicitada');   

    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});
///Modificar Reserva
router.route('/reserva').put((request, response) => {
    let Reserva = {...request.body};
    ReservaWS.UpReserva(Reserva).then(result => {
        response.json(result[0]);
        console.log('Reserva actualizada');   

     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});
///Cancelar reserva
router.route('/cancelarReserva/:id_rva').put((request, response) => {
    ReservaWS.UpCancelarReserva(request.params.id_rva).then(result =>{
        response.json(result[0]);
        console.log('Reserva cancelada'); 
    });
});

// reserva en estado de agendamiento web
router.route('/reservaCurrent').post((request, response)=>{
    let id_usr = {...request.body};
    ReservaWS.getCurrentRva(id_usr).then(result => {
        response.json(result[0]);  
     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

// reserva pre checkin
router.route('/reservaPreCheckin').get((request, response)=>{
    ReservaWS.getReservasCheck().then(result => {
        response.json(result[0]);  
     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

// reserva pre checkout
router.route('/reservaProgress').get((request, response)=>{
    ReservaWS.getReservasProgress().then(result => {
        response.json(result[0]);  
     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//////////Servicios extras/////////////////

//Listar todos los servicios extras
router.route('/serviciosExtra').get((request, response) => {
    ServiciosExtraWS.getServiciosExtras().then(result =>{
        response.json(result[0]);
    });
});

//Ver un servicio extra en especifico
router.route('/serviciosExtraTrasporte').get((request, response) => {
    ServiciosExtraWS.getServiciosExtrasTransporte().then(result =>{
        response.json(result[0]);
    });
});

/// obtiene un servicio extra en especifico
router.route('/servicioExtraID').post((request, response) => {
    let servicio = {...request.body}
    ServiciosExtraWS.getServicioExtra(servicio).then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

/// 
router.route('/deleteServicio').delete((request, response) => {
    let servicio = {...request.body}
    ServiciosExtraWS.deleteServExtra(servicio).then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

//Agregar un servicio extra
// Registrar articulo
router.route('/serviciosExtra').post((request, response) => {
    let ServiciosExtras = {...request.body};
    ServiciosExtraWS.newServicioExtra(ServiciosExtras).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

/// Obtiene los servicios disponibles por depto
router.route('/serviciosDisponibles').post((request, response) => {
    let datos = {...request.body}
    ServiciosExtraWS.getServiciosDisponibles(datos).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message)
    });
});

////////////TOUR//////////////
//Listar tours
router.route('/tour').get((request, response) => {
    TourWS.getTours().then(result =>{
        response.json(result[0]);
    });
});

//Registrar tour
router.route('/tour').post((request, response) => {
    let Tour = {...request.body};
    TourWS.NewTour(Tour).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});
//Modificar Tour
router.route('/tour').put((request, response) => {
    let Tour = {...request.body};
    TourWS.UpTour(Tour).then(result => {
        response.json(result[0]);
        console.log('Tour actualizado');   

     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

/////////TRANSPORTE//////////////
///Listar transporte
router.route('/transporte').get((request, response) => {
    TransporteWS.getTransportes().then(result =>{
        response.json(result[0]);
    });
});

///Agregar transporte
router.route('/transporte').post((request, response) => {
    let Transporte = {...request.body};
    TransporteWS.NewTransporte(Transporte).then(result => {
        response.json(result[0]);
        console.log('Transporte registrado');   

    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});
///Modificar transporte
router.route('/transporte').put((request, response) => {
    let Transporte = {...request.body};
    TransporteWS.UpTransporte(Transporte).then(result => {
        response.json(result[0]);
        console.log('Transporte actualizado');   

     }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

//////USUARIO


router.route('/usuarioAutenticar').post((request, response) => {
    let Usuario = {...request.body};
    UsuarioWS.getUsuarioAutentificar(Usuario).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});


router.route('/usuario').post((request, response) => {
    let Usuario = {...request.body};
    UsuarioWS.newUsuario(Usuario).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});



router.route('/usuario').get((request, response) => {
    UsuarioWS.getUsuarios().then(result =>{
        response.json(result[0]);
    });
});

router.route('/usuario/:id_usr').get((request, response) => {
    UsuarioWS.getUsuario(request.params.id_usr).then(result =>{
        response.json(result[0]);
    });
});

router.route('/usuario').put((request, response) => {
    let Usuario = {...request.body};
    UsuarioWS.UpUsuario(Usuario).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

router.route('/suspenderUsuario/:id_usr').put((request, response) => {
    UsuarioWS.upSuspenderUsuario(request.params.id_usr).then(result => {
        response.json(result[0]);
        console.log('Se elimino el articulo');       
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

router.route('/validarUsuario/:id_usr').put((request, response) => {
    let Usuario = {...request.body};
    UsuarioWS.upValidarUsuario(request.params.id_usr).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

router.route('/cambiarTipoCliente/:id_usr').put((request, response) => {
    let Usuario = {...request.body};
    UsuarioWS.upCambiarCliente(request.params.id_usr).then(result => {
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

router.route('/cambiarTipoCliente/:id_usr').put((request, response) => {
    let Usuario = {...request.body}
    UsuarioWS.upCambiarCliente(request.params.id_usr).then(result => {
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

///listar TipoUsuario
router.route('/tipousr').get((request, response) => {
    ExtrasWS.getTipo().then(result =>{
        response.json(result[0]);
    });
});

//////// INFORMES

/////////////////////////INFORME RESERVAS DETALLADO////////////////////////////////////////
router.route('/informeResDet/:id_reserva').get((request, response) => {
    InformesWS.getInformeReservaDet(request.params.id_reserva).then(result =>{
        response.json(result[0]);
    }, (err) => {
        console.log(err.message);
        response.json(err.message);
    });
});

router.route('/informeResDetServ/:id_reserva').get((request, response) => {
    InformesWS.getInformeReservaDetServ(request.params.id_reserva).then(result =>{
        response.json(result[0]);
    });
});

//////////////////////////INFORME RESERVAS GENERAL////////////////////////////////////////////////////
////////////////////////porDepartamento
router.route('/InformeDeptoDia').get((request, response) => {
    InformesWS.Departamentoxdia().then(result =>{
        response.json(result[0]);
    });
});

router.route('/DepartamentoxSemana').get((request, response) => {
    InformesWS.DepartamentoxSemana().then(result =>{
        response.json(result[0]);
    });
});

router.route('/DepartamentoAnual').get((request, response) => {
    InformesWS.DepartamentoAnual().then(result =>{
        response.json(result[0]);
    });
});

router.route('/Zonaxdia').get((request, response) => {
    InformesWS.Zonaxdia().then(result =>{
        response.json(result[0]);
    });
});

router.route('/ZonaSemanal').get((request, response) => {
    InformesWS.ZonaxSemanal().then(result =>{
        response.json(result[0]);
    });
});

router.route('/ZonaMensual').get((request, response) => {
    InformesWS.ZonaxMensual().then(result =>{
        response.json(result[0]);
    });
});

router.route('/ZonaAnual').get((request, response) => {
    InformesWS.ZonaAnual().then(result =>{
        response.json(result[0]);
    });
});

router.route('/correoregistro').post((req, response) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Estimado ${req.body.name} </h3>
            <h3> este es un correo de confirmacion que su cuenta se a creado con exito, dentro de los siguientes dias sera revisada por un administrador para su activacion <h3>
            <h3> si dentro de dos dias no se activa la cuenta, por favor envia un correo dentro de nuestra pagina <h3>`
        
        let mailerConfig = {    
            host: "smtp.gmail.com",  
            secure: false,
            port: 587,
            auth: {
                user: "turismoreal.portafolio2021@gmail.com",
                pass: "tlyqeqtymwutxpnx"
            }
        };
        let transporter = nodemailer.createTransport(mailerConfig);
        let mailOptions = {
            from: 'turismoreal.portafolio2021@gmail.com',
            to: req.body.email,
            subject: 'Creacion de cuenta Turismo Real',
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (error) {
                console.log('error:', err);
                response.status(500).send({status: 'FAIL', msg: 'Internal error: email not sent'})
                response.end();
            } else {
                console.log('Message sent: %s', info.content);
                console.log('Message URL: %s', nodemailer.getTestMessageUrl);
                response.status(200).json({status: 'OK', msg: 'Email sent'})
                response.end();
            }
        });
        response.end()
    }) 
    
})


//correo arriendo
router.route('/correoarriendo').post((req, response) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Estimado ${req.body.name} </h3>
            <h3> este es un correo de aceptacion para su arriendo en el departamento ${req.body.dpto} habitacion n°${req.body.n_habitacion}<h3>
            <h3> si dentro de dos dias no se activa la cuenta, por favor envia un correo dentro de nuestra pagina <h3>`
        
        let mailerConfig = {    
            host: "smtp.gmail.com",  
            secure: false,
            port: 587,
            auth: {
                user: "turismoreal.portafolio2021@gmail.com",
                pass: "tlyqeqtymwutxpnx"
            }
        };
        let transporter = nodemailer.createTransport(mailerConfig);
        let mailOptions = {
            from: 'turismoreal.portafolio2021@gmail.com',
            to: req.body.email,
            subject: 'Confirmacion de arriendo',
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (error) {
                console.log('error:', err);
                response.status(500).send({status: 'FAIL', msg: 'Internal error: email not sent'})
                response.end();
            } else {
                console.log('Message sent: %s', info.content);
                console.log('Message URL: %s', nodemailer.getTestMessageUrl);
                response.status(200).json({status: 'OK', msg: 'Email sent'})
                response.end();
            }
        });
        response.end()
    }) 
    
})

var portcnx = process.env.PORT || 4000;
app.listen(portcnx);
console.log('fin de consulta');
