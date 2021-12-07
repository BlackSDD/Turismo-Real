import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../../Layouts/Navbar';
import NavBarAdmin from '../../Layouts/NavBarAdmin';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

toast.configure({

});

const notifyS = () =>{
    toast.success('Operación realizada con éxito');
};
const notifyE = () =>{
    toast.error('Operación cancelada');
};

export default class DeptoList extends Component {

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
        })
    }

    EliminarDepto = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/departamento/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getDepartamento();
    };

    render() {
        let tipo = parseInt(sessionStorage.tipoUsr)
        if(tipo == 0 || tipo==2 ||tipo ==3){
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
            <div className="container-fluid">
                <NavBarAdmin/>
                <div className="row">
                    
                    {
                        this.state.departamento.map(departamento => (
                            <div className="col-sm-3 col-md-6" key={departamento.id_dpto}>
                                        <div className="card-body">
                                        <p>
                                          Dirección: {departamento.dir_dpto} Número  {departamento.appat_usr} Ambientes: {departamento.n_amb_dpto}
                                        </p>
                                        <p>
                                          Descripción {departamento.desc_dpto}
                                        </p>
                                        <p>
                                          Costo: {departamento.costo_arri_dpto}
                                        </p>
                                        <p>
                                            Costo: {departamento.img_1_dpto.data}
                                        </p>
                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.EliminarDepto(departamento.id_dpto)}>
                                            Eliminar Departamento
                                        </button>
                                    </div>
                                </div>
                        ))
                    }
                    <div className="d-flex justify-content-center">
                        <Link to={"/DeptoNew"} className="btn btn-success col-2 mx-5">
                            <i className="material-icons">INGRESAR Departamento</i>
                        </Link>
                            
                        <Link to={"/DeptoEdit"} className="btn btn-primary col-2 mx-5">
                            <i className="material-icons"> EDITAR Departamento</i>
                        </Link>
                    </div>
                    </div>
                </div>
            
        )
    }
}
