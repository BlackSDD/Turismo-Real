import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import '../../../assetss/css/articulo.css';
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
        articulo: []
    }

    async componentDidMount() {
        this.getArticulos();
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
        this.getArticulos();
    };

    render() {
        return (
            <div className="container-fluid" id="body-articulos">
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
