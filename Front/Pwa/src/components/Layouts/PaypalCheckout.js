import React, {Component, useState, useEffect} from 'react';
import ReactDOM  from 'react-dom';
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';
import '../../assetss/css/pago.css'
import {Button} from 'react-bootstrap';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalCheckout () {
    // const [price, setPrice] = useState(0);
    // let history = useHistory();
    const [pago, setPago] = useState([]);
    const precio = pago.Pago ;
    const id_rva = parseInt(sessionStorage.reserva);
    const [informeR, setInformeR] = useState([])
    const [count, setCount] = useState(false);
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
        // e.preventDefault();
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

    function handlePay(e){
        const newPago ={
            id_rva : id_rva,
            monto_pagado: precio
        }
        axios.post('http://localhost:4000/API/pago', newPago);
        console.log("Pago recibido");
        getInformeRes(urlId);
        setCount(true);
    }
    
    const getInformeRes = async (id) => {
        const res = await axios.post('http://localhost:4000/API/informeResDet/', id )
        let x = (res.data[0])
        setInformeR(x)
    }

    function handleVolver(e) {
        window.location.href= "/";
    }

    console.log('Log paypal');
    console.log('urlId:', urlId);
    console.log('Monto Pago: ', pago);
    console.log('Precio a pagar:', precio);
    console.log('informe Reserva:',{informeR});
    console.log('Id rva:',id_rva);
    console.log('precio Dolar: ', valorDolar);
    console.log('End log paypal');

    if(count===false){
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
    else {
        return(
            <div id="body_pago">
                <NavBar/>
                <div className="container" id="container-detalle">
                    <h1>Pago recibido</h1>
                    <br/>
                        <div id="detalles">
                            <ul>
                                <li id="li-pago">Reserva registrada a nombre de: {informeR.Cliente}</li>  
                                <li id="li-pago">Departamento: {informeR.Departamento}</li>  
                                <li id="li-pago">Fecha de reserva: {informeR.FechaReserva}</li> 
                                <li id="li-pago">Costo de arriendo: {informeR.Costo_arriendo} CLP</li>
                                <li id="li-pago">Monto pagado: {informeR.MontoPagado} CLP</li>
                                <li id="li-pago">Conversión a dolar: ${dolar} USD</li>
                                <li id="li-pago"></li>
                            </ul>
                        </div>
                        <br/>
                    <Button variant="light" id="button-volver-paypal" onClick={()=>handleVolver()}>
                        Continuar navegando
                    </Button>
                </div>
            </div>
        );
    }
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

export default PaypalCheckout  
