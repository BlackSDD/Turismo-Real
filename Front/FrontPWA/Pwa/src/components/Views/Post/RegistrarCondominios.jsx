import axios from "axios";
import React from "react";

import { Component } from "react";

class Condominio extends Component{
    
    constructor(props){
        super(props); 
        this.state ={
            nom_cnd :"", 
            id_com :""
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
        
        const{nom_cnd, id_com}=this.state;
        axios.post('http://localhost:4000/API/condominio',{
            nom_cnd, 
            id_com 
        }).then((result)=>{});
    };

    render(){

        return(
            <React.Fragment>
            <div class="container ">
                <header className="heading text-center mt-5 mb-5">Registrar agencia</header>
                    <div>
                        <form onSubmit={this.manejadorSubmit}>
                            <div className="row mt-5 mb-5  d-flex justify-content-center">
                                    <div className="col-4">
                                        <label className="form-text text-end">Nombre de condominio</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" name="nom_cnd" value={this.state.nom_cnd}  placeholder="Ingrese nombre del condominio" className="form-control " onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row mt-5 mb-5  d-flex justify-content-center">
                                    <div className="col-4">
                                        <label className="form-text text-end">Id de la comuna</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" name="id_com" value={this.state.id_com}  placeholder="Ingrese el id de la comuna" className="form-control " onChange={this.onChange}/>
                                    </div>
                                </div>

                                <div className="row mt-5 mb-5  d-flex justify-content-center">
                                    <div className="col-6 text-center">
                                        <button><a href={'http://localhost:3000/dashboard'}>Volver</a></button>
                                    </div>
                                    <div className="col-6 text-center">
                                        <input type="submit" value="Submit" onClick={this.manejadorBoton.bind(this)}post/>
                                    </div>
                                </div>
                        </form>
                    </div>
            </div>
            </React.Fragment>


        );

    }
}

export default Condominio
