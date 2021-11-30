import React, {useState} from 'react';
import ReactDOM  from 'react-dom';
import { useHistory} from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalCheckout({precio, id_rva}) {
    const [price, setPrice] = useState(0);

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
        return actions.order.capture(handlePay(data, precio));
    };

    

    function handlePay(e){
        console.log("Pago recibido")
        history.push({
            pathname: '/confirmPago',
            state: { detail: {id_rva} }
        });
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
