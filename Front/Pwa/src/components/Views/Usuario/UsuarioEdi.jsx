import React from "react";
import '../../../assetss/css/Comuna.css';
import { Component } from "react";
import {Form} from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

toast.configure({

});
 
const notifyS = () =>{
    toast.success('Operación realizada con éxito',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};
const notifyE = () =>{
    toast.error('Operación cancelada',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

export default class UsuarioEdi extends Component{

    state ={
        email_usr: '',
        contr_usr: '',
        tel_usr: '',
        rut_usr: '',
        dv_usr: '',  
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de usuario?");
            const newUsuario = {
                
                email_usr: this.state.email_usr,
                contr_usr: this.state.contr_usr,
                tel_usr: this.state.tel_usr,
                rut_usr: this.state.rut_usr,
                dv_usr: this.state.dv_usr,
            };
            if (answer){
            axios.put('http://localhost:4000/API/usuario', newUsuario);
            notifyS();
            this.setState({
                email_usr: "",
                contr_usr: "",
                tel_usr: "",
                rut_usr: "",
                dv_usr: "", 
            });
        } else {
            notifyE();
        }
    }



    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <React.Fragment>
                <div id="admin-background">
                    <div class="container">
                        <h1 id="create-comuna-title">Ingresar Usuario</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control type="email" name="email_usr" placeholder= "ejemplo@ejemplo.cl" rows={1} value={this.state.email_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="contr_usr" placeholder= "contraseña" rows={1} value={this.state.contr_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control as="input" name="tel_usr" placeholder= "12345678" rows={1} value={this.state.tel_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>RUT</Form.Label>
                                    <Form.Control as="textarea" name="rut_usr" placeholder= "12345678" rows={1} value={this.state.rut_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>digito verificador</Form.Label>
                                    <Form.Select value={this.state.dv_usr} onChange={this.onInputChange} name="dv_usr" required>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="k">k</option>
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Modificar Usuario</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













