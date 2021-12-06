import React from 'react';
import './assetss/css/App.css';
import "bootstrap/dist/css/bootstrap.css";
import 'react-day-picker/lib/style.css';
/////Test
import Test from './components/test';
import Test2 from './components/test2';
import Test3 from './components/test3';
//Landing
import Login from './components/Login';
import MainFuncionario from './components/InicioFuncionario';
import Comuna from './components/Views/Comuna/Comuna';
import Condominio from './components/Views/Post/RegistrarCondominios';
import RegistrarDepartamento from './components/Views/Post/RegistrarDepartamento';
// import Articulo from './components/Views/Post/RegistrarArticulo';
import AgenciaExterna from './components/Views/Post/AgenciaExterna';
import ComunaWS from './components/Views/Get/ListarComunas';
import ComunaEdi from './components/Views/put/Comuna';
import Footer from './components/Layouts/Footer';
import Navbar  from './components/Layouts/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
////////////////Articulo
import ArticuloList from './components/Views/Articulo/ArticuloList';
import ArticuloNew  from './components/Views/Articulo/ArticuloNew';
import ArticuloEdi from './components/Views/Articulo/ArticuloEdi';
////////////////Agencia
import AgenciaExternaList from './components/Views/AgenciaExterna/AgenciaExternaList';
import AgenciaExternaNew  from './components/Views/AgenciaExterna/AgenciaExternaNew';
import AgenciaExternaEdi from './components/Views/AgenciaExterna/AgenciaExternaEdi';
///Condominio
import CondominioNew from './components/Views/Condominio/CondominioNew';
import CondominioList from './components/Views/Condominio/CondominioList';
import CondominioEdit from './components/Views/Condominio/CondominioEdit';
/// Checkin
import Checkin from './components/Views/Checkin/checkin';
/// Checkout
import Checkout from './components/Views/Checkout/checkout';
///Departamento
import DeptoNew from './components/Views/Departamento/DeptoNew';
import DeptoList from './components/Views/Departamento/ListarDepto';
import DeptoEdi from './components/Views/Departamento/DeptoEdi';
///Informe
import InformeGeneral from './components/Views/Informes/InformesGenerales';
import InformeDeptoDía from './components/Views/Informes/Departamento/InformeDeptoDía';
import InformeDeptoSemana from './components/Views/Informes/Departamento/InformeDeptoSemana';
import InformeDeptoMensual from './components/Views/Informes/Departamento/InformeDeptoMensual';
import InformeDeptoAgno from './components/Views/Informes/Departamento/InformeDeptoAgno';

import InformeZonaDiaria from './components/Views/Informes/Zona/InformeZonaDiaria';
import InformeZonaSemana from './components/Views/Informes/Zona/InformeZonaSemana';
import InformeZonaMensual from './components/Views/Informes/Zona/InformeZonaMensual';
import InformeZonaAgno from './components/Views/Informes/Zona/InformeZonaAgno';
////////////////Usuario
import UsuarioList from './components/Views/Usuario/UsuarioList';
import UsuarioNew  from './components/Views/Usuario/UsuarioNew';
import UsuarioEdi from './components/Views/Usuario/UsuarioEdi';
import ClienteNew from './components/Views/Usuario/ClienteNew';
////////////////ReservaMantencion
import ReservaMantencionList from './components/Views/ReservaMantencion/ReservaMantencionList';
import ReservaMantencionNew  from './components/Views/ReservaMantencion/ReservaMantencionNew';
import ReservaMantencionEdi from './components/Views/ReservaMantencion/ReservaMantencionEdi';
////////////////Mantencion
//import MantencionList from './components/Views/Mantencion/MantencionList';
//import MantencionNew  from './components/Views/Mantencion/MantencionNew';
////import MantencionEdi from './components/Views/Mantencion/MantencionEdi';
////////////////Servicio Extra
import ServicioExtraList from './components/Views/ServicioExtra/ServicioExtraList';
import ServicioExtraNew  from './components/Views/ServicioExtra/ServicioExtraNew';
////////////////Tour
import TourList from './components/Views/Tour/TourList';
import TourNew  from './components/Views/Tour/TourNew';
import TourEdi  from './components/Views/Tour/TourEdi';
////////////////Transporte
import TransporteNew from './components/Views/Transporte/TransporteNew';
import TransporteEdit from './components/Views/Transporte/TransporteEdi';
import TransporteList from './components/Views/Transporte/TransporteList';
//////////////Reserva Depto////////////
import Reserva from './components/Views/Reservas/Reserva';
import MainAdmin from './components/InicioAdmin';
import Landing from './components/Home';
import PaypalReserva from './components/Views/Reservas/PaypalReserva';
import PagoConfirmado from './components/Views/Reservas/pago-confirmado';
//////////////Reserva Depto////////////
import ContratarServ from './components/Views/ContratoServ/ContratarServ';
import SeleccionarServ from './components/Views/ContratoServ/SeleccionarServ';
///// Mantenciones
import DeptosMant from './components/Views/Mantencion/DeptosMant';
import ResMant from './components/Views/Mantencion/ResMant';
import SelectReagendarMant from './components/Views/Mantencion/SelectReagendarMant';
import ReagendarMant from './components/Views/Mantencion/ReagendarMant';
import DetalleMant from './components/Views/Mantencion/DetalleMant';
import DateMant from './components/Views/Mantencion/DateMant';
import CancelMant from './components/Views/Mantencion/CancelMant';


