import React from "react";
import '../../../assetss/css/Comuna.css';
import { Component } from "react";
import {Form} from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export default class ReservaMantencionEdi extends Component{

    state ={
        id_rmant: '',
        fec_rmant: '',
    }




    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de esta mantención?");
            const newResMan = {
                
                id_rmant: this.state.id_rmant,
                fec_rmant: this.state.fec_rmant,
            };
            if (answer){
            axios.put('http://localhost:4000/API/reservaMantencion', newResMan);
            notifyS();
            this.setState({
                id_rmant: " ",
                fec_rmant: " ",
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
                        <h1 id="create-comuna-title">Modificar Mantención</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese la id de su reserva</Form.Label>
                                    <Form.Control as="textarea" name="id_rmant" placeholder= "id de reserva" rows={1} value={this.state.id_rmant} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese la cantidad de objetos</Form.Label>
                                    <Form.Control type="date" name="fec_rmant" rows={1} value={this.state.fec_rmant} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Cambiar Mantención</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













