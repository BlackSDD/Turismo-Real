import React, {useState, useEffect}from 'react';
import NavBarAdmin from '../../Layouts/NavBarAdmin';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Button, Form, Table} from  'react-bootstrap';
import '../../../assetss/css/checks.css';
import {useHistory} from 'react-router-dom';

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

export default function Checkout() {

    const history = useHistory();

    const [informeR, setInformeR] = useState([]);
    const [id_rva, setIdReserva] = useState(null);
    const [opciones, setOpciones] = useState([]);
    const [detalle, setDetalle] = useState(null);
    const [mostrar, setMostrar] = useState(null);
    const [multa, setMulta] = useState(0);
    let funcionario = sessionStorage.idUsuario;

    const getReserva = async (id) =>{
        const res = await axios.post('http://localhost:4000/API/informeResDet/', id )       
        let x = (res.data[0])
        console.log('valor x:', x)
        setInformeR(x)
    };

    useEffect((e)=>{
        getOpciones()
    },[])

    const getOpciones = async (id)=>{
        const res = await axios.get('http://localhost:4000/API/reservaProgress')
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

    const onInputMulta = (e) => {
        setMulta(e.target.value)
    }

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
        setMostrar(true)
        }
    }

    const handleCheckout = async ()=>{
        try{
            const newCheckout = {
                id_rva: parseInt(id_rva),
                cost_multa: parseInt(multa),
                deta_cho: detalle,
                id_usr:parseInt(funcionario)
            };
            console.log('newCheckout:', newCheckout);
            axios.post('http://localhost:4000/API/checkout', newCheckout);
            console.log("Check-out registrado");
            const newPago ={
                id_rva : id_rva,
                monto_pagado: multa
            };
            axios.post('http://localhost:4000/API/pago', newPago);
            window.location.href = "/checkout";
            notifyS();
        }catch{
            notifyE();
        }
    }

    return (
        <div id="body-checkin">
            <NavBarAdmin/>
            <div className="container justify-items-center">
                <br/>
                <h1>Ingreso de check-out</h1>
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
            { mostrar 
                ?<div className="container" id="container-detalle-checkin">
                    <h2> Detalle de la Reserva</h2>
                    <Table striped bordered hover variant="dark" responsive="md">       
                        <tbody>
                            <tr>
                                <td>Reserva</td>
                                <td>Departamento</td>
                                <td>Cliente</td>
                                <td>Fecha reserva</td>
                                <td>Total Estadía</td>
                                <td>Total Pagado</td>
                            </tr>
                            <tr>
                                <td>{informeR.Idreserva}</td>
                                <td>{informeR.Departamento}</td>
                                <td>{informeR.Cliente}</td>
                                <td>{informeR.FechaReserva}</td>
                                <td>{informeR.Costo_total}</td>
                                <td>{informeR.MontoPagado}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>
                    <Form> 
                        <h3>Ingrese el costo por multas</h3>
                        <input type="number" id="input-multa" require name="multa" placeholder= "Ingrese costo de multas"  value={multa} required onChange={onInputMulta}/>
                        <h3>Ingrese el detalle del check-out</h3>
                        <Form.Control as="textarea" require name="detalle" placeholder= "Ingrese detalle" rows={3} value={detalle} required onChange={onInputDetalle}/>

                    </Form>
                    <br/>
                    <Button onClick={handleCheckout}>Ingresar Check-out</Button>
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
// "Detalle_check-out