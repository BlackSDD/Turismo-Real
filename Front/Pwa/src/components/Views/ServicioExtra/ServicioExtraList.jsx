import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../assetss/css/ListaDeptos.css';
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
                        this.state.servicio.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_serv}>
                                        <div className="card-body">
                                        <p>
                                          nombre: {art.nom_serv}
                                        </p>
                                        <p>
                                          descripcion: {art.desc_serv}
                                        </p>


                                        </div>
                                   
                                </div>
                        ))
                    }

                        <Link to={"/ServicioExtraNew"} className="btn btn-secondary">
                            <i className="material-icons">INGRESAR SERVICIO</i>
                        </Link>
                            
                        {/* <Link to={"/UsuarioEdi"} className="btn btn-secondary">
                            <i className="material-icons"> EDITAR USUARIO</i>
                        </Link> */}
                    </div>
                </div>
            
        )
    }
}
