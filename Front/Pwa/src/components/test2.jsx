import React, {useState, useEffect} from 'react';
import Example from './Example';
import axios from 'axios';

function Test2(){

  let id_d = {
    id_dpto: 1
  }

  const [fechas, setFechas] = useState([]);
  const [arrayF, setArrayF] = useState([]);

  useEffect(() =>{
    getFechas(id_d)
    // setDate([...date, e.fec_disp])
    // )
    // setDate([...date, new Date((fechas.map(e => e.Concate)))])
    // setArrayF([...arrayF, new Date( fechas[0].Concate )])    
  }, []);

  useEffect(() => {
    const dates = fechas.map((e) => {
      let newFecha = new Date(e.Concate);
      const val = newFecha.toLocaleDateString("es-ES", e.Concate);
      return val;
    })
    setArrayF(dates);
  }, [fechas]);

  const getFechas = async (id) =>{
    const res = await axios.post('http://localhost:4000/API/disponibilidadJson', id)
    setFechas(res.data)
  };

  console.log('fechas ArrayF', arrayF);

  return (
    <div>
      <Example
        fechas={arrayF}
      />
      Test 2 
      {
        arrayF.map(e =>(
          <div>
            <li>{e}</li>
          </div>
        ))
      }
    </div>
  );

}

export default Test2