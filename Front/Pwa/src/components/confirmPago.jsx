import React from 'react';
import {useParams} from 'react-router-dom';

function ConfirmPago() {

    let {reserva} = useParams();
    console.log("id reserva", {reserva})

    


    return (
        <div className="container justify-content-center align-items-center">
            <h1>Pago confirmado</h1>
            <p>Se pago: ${reserva}</p>
        </div>
    )
}

export default ConfirmPago
