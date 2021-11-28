import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

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
                                          Estado:  {art.cant_arti}
                                        </p>                  
                                        </div>
                                </div>
                        ))
                    }

                            <Link to={"/ArticuloNew"} className="btn btn-secondary">
                                <i className="material-icons">INGRESAR ARTICULO</i>
                            </Link>
                            
                            <Link to={"/ArticuloEdi"} className="btn btn-secondary">
                                <i className="material-icons"> EDITAR ARTICULO</i>
                            </Link>
                    </div>
                </div>
            
        )
    }
}
