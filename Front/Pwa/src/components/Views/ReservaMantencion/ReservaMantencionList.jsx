import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../../Layouts/Navbar';
import NavBarAdmin from '../../Layouts/NavBarAdmin';

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

    deleteNote = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/mantencion/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getReservaMantencion();
    };


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
                                        <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.deleteNote(art.id_rmant)}>
                                            Eliminar
                                        </button>
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
