import React, {Component, useState, useEffect} from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';
import NavBar from '../../Layouts/Navbar';

import '../../../assetss/css/pago.css'
import { Link } from 'react-router-dom';

import '../../../assetss/css/pago.css';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalReserva () {
    const [pago, setPago] = useState([]);
    const precio = pago.Pago ;
    const id_rva = parseInt(sessionStorage.reserva);
    const[valorDolar, setValorDolar] = useState();

    let urlId = {
        reserva: id_rva
    }
    let dolar = (precio/valorDolar).toFixed(2);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                value: dolar,
                },
            }]
        });
    };

    const getDolar = async() =>{
        const data = await fetch('https://mindicador.cl/api/dolar')
        const y = await data.json()
        const z = y.serie.map((e) =>{
            return e
        })
        console.log('y: ', y);
        console.log('z: ',z);
        setValorDolar(z[0].valor)
    }

    useEffect((e)=>{
            getMontoPago(urlId);
            getDolar();
    },[]);

    const getMontoPago = async (id) =>{
        const res = await axios.post('http://localhost:4000/API/pago/abonoPago/' , id)
        setPago(res.data[0]);
        console.log(res.data);
    }
    
    const onApprove = (data, actions) => {
        return actions.order.capture(handlePay());
    };

    const handlePay = (e) =>{
        const newPago ={
            id_rva : id_rva,
            monto_pagado: precio
        }
        axios.post('http://localhost:4000/API/pago', newPago);
        console.log("Pago recibido");
        window.location.href= "/PagoConfirmado";
    }
    
    console.log('Log paypal');
    console.log('urlId:', urlId);
    console.log('Monto Pago: ', pago);
    console.log('Precio a pagar:', precio);
    console.log('Id rva:',id_rva);
    console.log('precio Dolar: ', valorDolar);
    console.log('End log paypal');
    let tipo = parseInt(sessionStorage.tipoUsr)
        if(tipo == 0 ){
            return(<>
                <h1>Por favor inicie sesion antes de Continuar</h1>
                <Link to={"/"} className="btn btn-secondary">
                            <i className="material-icons"> VOLVER AL INICIO</i>
                        </Link>
                </>
            )
        }
        return( 
            <div id="body_pago">
                <NavBar/>
                <div className="container" id="container-pago">
                    <h2>El monto que debe abonar es ${dolar}USD</h2>
                    <h2>Equivalente al abono requerido de ${precio} CLP</h2>
                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                    />
                </div>
            </div>
        );
    
}
// "Idreserva",
// "Departamento",
// "Cliente",
// "Estado reserva",
// "FechaReserva",
// "Costo_total",
// "Costo_arriendo",
// "Costoserviciosextra",
// "CostoMultas",
// "MontoPagado",
// "Detalle_check-in",
// "Detalle_check-out"

export default PaypalReserva
