import React from "react";

import { Component } from "react";

//servicios
// import {Apiurl} from '../services/apirest';

//libreria
import axios from 'axios';

export default class ComunaNew extends Component{

    state ={
        nom_com: '',
        id_rgn: '',
        region: [],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/region');
        this.setState({
            region: res.data
        });
    }


    onSubmit = async (e) => {
        e.preventDefault();
       
            const newComuna = {
                nom_com: this.state.nom_com,
                id_rgn: this.state.id_rgn,
            };
            axios.post('http://localhost:4000/API/comuna', newComuna);
        
            window.location.assign("http://localhost:3000/listarcomuna")
    

    }



    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        
            return (
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4>nueva comuna</h4>
                        <form onSubmit={this.onSubmit}>
                        <input type="text" name="nom_com" value={this.state.nom_com}  placeholder="Ingrese nombre de la" className="form-control " onChange={this.onInputChange}/>

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

