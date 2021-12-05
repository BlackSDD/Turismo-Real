import React, {useEffect, useState } from 'react';
import axios from 'axios';
import '../../../assetss/css/Mantencion.css';
import { Button, Form} from 'react-bootstrap';
import NavBarAdmin from '../../Layouts/NavBarAdmin';
import {toast} from 'react-toastify';

// import DatePicker from '../../Layouts/Date-Picker';
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
    toast.error('Operación no se pudo llevar a cabo',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

const notifyW = () =>{
    toast.warn('Debe seleccionar una Reserva válida',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

const notifyW2 = () =>{
    toast.warn('El valor de la reserva no puede ser menor a 0',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

const notifyW3 = () =>{
    toast.warn('El detalle de reserva no puede quedar vacio',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

const notifyW4 = () =>{
    toast.warn('Operación cancelada',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

export default function DetalleMant(){
    const [mantenciones, setMantenciones] = useState([]);
    const [opciones, setOpciones] = useState([]);
    const [id_rmant, setIdMant] = useState(-1);
    const [costo, setCosto] = useState(0);
    const [detalle, setDetalle] = useState("");
    const [mostrar, setMostrar] = useState(false);
 
    useEffect(()=>{
        getMantenciones();
        console.log('Carga Mants: ',{opciones})
    },[]);

    const getMantenciones = async () =>{
        const res = await axios.get('http://localhost:4000/API/mantencionAgendada');
        let x = (res.data)
        setOpciones(x);
    }

    const onInputMant = (e) => {
        setIdMant(e.target.value);
    };

    const onInputCosto = (e) => {
        setCosto(e.target.value);
    };

    const onInputDetalle = (e) => {
        setDetalle(e.target.value);
    };

    const handleSeleccionar = async (id_rmant) =>{
        if(id_rmant ==="-1"){
            notifyW();
        }else{
        setMostrar(true)
        }
    }
    
    const handleAddDetalle= async ()=>{
        if(costo <0){
            notifyW2();
        }else if(detalle.length < 5){
            notifyW3();
        }else{
            const answer = window.confirm("¿Confirmar detalle de mantención?");
            if(answer){
            try{
                const newMantencion ={
                    cost_mant: parseInt(costo),
                    deta_mant: detalle,
                    id_rmant: parseInt(id_rmant)
                }
                await axios.post('http://localhost:4000/API/mantencion', newMantencion)
                notifyS();
                window.location.href = "/Admin";
            }catch{notifyE();}}
            else{notifyW4();}
        }
    }

    return (
        <div id="body-mantenciones">
            <NavBarAdmin/>
            <div className="container justify-items-center">
                <br/>
                <h1>Añadir Detalle de mantención</h1>       
                <div className="container" id="div-buscar-man">
                    <Form className="contact-form" >
                        <Form.Group className="mb-3">
                            <h2>Ingrese la mantencion para añadir detalle</h2>
                            <Form.Select  name="id_rmant" placeholder= "Seleccione la mantención" value={id_rmant} required onChange={onInputMant}>
                                <option value="-1">
                                    Elige una mantención   
                                </option>
                                {opciones.map( op => (
                                    <option key={op.id_rmant} value={op.id_rmant}>
                                        Reserva para departamento: {op.Departamento} con fecha {op.Fecha}
                                    </option>
                                ))}
                            </Form.Select>                        
                        </Form.Group>
                        <Button variant="primary" onClick={()=>handleSeleccionar( id_rmant)}>Consultar Mantenciones</Button>
                    </Form>
                </div> 
            </div>
            { mostrar 
                ?<div className="container" id="container-mantenciones">
                    <h2> Registro de mantenciones</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="Mensaje">
                            <h3>Ingrese el costo de la mantención</h3>
                            <input type="number" id="input-costo" min={0}  name="costo" placeholder= "Ingrese costo de Mantención"  value={costo} required onChange={onInputCosto}/>
                            <h3>Ingrese el detalle de la mantención</h3>
                            <Form.Control as="textarea" required name="detalle" placeholder= "Ingrese detalle" rows={3} value={detalle} onChange={onInputDetalle} />
                        </Form.Group>
                    </Form>         
                    <br/>
                    <Button onClick={handleAddDetalle}>Agregar detalle de Mantención</Button>
                </div>  
                :<br/>}     
        </div>
    )
}
// "id_rgn"
// "nom_rgn"
// "id_com"
// "nom_com"
// "id_cnd"
// "nom_cnd"
// "Mant"
// "id_rmant"
// "dir_dpto"
// "n_amb_dpto"
// "desc_dpto"
// "costo_arri_dpto"

// Departamento
// rm.id_rmant,
// "Fecha",
// rm.id_rmant,
// rm.id_usr,
// rm.est_man,
// m.cost_mant,
// m.deta_mant
// Solicitante

