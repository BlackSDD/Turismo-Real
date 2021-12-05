import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Navbar from '../../Layouts/Navbar';
import DatePicker from './Date-Picker';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

toast.configure({
});

export default function Reserva() {

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

    let variable = sessionStorage.Pagar;

    useEffect(() => {
        variable = sessionStorage.Pagar;
        console.log('variable: ',variable)
    },[])

    console.log('Inicio carga disponibilidad');
    console.log('Fechas: ',fechas);
    console.log('fechas ArrayF', arrayF);
    console.log('End carga disponibilidad');
    
    return (
        <div>
            <Navbar/>
            <DatePicker
                fechas={arrayF}
            />                          
        </div>
    );
}



