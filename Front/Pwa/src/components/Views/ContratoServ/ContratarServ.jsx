import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Navbar from '../../Layouts/Navbar';
import {Button, ListGroup} from  'react-bootstrap';
import '../../../assetss/css/contratoServ.css'
import DateContServ from './DateContServ';
import servicioExtra from '../../../assetss/img/servicioExtra.webp'
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

export default function ContratarServ() {

    let storage = parseInt(sessionStorage.id_d);
    const [fechas, setFechas] = useState([]);
    const [arrayF, setArrayF] = useState([]);
    const [reserva, setReserva] = useState([]);
    const [seleccionado, setSeleccion] = useState(0);
    const [rango, setRango] = useState([]);
    const [datos, setDatos] = useState([]);
    let id_d = {
        id_dpto : storage
    };

    useEffect(() =>{
        console.log('storage: ', storage);
        console.log('id depto:', id_d);
        // getFechas(id_d);
        getReserva();
    },[]);
  
//     useEffect(() => {
//         transformarFechas();
//     }, [fechas]);
    
    const transformarFechas = () =>{
        const dates = fechas.map((e) => {
            let newFecha = new Date(e.fec_disp_no);
            const val = newFecha.toLocaleDateString("en-US", e.fec_disp_no);
            return val;
            })
        setArrayF(dates);
    };

    const getFechas = async (id) =>{
        const res = await axios.post('http://localhost:4000/API/disponibilidadNoId', id)
        setFechas(res.data);
    };

    const getReserva = async () =>{
        let url = {
            id_usr : parseInt(sessionStorage.idUsuario)
        }
        const res = await axios.post('http://localhost:4000/API/reserva/usr', url)
        let x = res.data
        setReserva(res.data);
        console.log('x',x)
    };

    const handleContratar=(ini, fin, id_dpto, id_region)=>{
        console.log('fechas: ',ini , ' hasta', fin)
        let x = [ini, fin];
        console.log('x: ',{x})
        const dates = x.map((e)=>{
            let newFecha = new Date(e);
            const value = newFecha.toLocaleDateString("en-US", e);
            return value;
        })
        setRango(dates)
        setDatos({
            id_dpto: id_dpto,
            id_rgn: id_region
        })
        console.log('dates: ',dates);
        console.log('rango: ',rango);
        console.log('datos: ', datos);
        setSeleccion(1)
    }

    let variable = sessionStorage.Pagar;

    useEffect(() => {
        variable = sessionStorage.Pagar;
        console.log('Se debe pagar?: ',variable)
    },[])

    console.log('Inicio carga disponibilidad');
    console.log('Fechas: ',fechas);
    console.log('fechas ArrayF', arrayF);
    console.log('End carga disponibilidad');
    
    if(seleccionado==0){
        return(
            <div id="body-contratoServ">
                <Navbar/>
                <div className="container" id="container-contrato">
                    <br/>
                    <h1>Reservas vigentes</h1>
                    {   reserva.map((e)=>{
                        return(
                            <div className="row" id="row-contserv">
                                <div className="col-lg-5 col-md-12" >
                                    <img alt="imagen" id="img-contserv"src={servicioExtra}></img>
                                </div>
                                <div className="col-lg-7 col-md-12" >
                                    <ListGroup id="listgroup-contserv">
                                        <h3>
                                        Orden de Reserva #{e.id_rva} {e.Departamento}
                                        </h3>
                                        <ListGroup.Item id="list-contserv">
                                        {e.nom_rgn} Comuna: {e.nom_com}
                                        </ListGroup.Item>
                                        <ListGroup.Item id="list-contserv">
                                            Fecha de arriendo {e.Fecha}
                                        </ListGroup.Item>
                                        <ListGroup.Item id="list-contserv">
                                            Monto total reserva: {e.Costo_total}
                                        </ListGroup.Item>
                                        <ListGroup.Item id="list-contserv">
                                            Costo del arriendo: {e.Costo_arriendo}
                                        </ListGroup.Item>
                                        <ListGroup.Item id="list-contserv">
                                            Monto servicios extra: {e.Costoserviciosextra}
                                        </ListGroup.Item>
                                        <ListGroup.Item id="list-contserv">
                                            Monto pagado hasta el momento: {e.MontoPagado}
                                        </ListGroup.Item>
                                        <br/>
                                        <ListGroup.Item id="btn-cont" action onClick={()=>handleContratar(e.fec_ini_us, e.fec_fin_us, e.id_dpto, e.id_rgn)}>
                                        Contratar Servicios para la reserva
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                        </div>)})
                    }
                </div>
            </div>
        );
    }else{
        return (
            <div id="body-contratoServ">
                <Navbar/>
                <DateContServ
                    fechas={rango}
                    datosDepto={datos}
                />                          
            </div>
        );
    }
}

//         "Idreserva"
//         "Departamento"
//         "Cliente"
//         "Estado_reserva"
//         "Fecha"
//          "fec_ini_rva" y fec_fin_rva
//         "Costo_total"
//         "Costo_arriendo"
//         "Costoserviciosextra",
//         "CostoMultas"
//         "MontoPagado"
//         "Detalle_check-in"
//         "Detalle_check-out"


//////////
    // "id_rgn",
	// "nom_rgn",
	// "id_com",
	// "nom_com",
	// "id_cnd",
	// "nom_cnd",
	// "departamento",
	// "id_agencia",
	// "nom_age",
	// "email_age",
	// "tel_age",
	// "id_serv",
	// "nom_serv",
	// "tipo_serv",
	// "desc_serv"