import React, { useEffect, useState } from 'react';
import PaypalCheckout from '../../Layouts/PaypalCheckout';
import axios from 'axios';
import {toast} from 'react-toastify';
import Navbar from '../../Layouts/Navbar';
import { useParams, useLocation } from 'react-router-dom';
import DatePicker from '../../Layouts/Date-Picker';
import {Button} from  'react-bootstrap';

toast.configure({
});

const notifyS = () =>{
    toast.success('Operación realizada con éxito',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

const notifyE = () =>{
    toast.error('Operación cancelada',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

export default function Reserva() {
    // const location = useLocation();
    // let  {id_depto}  = useParams();
    let storage = parseInt(sessionStorage.id_d);
    const [pago, setPago] = useState([]);
    const [id_rva, setId_rva] = useState(null);
    const [fechas, setFechas] = useState([]);
    const [arrayF, setArrayF] = useState([]);
    const [count, setCount] = useState(false);
    // const [id_depto, setId_depto] = useState(location.state.id_d);
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

    // useEffect((e)=>{
    //     // e.preventDefault();
    //     if (!id_rva) {
    //         getMontoPago(id_rva);
    //     };
    // },[]);

    const getMontoPago = async (id) =>{
        // const res = await axios.get('http://localhost:4000/API/pago/montoPago/' + id)
        // setPago(res.data);
        // console.log(res);
        setCount({
            count: true
        })
    }
    
    function GenerarPago(props){
        const generarP = props.generar;
        if (generarP) {
           return PagoPaypal({id_rva})
        };
        return console.log('Falta generar ordende reserva');
    };

    function PagoPaypal(id_res){
        id_res.preventDefault();
        let myvar = pago.map((e)=>e.pago);
        console.log({myvar});
        return(
            <div>
                <PaypalCheckout
                    precio = {myvar}
                    id_rva = {id_res}
                />
            </div>);
    };
    
    
    let variable = sessionStorage.Pagar;

    useEffect(() => {
        variable = sessionStorage.Pagar;
        console.log('variable: ',variable)
    }, )


    console.log('Inicio carga disponibilidad');
    console.log('Fechas: ',fechas);
    console.log('fechas ArrayF', arrayF);
    console.log('End carga disponibilidad');
    

    if(count===false){
        return (
            <div>
                <Navbar/>
                <DatePicker
                    fechas={arrayF}
                />                          
            </div>
        );
    }else{
        return(
            <div>
                <Navbar/>
                alguna wea
            </div>
        );
    }
}


