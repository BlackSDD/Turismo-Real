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

export default class ReservaMantencionNew extends Component{

    state ={
        id_rmant: '',
        cost_mant: '',
        deta_mant: '',

    }



    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de este articulo?");
            const newComuna = {
                id_rmant: this.state.id_rmant,
                cost_mant: this.state.cost_mant,
                deta_mant: this.state.deta_mant,
                
            };
            if (answer){
            axios.post('http://localhost:4000/API/Mantencion', newComuna);
            notifyS();
            this.setState({
                fec_rmant: "",
                id_usr: "",
                id_dpto: "",
            });
            // window.location.assign("http://localhost:3000/listarcomuna");
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
                        <h1 id="create-comuna-title">Ingresar Articulo</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Codigo de Reserva</Form.Label>
                                    <Form.Control type="number" name="id_rmant" placeholder= "id_reserva" rows={1} value={this.state.id_rmant} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Costo de Mantencion</Form.Label>
                                    <Form.Control type="number" name="cost_mant" placeholder= "costo" rows={1} value={this.state.contr_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Descripcion de mantencion</Form.Label>
                                    <Form.Control as="textarea" name="deta_mant" placeholder= "detalle" rows={1} value={this.state.deta_mant} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Agregar Mantencion</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













