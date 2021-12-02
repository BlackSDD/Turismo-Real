import React from "react";

import { Component } from "react";
//libreria
import axios from 'axios';

export default class CondonminioEdi extends Component{

    state ={
        comuna : [],
        id_cnd: '',
        nom_cnd: '',

    }

    


    async componentDidMount() {

        const res = await axios.get('http://localhost:4000/API/condominio');
        this.setState({
            comuna: res.data
        });
    }
     
    


    onSubmit = async (e) => {
        e.preventDefault();
            const updatedComuna = {
                id_cnd : this.state.id_cnd,
                nom_cnd : this.state.nom_cnd

            };
            await axios.put('http://localhost:4000/API/condominio', updatedComuna);
        
            window.location.assign("http://localhost:3000/listarcondominio");

    }



    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render(){
        
            return (
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4>nueva comuna</h4>
                        <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                                <select
                                    className="form-control"
                                    value={this.state.id_cnd}
                                    onChange={this.onInputChange}
                                    name="id_cnd"
                                    required>
                                    {
                                        this.state.comuna.map(com => (
                                            <option key={com.id_cnd} value={com.id_cnd}>
                                                {com.nom_cnd}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>


                        <input type="text" name="nom_cnd" value={this.state.nom_cnd}  placeholder="Ingrese nombre de la" className="form-control " onChange={this.onInputChange}/>


                            <button className="btn btn-primary" >
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

