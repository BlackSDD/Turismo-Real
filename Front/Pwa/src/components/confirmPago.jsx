import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {useParams, withRouter, useLocation} from 'react-router-dom';

const ConfirmPago = () => {

    // const useQuery = () => new URLSearchParams(useLocation().search);

    // const query = useQuery();
    // const id_rva = query.get(':id_rva');

    let {id_rva} = useParams();
    // console.log("id reserva", {reserva})
    
    const [informeR, setInformeR] = useState(null)
    const [informeS, setInformeS] = useState(null)

    useEffect(() =>{
        getInformeRes(id_rva)
        getInformeResServ(id_rva)
    },[])

    const getInformeRes = async ({id_rva}) => {
        const res = await axios.get('http://localhost:4000/API/informeResDet/' + id_rva);
        setInformeR({
            informeRes: res.data
        });
    }

    const getInformeResServ = async ({id_rva}) => {
        const res = await axios.get('http://localhost:4000/API/informeResDetServ/' + id_rva);
        setInformeS({
            informeCont: res.data
        });
    }
    console.log(id_rva);

    return (
        
        <div className="container justify-content-center align-items-center">
            <h1>Pago confirmado</h1>
            {/* <p>Id reserva: {id_rva}</p> */}
            {/* <p>info{state.informeRes}</p> */}
            {/* <p>Se pago: ${id_rva}</p> */}
            {
                informeR.map(reserva => (
                    <div className="col-md-4 p-2" key={reserva.id_rva}>
                        {reserva.departamento}
                    </div>
                ))
            }
            {
                informeS.map(contrato => (
                    <div className="col-md-4 p-2" key={contrato.id_rva}>
                        {contrato}
                    </div>
                ))
            }
        </div>
    )
    
}

export default ConfirmPago
