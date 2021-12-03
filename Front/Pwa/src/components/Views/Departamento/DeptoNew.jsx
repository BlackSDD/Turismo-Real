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

export default class DeptoNew extends Component{
    constructor(props){
        super(props); 
        this.state ={
            dir_dpto:'' , 
            num_dpto:'' , 
            n_amb_dpto:'' , 
            desc_dpto:'' , 
            costo_arri_dpto:'' ,
            id_cnd:'',  
            condominio: []  
        };
}

async componentDidMount() {
    const res = await axios.get('http://localhost:4000/API/condominio');
    this.setState({
        condominio: res.data
    });
}

handleSubmit = async (e) => {
    e.preventDefault();
    const answer = window.confirm("¿Confirmar registro de departamento?");
        const newDepartamento = {
            dir_dpto:this.state.dir_dpto , 
            num_dpto:this.state.num_dpto , 
            n_amb_dpto:this.state.n_amb_dpto , 
            desc_dpto:this.state.desc_dpto , 
            costo_arri_dpto:this.state.costo_arri_dpto ,
            id_cnd:this.state.id_cnd,    

            
        };
        if (answer && 
            this.state.dir_dpto!== "" &&
            this.state.num_dpto!== "" &&
            this.state.n_amb_dpto!== "" &&
            this.state.desc_dpto!== "" &&
            this.state.costo_arri_dpto!== "" &&
            this.state.id_cnd!== ""
            ){
        axios.post('http://localhost:4000/API/departamento', newDepartamento);
        notifyS();
        this.setState({
            dir_dpto:'' , 
            num_dpto:'' , 
            n_amb_dpto:'' , 
            desc_dpto:'' , 
            costo_arri_dpto:'' ,
            id_cnd:'',    
        });
    } else {
        notifyE();
    }
};

onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
}


render(){
        
    return(
        <React.Fragment>
        <div id="admin-background">
            <div class="container">
                <h1 id="create-comuna-title">Ingresar Departamento</h1>
                <div id="create-comuna-form">
                    <Form className="contact-form" onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="Departamento">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" name="dir_dpto" placeholder= "Calle 1234" rows={1} value={this.state.dir_dpto} required onChange={this.onInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Departamento">
                            <Form.Label>Número departamento</Form.Label>
                            <Form.Control type="number" name="num_dpto" placeholder= "1" rows={1} value={this.state.num_dpto} required onChange={this.onInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Departamento">
                            <Form.Label>Número de ambientes </Form.Label>
                            <Form.Control type="number" name="n_amb_dpto" placeholder= "2" rows={1} value={this.state.n_amb_dpto} required onChange={this.onInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Departamento">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" name="desc_dpto" placeholder= "Detalles del deartamento" rows={1} value={this.state.desc_dpto} required onChange={this.onInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Departamento">
                            <Form.Label>Costo</Form.Label>
                            <Form.Control type="number" name="costo_arri_dpto" prefix="$" placeholder= "$xxxxx" rows={1} value={this.state.costo_arri_dpto} required onChange={this.onInputChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Condominio</Form.Label>
                            <Form.Select  value={this.state.id_cnd} onChange={this.onInputChange} name="id_cnd" required>
                            {
                                this.state.condominio.map(reg => (
                                <option  value={reg.id_cnd}>
                                    {reg.nom_cnd}
                                </option>
                                ))
                            }
                            </Form.Select>
                        </Form.Group>
                        <button type="submit" class="btn btn-primary mt-5" id="btnCreateComuna">Agregar Departamento</button>
                    </Form>
                </div>
            </div>        
        </div>
    </React.Fragment>
);

    }

}