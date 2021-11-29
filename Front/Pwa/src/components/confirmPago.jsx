import React from 'react';
import {useParams} from 'react-router-dom';

function ConfirmPago({pago, data}) {

    let {props} = useParams();
    console.log(props)

    return (
        <div className="container justify-content-center align-items-center">
            <h1>Pago confirmado</h1>
            <p>Se pago: ${props}</p>
            <p>{data}</p>
            <p>{pago}</p>
        </div>
    )
}

export default ConfirmPago
