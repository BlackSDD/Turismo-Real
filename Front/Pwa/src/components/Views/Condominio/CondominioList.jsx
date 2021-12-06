import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../assetss/css/ListaDeptos.css';
import {toast} from 'react-toastify';
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

export default class CondominioList extends Component {

    state = {
        Condominio: []
    }

    async componentDidMount() {
        this.getCondominio();
    }

    getCondominio = async () => {
        const res = await axios.get('http://localhost:4000/API/Condominio')
        this.setState({
            Condominio: res.data
        })
    }

    getComuna = async () => {
        const res = await axios.get('http://localhost:4000/API/Comuna')
        this.setState({
            Comuna: res.data
        })
    }

    Eliminar = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/condominio/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getCondominio();
    };


    Validar = async (Id) => {
         
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.put('http://localhost:4000/API/validarCondominio/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getCondominio();
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
                        this.state.Condominio.map(cnd => (
                            <div className="col-sm-3 col-md-6" key={cnd.id_cnd}>
                                        <div className="card-body">
                                        <p>
                                          Condominio {cnd.nom_cnd}
                                        </p>

                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Eliminar(cnd.id_cnd)}>
                                            ELIMINAR REGISTRO
                                        </button>
                                    </div>
                                </div>
                        ))
                    }

                        <Link to={"/CondominioNew"} className="btn btn-secondary">
                            <i className="material-icons">INGRESAR CONDOMINIO</i>
                        </Link>
                            
                        <Link to={"/CondominioEdit"} className="btn btn-secondary">
                            <i className="material-icons"> EDITAR Condominio</i>
                        </Link>
                    </div>
                </div>
            
        )
    }
}