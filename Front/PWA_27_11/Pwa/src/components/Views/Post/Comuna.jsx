import React from "react";
import '../../../assetss/css/Comuna.css';
import { Component } from "react";
import {Form, FormGroup} from 'react-bootstrap';
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
            if (answer){
            axios.post('http://localhost:4000/API/comuna', newComuna);
            notifyS();
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
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4>Nueva comuna</h4>
                        {/* <form onSubmit={this.onSubmit}>
                        <input type="text" name="nom_com" value={this.state.nom_com}  placeholder="Ingrese nombre de la comuna"  required className="form-control " onChange={this.onInputChange}/>
                            <div className="form-group">
                                <select className="form-control" value={this.state.id_rgn} onChange={this.onInputChange} name="id_rgn" required>
                                    {
                                        this.state.region.map(reg => (
                                            <option key={reg.id_rgn} value={reg.id_rgn}>
                                                {reg.nom_rgn}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className="btn btn-primary">
                                <i className="material-icons">Guardar</i>
                            </button>
                        </form> */}
                    </div>
                    <Form className="contact-form" onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="Comuna">
                                <Form.Label>Ingrese nombre de la comuna</Form.Label>
                                <Form.Control as="textarea" name="nom_com" placeholder= "Ingrese el nombre de la comuna" rows={1} value={this.state.nom_com} required onChange={this.onInputChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ingrese la Región</Form.Label>
                                <Form.Select aria-label="Default select example" value={this.state.id_rgn} onChange={this.onInputChange} name="id_rgn" required>
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
                </React.Fragment>
            )
        }
}