function App() {
        let tipo = parseInt(sessionStorage.tipoUsr)

  return (
    <React.Fragment>
      <Router>
                {/* <Navbar /> */}
          <Switch>
        {/* Landing */}
                <Route path="/" exact render ={ props=> ( <Landing {...props} />)}></Route>
                <Route path="/login" exact render ={ props=> ( <Login {...props} />)}></Route>
                <Route path="/Navbar" exact render ={ props=> ( <Navbar {...props}/>)}></Route>

                 <Route path="/Admin" exact render ={ props=> ( <MainAdmin {...props} />)}></Route>    
                
                <Route path="/MainFuncionario" exact render ={ props=> ( <MainFuncionario {...props} />)}></Route>    
                <Route path="/test" exact render ={ props=> ( <Test {...props} />)}></Route>     
                <Route path="/test2" exact render ={ props=> ( <Test2 {...props} />)}></Route>  
                 <Route path="/test3" exact render ={ props=> ( <Test3 {...props} />)}></Route>  
                <Route path="/PagoConfirmado" exact render ={ props=> ( <PagoConfirmado {...props} />)}></Route>     
                <Route path="/paypalReserva" exact render ={ props=> ( <PaypalReserva {...props} />)}></Route>     
        {/* PostRoutes--------- */}
                <Route path="/condominio" exact render={props => (<Condominio {...props}/>)}></Route>
                <Route path="/Comuna" exact render ={ props=> ( <Comuna {...props} />)}></Route>
                <Route path="/Comuna/EDIT" exact render ={ props=> ( <ComunaEdi {...props} />)}></Route>
                <Route path="/registrardepartamento" exact render={props => (<RegistrarDepartamento {...props}/>)}></Route>
                <Route path="/agencia" exact render={props => (<AgenciaExterna   {...props}/>)}></Route>
        {/* ListarRoutes */}
                <Route path="/listarComuna" exact render ={ props=> ( <ComunaWS {...props} />)}></Route>
                <Route path="/listarDepto" exact render ={ props=> ( <DeptoList {...props} />)}></Route>
        {/* Checkin */}
                <Route path="/checkin" exact render ={ props=> ( <Checkin {...props} />)}></Route>
                <Route path="/checkout" exact render ={ props=> ( <Checkout {...props} />)}></Route>
        {/* Articulo */}
                <Route path="/ArticuloList" exact render ={ props=> ( <ArticuloList {...props} />)}></Route>
                <Route path="/ArticuloNew" exact render ={ props=> ( <ArticuloNew {...props} />)}></Route>
                <Route path="/ArticuloEdi" exact render ={ props=> ( <ArticuloEdi {...props} />)}></Route>   
        {/* Agencia */}
                <Route path="/AgenciaExternaList" exact render ={ props=> ( <AgenciaExternaList {...props} />)}></Route>
                <Route path="/AgenciaExternaNew" exact render ={ props=> ( <AgenciaExternaNew {...props} />)}></Route>
                <Route path="/AgenciaExternaEdi" exact render ={ props=> ( <AgenciaExternaEdi {...props} />)}></Route>
        {/* Departamento */}
                <Route path="/DeptoNew" exact render ={ props=> ( <DeptoNew {...props} />)}></Route>
                <Route path="/DeptoList" exact render ={ props=> ( <DeptoList {...props} />)}></Route>
                <Route path="/DeptoEdit" exact render ={ props=> ( <DeptoEdi {...props} />)}></Route>
        {/* Informes */}
                <Route path="/InformeGen" exact render ={ props=> ( <InformeGeneral {...props} />)}></Route>
                <Route path="/InformeGen" exact render ={ props=> ( <InformeGeneral {...props} />)}></Route>
                <Route path="/InformeDeptoDia" exact render ={ props=> ( <InformeDeptoDía {...props} />)}></Route>
                <Route path="/InformeDeptoSemana" exact render ={ props=> ( <InformeDeptoSemana {...props} />)}></Route>
                <Route path="/InformeDeptoMensual" exact render ={ props=> ( <InformeDeptoMensual {...props} />)}></Route>
                <Route path="/InformeDeptoAgno" exact render ={ props=> ( <InformeDeptoAgno {...props} />)}></Route>

                <Route path="/InformeZonaDiaria" exact render ={ props=> ( <InformeZonaDiaria {...props} />)}></Route>
                <Route path="/InformeZonaSemana" exact render ={ props=> ( <InformeZonaSemana {...props} />)}></Route>
                <Route path="/InformeZonaMensual" exact render ={ props=> ( <InformeZonaMensual {...props} />)}></Route>
                <Route path="/InformeZonaAgno" exact render ={ props=> ( <InformeZonaAgno {...props} />)}></Route>
        {/* Usuario */}
                <Route path="/UsuarioList" exact render ={ props=> ( <UsuarioList {...props} />)}></Route>
                <Route path="/UsuarioNew" exact render ={ props=> ( <UsuarioNew {...props} />)}></Route>
                <Route path="/UsuarioEdi" exact render ={ props=> ( <UsuarioEdi {...props} />)}></Route>
                <Route path="/ClienteNew" exact render ={ props=> ( <ClienteNew {...props} />)}></Route>
        {/* ReservaMantencion */}
                <Route path="/DeptosMant" exact render ={ props=> ( <DeptosMant {...props} />)}></Route>
                <Route path="/ResMant" exact render ={ props=> ( <ResMant {...props} />)}></Route>
                <Route path="/SelectReagendarMant" exact render={ props=> ( <SelectReagendarMant {...props}/>)}></Route>
                <Route path="/ReagendarMant" exact render={ props=> ( <ReagendarMant {...props}/>)}></Route>
                <Route path="/DetalleMant" exact render={ props=> ( <DetalleMant {...props}/>)}></Route>
                <Route path="/DateMant" exact render={ props=> (<DateMant {...props}/>)}></Route>
                <Route path="/CancelMant" exact render={ props=> (<CancelMant {...props}/>)}></Route>


                <Route path="/ReservaMantencionList" exact render ={ props=> ( <ReservaMantencionList {...props} />)}></Route>
                <Route path="/ReservaMantencionNew" exact render ={ props=> ( <ReservaMantencionNew {...props} />)}></Route>
                <Route path="/ReservaMantencionEdi" exact render ={ props=> ( <ReservaMantencionEdi {...props} />)}></Route>     
        {/* Mantencion */}
                {/* <Route path="/MantencionList" exact render ={ props=> ( <MantencionList {...props} />)}></Route>
                <Route path="/MantencionNew" exact render ={ props=> ( <MantencionNew {...props} />)}></Route>
  <Route path="/MantencionEdi" exact render ={ props=> ( <MantencionEdi {...props} />)}></Route> */}       
        {/* Servicio extra */}
                <Route path="/ServicioExtraList" exact render ={ props=> ( <ServicioExtraList {...props} />)}></Route>
                <Route path="/ServicioExtraNew" exact render ={ props=> ( <ServicioExtraNew {...props} />)}></Route>
        {/* Tour */}
                <Route path="/TourList" exact render ={ props=> ( <TourList {...props} />)}></Route>
                <Route path="/TourNew" exact render ={ props=> ( <TourNew {...props} />)}></Route> 
                <Route path="/TourEdi" exact render ={ props=> ( <TourEdi {...props} />)}></Route>
        {/* Transporte*/}
                <Route path="/TransporteNew" exact render ={ props=> ( <TransporteNew {...props} />)}></Route>
                <Route path="/TransporteEdi" exact render ={ props=> ( <TransporteEdit {...props} />)}></Route>
                <Route path="/TransporteList" exact render ={ props=> ( <TransporteList {...props} />)}></Route>                                                                                        
        {/* Generar Reserva Departamento */}
                <Route path="/reservar" exact render ={ props=> ( <Reserva {...props} />)}></Route>
        {/* Generar contrato */}
                <Route path="/ContratarServ" exact render ={ props=> ( <ContratarServ {...props} />)}></Route>                 
                <Route path="/SeleccionarServ" exact render ={ props=> ( <SeleccionarServ {...props} />)}></Route>
        {/* Condominio*/}  
                <Route path="/CondominioNew" exact render ={ props=> ( <CondominioNew {...props} />)}></Route>
                <Route path="/CondominioList" exact render ={ props=> ( <CondominioList {...props} />)}></Route>
                <Route path="/CondominioEdit" exact render ={ props=> ( <CondominioEdit {...props} />)}></Route>

        
        {/*  */}
        </Switch>
                <Footer/>  
        </Router>
    </React.Fragment>
  );
}

export default App;
