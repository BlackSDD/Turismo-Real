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

export default class DeptoEdi extends Component{

    state ={
        id_dpto:'',
        dir_dpto:'', 
	    num_dpto:'' , 
	    n_amb_dpto:'', 
	    desc_dpto:'' , 
	    costo_arri_dpto:'', 

    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar la acutalización de este departamento?");
            const newComuna = {
                
                id_dpto:this.state.id_dpto,
                dir_dpto:this.state.dir_dpto , 
                num_dpto:this.state.num_dpto , 
                n_amb_dpto:this.state.n_amb_dpto, 
                desc_dpto:this.state.desc_dpto , 
                costo_arri_dpto:this.state.costo_arri_dpto , 

                };
            if (answer){
            axios.put('http://localhost:4000/API/departamento', newComuna);
            notifyS();
            this.setState({
                id_dpto:'',
                dir_dpto:'' , 
                num_dpto:'' , 
                n_amb_dpto:'' , 
                desc_dpto:'' , 
                costo_arri_dpto:'' , 
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
                        <h1 id="create-comuna-title">Actualizar departamento</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control type="text" name="dir_dpto" placeholder= "Dirección departamento" rows={1} value={this.state.email_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Número departamento</Form.Label>
                                    <Form.Control type="number" name="num_dpto" placeholder= "Número" rows={1} value={this.state.contr_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Número de ambientes</Form.Label>
                                    <Form.Control type="number"  name="n_amb_dpto" placeholder= "Ambientes" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control as="textarea" name="desc_dpto" placeholder= "Características" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Costo de arriendo</Form.Label>
                                    <Form.Control type="number" name="costo_arri_dpto" placeholder= "Costo de arriendo" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
                                </Form.Group>

                                


                                <button type="submit" class="btn btn-primary mt-5" id="btnCreateComuna">Actualizar Departamento</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













