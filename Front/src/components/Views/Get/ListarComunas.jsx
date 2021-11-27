import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ComunaWS extends Component {

    state = {
        comunas: []
    }

    async componentDidMount() {
        this.getComunas();
    }

    getComunas = async () => {
        const res = await axios.get('http://localhost:4000/API/comuna')
        this.setState({
            comunas: res.data
        });
    }

    deleteNote = async (Id) => {
        await axios.delete('http://localhost:4000/API/comuna/' + Id);
        this.getComunas();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.comunas.map(com => (
                        <div className="col-md-4 p-2" key={com.id_com}>
                            
                                
                                    <p>
                                        {com.nom_com}
                                    </p>
                                    
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(com.id_com)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                    ))
                }


                        <Link to={"/Comuna"} className="btn btn-secondary">
                                                                <i className="material-icons">
                                                                    CREAR COMUNA</i>
                         </Link>
                         
                         <Link to={"/Comuna/EDIT"} className="btn btn-secondary">
                                                                <i className="material-icons">
                                                                    EDITAR COMUNA</i>
                         </Link>


            </div>
        )
    }
}