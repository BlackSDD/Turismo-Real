import axios from "axios";
import React from "react";
import Footer from "../../Layouts/Footer";
import { Component } from "react";
import { Image, VarBinary } from "mssql";
import { Link } from 'react-router-dom';
import NavBar from "../../Layouts/Navbar";
import NavBarAdmin from "../../Layouts/NavBarAdmin";
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>



class DeptoNew extends Component{
    constructor(props){
        super(props); 
        this.state ={
            dir_dpto:"", 
            num_dpto:"" , 
            n_amb_dpto:"" , 
            desc_dpto:"" , 
            costo_arri_dpto:"" , 
            id_cnd:"" 	
    };

 let buf = Buffer.alloc(15,'a',Image)


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

        dir_dpto , 
	    num_dpto , 
	    n_amb_dpto , 
	    desc_dpto , 
	    costo_arri_dpto ,
        id_cnd 	


    }=this.state;
    axios.post('http://localhost:4000/API/departamento',{
        dir_dpto , 
	    num_dpto , 
	    n_amb_dpto , 
	    desc_dpto , 
	    costo_arri_dpto ,
        id_cnd 	
    }).then((result)=>{});
};

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
    return(
        <React.Fragment>
        <div class="container">
        <NavBarAdmin/>
            <header class="heading text-center mt-5 mb-5"><h3>Registrar departamento</h3></header>
                <div>
                    <form onSubmit={this.manejadorSubmit}>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Dirección</label>
                            </div>
                            <div className="col-4">
                                <input type="text" name="dir_dpto" value={this.state.dir_dpto}  placeholder="Ingrese el dirección del departamento" className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Número del departamento</label>
                            </div>
                            <div className="col-4">
                                <input type="number" name="num_dpto" value={this.state.num_dpto}  placeholder="Ingrese el número del departamento" className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Número de ambientes</label>
                            </div>
                            <div className="col-4">
                                <input type="number" name="n_amb_dpto" value={this.state.n_amb_dpto}  placeholder="Ingrese el número de ambientes" className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Detalle de departamento</label>
                            </div>
                            <div className="col-4">
                                <textarea type="text" name="desc_dpto" value={this.state.desc_dpto}  placeholder="Detalles del departamento" className="form-control " onChange={this.onChange}/>                        
                            </div>
                        </div>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Costo del departamento</label>
                            </div>
                            <div className="col-4">
                                <input type="number" name="costo_arri_dpto" value={this.state.costo_arri_dpto}  placeholder="Ingrese el costo del departamento" className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>
                        
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Id Condominio</label>
                            </div>
                            <div className="col-4">
                                <input type="number" name="id_cnd" value={this.state.id_cnd}  placeholder="Ingrese el id del condominio" className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>


                            <div className="row mt-5 mb-5  d-flex justify-content-center">
                                <div className="col-6 text-center">
                                    <button><a href={'/home'}>Volver</a></button>
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

export default DeptoNew