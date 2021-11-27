import React from "react";

import { Component } from "react";

//servicios
// import {Apiurl} from '../services/apirest';

//libreria
import axios from 'axios';

export default class CondominioNew extends Component{

    state ={
        nom_cnd: '',
        id_com: '',
        comunas: [],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/comuna');
        this.setState({
            comunas: res.data
        });
    }


    onSubmit = async (e) => {
        e.preventDefault();
       
            const newComuna = {
                nom_cnd: this.state.nom_cnd,
                id_com: this.state.id_com,
            };
            axios.post('http://localhost:4000/API/condominio', newComuna);
        
            window.location.assign("http://localhost:3000/listarcondominio")
    

    }



    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        
            return (
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4>nueva condominio</h4>
                        <form onSubmit={this.onSubmit}>
                        <input type="text" name="nom_cnd" value={this.state.nom_cnd}  placeholder="Ingrese nombre de la" className="form-control " onChange={this.onInputChange}/>

                            <div className="form-group">
                                <select
                                    className="form-control"
                                    value={this.state.id_com}
                                    onChange={this.onInputChange}
                                    name="id_com"
                                    required>
                                    {
                                        this.state.comunas.map(reg => (
                                            <option key={reg.id_com} value={reg.id_com}>
                                                {reg.nom_com}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <button className="btn btn-primary">
                            Save <i className="material-icons">
                                assignment
</i>
                        </button>
                                    
                        </form>
                    </div>
                </div>
            )
        }
}

