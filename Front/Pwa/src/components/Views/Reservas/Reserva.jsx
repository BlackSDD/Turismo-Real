import React, {  Component, useEffect, useState } from 'react';
import PaypalCheckout from '../../Layouts/PaypalCheckout';
import axios from 'axios';
import {toast} from 'react-toastify';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

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

function Reserva({id_rva}) {

    const [pago, setPago] = useState([]);

    // state = {
    //     valor: []
    // }

    useEffect(()=>{
        getMontoPago(id_rva);
    },[]);

    const getMontoPago = async (id) =>{
        const res = await axios.get('http://localhost:4000/API/pago/montoPago/' + id)
        console.log(res)
        // this.setState({
        //     valor: res.data
        // })
        setPago(res.data)
    }
  
    return (
        <div>
            {
                pago.map(mont => (
                    <div key={mont.id}>
                    <PaypalCheckout
                        precio = {mont.Pago}
                        id_rva = {id_rva}
                    />
                    </div>
                ))
            }
        <button >
            Boton
        </button>
        </div>
    )    
}

export default Reserva
