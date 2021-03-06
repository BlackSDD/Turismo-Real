import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import { Button, Form, Navbar } from "react-bootstrap";
import "../../../assetss/css/Date-Picker.css";
import axios from "axios";
import NavBar from "../../Layouts/Navbar";
import { Link } from 'react-router-dom';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

export default class DatePicker extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.setState({
      selectedDay: modifiers.selected ? undefined : day,
    });
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  HandleReserva = async (from, to, num) => {
    console.log("# personas:", num);
    //Almaceno los datos del storage
    let datos = {
      id_usr: sessionStorage.idUsuario,
      id_dpto: sessionStorage.id_d,
    };

    if (!num) {
      num = 0;
    }
    console.log("# new:", num);

    const newReserva = {
      fec_ini_rva: from,
      fec_fin_rva: to,
      num_pers: parseInt(num),
      id_dpto: datos.id_dpto,
      id_usr: datos.id_usr,
    };
    axios.post("http://localhost:4000/API/reserva", newReserva);
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
    sessionStorage.Pagar = true;
    window.location.href = "/paypalReserva";
  };

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to, num } = this.state;
    const modifiers = { start: from, end: to };
    console.log("rango: ", this.state.range);
    let tipo = parseInt(sessionStorage.tipoUsr)
        if(tipo == 0 ){
            return(<div id="menuAdmin">
            <Navbar/>
            <div className="row  d-flex justify-content-center mb-5">
            <div className="card-header mb-5" style={{backgroundColor:'black', opacity:0.8}}>
            <div className="title col-12 mt-5 text-center">
                    <h1>Turismo Real</h1>
                </div>
                <div className="title col-12 mt-1 mb-5 text-center">
                    <h3>porfavor inicie sesion</h3>
                </div>
            </div>             
    
            </div>
        </div>
            )
        }
    return (
      <div id="body-date-picker">
        <Navbar />
        <div id="container-date-picker">
          <div id="color">
            <p id="p-date-mant"> Agendar Reserva</p>{" "}
          </div>
          <div id="container-form-picker">
            <h3>
              {!from && !to && "Elija una fecha de check-in."}
              {from && !to && "Elija una fecha de check-out"}
              {from &&
                to &&
                `Fecha de reserva desde: ${from.toLocaleDateString()} hasta:
                          ${to.toLocaleDateString()}`}{" "}
            </h3>
            <br />
            <DayPicker
              id="date-picker"
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              showOutsideDays
              disabledDays={this.props.fechas.map((date) => new Date(date))}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="Cantidad">
                <Form.Label>Ingrese la cantidad de personas</Form.Label>
                <Form.Control
                  name="num"
                  id="input-date-picker"
                  onChange={this.onInputChange}
                  required
                />
              </Form.Group>
            </Form>

            {from && to && (
              <div>
                <Button
                  id="button-date-picker1"
                  variant="success"
                  onClick={() => {
                    this.HandleReserva(from, to, num);
                  }}
                >
                  Continuar con la Reserva
                </Button>
                <Button
                  id="button-date-picker2"
                  variant="info"
                  onClick={this.handleResetClick}
                >
                  Limpiar Campos de Fecha
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
