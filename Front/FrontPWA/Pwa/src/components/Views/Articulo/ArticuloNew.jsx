import React from "react";
import '../../../assetss/css/Comuna.css';
import { Component } from "react";
import {Form} from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataPicker from 'react-datapicker';

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
        nom_arti: '',
        cant_arti: '',
        deta_arti: '',
        valor_arti: '',
        fec_compra: '',
        id_dpto: '',
        depto: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/departamento');
        this.setState({
            depto: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de este articulo?");
            const newComuna = {
                nom_arti: this.state.nom_arti,
                cant_arti: this.state.cant_arti,
                deta_arti: this.state.deta_arti,
                valor_arti: this.state.valor_arti,
                fec_compra: this.state.fec_compra,
                id_dpto: this.state.id_dpto,
            };
            if (answer){
            axios.post('http://localhost:4000/API/articulo', newComuna);
            notifyS();
            this.setState({
                nom_arti: " ",
                cant_arti: " ",
                deta_arti: " ",
                valor_arti: " ",
                fec_compra: " ",
                id_dpto: " "
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
                                    <Form.Label>Ingrese nombre del articulo</Form.Label>
                                    <Form.Control as="textarea" name="nom_arti" placeholder= "Ingrese el nombre de la comuna" rows={1} value={this.state.nom_arti} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese la cantidad de objetos</Form.Label>
                                    <Form.Control as="number" name="cant_arti" placeholder= "Ingrese el nombre de la comuna" rows={1} value={this.state.cant_arti} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese una descripcion del articulo</Form.Label>
                                    <Form.Control as="textarea" name="deta_arti" placeholder= "Ingrese el nombre de la comuna" rows={1} value={this.state.deta_arti} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese el precio del articulo</Form.Label>
                                    <Form.Control as="number" name="nom_com" placeholder= "Ingrese el nombre de la comuna" rows={1} value={this.state.nom_com} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese nombre de la comuna</Form.Label>
                                    <Form.Control as="textarea" name="nom_com" placeholder= "Ingrese el nombre de la comuna" rows={1} value={this.state.nom_com} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese la Región</Form.Label>
                                    <Form.Select  value={this.state.id_dpto} onChange={this.onInputChange} name="id_dpto" required>
                                    {
                                        this.state.depto.map(reg => (
                                        <option key={reg.id_dpto} value={reg.id_dpto}>
                                            {reg.dir_dpto} habitacion  {reg.num_dpto}
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Agregar Comuna</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}
