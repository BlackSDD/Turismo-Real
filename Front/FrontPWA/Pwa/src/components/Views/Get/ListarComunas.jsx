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

export default class ComunaWS extends Component {

    state = {
        comunas: []
    }

    async componentDidMount() {
        this.getComunas();
    }

    getComunas = async () => {
        const res = await axios.get('http://localhost:4000/API/comuna/')
        this.setState({
            comunas: res.data
        })
    }

    deleteNote = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/comuna/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getComunas();
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    
                    {
                        this.state.comunas.map(com => (
                            <div className="col-sm-3 col-md-6" key={com.id_com}>
                                        <div className="card-body">
                                        <p>
                                            {com.nom_com}
                                        </p>
                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.deleteNote(com.id_com)}>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                        ))
                    }

                            <Link to={"/Comuna"} className="btn btn-secondary">
                                <i className="material-icons">CREAR COMUNA</i>
                            </Link>
                            
                            <Link to={"/Comuna/EDIT"} className="btn btn-secondary">
                                <i className="material-icons"> EDITAR COMUNA</i>
                            </Link>
                    </div>
                </div>
            
        )
    }
}
