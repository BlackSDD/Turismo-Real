import React from "react";
import {Form} from 'react-bootstrap';
import '../assetss/css/Login.css';
// import '../assetss/css/comon-body.css';

class Login extends React.Component{

    manejadorSubmit(e){
        e.preventDesafult();
    }
    render(){
        return(
                <div id="login-body">
                    <br/>
                    <div className="container" id="login-container">
                        <div id="login">
                            <h1>Acceder a tu cuenta</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa tu email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                                </Form.Group>
                            </Form>
                            <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                        </div>
                    </div>
                    <br/>
                </div>
        );
    }
}

export default Login