import React from "react";
import '../../../assetss/css/Comuna.css';
import { Component } from "react";
//libreria
import axios from 'axios';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

toast.configure({

});
 
const notifyS = () =>{
    toast.success('Operación realizada con éxito');
};
const notifyE = () =>{
    toast.error('Operación cancelada');
};


export default class Comuna extends Component{

    state ={
        nom_com: '',
        id_rgn: '',
        region: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/region');
        this.setState({
            region: res.data
        });
    }


    onSubmit = async (e) => {
        e.preventDefault();
        const answer = window.confirm("¿Estas Seguro?");
            const newComuna = {
                nom_com: this.state.nom_com,
                id_rgn: this.state.id_rgn,
            };
            if (answer){
            axios.post('http://localhost:4000/API/comuna', newComuna);
            notifyS();
            window.location.assign("http://localhost:3000/listarcomuna");
        } else {
            notifyE();
        }
           
    

    }



    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        
            return (
                <React.Fragment>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4>Nueva comuna</h4>
                        <form onSubmit={this.onSubmit}>
                        <input type="text" name="nom_com" value={this.state.nom_com}  placeholder="Ingrese nombre de la comuna"  required className="form-control " onChange={this.onInputChange}/>

                            
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    value={this.state.id_rgn}
                                    onChange={this.onInputChange}
                                    name="id_rgn"
                                    required>
                                    {
                                        this.state.region.map(reg => (
                                            <option key={reg.id_rgn} value={reg.id_rgn}>
                                                {reg.nom_rgn}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <button className="btn btn-primary">
                             <i className="material-icons">Guardar</i>
                        </button>
                                    
                        </form>
                    </div>
                </div>
                </React.Fragment>
            )
        }
}
