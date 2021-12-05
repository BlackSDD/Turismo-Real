import React, { useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from '../../Layouts/Navbar';
import '../../../assetss/css/pago.css'
import {Button} from 'react-bootstrap';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

export default  function PagoConfirmado () {
    const id_rva = parseInt(sessionStorage.reserva);
    const [informeR, setInformeR] = useState([])

    let urlId = {
        reserva: id_rva
    }
    
    useEffect((e)=>{
            getInformeRes(urlId)
    },[]);

    const getInformeRes = async (id) => {
        const res = await axios.post('http://localhost:4000/API/informeResDet/', id );
        let x = (res.data[0]);
        console.log('valor x:', x);
        setInformeR(x);
    }

    function handleVolver(e) {
        window.location.href= "/";
    }

    console.log('urlId:', urlId);
    console.log('informe Reserva:',{informeR});
    console.log('Id rva:',id_rva);    

        return(
            <div id="body_pago">
                <NavBar/>
                <div className="container" id="container-detalle">
                    <h1>Pago recibido</h1>
                    <br/>
                        <div id="detalles">
                            <ul>
                                <li id="li-pago">Número de orden: {informeR.Idreserva}</li>
                                <li id="li-pago">Reserva registrada a nombre de: {informeR.Cliente}</li>  
                                <li id="li-pago">Departamento: {informeR.Departamento}</li>  
                                <li id="li-pago">Fecha de reserva: {informeR.FechaReserva}</li> 
                                <li id="li-pago">Costo de arriendo: {informeR.Costo_arriendo} CLP</li>
                                <li id="li-pago">Monto pagado: {informeR.MontoPagado} CLP</li>
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


