import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import { Button, Form, Navbar } from "react-bootstrap";
import "../../../assetss/css/Date-Picker.css";
import axios from "axios";
import {toast} from 'react-toastify';
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
    toast.error('Operación no se pudo llevar a cabo',{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
    });
};

const notifyW = () =>{
  toast.warn('Se canceló el contrato de servicio extra',{
      position: toast.POSITION.TOP_CENTER,
      theme: "colored"
  });
};



export default class DateContServ extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
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

  HandleContrato = async (fecha) => {
    //Almaceno los datos del storage
    let datos = {
      id_usr: sessionStorage.idUsuario,
      id_dpto: sessionStorage.id_d,
    };
    const answer = window.confirm("¿Confirmar el contrato de servicio?");
    if (answer) {
    
      axios.post("http://localhost:4000/API/reserva", );
      let reserva = await axios.post(
        "http://localhost:4000/API/reservaCurrent",
        datos
      );
      console.log("Reserva data 0:", reserva.data[0]);
      let infoResv = reserva.data;
      let idReserva = infoResv.map((e) => {
        let x = e.curr_id;
        return x;
      });
      console.log("infoResv:", infoResv.curr_id);
      console.log("id final: ", idReserva);
      sessionStorage.reserva = idReserva;
      // this.setState({reservado: true});
      // console.log('Reservado: ',reservado);
      sessionStorage.Pagar = true;
      window.location.href = "/paypal";}
    else{
      notifyW();
    }
  };

  handleCancelar = async ()=>{
    window.location.href = "/ContratarServ";}
  

  render() {
    console.log('props',this.props.fechas)
    const from = this.props.fechas[0];
    const to  = this.props.fechas[1];
    console.log({from})
    console.log({to})
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
                      initialMonth={new Date(from)}
                      className="Selectable"
                      selectedDays={this.state.selectedDay}
                      showOutsideDays
                      disabledDays={   
                          [{
                            after: new Date(to)
                          },
                          {
                            before: new Date(from)
                          }]
                      }
                      onDayClick={this.handleDayClick}
                  />
                  <br/>
                  {this.state.selectedDay &&(
                    <div>
                      <Button id="button-date-picker1" variant="success" onClick={()=>{this.HandleContrato(this.state.selectedDay)}}>
                        Generar contrato de servicio
                      </Button>
                      <Button id="button-date-picker2" variant="info" onClick={this.handleCancelar}>
                        Cancelar contrato de servicio
                      </Button>
                    </div>
                  )}
                </div>
            </div>
        </div>   
    );
  }
}