import React, {  Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../../../assetss/css/ListaDeptos.css';
import Reserva from '../Reservas/Reserva';
import building from '../../../assetss/img/building.png'

export default function ListarDepto(){
    
    const [deptos, setDeptos] = useState([]);
    const [dispNo, setDispNo] = useState([]);
    
    // state = {
    //     deptos:[]
    // }
    
    const getDeptos = async () =>{
        const res = await axios.get('http://localhost:4000/API/departamento');
        setDeptos(res.data);
    }
    // const getDispNo = async () =>{
    //     const res = await axios.get('http://localhost:4000/API/departamento');
    //     setDeptos(res.data);
    // }

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
                <div id="listar-deptos">
                    <h1>Listado de departamentos</h1>
                    <div className="container">
                        {
                            deptos.map(e =>(
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <img src={building} className="img-lista-depto" ></img>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <h2>{e.nom_rgn}</h2>
                                        <h5>Ubicado en la comuna de: {e.nom_com}</h5>
                                        <p>{e.dir_dpto}</p>
                                        {/* <p>Condominio {e.nom_cnd}</p> */}
                                        {/* {e.nom_cnd} */}
                                        <p>{e.depto}</p>
                                        <p>{e.desc_dpto}</p>
                                        <p>Número de ambientes: {e.n_amb_dpto} </p>
                                        <p>Costo de Arriendo por noche ${e.costo_arri_dpto} CLP</p>
                                        {/* {e.img_1_dpto}
                                        {e.img_2_dpto}
                                        {e.img_3_dpto}
                                        {e.img_4_dpto}
                                        {e.img_5_dpto} */}
                                        {/* {e.id_dpto} */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* <Reserva
                        id_rva= {1}
                    /> */}
                </div>
                
            </div>
        )
    
}
