import axios from "axios";
import React from "react";
import Footer from "../../Layouts/Footer";
import { Component } from "react";
import { Image, VarBinary } from "mssql";
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
            img_1_dpto:"" , 
            img_2_dpto:null , 
            img_3_dpto:null ,
            img_4_dpto:null , 
            img_5_dpto:null ,
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
	    img_1_dpto , 
	    img_2_dpto , 
	    img_3_dpto ,
	    img_4_dpto , 
	    img_5_dpto ,
        id_cnd 	


    }=this.state;
    axios.post('http://localhost:4000/API/departamento',{
        dir_dpto , 
	    num_dpto , 
	    n_amb_dpto , 
	    desc_dpto , 
	    costo_arri_dpto , 
	    img_1_dpto , 
	    img_2_dpto , 
	    img_3_dpto ,
	    img_4_dpto , 
	    img_5_dpto ,
        id_cnd 	
    }).then((result)=>{});
};

render(){
        
    return(
        <React.Fragment>
        <div class="container">
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
                                 <label className="form-text text-end">Imagen 1</label>
                            </div>
                            <div className="col-4">
                                <input type="file" name="img_1_dpto" accept=".jpg" size="10mb" value={this.state.img_1_dpto} className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>



                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Imagen 2</label>
                            </div>
                            <div className="col-4">
                                <input type="file" name="img_2_dpto" value={this.state.img_2_dpto}  className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Imagen 3</label>
                            </div>
                            <div className="col-4">
                                <input type="file" name="img_3_dpto" value={this.state.img_3_dpto}  className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Imagen 4</label>
                            </div>
                            <div className="col-4">
                                <input type="file" name="img_4_dpto" value={this.state.img_4_dpto}  className="form-control " onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5  d-flex justify-content-center">
                            <div className="col-4">
                                 <label className="form-text text-end">Imagen 5</label>
                            </div>
                            <div className="col-4">
                                <input type="file" name="img_5_dpto" value={this.state.img_5_dpto}  className="form-control " onChange={this.onChange}/> 
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