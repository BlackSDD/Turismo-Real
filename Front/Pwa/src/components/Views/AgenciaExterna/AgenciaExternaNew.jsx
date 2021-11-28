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

export default class ArticuloNew extends Component{

    state ={
        nom_age: '',
        email_age: '',
        tel_age: '',
        id_com: '',
        comuna: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/comuna');
        this.setState({
            comuna: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de este articulo?");
            const newComuna = {
                nom_age: this.state.nom_age,
                email_age: this.state.email_age,
                tel_age: this.state.tel_age,
                id_com: this.state.id_com,
            };
            if (answer){
            axios.post('http://localhost:4000/API/agencia', newComuna);
            notifyS();
            this.setState({
                nom_age: " ",
                email_age: " ",
                tel_age: " ",
                id_com: " ",
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
                        <h1 id="create-comuna-title">Ingresar Agencia</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese nombre del articulo</Form.Label>
                                    <Form.Control as="textarea" name="nom_age" placeholder= "nombre del articulo" rows={1} value={this.state.nom_age} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese la cantidad de objetos</Form.Label>
                                    <Form.Control type="email" name="email_age" placeholder= "cantidad " rows={1} value={this.state.email_age} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese el precio del articulo</Form.Label>
                                    <Form.Control as="input" name="tel_age" placeholder= "precio " rows={1} value={this.state.tel_age} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese la comuna</Form.Label>
                                    <Form.Select  value={this.state.id_com} onChange={this.onInputChange} name="id_com" required>
                                    {
                                        this.state.comuna.map(reg => (
                                        <option  value={reg.id_com}>
                                            {reg.nom_com} 
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Agregar Articulo</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













