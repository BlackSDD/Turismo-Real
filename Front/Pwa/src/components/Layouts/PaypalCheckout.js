import { Modal } from 'bootstrap';
import React, {useState} from 'react';
import ReactDOM  from 'react-dom';
import ConfirmPago from '../confirmPago';
import MyNotify from './mynotify';
import {Redirect, navigate} from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalCheckout({precio}) {
    const [price, setPrice] = useState(0);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                value: precio,
                },

            }]
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture(handlePay(data, precio));
    };

    function onNavigate() {

    }

    function handlePay(e){
        console.log("Pago recibido")
        
        
    }

    return (
        <div>
            <h1>El monto a pagar es {precio} </h1>
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </div>
        
    );
}

export default PaypalCheckout  
