import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';
import '../../../assetss/css/Mantencion.css';
import building from '../../../assetss/img/building.png'
import { Button, Form, Table } from 'react-bootstrap';
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
    toast.error('Operación cancelada',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

const notifyW = () =>{
    toast.warn('Debe seleccionar una departamento válido',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

export default function DeptosMant(){
    const [Departamento, setDepartamento] = useState("");
    const [mantenciones, setMantenciones] = useState([]);
    const [opciones, setOpciones] = useState([]);
    const [id_Dept, setIdDepto] = useState(-1);
    const [fecha, setFecha] = useState(0);
    const [mostrar, setMostrar] = useState(false);
    const history = useHistory();

 
    useEffect(()=>{
        getDeptos();
        console.log('Carga deptos: ',{opciones})
    },[]);

    const getDeptos = async () =>{
        const res = await axios.get('http://localhost:4000/API/departamento');
        let x = (res.data)
        setOpciones(x);
    }

    const getMantenciones = async (datos)=>{
        const res = await axios.post('http://localhost:4000/API/mantencionDepto', datos);
        setMantenciones(res.data)
        const x = ( res.data )
        // setDepartamento(x.Departamento)
        console.log('Carga Mantenciones: ',mantenciones)
    }

    const onInputDepto = (e) => {
        setIdDepto( e.target.value);
    };

    const onInputfecha = (e) => {
        setFecha(e.target.value);
    }

    const handleBuscar = async (fecha, id_Dept) =>{
        if(id_Dept ==="-1"){
            notifyW();
        }else{
        let url = {
            id_depto : parseInt(id_Dept),
            agno: parseInt(fecha)
        };
        console.log('url', url);
        getMantenciones(url);
        setMostrar(true)
        sessionStorage.id_d = id_Dept;
        }
    }
    
    // const handleMantencion= async (id_d )=>{
    //     // sessionStorage.id_d = id_d;
    //     // history.push("/ResMant" );
    // }

    return (
        <div id="body-mantenciones">
            <NavBarAdmin/>
            <div className="container justify-items-center">
                <br/>
                <h1>Listado de Mantenciones</h1>       
                <div className="container" id="div-buscar-man">
                    <Form className="contact-form" >
                        <Form.Group className="mb-3">
                            <h3>Ingrese un año a consultar</h3>
                            <input type="number" id="input-fecha" require name="fecha" placeholder= "Ingrese el año a consultar"  value={fecha} required onChange={onInputfecha}/>
                                <h2>Ingrese el departamento a consultar</h2>
                            <Form.Select  name="id_Dept" placeholder= "Ingrese el departamento" value={id_Dept} required onChange={onInputDepto}>
                                <option value="-1">
                                    Elige un departamento   
                                </option>
                                {opciones.map( op => (
                                    <option key={op.id_Dept} value={op.id_dpto}>
                                        Departamento: {op.depto} ubicado en {op.nom_com}
                                    </option>
                                ))}
                            </Form.Select>                            
                        </Form.Group>
                        <Button variant="primary" onClick={()=>handleBuscar( fecha, id_Dept)}>Consultar Mantenciones</Button>
                    </Form>
                </div> 
            </div>
            { mostrar 
                ?<div className="container" id="container-mantenciones">
                    <h2> Registro de mantenciones</h2>
                    <Table striped bordered hover variant="dark" responsive="md">       
                        <tbody>
                            <tr>
                                <td>Fecha Mantención</td>
                                <td>Departamento</td>
                                <td>Solicitante</td>
                                <td>Estado</td>
                                <td>Costo de mantención</td>
                                <td>Detalle</td>
                            </tr>
                        {
                            mantenciones.map((e) =>{
                                return(
                                <tr>
                                    <td>{e.Fecha}</td>
                                    <td>{e.Departamento}</td>
                                    <td>{e.Solicitante}</td>
                                    <td>{e.est_man}</td>
                                    <td>${e.cost_mant}</td>
                                    <td>{e.deta_mant}</td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </Table>            
                    <br/>
                    <Link class="btn btn-primary" to="/ResMant">Agendar Mantención</Link>
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
// "depto"
// "id_dpto"
// "dir_dpto"
// "n_amb_dpto"
// "desc_dpto"
// "costo_arri_dpto"

// Departamento
// rm.id_rmant,
// "Fecha",
// rm.id_dpto,
// rm.id_usr,
// rm.est_man,
// m.cost_mant,
// m.deta_mant
// Solicitante

