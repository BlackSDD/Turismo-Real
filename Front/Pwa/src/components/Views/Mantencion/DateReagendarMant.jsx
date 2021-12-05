import React from 'react';
import DayPicker from 'react-day-picker';
import {Button} from 'react-bootstrap';
// import 'react-day-picker/lib/style.css';
import '../../../assetss/css/Date-Picker.css'
import axios from 'axios';
import {toast} from 'react-toastify';

///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>;
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
    toast.warn('Se canceló el cambio de fecha de mantención',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

export default class DateReagendarMant extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    // this.handleCancelar = this.handleCancelar.bind(this);
    this.state = {
      selectedDay: null,
      fecha:[]};
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.value)
  }

  HandleMantencion = async(fecha) =>{
    const answer = window.confirm("¿Confirmar cambio de fecha?");
    if(answer){
      try{ 
      const newMantencion = {
        id_rmant: parseInt(sessionStorage.id_rmant), 
        fec_rmant: fecha
      };
      axios.put('http://localhost:4000/API/reservaMantencion', newMantencion);
      window.location.href= "/DeptosMant";
      notifyS()
      }catch{notifyE()}}
    else{
      notifyW();
    }
  }

  async componentDidMount() {
    let id = sessionStorage.id_rmant
    console.log(id)
    const url = {
      "id_rmant": parseInt(id)
    }
    console.log('url', url)
    const res = await axios.post('http://localhost:4000/API/reservaMantencionID', url);
    let x = res.data;
    this.setState({
        fecha: x.map((e)=>{
          return e.Fecha
        })
    });
    console.log('fecha actual: ', this.state.fecha)
    console.log('x',x)
  }

  handleCancelar() {
    window.location.href= "/DeptosMant";
    notifyE()
  }

  render() {
      return (
        <div id="body-date-picker">
          <br/>
            <div id="container-date-picker">
              <div id="color"><p id="p-date-mant"> Cambiar fecha de Mantención</p> </div>
                <div id="container-form-picker">
                  <h3>Fecha anterior {this.state.fecha[0]}{}</h3>
                  <br/>
                  <h4 >
                      {!this.selectedDay && 'Elija la nueva fecha de Mantención'}
                      {this.selectedDay && 
                          `Fecha de reserva desde: ${this.selectedDay.toLocaleDateString()}`}
                  </h4>
                  <br/>
                  <DayPicker id="date-picker"
                      className="Selectable"
                      selectedDays={this.state.selectedDay}
                      showOutsideDays
                      disabledDays={     
                          this.props.fechas.map(date => new Date(date))              
                      }
                      onDayClick={this.handleDayClick}
                  />
                  <br/>
                  {this.state.selectedDay &&(
                    <div>
                      <Button id="button-date-picker1" variant="success" onClick={()=>{this.HandleMantencion(this.state.selectedDay)}}>
                          Cambiar por fecha seleccionada
                      </Button>
                      <Button id="button-date-picker2" variant="info" onClick={this.handleCancelar}>
                        Cancelar cambio de fecha
                      </Button>
                    </div>
                  )}
                </div>
            </div>
        </div>   
    );
  }
}