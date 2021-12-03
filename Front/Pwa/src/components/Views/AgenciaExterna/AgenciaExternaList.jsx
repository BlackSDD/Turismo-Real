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
        return (
            <div className="container-fluid">
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
