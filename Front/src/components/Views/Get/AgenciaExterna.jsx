import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AgenciaList extends Component {

    state = {
        agencia: []
    }

    async componentDidMount() {
        this.getAgencia();
    }

    getAgencia = async () => {
        const res = await axios.get('http://localhost:4000/API/agencia')
        this.setState({
            agencia: res.data
        });
    }

    deleteNote = async (Id) => {
        await axios.delete('http://localhost:4000/API/agencia/' + Id);
        this.getAgencia();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.agencia.map(age => (
                        <div className="col-md-4 p-2" key={age.id_agencia}>
                            
                                    
                                    <p>
                                     Direccion:   {age.nom_age}
                                    </p>
                                    <p>
                                     correo de contacto:   {age.email_age}
                                    </p>
                                    <p>
                                     telefono de contacto:   {age.tel_age}
                                    </p>
                                
                                    
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(age.id_agencia)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                    ))
                }

                        <Link to={"/AgenciaNew"} className="btn btn-secondary">
                                                                <i className="material-icons">
                                                                    INGRESAR NUEVA AGENCIA</i>
                         </Link>
                         
                         <Link to={"/AgenciaEdi"} className="btn btn-secondary">
                                                                <i className="material-icons">
                                                                    MODIFICAR  AGENCIA</i>
                         </Link>


            </div>
        )
    }
}