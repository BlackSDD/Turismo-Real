import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from "axios";
import DatePicker from '../../Layouts/Date-Picker';

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
        id_rva:'',
        id_serv:'',

        reservas: [],
        servicios:[]
    }

    async componentDidMount() {
        this.getReservas();
        this.getUsuario()
        
        
    }

    OnInput = (e) =>{
        this.setState({[e.target.name]:
        e.target.value
        })
    }

    getReservas= async () => {
        let id_usr = sessionStorage.idUsuario
        const x = {"id_usr": id_usr}
        const res = await axios.post('http://localhost:4000/API/reserva/usr',x)
        console.log('reservas ',res)
        this.setState({
            reservas: res.data
        })
        
    }

    transformarFechas = () =>{
        
        const fecha = toLocaleDateString("en-US",this.state.reservas.fec_ini_rva );
        console.log(fecha)
       
    };

    getUsuario = async () => {
        const res = await axios.get('http://localhost:4000/API/serviciosExtra')
        console.log('servicios',res)
        this.setState({
            servicios: res.data
        })
        
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <Form>
                    <Form.Select  value={this.state.id_rva} onChange={this.OnInput} name="id_rva" required>
                        <option value="">ingrese una reserva</option>
                         {
                            this.state.reservas.map(reg => (
                                <option  value={reg.id_rva}>
                                    {reg.id_rva}
                                </option>
                            ))
                         }
                    </Form.Select>
                    <Form.Select  value={this.state.id_serv} onChange={this.OnInput} name="id_serv" required>
                        <option value="">ingrese un servicio</option>
                         {
                            this.state.servicios.map(reg => (
                                <option  value={reg.id_serv}>
                                    agencia:{reg.nom_age}servicio{reg.nom_serv} TIPO={reg.tipo_serv}
                                </option>
                            ))
                         }
                    </Form.Select>                    
                                   
                    <button type="submit">Año</button>
                </Form>
                </div>
          
        


            </div>
            
        )
    }
}
