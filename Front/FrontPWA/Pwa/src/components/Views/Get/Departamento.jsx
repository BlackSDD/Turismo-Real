import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class DepartamentoList extends Component {

    state = {
        departamento: []
    }

    async componentDidMount() {
        this.getDepartamento();
    }

    getDepartamento = async () => {
        const res = await axios.get('http://localhost:4000/API/departamento')
        this.setState({
            departamento: res.data
        });
    }

    deleteNote = async (Id) => {
        await axios.delete('http://localhost:4000/API/departamento/' + Id);
        this.getDepartamento();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.departamento.map(dep => (
                        <div className="col-md-4 p-2" key={dep.id_dpto}>
                            
                                    
                                    <p>
                                     Direccion:   {dep.dir_dpto}  habitacion {dep.num_dpto}
                                    </p>
                                    <p>
                                     Descripcion:   {dep.desc_dpto}
                                    </p>
                                
                                    
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(dep.id_dpto)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                    ))
                }


            </div>
        )
    }
}