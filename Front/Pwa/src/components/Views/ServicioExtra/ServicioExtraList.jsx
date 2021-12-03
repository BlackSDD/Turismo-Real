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

export default class UsuarioList extends Component {

    state = {
        servicio: []
    }

    async componentDidMount() {
        this.getServicio();
    }

    getServicio = async () => {
        const res = await axios.get('http://localhost:4000/API/serviciosExtra')
        this.setState({
            servicio: res.data
        })
    }

    Eliminar = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/serviciosExtra/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getUsuario();
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    
                    {
                        this.state.servicio.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_serv}>
                                        <div className="card-body">
                                        <p>
                                          Agencia: {art.nom_age}
                                        </p>
                                        <p>
                                          Tipo de servicio: {art.tipo_serv}
                                        </p>
                                        <p>
                                          Nombre: {art.nom_serv}
                                        </p>
                                        <p>
                                          Descripción: {art.desc_serv}
                                        </p>


                                        </div>
                                   
                                </div>
                        ))
                    }

                        <Link to={"/ServicioExtraNew"} className="btn btn-secondary">
                            <i className="material-icons">INGRESAR SERVICIO</i>
                        </Link>
                            
                    </div>
                </div>
            
        )
    }
}
