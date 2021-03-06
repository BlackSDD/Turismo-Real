import React from "react";
import '../../../assetss/css/Comuna.css';
import { Component } from "react";
import {Form} from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

export default class UsuarioNew extends Component{

    state ={
        email_usr: '',
        contr_usr: '',
        nom_usr: '',
        appat_usr: '',
        apmat_usr: '',
        tel_usr: '',
        rut_usr: '',
        dv_usr: '',
        est_cta: 'suspendida',
        tipo_cli: 'normal',
        id_tipo_usr: '',
        tipo: []
        
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/tipousr');
        this.setState({
            tipo: res.data
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Confirmar creación de este usuario?");
            const newUsuario = {
                email_usr: this.state.email_usr,
                contr_usr: this.state.contr_usr,
                nom_usr: this.state.nom_usr,
                appat_usr: this.state.appat_usr,
                apmat_usr: this.state.apmat_usr,
                tel_usr: this.state.tel_usr,
                rut_usr: this.state.rut_usr,
                dv_usr: this.state.dv_usr,
                est_cta: 'suspendida',
                tipo_cli: 'normal',
                id_tipo_usr: this.state.id_tipo_usr,
   
                
            };
            if (answer && this.state.dv_usr!== ""){
            axios.post('http://localhost:4000/API/usuario', newUsuario);
            notifyS();
            this.setState({
                email_usr: '',
                contr_usr: '',
                nom_usr: '',
                appat_usr: '',
                apmat_usr: '',
                tel_usr: '',
                rut_usr: '',
                dv_usr: '',
                est_cta: 'suspendida',
                tipo_cli: 'normal',
                id_tipo_usr: '',
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
                        <h1 id="create-comuna-title">Ingresar Usuario</h1>
                        <div id="create-comuna-form">
                            <Form className="contact-form" onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control type="email" name="email_usr" placeholder= "ejemplo@ejemplo.cl" rows={1} value={this.state.email_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="contr_usr" placeholder= "Contraseña" rows={1} value={this.state.contr_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control as="textarea" name="nom_usr" placeholder= "Nombre" rows={1} value={this.state.nom_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control as="textarea" name="appat_usr" placeholder= "Apellido paterno" rows={1} value={this.state.appat_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control as="textarea" name="apmat_usr" placeholder= "Apellido materno" rows={1} value={this.state.apmat_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control as="input" name="tel_usr" placeholder= "12345678" rows={1} value={this.state.tel_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>RUT</Form.Label>
                                    <Form.Control as="textarea" name="rut_usr" placeholder= "12345678" rows={1} value={this.state.rut_usr} required onChange={this.onInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Articulo">
                                    <Form.Label>digito verificador</Form.Label>
                                    <Form.Select value={this.state.dv_usr} onChange={this.onInputChange} name="dv_usr" required>
                                        <option value="">ingrese una opcion</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="k">k</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ingrese el tipo de usuario</Form.Label>
                                    <Form.Select  value={this.state.id_tipo_usr} onChange={this.onInputChange} name="id_tipo_usr" required>
                                    {
                                        this.state.tipo.map(reg => (
                                        <option  value={reg.id_tipo_usr}>
                                            {reg.tipo_usr}
                                        </option>
                                        ))
                                    }
                                    </Form.Select>
                                </Form.Group>
                                <button type="submit" class="btn btn-primary" id="btnCreateComuna">Agregar Usuario</button>
                            </Form>
                        </div>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}













