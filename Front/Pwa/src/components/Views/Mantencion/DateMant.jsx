import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {Button, Form} from 'react-bootstrap';
// import 'react-day-picker/lib/style.css';
import '../../../assetss/css/Date-Picker.css'
import axios from 'axios';
import {toast} from 'react-toastify';
import NavBarAdmin from '../../Layouts/NavBarAdmin';

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

// const notifyW = () =>{
//     toast.warn('Debe seleccionar una Id válida',{
//         position: toast.POSITION.TOP_CENTER,
//         theme: "colored"
//     });
// };

export default class DateMant extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    // this.handleCancelar = this.handleCancelar.bind(this);
    this.state = {selectedDay: null};
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
    //Almaceno los datos del storage
    let datos ={
      id_usr: sessionStorage.idUsuario,
      id_dpto : sessionStorage.id_d
    };
   try{ 
    const newMantencion = {
      fec_rmant : fecha,
      id_dpto: datos.id_dpto,
      id_usr: datos.id_usr
    };
    axios.post('http://localhost:4000/API/reserva', newMantencion);
    window.location.href= "/DeptosMant";
    notifyS()
    }catch{
      notifyE()
    }
  }

  handleCancelar() {
    window.location.href= "/DeptosMant";
    notifyE()
  }

  render() {
    // const { from} = this.state;
      return (
        <div id="body-date-picker">
          <br/>
            <div id="container-date-picker">
              <div id="color"><p id="p-date-mant"> Agendar Mantencion</p> </div>
                <div id="container-form-picker">
                  <h3 >
                      {!this.selectedDay && 'Elija una fecha de Mantención'}
                      {this.selectedDay && 
                          `Fecha de reserva desde: ${this.selectedDay.toLocaleDateString()}`}{' '}
                  </h3>
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
                          Registrar Mantencion
                      </Button>
                      <Button id="button-date-picker2" variant="info" onClick={this.handleCancelar}>
                        Cancelar Reserva
                      </Button>
                    </div>
                  )}
                </div>
            </div>
        </div>   
    );
  }
}