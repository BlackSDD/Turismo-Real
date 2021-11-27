import React from "react";

import { Component } from "react";
import axios from 'axios';
import Footer from "../../Layouts/Footer";


class AgenciaExterna extends Component{
    constructor(props){
        super(props); 
        this.state ={
            nom_age:"",
            email_age:"",
            tel_age:"",
            id_com:"" ,
            id_rgn:"" 
    
        };
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    manejadorSubmit(e){
        e.preventDefault();
    }
    manejadorBoton=(e)=>{
        e.preventDefault();
        
        const{
            nom_age,
            email_age,
            tel_age,
            id_com ,
            id_rgn 
    
        }=this.state;
        axios.post('http://localhost:4000/API/agencia',{
            nom_age,
            email_age,
            tel_age,
            id_com ,
            id_rgn 
    
        }).then((result)=>{});
    };

    render(){
        
        return(
            <React.Fragment>
            <div class="container ">
                <header className="heading text-center mt-5 mb-5"> Registrar agencia</header>
                    <div>
                        <form onSubmit={this.manejadorSubmit}>

                        <div className="row mt-5 mb-5 d-flex justify-content-center">
                            <div className="col-4">
                                <label className="form-text">Nombre agencia</label>
                            </div>
                                <div className="col-4">
                                    <input type="text" name="nom_age" value={this.state.nom_age}  placeholder="Ingrese el nombre de la agencia" className="form-control " onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                <label className="form-text">Correo electrónico</label>
                            </div>
                                <div className="col-4">
                                    <input type="text" name="email_age" value={this.state.email_age}  placeholder="Ingrese el correo electrónico de la agencia" className="form-control " onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                <label className="form-text">Número de contacto</label>
                            </div>
                                <div className="col-4">
                                    <input type="number" name="tel_age" value={this.state.tel_age}  placeholder="Ingrese el número de contacto de la agencia" className="form-control " onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                <label className="form-text">ID comuna</label>
                            </div>
                                <div className="col-4">
                                    <input type="number" name="id_com" value={this.state.id_com}  placeholder="Ingrese el id de la comuna a la cual pertenece sucrusal matriz la agencia" className="form-control " onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                <label className="form-text text-end">ID Región</label>
                            </div>
                                <div className="col-4">
                                    <input type="number" name="id_rgn" value={this.state.id_rgn}  placeholder="Ingrese el id de la región a la cual pertenece sucrusal matriz la agencia" className="form-control " onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="row mt-5 mb-5  d-flex justify-content-center">
                                <div className="col-6 text-center">
                                    <button><a href={'http://localhost:3000/dashboard'}>Volver</a></button>
                                </div>
                                <div className="col-6 text-center">
                                    <input type="submit" value="Registrar" onClick={this.manejadorBoton.bind(this)}post/>
                                </div>
                            </div>




                        </form>
                    </div>
            </div>
            </React.Fragment>
        );
    
    }
    


}

export default AgenciaExterna