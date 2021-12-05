import React, {  Component, useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import '../../../assetss/css/ListaDeptos.css';
// import Reservar from '../Reservas/Reserva';
import building from '../../../assetss/img/building.png'
import Navbar from '../../Layouts/Navbar.jsx'
import { Button } from 'react-bootstrap';
// import DatePicker from '../../Layouts/Date-Picker';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

export default function ListarDepto(){
  
    const [deptos, setDeptos] = useState([]);
    const history = useHistory();

 
    const getDeptos = async () =>{
        const res = await axios.get('http://localhost:4000/API/departamento');
        setDeptos(res.data);
    }

    useEffect(()=>{
        getDeptos();
        console.log('Inmediate clg: ',{deptos})

    },[]);

    function handleReserva(id_d ){
        // definir variable de sesión
        sessionStorage.id_d = id_d;
        sessionStorage.Pagar = false;
        history.push("/Reservar" );
        // {params: id_d}
        // id_d (id del depto)
    }

    console.log('Listar Deptos');
    console.log({deptos});
    console.log('End Lista Deptos');
    let tipo = sessionStorage.tipoUsr
    
        
    
       return (
            <div>
                <Navbar/>
                <div id="listar-deptos">
                    <div className="container">
                        <br/>
                        <h1>Listado de departamentos</h1>
                        {
                            deptos.map(e =>(
                                <div className="row" id="row-lista-depto">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <img src={building} alt="Imagen Referencial" className="img-lista-depto" ></img>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <h2>{e.nom_rgn}</h2>
                                        <h5>Ubicado en la comuna de: {e.nom_com}</h5>
                                        <p>{e.dir_dpto}</p>
                                        <p>{e.depto}</p>
                                        <p>{e.desc_dpto}</p>
                                        <p>Número de ambientes: {e.n_amb_dpto} </p>
                                        <p>Costo de Arriendo por noche ${e.costo_arri_dpto} CLP</p>
                                    </div>
                                    <Button onClick={() => {handleReserva(e.id_dpto)}}>
                                        Reservar Departamento
                                    </Button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
}