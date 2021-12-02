import React, {Component, useState, useEffect} from 'react';
import ReactDOM  from 'react-dom';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalCheckout ({precio, id_rva}) {
    // const [price, setPrice] = useState(0);

    // let history = useHistory();

    let dolar = Math.round(precio/830);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                value: dolar,
                },
            }]
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture(handlePay());
    };

    function handlePay(e){
        console.log("Pago recibido");
        setCount(true);
    }
    
    const [informeR, setInformeR] = useState([])
    const [count, setCount] = useState(false);
    const [id, setId] = useState('')

<<<<<<< Updated upstream
    let urlId = {
        id_reserva: id_rva
=======
    const state = {
        informereserva: [],
        id: ''
>>>>>>> Stashed changes
    }
    
<<<<<<< Updated upstream
    console.log({urlId})
    
    useEffect(() => {
        getInformeRes(urlId);
    },[]);
=======
    
>>>>>>> Stashed changes

    const getInformeRes = async () => {
        const res = await axios.post('http://localhost:4000/API/informeResDet/', urlId )
        setInformeR(res.data)
    }

    console.log({informeR})

    if(count===false){
        return( 
            <div>
                <h1>El monto a pagar es {dolar} </h1>
                <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                />
                <h1>{informeR.Id_reserva}</h1>
            </div>
        );
    }
    else {
    return(
        <div>
            <h1>Pago recibido</h1>
            
            {
                informeR.map(e =>
                    <p>{e.Cliente}</p>    
                )
            }
            
        </div>
    );
    }
}

export default PaypalCheckout  
