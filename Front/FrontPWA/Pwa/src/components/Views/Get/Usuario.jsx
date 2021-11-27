import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ComunaWS extends Component {

    state = {
        email_usr: '',
        Usuarios: []
    }

    async componentDidMount() {
        this.getUsuarios();
    }

    getUsuarios = async () => {
        const res = await axios.get('http://localhost:4000/API/usuario')
        this.setState({
            Usuarios: res.data
        });
    }






    Activar = async (id) => {

        await axios.put('http://localhost:4000/API/validarUsuario/' + id);
        this.getUsuarios();
    }

    Suspender = async (id) => {
        await axios.put('http://localhost:4000/API/suspenderUsuario/' + id);
        this.getUsuarios();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.Usuarios.map(use => (
                        <div className="col-md-4 p-2" key={use.id_usr}>
                            
                                
                                    <p>
                                      nombre:  {use.nom_usr}  {use.appat_usr}  {use.apmat_usr}
                                    </p>
                                    <p>
                                      Telefono de Contacto:  {use.tel_usr}
                                    </p>
                                    <p>
                                      Correo de Contacto:  {use.email_usr}
                                    </p>
                                    <p>
                                      Estado de la cuenta:  {use.est_cta}
                                    </p>
                                    
                                    
                                <div className="card-footer">
                                    <button className="btn btn-danger" value="email_usr" onClick={() => this.Suspender(use.id_usr)}>
                                        SUSPENDER CUENTA
                                    </button>
                                </div>

                                <div className="card-footer">
                                    <button className="btn btn-danger" value="email_usr" onClick={() => this.Activar(use.id_usr)}>
                                        ACTIVAR CUENTA
                                    </button>
                                </div>



                            </div>
                    ))
                }

            </div>
        )
    }
}