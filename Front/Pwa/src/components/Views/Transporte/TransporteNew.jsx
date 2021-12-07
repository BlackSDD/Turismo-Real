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

export default class TransporteNew extends Component{

    state ={
        id_serv:"" ,
        cost_km_dia:"" ,
        cost_km_noc:"" ,
        servicio: []
        
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/serviciosExtraTrasporte');
        this.setState({
            servicio: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar la tarifa del transporte?");
            const newComuna = {
                id_serv:this.state.id_serv ,
                cost_km_dia:this.state.cost_km_dia ,
                cost_km_noc:this.cost_km_noc
           
                
            };
            if (answer && 
                this.state.id_serv !== "" && 
                this.state.cost_km_dia !== "" && 
                this.state.cost_km_noc !== ""
                ){
            axios.post('http://localhost:4000/API/transporte', newComuna);
            notifyS();
            this.setState({
                id_serv:"" ,
                cost_km_dia:"" ,
                cost_km_noc:"" ,
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
                        <h1 id="create-comuna-title">Definir tarifa de Transporte</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                            <Form.Group>
                                    <Form.Label>Servicio</Form.Label>
                                    <Form.Select  value={this.state.id_serv} onChange={this.onInputChange} name="id_serv" required>
                                    <option value="">
                                        Ingrese una opción
                                    </option>
                                    {
                                        this.state.servicio.map(reg => (
                                        <option  value={reg.id_serv}>
                                            {reg.nom_serv}
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Transporte">
                                    <Form.Label>Costo km. día</Form.Label>
                                    <Form.Control type="number" name="cost_km_dia" placeholder="60" rows={1} value={this.state.cost_km_dia} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Transporte">
                                    <Form.Label>Costo km. noche</Form.Label>
                                    <Form.Control type="number" name="cost_km_noc" placeholder="65" rows={1} value={this.state.cost_km_noc} required onChange={this.onInputChange}/>
                                </Form.Group>

                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Agregar Transporte</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}










