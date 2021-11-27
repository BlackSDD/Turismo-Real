import React from "react";

import { Component } from "react";

//servicios
// import {Apiurl} from '../services/apirest';

//libreria
import axios from 'axios';

export default class AgenciaNew extends Component{

    state ={
        nom_age: '',
        email_age: '',
        tel_age: '',
        id_com: '',
        comuna: [],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/API/comuna');
        this.setState({
            comuna: res.data
        });
    }


    onSubmit = async (e) => {
        e.preventDefault();
       
            const newComuna = {
                nom_age: this.state.nom_age,
                email_age: this.state.email_age,
                tel_age: this.state.tel_age,
                id_com: this.state.id_com,
            };
            axios.post('http://localhost:4000/API/agencia', newComuna);
        
            window.location.assign("http://localhost:3000/listaragencia")
    

    }



    onInputChange = (e) => {

        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        
            return (
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4>INGRESAR AGENCIA</h4>
                        <form onSubmit={this.onSubmit}>
                        <input   type="text" name="nom_age" value={this.state.nom_age}  placeholder="Ingrese nombre de la agencia" className="form-control " onChange={this.onInputChange}/>
                        <input type="email" name="email_age" value={this.state.email_age}  placeholder="Ingrese el correo de la agencia" className="form-control " onChange={this.onInputChange}/>
                        <input minlength="9" type="number" name="tel_age" value={this.state.tel_age}  placeholder="Ingrese nombre de la agencia" className="form-control " onChange={this.onInputChange}/>
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

