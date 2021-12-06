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

export default class ArticuloList extends Component {

    state = {
        agencia: []
    }

    async componentDidMount() {
        this.getAgencia();
    }

    getAgencia = async () => {
        const res = await axios.get('http://localhost:4000/API/agencia')
        this.setState({
            agencia: res.data
        })
    }

    deleteNote = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/agencia/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getAgencia();
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
                        this.state.agencia.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_agencia}>
                                        <div className="card-body">
                                        <p>
                                          Nombre de empresa:  {art.nom_age}
                                        </p>
                                        <p>
                                          Correo:  {art.email_age}
                                        </p>
                                        <p>
                                         Telefono:   {art.tel_age}
                                        </p>

                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.deleteNote(art.id_agencia)}>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                        ))
                    }

                            <Link to={"/ArticuloNew"} className="btn btn-secondary">
                                <i className="material-icons">INGRESAR AGENCIA</i>
                            </Link>
                            
                            <Link to={"/ArticuloEdi"} className="btn btn-secondary">
                                <i className="material-icons"> EDITAR AGENCIA</i>
                            </Link>
                    </div>
                </div>
            
        )
    }
}
