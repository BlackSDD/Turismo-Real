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

export default class ReservaMantencionNew extends Component{

    state ={
        fec_rmant: '',
        id_usr: '',
        id_dpto: '',
        depto: [],
        usuario:[],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/departamento');
        this.setState({
            depto: res.data
        });
        const use = await axios.get('http://localhost:4000/API/usuario');
        this.setState({
            usuario: use.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar la reserva de mantención?");
            const newComuna = {
                fec_rmant: this.state.fec_rmant,
                id_usr: this.state.id_usr,
                id_dpto: this.state.id_dpto,
                
            };
            if (answer){
            axios.post('http://localhost:4000/API/reservaMantencion', newComuna);
            notifyS();
            this.setState({
                fec_rmant: "",
                id_usr: "",
                id_dpto: "",
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
                        <h1 id="create-comuna-title">Reservar mantención</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese la fecha</Form.Label>
                                    <Form.Control type="date" name="fec_rmant" rows={1} value={this.state.fec_rmant} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese el departamento</Form.Label>
                                    <Form.Select  value={this.state.id_dpto} onChange={this.onInputChange} name="id_dpto" required>
                                    {
                                        this.state.depto.map(reg => (
                                        <option  value={reg.id_dpto}>
                                            {reg.dir_dpto} habitacion  {reg.num_dpto}
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese el usuario</Form.Label>
                                    <Form.Select  value={this.state.id_usr} onChange={this.onInputChange} name="id_usr" required>
                                    {
                                        this.state.usuario.map(reg => (
                                        <option  value={reg.id_usr}>
                                            {reg.email_usr}
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Reservar Mantención</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













