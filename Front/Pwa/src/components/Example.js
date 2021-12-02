import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import axios from 'axios';
import 'react-day-picker/lib/style.css';

function Example({fechas}) {
  
    handleDayClick = handleDayClick.bind(this);

    const [state, setState] = useState ( {
        selectedDay: undefined,
    })
    
    function handleDayClick(day, { selected, disabled }) {
        if (disabled) {
        // Day is disabled, do nothing
        return;
        }
        if (selected) {
        // Unselect the day if already selected
        setState({ selectedDay: undefined });
        return;
        }
        setState({ selectedDay: day });
    }

    // state = {
    //     fechas:[],
    //     dates: [],
    //     arrayF: []
    // }

    // const id_d = {
    //     id_dpto: 1
    // }

    useEffect(()=> {
        // getFechas(id_d)
    })

    // const getFechas = async (id) =>{
    //     const res = await axios.post('http://localhost:4000/API/disponibilidadJson', id)
    //     setState ({
    //         fechas: new Date(res.data)
    //     });
    // }
    const [fechasR, setFechasR] = useState([
        '2021,12,21','2021,12,22', '2021,12,25', '2020-12-13',
    ])
    const [dias, setDias] = useState(null);
    // dias2 = new Date(dias.y,dias.m,dias.d)
    // x = [new Date(fechas.Concate)]
    console.log('Start date');
    console.log('Las fechas: ', fechas);
    console.log(fechasR[0])
    console.log('End date');

    return (
        <div>
            <h1>Day Picker</h1>
            <DayPicker
                onDayClick={handleDayClick}
                selectedDays={state.selectedDay}
                // initialMonth={new Date(2021, 12)}    
                disabledDays={[ 
                    fechasR.map((e) => new Date(e)),
                    new Date(fechasR.map((e)=> e)),
                    new Date(fechasR[0]),
                    //new Date(fechasR),
                    // new Date(fechasR.forEach(e => e)),
                    new Date('2021-12-11T02:00:00Z'),
                    // new Date('2021/12/07') 
                ]}
            />
            {state.selectedDay ? (
            <p>Fecha seleccionada {state.selectedDay.toLocaleDateString()}</p>
            ) : (
            <p>Por favor elige un día</p>
            )}
            {/* <p>{dias}</p> */}
            {
                fechasR.map(e => {
                    return <p>{e}</p>})
            }
        </div>
    );   
}

export default Example;