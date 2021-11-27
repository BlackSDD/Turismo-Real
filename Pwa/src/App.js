import React from 'react';
import './assetss/css/App.css';
import "bootstrap/dist/css/bootstrap.css";

import Login from './components/Login';
import Home from './components/Home';
import Comuna from './components/Views/Post/Comuna';
import Editar from './components/Editar';
import Condominio from './components/Views/Post/RegistrarCondominios';
import Departamento from './components/Views/Post/RegistrarDepartamento';
import Articulo from './components/Views/Post/RegistrarArticulo';
import AgenciaExterna from './components/Views/Post/AgenciaExterna';
import ComunaWS from './components/Views/Get/ListarComunas';
import ComunaEdi from './components/Views/put/Comuna';
import Footer from './components/Layouts/Footer';
import Navbar  from './components/Layouts/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
          <Switch>
          <Route path="/" exact render ={ props=> ( <Home {...props} />)}></Route>
          <Route path="/login" exact render ={ props=> ( <Login {...props} />)}></Route>        
          <Route path="/Editar" exact render ={ props=> ( <Editar {...props} />)}></Route>
    {/* PostRoutes--------- */}
            <Route path="/condominio" exact render={props => (<Condominio {...props}/>)}></Route>
            <Route path="/Comuna" exact render ={ props=> ( <Comuna {...props} />)}></Route>
            <Route path="/Comuna/EDIT" exact render ={ props=> ( <ComunaEdi {...props} />)}></Route>
            <Route path="/Editar" exact render ={ props=> ( <Editar {...props} />)}></Route>
            <Route path="/departamento" exact render={props => (<Departamento {...props}/>)}></Route>
            <Route path="/articulo" exact render={props => (<Articulo {...props}/>)}></Route>
            <Route path="/agencia" exact render={props => (<AgenciaExterna   {...props}/>)}></Route>
    {/* ListarRoutes */}
            <Route path="/listarComuna" exact render ={ props=> ( <ComunaWS {...props} />)}></Route>
          </Switch>
          <Footer/>  
      </Router>
    </React.Fragment>
  );
}

export default App;
