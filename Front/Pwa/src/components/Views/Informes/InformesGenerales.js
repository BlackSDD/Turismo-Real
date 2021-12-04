import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from "axios";

/////Notificaciones pop

const notifyE = () =>{
    toast.error('Correo y/o contraseña inválidos, asegúrese que las credenciales son correctas');
};

const notifyESuspendida = () =>{
    toast.error('Su cuenta se encuentra suspendidad o aún no se sido activada, comuníquese con nosotros a través de los medios proporcionados al pie de la página');
};

const notifyS = () =>{
    toast.success('Inicio de sesión existoso, Bienvenido(a) Turismo Real');
};


export default class InformesGenerales extends Component {

    state = {
        agno:'',
        informesGeneral: []
    }

    async componentDidMount() {
        this.getInforme();
    }

    OnInput = (e) =>{
        this.setState({[e.target.name]:
        e.target.value
        })
    }

    getInforme= async () => {
        const agno = {agno: this.state.agno}
        const res = await axios.post('http://localhost:4000/API/informeResGen')
        this.setState({
            informesGeneral: res.data
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <Form>
                    <FormControl as="input" value={this.state.agno} name="agno" onChange={this.OnInput}/>
                    <button type="submit">Año</button>
                </Form>
                </div>
                <div className="row">
                    
                    {
                        this.state.informesGeneral.map(inf => (
                            <div className="col-sm-3 col-md-6" key={inf.nom_cnd}>
                                        <div className="card-body">
                                        <p>
                                          Condominio {inf.nom_cnd}
                                        </p>
                                        <p>
                                          Condominio {inf.Cliente}
                                        </p>
                                        <p>
                                          Condominio {inf.Estado_reserva}
                                        </p>
                                        <p>
                                          Condominio {inf.Fecha}
                                        </p>



                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Eliminar(inf.id_inf)}>
                                            ELIMINAR REGISTRO
                                        </button>
                                    </div>
                                </div>
                        ))
                    }
                    </div>
        


            </div>
            
        )
    }
}
