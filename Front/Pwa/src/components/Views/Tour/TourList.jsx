import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

toast.configure({

});
 
const notifyS = () =>{
    toast.success('Operación realizada con éxito');
};
const notifyE = () =>{
    toast.error('Operación cancelada');
};

export default class TourList extends Component {

    state = {
        tour: []
    }

    async componentDidMount() {
        this.getUsuario();
    }

    getUsuario = async () => {
        const res = await axios.get('http://localhost:4000/API/tour')
        this.setState({
            tour: res.data
        })
    }


    render() {
      let tipo = parseInt(sessionStorage.tipoUsr)
      if(tipo != 1 ){
          return(<>
              <h1>ESTA PAGINA ES ADMINISTRATIVA</h1>
              <Link to={"/"} className="btn btn-secondary">
                          <i className="material-icons"> VOLVER AL INICIO</i>
                      </Link>
              </>
          )
      }
        return (
            <div className="container-fluid">
                <div className="row">
                    
                    {
                        this.state.tour.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_serv}>
                                        <div className="card-body">
                                        <p>
                                          duracion: {art.dur_hra}:{art.dur_min}
                                        </p>
                                        <p>
                                          Costo adulto: ${art.cost_adult}
                                        </p>
                                        <p>
                                          Costo niños:  ${art.cost_nigno}
                                        </p>
                                        <p>
                                          Costo para tercera edad :   ${art.cost_3ra}
                                        </p>
                                        <p>
                                          Inicio:   {art.ubi_partida}
                                        </p>
                                        <p>
                                          Fin:   {art.ubi_fin}
                                        </p>
                                        <p>
                                          incluye transporte :   {art.transporte}
                                        </p>
                                        <p>
                                          incluye comida :   {art.alimentacion}
                                        </p>

                                        </div>
                                </div>
                        ))
                    }

                        <Link to={"/UsuarioNew"} className="btn btn-secondary">
                            <i className="material-icons">INGRESAR USUARIO</i>
                        </Link>
                            
                        <Link to={"/UsuarioEdi"} className="btn btn-secondary">
                            <i className="material-icons"> EDITAR USUARIO</i>
                        </Link>
                    </div>
                </div>
            
        )
    }
}
