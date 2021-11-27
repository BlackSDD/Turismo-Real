import React from "react";

import { Component } from "react";

//servicios
// import {Apiurl} from '../services/apirest';

//libreria
import axios from 'axios';

export default class ComunaEdi extends Component{

    state ={
        comuna : [],
        id_com: '',
        nom_com: '',

    }

    


    async componentDidMount() {

        const res = await axios.get('http://localhost:4000/API/comuna');
        this.setState({
            comuna: res.data
        });
    }
     
    


    onSubmit = async (e) => {
        e.preventDefault();
            const updatedComuna = {
                id_com : this.state.id_com,
                nom_com : this.state.nom_com

            };
            await axios.put('http://localhost:4000/API/comuna', updatedComuna);
        
            window.location.assign("http://localhost:3000/listarcomuna");

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

                        <div className="form-group">
                                <select
                                    className="form-control"
                                    value={this.state.id_com}
                                    onChange={this.onInputChange}
                                    name="id_com"
                                    required>
                                    {
                                        this.state.comuna.map(com => (
                                            <option key={com.id_com} value={com.id_com}>
                                                {com.nom_com}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>


                        <input type="text" name="nom_com" value={this.state.nom_com}  placeholder="Ingrese nombre de la" className="form-control " onChange={this.onInputChange}/>


                            <button className="btn btn-primary">
                            Save <i className="material-icons">
                                assignment</i>
                            </button>
                                    
                        </form>
                    </div>
                </div>
            )
        }

}

