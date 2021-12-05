import React, {useState, useEffect}from 'react';
import NavBarAdmin from '../../Layouts/NavBarAdmin';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Button, Form, Table} from  'react-bootstrap';
import '../../../assetss/css/checks.css';
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

const notifyW = () =>{
    toast.warn('Debe seleccionar una Id válida',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

export default function Checkin() {

    const [informeR, setInformeR] = useState([]);
    const [id_rva, setIdReserva] = useState(null);
    const [montoPago, setMontoPago] = useState(null);
    const [opciones, setOpciones] = useState([]);
    const [detalle, setDetalle] = useState(null);
    let funcionario = sessionStorage.idUsuario;

    const getReserva = async (id) =>{
        const res = await axios.post('http://localhost:4000/API/informeResDet/', id )       
        let x = (res.data[0])
        console.log('valor x:', x)
        setInformeR(x)
    };

    const getMontoPago = async (id)=>{
        const res = await axios.post('http://localhost:4000/API/pago/ReservaPago', id)
        let x = (res.data[0])
        console.log('Monto x', x)
        setMontoPago(x.Pago)
    };

    useEffect((e)=>{
        getIdReserva()
    },[])

    const getIdReserva = async (id)=>{
        const res = await axios.get('http://localhost:4000/API/reservaPreCheckin')
        let x = (res.data)
        console.log('id opcion: ', x)
        setOpciones(x)
        console.log('Opciones:', opciones)
    };

    const onInputChange = (e) => {
        setIdReserva( e.target.value);
    };

    const onInputDetalle = (e) => {
        setDetalle( e.target.value);
    };

    const handleBuscar = async (id) =>{
        if(id_rva ==="-1"){
            notifyW();
        }else{
        let url = {
            reserva : parseInt(id),
        };
        console.log('url', url);
        getReserva(url);
        console.log('Informe R:',informeR);
        getMontoPago(url)
        console.log('monto pago:', montoPago)}
    }

    const handleCheckin = async ()=>{
        const newPago ={
            id_rva : id_rva,
            monto_pagado: montoPago
        };
        try{
            await axios.post('http://localhost:4000/API/pago', newPago);
            console.log("Pago recibido");
            const newCheckin = {
                id_rva: parseInt(id_rva),
                deta_chi: detalle,
                id_usr: parseInt(funcionario)
        };
            console.log('newCheckin:', newCheckin);
            await axios.post('http://localhost:4000/API/checkin', newCheckin);
            console.log("Check-in registrado");
            notifyS();
            window.location.href= "/checkin";
        }catch{
            notifyE();
        }
    }

    return (
        <div id="body-checkin">
            <NavBarAdmin/>
            <div className="container justify-items-center">
                <br/>
                <h1>Ingreso de check-in</h1>
            </div>
            
            <div className="container" id="div-buscar-nro">
                <Form className="contact-form" >
                    <Form.Group className="mb-3" controlId="Reserva">
                        <h2>Ingrese el número de orden de Reserva</h2>
                        <Form.Select  name="id_rva" placeholder= "Ingrese N° de reserva" value={id_rva} required onChange={onInputChange}>
                            <option value="-1">
                                Elige un Número de orden    
                            </option>
                            {opciones.map( op => (
                                <option key={op.id_rva} value={op.id_rva}>
                                    Número de orden: #{op.id_rva}
                                </option>
                            ))}
                        </Form.Select>                            
                    </Form.Group>
                    <Button variant="primary" id="btnBuscarReserva" onClick={()=>handleBuscar(id_rva)}>Buscar reserva</Button>
                </Form>
            </div>        
            { montoPago 
                ?<div className="container" id="container-detalle-checkin">
                    <h2> Detalle de la Reserva</h2>
                    <Table striped bordered hover variant="dark" responsive="md">       
                        <tbody>
                            <tr>
                                <td>Reserva</td>
                                <td>Departamento</td>
                                <td>Cliente</td>
                                <td>Fecha reserva</td>
                                <td>Monto Pagado</td>
                                <td>Costo arriendo</td>
                                <td>Costo por pagar</td>
                            </tr>
                            <tr>
                                <td>{informeR.Idreserva}</td>
                                <td>{informeR.Departamento}</td>
                                <td>{informeR.Cliente}</td>
                                <td>{informeR.FechaReserva}</td>
                                <td>{informeR.MontoPagado}</td>
                                <td>{informeR.Costo_arriendo}</td>
                                <td>${montoPago}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>
                    <Form> 
                        <h3>Ingrese el detalle del Check-in</h3>
                        <Form.Control as="textarea" require name="detalle" placeholder= "Ingrese detalle" rows={3} value={detalle} required onChange={onInputDetalle}/>
                    </Form>
                    <br/>
                    <Button onClick={handleCheckin}>Ingresar Check-in</Button>
                </div>  
                :<br/>}           
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