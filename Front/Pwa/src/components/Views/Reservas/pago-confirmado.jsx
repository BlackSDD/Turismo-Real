import React, { useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from '../../Layouts/Navbar';
import '../../../assetss/css/pago.css';
import {Button} from 'react-bootstrap';

import { Link } from 'react-router-dom';

///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>



export default  function PagoConfirmado () {
    const id_rva = parseInt(sessionStorage.reserva);
    const [informeR, setInformeR] = useState([])

    

    let urlId =  id_rva
   
    
    useEffect((e)=>{
            getInformeRes(urlId)
    },[]);

    const getInformeRes = async (id) => {
        
        const res = await axios.get('http://localhost:4000/API/informeResDet/'+id  );
    
        console.log('la ide es: ',id)
        let x = res.data[0];

        console.log('valor x:', x);
        setInformeR(res.data[0]);
    }

    function handleVolver(e) {
        window.location.href= "/";
    }



    
    console.log('urlId:', urlId);
    console.log('informe Reserva:',{informeR});
    console.log('Id rva:',id_rva);    

    let tipo = parseInt(sessionStorage.tipoUsr)
        if(tipo == 0 ){
            return(<div id="menuAdmin">
            <NavBar/>
            <div className="row  d-flex justify-content-center mb-5">
            <div className="card-header mb-5" style={{backgroundColor:'black', opacity:0.8}}>
            <div className="title col-12 mt-5 text-center">
                    <h1>Turismo Real</h1>
                </div>
                <div className="title col-12 mt-1 mb-5 text-center">
                    <h3>porfavor inicie sesion</h3>
                </div>
            </div>             
    
            </div>
        </div>
            )
        }
        return(
            <div id="body_pago">
                <NavBar/>
                <div className="container" id="container-detalle">
                
                    <h1>Pago recibido</h1>
                    <br/>
                    <div className="print-container" id="Informe">
                        <div id="detalles">
                            <ul>
                                <li id="li-pago">N??mero de orden: {informeR.Idreserva}</li>
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
                    <p/>
                    <Button variant="light" id="button-volver-paypal" onClick={()=>window.print()}>
                        Imprimir Detalle
                    </Button>
                </div>
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


