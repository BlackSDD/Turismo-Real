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

export default class ReservaMantencionList extends Component {

    state = {
        reserva: []
    }

    async componentDidMount() {
        this.getReservaMantencion();
    }

    getReservaMantencion = async () => {
        const res = await axios.get('http://localhost:4000/API/reservaMantencion')
        this.setState({
            reserva: res.data
        })
    }


    render() {
        let tipo = parseInt(sessionStorage.tipoUsr)
        if(tipo == 3){
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
                        this.state.reserva.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_rmant}>
                                        <div className="card-body">
                                        <p>
                                          Fecha:  {art.fec_rmant}
                                        </p>
                                        <p>
                                          Estado:  {art.est_man}
                                        </p>                  
                                        </div>
                                </div>
                        ))
                    }

                            <Link to={"/ReservaMantencionNew"} className="btn btn-secondary">
                                <i className="material-icons">INGRESAR RESERVA</i>
                            </Link>
                            
                            <Link to={"/ReservaMantencionEdi"} className="btn btn-secondary">
                                <i className="material-icons"> EDITAR RESERVA</i>
                            </Link>
                    </div>
                </div>
            
        )
    }
}
