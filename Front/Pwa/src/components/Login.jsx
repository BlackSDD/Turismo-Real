import React from "react";
import {Alert, Form} from 'react-bootstrap';
import '../assetss/css/Login.css';
// import '../assetss/css/comon-body.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from "axios";
import { useHistory, withRouter } from "react-router";

const notifyE = () =>{
    toast.error('Correo y/o contraseña inválidos, asegúrese que las credenciales son correctas');
};

const notifyS = () =>{
    toast.success('Inicio de sesión existoso, Bienvenido(a) Turismo Real');
};


class Login extends React.Component{

    state = {
        form:{
            email_usr:"",
            contr_usr:""
        },
        error:false,
        errorMsg:""
    }

    manejadorChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

    }



    manejadorBoton = () =>{
        axios.post("http://localhost:4000/API/usuarioAutenticar", this.state.form)
        .then(response =>{
            if(response.data == "")
            {
                notifyE();
            }
            else if(response.data[0].id_tipo_usr == "1")
            {
                notifyS();
                console.log("Admin")
                this.props.history.push("/departamento");
            }
            else if(response.data[0].id_tipo_usr =="2")
            {
                notifyS();
                console.log("Funcionario")
                this.props.history.push("/condominio");
            }
            else if(response.data[0].id_tipo_usr =="3")
            {
                notifyS();
                this.props.history.push("/home");

            }


        })
    }

    render(){
        
        toast.configure({
        });
        

        function manejadorSubmit(e){
            e.preventDesafult();
            notifyS();
        }


        return(
                <div id="login-body">
                    <br/>
                    <div className="container" id="login-container">
                        <div id="login">
                            <h1 id="title-login">Acceder a tu cuenta</h1>
                            <Form onSubmit={manejadorSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa tu email" 
                                    name="email_usr"
                                    onChange={this.manejadorChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingresa tu contraseña" 
                                    name="contr_usr"
                                    onChange={this.manejadorChange}
                                    />
                                </Form.Group>
                            </Form>
                            <button type="submit" class="btn btn-primary"
                            onClick={this.manejadorBoton}
                            >Enviar Mensaje</button>
                            </div>
                            <div name="noExiste" class="alert alert-danger" role="alert" hidden="true">
                            This is a danger alert—check it out!
                            </div>
                    </div>
                    <br/>
                </div>
        );
    }
}

export default Login