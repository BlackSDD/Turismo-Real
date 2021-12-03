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

export default class CondominioNew extends Component{

    state ={
        nom_cnd:'', 
	    id_com:'', 
        nomCom: []
        
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/comuna');
        this.setState({
            nomCom: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar la creación del condominio?");
            const newComuna = {
                nom_cnd: this.state.nom_cnd,
                id_com: this.state.id_com
   
                
            };
            if (answer && this.state.nom_cnd !== ""){
            axios.post('http://localhost:4000/API/condominio', newComuna);
            notifyS();
            this.setState({
                nom_cnd:'', 
                id_com: '',
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
                                    <Form.Label>Nombre comuna</Form.Label>
                                    <Form.Control type="text" name="nom_cnd" placeholder="Nombre condominio" rows={1} value={this.state.nom_com} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Tipo de usuario</Form.Label>
                                    <Form.Select  value={this.state.id_com} onChange={this.onInputChange} name="id_com" required>
                                    {
                                        this.state.nomCom.map(reg => (
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










