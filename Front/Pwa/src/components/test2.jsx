import React, {useState, useEffect} from 'react';
import {  useHistory} from "react-router-dom";
import Example from './Example';
import axios from 'axios';
import moment from 'moment';

function Test2(){

  let id_d = {
    id_dpto: 1
  }

  const [date, setDate] = useState([]);
  const [fechas, setFechas] = useState([]);

  useEffect(() =>{
    getFechas(id_d)
    
      // setDate([...date, e.fec_disp])
      // )
    // setDate([...date, new Date((fechas.map(e => e.Concate)))])
    let dates = [fechas.map((e) => e.Concate)]
    setArrayF([...arrayF, new Date(dates)] )
    // setArrayF([...arrayF, new Date( fechas[0].Concate )])    
  },[]);

  const [arrayF, setArrayF] = useState([]);

  const getFechas = async (id) =>{
    const res = await axios.post('http://localhost:4000/API/disponibilidadJson', id)
    setFechas(res.data)
  }

  console.log({fechas})
  console.log({arrayF})
  console.log(fechas[0])
  console.log({date})
  
  return (
    <div>
      <Example/>
      Test 2 
      {
        fechas.map(e =>(
          <div>
            <li>{e.Concate}</li>
            <li>{e.fec_disp}</li>
          </div>
        ))
      }
    </div>
  );

}

export default Test2