import React, {Component, useState, useEffect} from 'react';
import ReactDOM  from 'react-dom';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalCheckout ({precio, id_rva}) {
    // const [price, setPrice] = useState(0);

    let history = useHistory();

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
        return actions.order.capture(handlePay());
    };

    const id = {id_rva};

    function handlePay(e){
        console.log("Pago recibido");
        setCount(true);
        getInformeRes(id)
        // history.push({
        //     pathname: '/confirmPago' + {id_rva},
        //     state: { detail: {id_rva} }
        // });
    }
    
    const [informeR, setInformeR] = useState([])
    const [count, setCount] = useState(false);

    const state = {
        informereserva: []
    }

    

    const getInformeRes = async (id) => {
        const res = await axios.get('http://localhost:4000/API/informeResDet/', { id } )
        const inR = await JSON.parse(res.data) 
        setInformeR({inR})
        this.state({
            informereserva: res.data
        });
    }

    console.log({informeR})
    console.log({state})

    if(count===false){
        return( 
            <div>
                <h1>El monto a pagar es {precio} </h1>
                <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>
        );
    }
    else {
    return(
        <div>
            <h1>Pago recibido</h1>
            
        </div>
    );
    }
}

export default PaypalCheckout  
