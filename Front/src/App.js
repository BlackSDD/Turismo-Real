import React from 'react';
import './assetss/css/App.css';
import "bootstrap/dist/css/bootstrap.css";

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Comuna from './components/Views/Post/Comuna';
import ComunaWS from './components/Views/Get/ListarComunas';
import ComunaEdi from './components/Views/put/Comuna';
import CondomioLS from './components/Views/Get/ListarCondominios'
import CondominioNew from './components/Views/Post/Condominio'
import CondonminioEdi from  './components/Views/put/Condominio'
import DepartamentoList from './components/Views/Get/Departamento';
import UsuarioList from './components/Views/Get/Usuario';
import AgenciaList from './components/Views/Get/AgenciaExterna';
import AgenciaNew from './components/Views/Post/AgenciaExterna';
import AgenciaEdi from './components/Views/put/AgenciaExterna';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render ={ props=> ( <Login {...props} />)}></Route>
          <Route path="/dashboard" exact render ={ props=> ( <Dashboard {...props} />)}></Route>
   {/* Comuna */}
          <Route path="/ListarComuna" exact render ={ props=> ( <ComunaWS {...props} />)}></Route>
          <Route path="/Comuna/EDIT" exact render ={ props=> ( <ComunaEdi {...props} />)}></Route>
          <Route path="/Comuna" exact render ={ props=> ( <Comuna {...props} />)}></Route>
    {/* Condominio */}
          <Route path="/ListarCondominio" exact render ={ props=> ( <CondomioLS {...props} />)}></Route>
          <Route path="/CondominioNew" exact render ={ props=> ( <CondominioNew {...props} />)}></Route>
          <Route path="/CondonminioEdi" exact render ={ props=> ( <CondonminioEdi {...props} />)}></Route>
    {/* departamento */}
          <Route path="/DepartamentoList" exact render ={ props=> ( <DepartamentoList {...props} />)}></Route>
          {/* <Route path="/DepartamentoNew" exact render ={ props=> ( <CondominioNew {...props} />)}></Route>
          <Route path="/DepartamentoEdi" exact render ={ props=> ( <CondonminioEdi {...props} />)}></Route> */}
    {/* Usuario */}
              <Route path="/ListarUsuario" exact render ={ props=> ( <UsuarioList {...props} />)}></Route>
    {/* Agencia Externa */}
          <Route path="/ListarAgencia" exact render ={ props=> ( <AgenciaList {...props} />)}></Route>
          <Route path="/AgenciaNew" exact render ={ props=> ( <AgenciaNew {...props} />)}></Route>
          <Route path="/AgenciaEdi" exact render ={ props=> ( <AgenciaEdi {...props} />)}></Route>           






        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
