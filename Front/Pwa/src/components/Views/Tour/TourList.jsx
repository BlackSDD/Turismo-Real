import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../../Layouts/Navbar';
import NavBarAdmin from '../../Layouts/NavBarAdmin';
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
    if(tipo == 0 || tipo==2 ||tipo ==3){
        return(
        <div id="menuAdmin">
        <NavBar/>
        <div className="row  d-flex justify-content-center mb-5">
        <div className="card-header mb-5" style={{backgroundColor:'black', opacity:0.8}}>
        <div className="title col-12 mt-5 text-center">
                <h1>Turismo Real</h1>
            </div>
            <div className="title col-12 mt-1 mb-5 text-center">
                <h3>esta pagina es administrativa</h3>
                <h3>porfavor inicie sesion</h3>
            </div>
        </div>             

        </div>
    </div>)
    }
      
        return (
            <div className="container-fluid">
              <NavBarAdmin/>
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

                        <Link to={"/TourNew"} className="btn btn-secondary">
                            <i className="material-icons">INGRESAR TOUR</i>
                        </Link>
                            
                        <Link to={"/TourEdi"} className="btn btn-secondary">
                            <i className="material-icons"> EDITAR TOUR</i>
                        </Link>
                    </div>
                </div>
            
        )
    }
}
