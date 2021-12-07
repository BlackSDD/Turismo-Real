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

export default class Comuna extends Component{

    state ={
        nom_com: '',
        id_rgn: '',
        region: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/region');
        this.setState({
            region: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de comuna?");
        const newComuna = {
            nom_com: this.state.nom_com,
            id_rgn: this.state.id_rgn,
        };
        if(this.state.id_rgn ===""){
            notifyE();
        } 
        if (answer && this.state.nom_com.length>2){
            axios.post('http://localhost:4000/API/comuna', newComuna);
            notifyS();
            this.setState({
                nom_com: " ",
                id_rgn: " "
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
        console.log(this.state);
        return (
            <React.Fragment>
                <div id="admin-background">
                <NavBarAdmin/>
                    <div className="container">
                        <h1 id="create-comuna-title">Registrar Comuna</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Comuna">
                                    <Form.Label>Ingrese nombre de la comuna</Form.Label>
                                    <Form.Control as="textarea" name="nom_com" placeholder= "Ingrese el nombre de la comuna" rows={1} value={this.state.nom_com} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese la Región</Form.Label>
                                    <Form.Select  value={this.state.id_rgn} onChange={this.onInputChange} name="id_rgn" required>
                                        <option value="">
                                            Elige una region    
                                        </option>
                                    {   
                                        this.state.region.map(reg => (
                                        
                                        <option key={reg.id_rgn} value={reg.id_rgn}>
                                            {reg.nom_rgn}
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
