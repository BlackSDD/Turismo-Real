import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../assetss/css/ListaDeptos.css';
import {toast} from 'react-toastify';
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

export default class TransporteList extends Component {

    state = {
        Trasporte: []
    }

    async componentDidMount() {
        this.getCondominio();
    }

    getCondominio = async () => {
        const res = await axios.get('http://localhost:4000/API/Transporte')
        this.setState({
            Trasporte: res.data
        })
    }

    getServiciosExtra = async () => {
        const res = await axios.get('http://localhost:4000/API/serviciosExtra')
        this.setState({
            Trasporte: res.data
        })
    }
    Eliminar = async (Id) => {
        const answer = window.confirm("¿Estas Seguro?");
        if (answer){
            await axios.delete('http://localhost:4000/API/Transporte/' + Id);
            notifyS();
        } else {
            notifyE();
        }
        this.getCondominio();
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    
                    {
                        this.state.Trasporte.map(Trnsp => (
                            <div className="col-sm-3 col-md-6" key={Trnsp.id_serv}>
                                        <div className="card-body">
                                        <p>
                                          Nombre servicio: {Trnsp.nom_serv}
                                        </p>
                                        <p>
                                          Costo por km. recorrido diurno: ${Trnsp.cost_km_dia}  
                                        </p>
                                        <p>
                                            Costo por km. recorrido nashe: ${Trnsp.cost_km_noc}
                                        </p>
                                        <p>
                                          Descripción: {Trnsp.desc_serv}
                                        </p>

                                        </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger" onClick={() => this.Eliminar(Trnsp.id_Trnsp)}>
                                            ELIMINAR REGISTRO
                                        </button>
                                    </div>
                                </div>
                        ))
                    }

                        <Link to={"/TransporteNew"} className="btn btn-secondary mt-5">
                            <i className="material-icons">INGRESAR TRANSPORTE</i>
                        </Link>
                            
                        <Link to={"/TransporteEdit"} className="btn btn-secondary">
                            <i className="material-icons"> EDITAR TRANSPORTE</i>
                        </Link>
                    </div>
                </div>
            
        )
    }
}