


import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CondominioWS extends Component {

    state = {
        comunas: []
    }

    async componentDidMount() {
        this.getCondominios();
    }

    getCondominios = async () => {
        const res = await axios.get('http://localhost:4000/API/condominio')
        this.setState({
            comunas: res.data
        });

    }

    deleteNote = async (Id) => {
        await axios.delete('http://localhost:4000/API/condominio/' + Id);
        this.getCondominios();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.comunas.map(com => (
                        <div className="col-md-4 p-2" key={com.id_cnd}>
                            
                                
                                    <p>
                                        {com.nom_cnd}
                                    </p>
                                    
                                <div className="card-footer">
                                    <button className="btn btn-danger"  onClick={() => this.deleteNote(com.id_cnd)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                    ))
                }


                        <Link to={"/CondominioNew"} className="btn btn-secondary">
                                                                <i className="material-icons">
                                                                    CREAR CONDOMINIO</i>
                         </Link>
                         
                         <Link to={"/CondonminioEdi"} className="btn btn-secondary">
                                                                <i className="material-icons">
                                                                    EDITAR  CONDOMINIO</i>
                         </Link>


            </div>
        )
    }
}