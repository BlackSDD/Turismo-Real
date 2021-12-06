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










