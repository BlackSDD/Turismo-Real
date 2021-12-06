import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import	'../../../../assetss/css/ListaDeptos.css';
import '../../../../assetss/css/informeGeneral.css';
import NavBar from '../../../Layouts/Navbar';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>;

toast.configure({

});
 
const notifyS = () =>{
    toast.success('Operación realizada con éxito');
};
const notifyE = () =>{
    toast.error('Operación cancelada');
};

export default class InformeZonaAgno extends Component {

    state = {
        InformeDeptoxdia: []
    }

    async componentDidMount() {
        this.getInformeDepto();
    }

    getInformeDepto = async () => {
        const res = await axios.get('http://localhost:4000/API/ZonaAnual')
        this.setState({
            InformeDeptoxdia: res.data
        })
    }

    render() {
        let tipo = parseInt(sessionStorage.tipoUsr)
    if(tipo == 0  ||tipo ==3){
        return(
        <div id="menuAdmin">
        <NavBar/>
        <div className="row  d-flex justify-content-center mb-5">
        <div className="card-header mb-5" style={{backgroundColor:'black', opacity:0.8}}>
        <div className="title col-12 mt-5 text-center">
                <h1>Turismo Real</h1>
            </div>
            <div className="title col-12 mt-1 mb-5 text-center">
                <h3>esta pagina es administrativa</h3>
                <h3>porfavor inicie sesion</h3>
            </div>
        </div>             

        </div>
    </div>)
    }
        return (
            <div className="container-fluid" id="listar-deptos">
            <div className="card-body" id="tajreta_tabla">
            <div className="print-container" id="Informe">
                <div className="row text-center">
                    <h1 id="title-login">Informe balance anual por zona</h1>
                        <div className="table-responsive mb-5">
                            <table class="table table-borderless ">
                                            <thead id="encabezadoTabla">
                                                <tr>
                                                <th scope="col">Zona</th>   
                                                <th scope="col">Año</th>
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
                                                    <th scope="row">{inf.Zona}</th>
                                                    <td>{inf.Agno}</td>
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
                                    <button type="submit" class="btn btn-primary mb-3 col-4" style={{width:'25VH'}} onClick={()=>window.print("Informe")}>Imprimir</button>

                        </div>
                </div>
                </div>
            </div>
        </div>
            
        )
    }
}
