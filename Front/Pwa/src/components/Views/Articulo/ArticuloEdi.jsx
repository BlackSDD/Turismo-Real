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

export default class ArticuloEdi extends Component{

    state ={
        id_arti: '',
        nom_arti: '',
        cant_arti: '',
        deta_arti: '',
        valor_arti: '',
        articulo: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/articulo');
        this.setState({
            articulo: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de este articulo?");
            const newComuna = {
                
                id_arti: this.state.id_arti,
                nom_arti: this.state.nom_arti,
                cant_arti: this.state.cant_arti,
                deta_arti: this.state.deta_arti,
                valor_arti: this.state.valor_arti,
                id_dpto: this.state.id_dpto,
            };
            if (answer){
            axios.put('http://localhost:4000/API/articulo', newComuna);
            notifyS();
            this.setState({
                id_arti: " ",
                nom_arti: " ",
                cant_arti: " ",
                deta_arti: " ",
                valor_arti: " ",
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
                        <h1 id="create-comuna-title">Modifucar Articulo</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese nombre del articulo</Form.Label>
                                    <Form.Control as="textarea" name="nom_arti" placeholder= "nombre del articulo" rows={1} value={this.state.nom_arti} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese la cantidad de objetos</Form.Label>
                                    <Form.Control as="input" name="cant_arti" placeholder= "cantidad " rows={1} value={this.state.cant_arti} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese una descripcion del articulo</Form.Label>
                                    <Form.Control as="textarea" name="deta_arti" placeholder= "descripcion" rows={1} value={this.state.deta_arti} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese el precio del articulo</Form.Label>
                                    <Form.Control as="input" name="valor_arti" placeholder= "precio " rows={1} value={this.state.valor_arti} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Seleccione el articulo a cambiar</Form.Label>
                                    <Form.Select  value={this.state.id_arti} onChange={this.onInputChange} name="id_arti" required>
                                    {
                                        this.state.articulo.map(reg => (
                                        <option  value={reg.id_arti}>
                                            {reg.nom_arti} 
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Cambiar Articulo</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













