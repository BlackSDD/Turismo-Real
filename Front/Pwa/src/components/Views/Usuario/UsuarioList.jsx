import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../assetss/css/ListaDeptos.css';
import {toast} from 'react-toastify';
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
        return (
            <div className="container-fluid">
                <div className="row">
                    
                    {
                        this.state.usuario.map(usr => (
                            <div className="col-sm-3 col-md-6" key={usr.id_usr}>
                                        <div className="card-body">
                                        <p>
                                          nombre: {usr.nom_usr}  {usr.appat_usr} {usr.apmat_usr} 
                                        </p>
                                        <p>
                                          RUT: {usr.rut_usr}-{usr.dv_usr}
                                        </p>
                                        <p>
                                          Telefono de contacto:  {usr.tel_usr}
                                        </p>
                                        <p>
                                          Correo de contacto :   {usr.email_usr}
                                        </p>
                                        <p>
                                          Cantidad de reservas :   {usr.cant_res}
                                        </p>
                                        <p>
                                          Estado cuenta :   {usr.est_cta}
                                        </p>
                                        <p>
                                          Tipo cuenta :   {usr.tipo_cli}
                                        </p>

                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Suspender(usr.id_usr)}>
                                            SUSPENDER USUARIO
                                        </button>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Validar(usr.id_usr)}>
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
