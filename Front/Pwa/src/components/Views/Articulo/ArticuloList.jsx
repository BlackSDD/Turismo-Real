import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import '../../../assetss/css/articulo.css';
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
            <div className="container-fluid" id="body-articulos">
                <NavBarAdmin/>
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
