import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {Button, Form} from 'react-bootstrap';
// import 'react-day-picker/lib/style.css';
import '../../assetss/css/Date-Picker.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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

  handleDayClick(day, modifiers = {})  {
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
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.value)
}

  HandleReserva = async(from, to, num, reservado) =>{
    console.log('# personas:',num)
    //Almaceno los datos del storage
    let datos ={
      id_usr: sessionStorage.idUsuario,
      id_dpto : sessionStorage.id_d
    };
    const newReserva = {
      fec_ini_rva : from,
      fec_fin_rva : to,
      num_pers: parseInt(num),
      id_dpto: datos.id_dpto,
      id_usr: datos.id_usr
    };
    axios.post('http://localhost:4000/API/reserva', newReserva);
    let reserva = await axios.post('http://localhost:4000/API/reservaCurrent', datos);
    console.log('Reserva data 0:',reserva.data[0])
    let infoResv = reserva.data;
    let idReserva = infoResv.map((e)=>{
        let x = e.curr_id;
        return  x
        }
    )
    console.log('infoResv:', infoResv.curr_id);
    console.log('id final: ', idReserva)
    sessionStorage.reserva = idReserva;
    // this.setState({reservado: true});
    // console.log('Reservado: ',reservado);
    sessionStorage.Pagar = true;

    let redir = { redirect: "http://localhost:3000/paypal" };
    return(<Redirect to={redir.redirect}/>);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to, num, reservado} = this.state;
    // const reservado = this.state;
    const modifiers = { start: from, end: to };
    
    console.log('rango: ',this.state.range)
    if(!reservado){
      return (
        <div className="container" id="container-date-picker">
          <h3>
              {!from && !to && 'Elija una fecha de check-in.'}
              {from && !to && 'Elija una fecha de check-out'}
              {from &&
                  to &&
                  `Fecha de reserva desde: ${from.toLocaleDateString()} hasta:
                      ${to.toLocaleDateString()}`}{' '}
          </h3>
              {from && to && (
              <Button variant="info" onClick={this.handleResetClick}>
                Limpiar Campos de Fecha
              </Button>
              )}
          <br/>
          <DayPicker id="date-picker"
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              showOutsideDays
              disabledDays={     
                  this.props.fechas.map(date => new Date(date))              
              }
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
          />
          <br/>


          <Form>
            <Form.Group className="mb-3" controlId="Cantidad">
              <Form.Label>Ingrese la cantidad de personas</Form.Label>
              <Form.Control  name="num"  onChange={this.onInputChange} required/>
            </Form.Group>
          </Form>

          {from && to && (
              <Button variant="success" onClick={()=>{this.HandleReserva(from,to, num, reservado)}}>
                  Continuar con la Reserva
              </Button>
          )}
        </div>
    );}else return (<br/>);
  }
}