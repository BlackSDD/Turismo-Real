import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import axios from 'axios';
import 'react-day-picker/lib/style.css';

function Example({fechas}) {
  
    handleDayClick = handleDayClick.bind(this);
    handleResetClick = handleResetClick.bind(this);

    const [state, setState] = useState ({
        selectedDay: undefined,
        // getInitialState()
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

    function handleResetClick() {
        setState(getInitialState());
    }
    
    const getInitialState = () => {
        return {
          from: undefined,
          to: undefined,
        };
    }

    useEffect(()=> {
        // getFechas(id_d)
    })

    console.log('Start date');
    console.log('Las fechas: ', fechas);
    console.log('End date');

    return (
        <div>
            <h1>Day Picker</h1>
            <DayPicker
                onDayClick={handleDayClick}
                selectedDays={state.selectedDay}
                // initialMonth={new Date(2021, 12)}    
                disabledDays={     
                    fechas.map(date => new Date(date))              
                }
            />
            {state.selectedDay ? (
            <p>Fecha seleccionada {state.selectedDay.toLocaleDateString()}</p>
            ) : (
            <p>Por favor elige un día</p>
            )}
            {/* <p>{dias}</p>
            {
                fechas.map(e => {
                    return <p>{e}</p>})
            } */}
        </div>
    );   
}

export default Example;