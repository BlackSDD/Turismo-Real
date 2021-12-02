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

export default class DeptoEdi extends Component{

    state ={
        id_dpto:'',
        dir_dpto:'', 
	    num_dpto:'' , 
	    n_amb_dpto:'', 
	    desc_dpto:'' , 
	    costo_arri_dpto:'', 
	    img_1_dpto:'' , 
	    img_2_dpto:'' , 
	    img_3_dpto:'' ,
	    img_4_dpto:'' , 
	    img_5_dpto:'' ,
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
                img_1_dpto:this.state.img_1_dpto , 
                img_2_dpto:this.state.img_2_dpto , 
                img_3_dpto:this.state.img_3_dpto ,
                img_4_dpto:this.state.img_4_dpto , 
                img_5_dpto:this.state.img_5_dpto ,
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
                img_1_dpto:'' , 
                img_2_dpto:'' , 
                img_3_dpto:'' ,
                img_4_dpto:'' , 
                img_5_dpto:'' ,
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

                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control as="file" name="img_1_dpto" placeholder= "nombre del Departamento" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control as="file" name="img_2_dpto" placeholder= "nombre del Departamento" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control as="file" name="img_3_dpto" placeholder= "nombre del Departamento" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control as="file" name="img_4_dpto" placeholder= "nombre del Departamento" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Departamento">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control as="file" name="img_5_dpto" placeholder= "nombre del Departamento" rows={1} value={this.state.Imagen_usr} required onChange={this.onInputChange}/>
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













