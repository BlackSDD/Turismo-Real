import React from 'react';
import './assetss/css/App.css';
import "bootstrap/dist/css/bootstrap.css";

/////Test
import Test from './components/test';
import Test2 from './components/test2';

import ConfirmPago from './components/confirmPago';

import Login from './components/Login';
import Home from './components/Home';
import Comuna from './components/Views/Post/Comuna';
import Condominio from './components/Views/Post/RegistrarCondominios';
import Departamento from './components/Views/Post/RegistrarDepartamento';
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
////////////////Usuario
import UsuarioList from './components/Views/Usuario/UsuarioList';
import UsuarioNew  from './components/Views/Usuario/UsuarioNew';
import UsuarioEdi from './components/Views/Usuario/UsuarioEdi';
////////////////ReservaMantencion
import ReservaMantencionList from './components/Views/ReservaMantencion/ReservaMantencionList';
import ReservaMantencionNew  from './components/Views/ReservaMantencion/ReservaMantencionNew';
import ReservaMantencionEdi from './components/Views/ReservaMantencion/ReservaMantencionEdi';
////////////////Mantencion
import MantencionList from './components/Views/Mantencion/MantencionList';
import MantencionNew  from './components/Views/Mantencion/MantencionNew';
import MantencionEdi from './components/Views/Mantencion/MantencionEdi';
////////////////Servicio Extra
import ServicioExtraList from './components/Views/ServicioExtra/ServicioExtraList';
import ServicioExtraNew  from './components/Views/ServicioExtra/ServicioExtraNew';
////////////////Tour
import TourList from './components/Views/Tour/TourList';
import TourNew  from './components/Views/Tour/TourNew';
import TourEdi  from './components/Views/Tour/TourEdi';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
          <Switch>
          <Route path="/" exact render ={ props=> ( <Home {...props} />)}></Route>
          <Route path="/login" exact render ={ props=> ( <Login {...props} />)}></Route>  
          <Route path="/test" exact render ={ props=> ( <Test {...props} />)}></Route>     
          <Route path="/test2" exact render ={ props=> ( <Test2 {...props} />)}></Route>     
          <Route path="/confirmPago/:id_rva" exact render ={ props=> ( <ConfirmPago {...props} />)}></Route>     

    {/* PostRoutes--------- */}
            <Route path="/condominio" exact render={props => (<Condominio {...props}/>)}></Route>
            <Route path="/Comuna" exact render ={ props=> ( <Comuna {...props} />)}></Route>
            <Route path="/Comuna/EDIT" exact render ={ props=> ( <ComunaEdi {...props} />)}></Route>
            <Route path="/departamento" exact render={props => (<Departamento {...props}/>)}></Route>
            <Route path="/agencia" exact render={props => (<AgenciaExterna   {...props}/>)}></Route>
    {/* ListarRoutes */}
            <Route path="/listarComuna" exact render ={ props=> ( <ComunaWS {...props} />)}></Route>
    {/* Articulo */}
            <Route path="/ArticuloList" exact render ={ props=> ( <ArticuloList {...props} />)}></Route>
            <Route path="/ArticuloNew" exact render ={ props=> ( <ArticuloNew {...props} />)}></Route>
            <Route path="/ArticuloEdi" exact render ={ props=> ( <ArticuloEdi {...props} />)}></Route>   
    {/* Agencia */}
            <Route path="/AgenciaExternaList" exact render ={ props=> ( <AgenciaExternaList {...props} />)}></Route>
            <Route path="/AgenciaExternaNew" exact render ={ props=> ( <AgenciaExternaNew {...props} />)}></Route>
            <Route path="/AgenciaExternaEdi" exact render ={ props=> ( <AgenciaExternaEdi {...props} />)}></Route>
    {/* Usuario */}
            <Route path="/UsuarioList" exact render ={ props=> ( <UsuarioList {...props} />)}></Route>
            <Route path="/UsuarioNew" exact render ={ props=> ( <UsuarioNew {...props} />)}></Route>
            <Route path="/UsuarioEdi" exact render ={ props=> ( <UsuarioEdi {...props} />)}></Route>
    {/* ReservaMantencion */}
            <Route path="/ReservaMantencionList" exact render ={ props=> ( <ReservaMantencionList {...props} />)}></Route>
            <Route path="/ReservaMantencionNew" exact render ={ props=> ( <ReservaMantencionNew {...props} />)}></Route>
            <Route path="/ReservaMantencionEdi" exact render ={ props=> ( <ReservaMantencionEdi {...props} />)}></Route>     
    {/* ReservaMantencion */}
            <Route path="/MantencionList" exact render ={ props=> ( <MantencionList {...props} />)}></Route>
            <Route path="/MantencionNew" exact render ={ props=> ( <MantencionNew {...props} />)}></Route>
            <Route path="/MantencionEdi" exact render ={ props=> ( <MantencionEdi {...props} />)}></Route>       
    {/* ReservaMantencion */}
            <Route path="/ServicioExtraList" exact render ={ props=> ( <ServicioExtraList {...props} />)}></Route>
            <Route path="/ServicioExtraNew" exact render ={ props=> ( <ServicioExtraNew {...props} />)}></Route>
    {/* ReservaMantencion */}
            <Route path="/TourList" exact render ={ props=> ( <TourList {...props} />)}></Route>
            <Route path="/TourNew" exact render ={ props=> ( <TourNew {...props} />)}></Route> 
            <Route path="/TourEdi" exact render ={ props=> ( <TourEdi {...props} />)}></Route>                                                                                         
          </Switch>
          <Footer/>  
      </Router>
    </React.Fragment>
  );
}

export default App;
