import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import	'../../../../assetss/css/ListaDeptos.css'

toast.configure({

});
 
const notifyS = () =>{
    toast.success('Operación realizada con éxito');
};
const notifyE = () =>{
    toast.error('Operación cancelada');
};

export default class InformeDeptoAgno extends Component {

    state = {
        InformeDeptoxdia: []
    }

    async componentDidMount() {
        this.getInformeDepto();
    }

    getInformeDepto = async () => {
        const res = await axios.get('http://localhost:4000/API/DepartamentoAnual')
        this.setState({
            InformeDeptoxdia: res.data
        })
    }

    render() {
        return (
            <div className="container-fluid" id="listar-deptos">
            <div className="card-body" id="tajreta_tabla">
                <div className="row text-center">
                    <h1 id="title-login">Informe balance anual de departamentos</h1>
                        <div className="table-responsive mb-5">
                            <table class="table table-borderless ">
                                            <thead id="encabezadoTabla">
                                                <tr>
                                                <th scope="col">Número de departamento</th>   
                                                <th scope="col">Año</th>
                                                <th scope="col">Condominio</th>
                                                <th scope="col">Estado pago</th>
                                                <th scope="col">Gastos departamento</th>
                                                <th scope="col">Gastos de mantención</th>
                                                <th scope="col">Gasto artículos</th>
                                                <th scope="col">Ganancias</th>
                                                <th scope="col">Balance</th>
                                                </tr>
                                            </thead>
                                            {
                                        this.state.InformeDeptoxdia.map(inf => (
                                                <tbody id="cuerpoTabla">
                                                    <tr>
                                                    <th scope="row">{inf.Número}</th>
                                                    <td>{inf.Agno}</td>
                                                    <td>{inf.Condominio}</td>
                                                    <td>{inf.Estado_pago}</td>
                                                    <td>{inf.Gastos_departamento}</td>
                                                    <td>{inf.Gastos_de_mantención}</td>
                                                    <td>{inf.Gasto_Artículos}</td>
                                                    <td>{inf.Ganancias}</td>
                                                    <td>{inf.Balance}</td>
                                                    </tr>
                                                </tbody>

                                        ))
                                    }
                                    </table>

                        </div>
                </div>
                    
            </div>
        </div>
            
        )
    }
}
