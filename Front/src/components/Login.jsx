import React from "react";
import '../assetss/css/Login.css';

class Login extends React.Component{

    manejadorSubmit(e){
        e.preventDesafult();
    }


    render(){
        return(
            <React.Fragment>
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/> <label for="tab-1" className="tab">Iniciar sesión</label>
                        <input id="tab-2" type="radio" name="tab" className="for-pwd"/> <label for="tab-2" className="tab">Recuperar contraseña</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <input id="user" type="text" className="input" placeholder="Email"/>
                                </div>
                                <div className="group">
                                    <input id="pass" type="password" className="input" data-type="password" placeholder="Contraseña"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In"/>
                                </div>
                                <div className="hr"></div>
                            </div>
                            <div className="for-pwd-htm">
                                <div className="group">
                                    <input id="user" type="text" className="input" placeholder="Email"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Reset Password"/>
                                </div>
                                <div className="hr"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}

export default Login