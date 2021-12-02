import React from "react";
import { Form } from "react-bootstrap";
import '../assetss/css/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from "axios";

/////Notificaciones pop

const notifyE = () =>{
    toast.error('Correo y/o contraseña inválidos, asegúrese que las credenciales son correctas');
};

const notifyESuspendida = () =>{
    toast.error('Su cuenta se encuentra suspendidad, comuníquese con nosotros a través de los medios proporcionados al pie de la página');
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

    RedirigirRegistrar = () =>{
        this.props.history.push("/UsuarioNew");
    }

    manejadorBoton = () =>{
        axios.post("http://localhost:4000/API/usuarioAutenticar", this.state.form)
        .then(response =>{
            if(response.data == "")
            {
                notifyE();
            }
            else
            {
                if(response.data[0].est_cta == "suspendida")
                {
                    notifyESuspendida();
                }
                else
                {
                    if(response.data[0].id_tipo_usr == "1")
                    {
                        notifyS();
                        console.log("Admin");
                    }
                    else if(response.data[0].id_tipo_usr =="2")
                    {
                        notifyS();
                        console.log("Funcionario");
                        this.props.history.push("/Home");
                    }
                    else if(response.data[0].id_tipo_usr =="3")
                    {
                        notifyS();
                        //setear y almacenar datos en el session storage
                        sessionStorage.correo = response.data[0].email_usr;
                        sessionStorage.idUsuario = response.data[0].id_usr;
                        let email = sessionStorage.correo;
                        console.log('El correo es' + email);
        
                    }
    
                }
    
            }
            


        });
    };

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
                            <button type="submit" class="btn btn-primary mb-3 mt-5 col-12" onClick={this.manejadorBoton}>Iniciar sesión</button>
                            <button type="button" class="btn btn-secondary mb-5 col-12" onClick={this.RedirigirRegistrar}>Registrarse</button>
                        </div>                               
                    </div>
                    <br/>
                </div>
        );
    }
}

export default Login
