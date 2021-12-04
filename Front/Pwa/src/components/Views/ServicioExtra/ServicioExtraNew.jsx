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
        nom_serv: '',
        tipo_serv: '',
        desc_serv: '',
        id_agencia:'',
        agencia:[],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/agencia');
        this.setState({
            agencia: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de este articulo?");
            const newComuna = {
                nom_serv: this.state.nom_serv,
                tipo_serv: this.state.tipo_serv,
                desc_serv: this.state.desc_serv,
                id_agencia: this.state.id_agencia
            };
            if(this.state.id_agencia ==="" || this.state.tipo_serv ===""){
                notifyE();
            } 
            if (answer){
            axios.post('http://localhost:4000/API/serviciosExtra', newComuna);
            notifyS();
            this.setState({
                nom_serv: "",
                tipo_serv: "",
                desc_serv: "",
                id_agencia: ""
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
                        <h1 id="create-comuna-title">Ingresar Articulo</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Nombre de la Agencia</Form.Label>
                                    <Form.Control as="textarea" name="nom_serv" rows={1} value={this.state.nom_serv} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese el departamento</Form.Label>
                                    <Form.Select  value={this.state.tipo_serv} onChange={this.onInputChange} name="tipo_serv" required>
                                        <option Value="">elige una opcion</option>
                                        <option value="T">Tour</option>
                                        <option value="V">Transporte</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control as="textarea" name="desc_serv" rows={1} value={this.state.desc_serv} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese la agencia</Form.Label>
                                    <Form.Select  value={this.state.id_agencia} onChange={this.onInputChange} name="id_agencia" required>
                                        <option Value="">eliga una agencia</option>
                                    {
                                        this.state.agencia.map(reg => (
                                        <option  value={reg.id_agencia}>
                                            {reg.nom_age}
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Agregar Servicio</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













