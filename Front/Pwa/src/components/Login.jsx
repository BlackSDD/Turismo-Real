import React from "react";
import {Form} from 'react-bootstrap';
import '../assetss/css/Login.css';
// import '../assetss/css/comon-body.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';



class Login extends React.Component{

    render(){
        
        toast.configure({
        });
        
        const notifyS = () =>{
            toast.success('Su mensaje ha sido enviado con éxito!');
        };
        const notifyE = () =>{
            toast.error('Su mensaje no se ha podido enviar, por favor intente de nuevo');
        };
    

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