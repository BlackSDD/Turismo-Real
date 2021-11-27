import React from "react";

import { Component } from "react";

//servicios
// import {Apiurl} from '../services/apirest';

//libreria
import axios from 'axios';

export default class ComunaEdi extends Component{

    state ={
        agencia : [],
        id_age: '',
        nom_age: '',
        email_age: '',
        tel_age: '',
    }

    


    async componentDidMount() {

        const res = await axios.get('http://localhost:4000/API/agencia');
        this.setState({
            agencia: res.data
        });
    }
     
    


    onSubmit = async (e) => {
        e.preventDefault();
            const updatedComuna = {
                id_age : this.state.id_age,
                nom_age : this.state.nom_age,
                email_age : this.state.email_age,
                tel_age : this.state.tel_age,

            };
            await axios.put('http://localhost:4000/API/agencia', updatedComuna);
        
            window.location.assign("http://localhost:3000/listaragencia");

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
                                    value={this.state.id_age}
                                    onChange={this.onInputChange}
                                    name="id_age"
                                    required>
                                    {
                                        this.state.agencia.map(com => (
                                            <option key={com.id_age} value={com.id_age}>
                                                {com.nom_age}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>


                        <input type="text" name="nom_age" value={this.state.nom_age}  placeholder="Ingrese nombre de la" className="form-control " onChange={this.onInputChange}/>
                        <input type="text" name="email_age" value={this.state.email_age}  placeholder="Ingrese nombre de la" className="form-control " onChange={this.onInputChange}/>
                        <input type="number" name="tel_age" value={this.state.tel_age}  placeholder="Ingrese nombre de la" className="form-control " onChange={this.onInputChange}/>



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

