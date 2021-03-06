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

export default class ArticuloList extends Component {

    state = {
        articulo: []
    }

    async componentDidMount() {
        this.getComunas();
    }

    getArticulos = async () => {
        const res = await axios.get('http://localhost:4000/API/articulo')
        this.setState({
            articulo: res.data
        })
    }

    deleteNote = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/articulo/' + Id);
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
                        this.state.articulo.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_arti}>
                                        <div className="card-body">
                                        <p>
                                          nombre:  {art.nom_arti}
                                        </p>
                                        <p>
                                          cantidad:  {art.cant_arti}
                                        </p>
                                        <p>
                                         descripcion:   {art.deta_arti}
                                        </p>
                                        <p>
                                          costo:  ${art.valor_arti}
                                        </p>
                                        <p>
                                           comprado: {art.fec_compra}
                                        </p>
                                        
                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.deleteNote(art.id_arti)}>
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
