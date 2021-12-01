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
