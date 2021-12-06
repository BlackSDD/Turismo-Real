import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from '../../Layouts/NavBarAdmin';
import DateReagendarMant from './DateReagendarMant';
import NavBar from '../../Layouts/Navbar';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

export default function ReagendarMant() {

    let storage = parseInt(sessionStorage.id_d);
    const [fechas, setFechas] = useState([]);
    const [arrayF, setArrayF] = useState([]);

    let id_d = {
        id_dpto : storage
    };

    useEffect(() =>{
        console.log('storage: ', storage);
        console.log('id depto:', id_d);
        getFechas(id_d);
    },[]);
  
    useEffect(() => {
        transformarFechas();
    }, [fechas]);
    
    const transformarFechas = () =>{
        const dates = fechas.map((e) => {
            let newFecha = new Date(e.fec_disp_no);
            const val = newFecha.toLocaleDateString("en-US", e.fec_disp_no);
            return val;
            })
        setArrayF(dates);
    };

    const getFechas = async (id) =>{
        const res = await axios.post('http://localhost:4000/API/disponibilidadNoId', id)
        setFechas(res.data);
    };

    console.log('Inicio carga disponibilidad');
    console.log('Fechas: ',fechas);
    console.log('fechas ArrayF', arrayF);
    console.log('End carga disponibilidad');
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
        <div>
            <NavbarAdmin/>
            <DateReagendarMant
                fechas={arrayF}
            />                          
        </div>
    );
}



