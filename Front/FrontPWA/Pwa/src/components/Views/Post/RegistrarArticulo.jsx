import React from "react";
import { Component } from "react";
import axios from 'axios';

class Articulo extends Component{
    constructor(props){
        super(props); 
        this.state ={
            nom_arti:"", 
            cant_arti:"",
            deta_arti:"",
            valor_arti:"",
            id_depto:""
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
        nom_arti, 
	    cant_arti,
        deta_arti,
        valor_arti,
        id_depto

    }=this.state;
    axios.post('http://localhost:4000/API/articulo',{
        nom_arti, 
	    cant_arti,
        deta_arti,
        valor_arti,
        id_depto

    }).then((result)=>{});
};

render(){
        
    return(
        <React.Fragment>
        <div class="container">
            <header class="heading"> Registration-Form</header><hr></hr>
                <div>
                    <form onSubmit={this.manejadorSubmit}>
                        <input type="text" name="nom_arti" value={this.state.nom_arti}  placeholder="¿Que articulo es?" className="form-control " onChange={this.onChange}/>
                        <input type="number" name="cant_arti" value={this.state.cant_arti}  placeholder="Ingrese la cantidad del articulo" className="form-control " onChange={this.onChange}/>
                        <input type="text" name="deta_arti" value={this.state.deta_arti}  placeholder="Detalles del artículo" className="form-control " onChange={this.onChange}/>
                        <input type="number" name="valor_arti" value={this.state.valor_arti}  placeholder="Ingrese el valor del artículo" className="form-control " onChange={this.onChange}/>
                        <input type="number" name="id_depto" value={this.state.id_depto}  placeholder="Ingrese el id del departamento al cual pertenecen el o los artículos" className="form-control " onChange={this.onChange}/>


                        <input type="submit" value="Submit" onClick={this.manejadorBoton.bind(this)}post/>
                    </form>
                </div>
        </div>
        </React.Fragment>
    );

}


}

export default Articulo