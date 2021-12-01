import React, {  Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../../../assetss/css/ListaDeptos.css';
import Reserva from '../Reservas/Reserva';

export default function ListarDepto(){
    
    const [deptos, setDeptos] = useState([])
    
    // state = {
    //     deptos:[]
    // }
    
    const getDeptos = async () =>{
        const res = await axios.get('http://localhost:4000/API/departamento');
        setDeptos(res.data);
    }

    useEffect(()=>{
        getDeptos();
        console.log('Inmediate clg: ',{deptos})
        // this.setState({
        //     deptos: res.data
        // })
    },[]);

    console.log({deptos})
   
        
        return (
            <div>
                <h1>Listar Depto</h1>
                {/* <Reserva
                    id_rva= {1}
                /> */}
            </div>
        )
    
}
