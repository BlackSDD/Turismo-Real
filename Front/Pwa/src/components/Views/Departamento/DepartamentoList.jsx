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
        departamento: []
    }

    async componentDidMount() {
        this.getMantencion();
    }

    getMantencion = async () => {
        const res = await axios.get('http://localhost:4000/API/departamento')
        this.setState({
            departamento: res.data
        })
    }

    Eliminar = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/departamento/' + Id);
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
                        this.state.departamento.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_dpto}>
                                        <div className="card-body">
                                        <p>
                                          direccion: {art.dir_dpto}
                                        </p>
                                        <p>
                                          Habitacion: {art.num_dpto}
                                        </p>
                                        <p>
                                          Descripcion: {art.desc_dpto}
                                        </p>
                                        <p>
                                          Costo noche: ${art.costo_arri_dpto}
                                        </p>
                                        </div>
                                    
                                </div>
                        ))
                    }

                       
                    </div>
                </div>
            
        )
    }
}
