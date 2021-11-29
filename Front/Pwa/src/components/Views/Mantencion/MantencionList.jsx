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

export default class UsuarioList extends Component {

    state = {
        mantencion: []
    }

    async componentDidMount() {
        this.getMantencion();
    }

    getMantencion = async () => {
        const res = await axios.get('http://localhost:4000/API/mantencion')
        this.setState({
            mantencion: res.data
        })
    }

    Eliminar = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/mantencion//' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getMantencion();
    };



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    
                    {
                        this.state.mantencion.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_rmant}>
                                        <div className="card-body">
                                        <p>
                                          costo: {art.cost_mant}
                                        </p>
                                        <p>
                                          detalle: {art.deta_mant}
                                        </p>

                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Eliminar(art.id_rmant)}>
                                            CANCELAR MANTENCION
                                        </button>
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
