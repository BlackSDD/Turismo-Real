import React from "react";
import '../../../assetss/css/Comuna.css';
import { Component } from "react";
import {Form} from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import NavBar from "../../Layouts/Navbar";
import NavBarAdmin from "../../Layouts/NavBarAdmin";
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

export default class ArticuloEdi extends Component{

    state ={
        id_age: '',
        nom_age: '',
        email_age: '',
        tel_age: '',
        agencia: []
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
                
                id_age: this.state.id_age,
                nom_age: this.state.nom_age,
                email_age: this.state.email_age,
                tel_age: this.state.tel_age,
            };
            if (answer){
            axios.put('http://localhost:4000/API/agencia', newComuna);
            notifyS();
            this.setState({
                id_age: " ",
                nom_age: " ",
                email_age: " ",
                tel_age: " ",
            });
        } else {
            notifyE();
        }
    }



    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        let tipo = parseInt(sessionStorage.tipoUsr)
        if(tipo == 0 || tipo==2 ||tipo ==3){
            return(
            <div id="menuAdmin">
            <NavBar/>
            <div className="row  d-flex justify-content-center mb-5">
            <div className="card-header mb-5" style={{backgroundColor:'black', opacity:0.8}}>
            <div className="title col-12 mt-5 text-center">
                    <h1>Turismo Real</h1>
                </div>
                <div className="title col-12 mt-1 mb-5 text-center">
                    <h3>esta pagina es administrativa</h3>
                    <h3>porfavor inicie sesion</h3>
                </div>
            </div>             
    
            </div>
        </div>)
        }
        return (
            <React.Fragment>
                <div id="admin-background">
                <NavBarAdmin/>
                    <div class="container">
                        <h1 id="create-comuna-title">Modificar Agencia</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese nombre del articulo</Form.Label>
                                    <Form.Control as="textarea" name="nom_age" placeholder= "nombre del articulo" rows={1} value={this.state.nom_age} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese la cantidad de objetos</Form.Label>
                                    <Form.Control  as="textarea"  name="email_age" placeholder= "cantidad " rows={1} value={this.state.email_age} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese una descripcion del articulo</Form.Label>
                                    <Form.Control as="input" name="tel_age" placeholder= "descripcion" rows={1} value={this.state.tel_age} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Seleccione la a agencia a modificar</Form.Label>
                                    <Form.Select  value={this.state.id_age} onChange={this.onInputChange} name="id_age" required>
                                    {
                                        this.state.agencia.map(reg => (
                                        <option  value={reg.id_agencia}>
                                            {reg.nom_age} 
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Cambiar Agencia</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













