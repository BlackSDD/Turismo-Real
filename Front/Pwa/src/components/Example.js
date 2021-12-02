import React from 'react';
import DayPicker from 'react-day-picker';
import axios from 'axios';
import 'react-day-picker/lib/style.css';
import Moment from 'moment';

export default class Example extends React.Component {
  
    constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
    }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  state= {
    fechas:[],
    dates: [],
    arrayF: []
  }

  id_d = {
      id_dpto: 1
  }

    async componentDidMount() {
        this.getFechas(this.id_d)
        this.state.dates = ([...this.state.dates,this.state.fechas.map((e) => e.Concate)])
        this.state.arrayF = ([...this.state.arrayF, new Date(this.state.dates)] )
    }

    getFechas = async (id) =>{
        const res = await axios.post('http://localhost:4000/API/disponibilidadJson', id)
        this.setState ({
            fechas: new Date(res.data)
        });
    }

    dias = {
        d:15,
        m:11,
        y:2021
    }
    
    dias2 = new Date(this.dias.y,this.dias.m,this.dias.d)
    // x = [new Date(this.fechas.Concate)]
    dias3 = [new Date(this.dias.y,this.dias.m,this.dias.d),
        new Date(2021,11,20)]

        

  render() {
      console.log('Las fechas: ',this.state.fechas)
    return (
        <div>
            <h1>Day Picker</h1>
            <DayPicker
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
                // initialMonth={new Date(2021, 12)}    
                                    
                disabledDays={[new Date('2021-12-15'),
                    new Date('2021-12-11T02:00:00Z') ] }
            />
            {this.state.selectedDay ? (
            <p>Fecha seleccionada {this.state.selectedDay.toLocaleDateString()}</p>
            ) : (
            <p>Por favor elige un día</p>
            )}
            <p>{this.dias[0]}</p>
            
        </div>
    );
  }
}