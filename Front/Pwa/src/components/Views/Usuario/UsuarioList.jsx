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

export default class UsuarioList extends Component {

    state = {
        usuario: []
    }

    async componentDidMount() {
        this.getUsuario();
    }

    getUsuario = async () => {
        const res = await axios.get('http://localhost:4000/API/usuario')
        this.setState({
            usuario: res.data
        })
    }

    Suspender = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.put('http://localhost:4000/API/suspenderUsuario/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getUsuario();
    };


    Validar = async (Id) => {
         
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.put('http://localhost:4000/API/validarUsuario/' + Id);
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
                        this.state.usuario.map(art => (
                            <div className="col-sm-3 col-md-6" key={art.id_usr}>
                                        <div className="card-body">
                                        <p>
                                          nombre: {art.nom_usr}  {art.appat_usr} {art.apmat_usr} 
                                        </p>
                                        <p>
                                          RUT: {art.rut_usr}-{art.dv_usr}
                                        </p>
                                        <p>
                                          Telefono de contacto:  {art.tel_usr}
                                        </p>
                                        <p>
                                          Correo de contacto :   {art.email_usr}
                                        </p>
                                        <p>
                                          Cantidad de reservas :   {art.email_usr}
                                        </p>
                                        <p>
                                          Estado cuenta :   {art.est_cta}
                                        </p>
                                        <p>
                                          Tipo cuenta :   {art.tipo_cli}
                                        </p>

                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Suspender(art.id_usr)}>
                                            SUSPENDER USUARIO
                                        </button>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Validar(art.id_usr)}>
                                            VALIDAR USUARIO
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
