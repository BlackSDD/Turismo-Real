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

export default class TourNew extends Component{

    state ={
        id_serv: '',
        dur_hra: '',
        dur_min: '',
        cost_adult:'',
        cost_nigno:'',
        cost_3ra:'',
        ubi_partida:'',
        ubi_fin:'',
        alimentacion:'',
        transporte:'',
        servicio:[],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/serviciosExtra');
        this.setState({
            servicio: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de este articulo?");
            const newComuna = {
                id_serv: this.state.id_serv,
                dur_hra: this.state.dur_hra,
                dur_min: this.state.dur_min,
                cost_adult: this.state.cost_adult,
                cost_nigno: this.state.cost_nigno,
                cost_3ra: this.state.cost_3ra,
                ubi_partida: this.state.ubi_partida,
                ubi_fin: this.state.ubi_fin,
                alimentacion: this.state.alimentacion,
                transporte: this.state.transporte,
            };
            if (answer && this.id_serv !== "" && this.alimentacion!=="" && this.transporte !==""){
            axios.post('http://localhost:4000/API/tour', newComuna);
            notifyS();
            this.setState({
                id_serv: "",
                dur_hra: "",
                dur_min: "",
                cost_adult: "",
                cost_nigno: "",
                cost_3ra: "",
                ubi_partida: "",
                ubi_fin: "",
                alimentacion: "",
                transporte: "",
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
                        <h1 id="create-comuna-title">Ingrese Tour Nuevo</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                            <Form.Group>
                                    <Form.Label>Ingrese La agencia</Form.Label>
                                    <Form.Select  value={this.state.id_serv} onChange={this.onInputChange} name="id_serv" required>
                                    <option value="">ingrese una agencia</option>
                                    {
                                        this.state.servicio.map(reg => (
                                        <option  value={reg.id_serv}>
                                            {reg.nom_serv}
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese las horas que dura el viaje</Form.Label>
                                    <Form.Control as="input" name="dur_hra" rows={1} value={this.state.dur_hra} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese los minutos</Form.Label>
                                    <Form.Control as="input" name="dur_min" rows={1} value={this.state.dur_min} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Costo por adulto</Form.Label>
                                    <Form.Control as="input" name="cost_adult" rows={1} value={this.state.cost_adult} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Costo niño</Form.Label>
                                    <Form.Control as="input" name="cost_nigno" rows={1} value={this.state.cost_nigno} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Costo tercera edad</Form.Label>
                                    <Form.Control as="input" name="cost_3ra" rows={1} value={this.state.cost_3ra} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese donde inicia el tour</Form.Label>
                                    <Form.Control as="textarea" name="ubi_partida" rows={1} value={this.state.ubi_partida} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Ingrese donde termina el tour</Form.Label>
                                    <Form.Control as="textarea" name="ubi_fin" rows={1} value={this.state.ubi_fin} required onChange={this.onInputChange}/>
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Incluye comida</Form.Label>
                                    <Form.Select  value={this.state.alimentacion} onChange={this.onInputChange} name="alimentacion" required>
                                        <option value="">ingrese una opcion</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Incluye Transporte</Form.Label>
                                    <Form.Select  value={this.state.transporte} onChange={this.onInputChange} name="transporte" required>
                                        <option value="">ingrese una opcion</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
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













