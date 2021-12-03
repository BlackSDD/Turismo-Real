import React, {useState, useEffect} from 'react';
import Example from './Example';
import axios from 'axios';
import DatePicker from './Layouts/Date-Picker';

function Test2(){

    let id_d = {
      id_dpto: 1
    }

    const [fechas, setFechas] = useState([]);
    const [arrayF, setArrayF] = useState([]);

    useEffect(() =>{
      getFechas(id_d)
    }, []);

    useEffect(() => {
      const dates = fechas.map((e) => {
        let newFecha = new Date(e.fec_disp_no);
        const val = newFecha.toLocaleDateString("en-US", e.fec_disp_no);
        return val;
      })
      setArrayF(dates);
    }, [fechas]);

    const getFechas = async (id) =>{
      const res = await axios.post('http://localhost:4000/API/disponibilidadNoId', id)
      setFechas(res.data)
    };

    console.log('Fechas: ', {fechas})
    console.log('fechas ArrayF', {arrayF});

    return (
        <div>
            {/* <Example  
              fechas={arrayF}
            /> */}
            <DatePicker
              fechas={arrayF}
            />
            Test 2 
            {/* {
              arrayF.map(e =>(
                <div>
                  <li>{e}</li>
                </div>
              ))
            }  */}
        </div>
    );
}

export default Test2