import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {Button, Form} from 'react-bootstrap';
// import 'react-day-picker/lib/style.css';
import '../../assetss/css/Date-Picker.css'

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


  HandleReserva(id_rva){
    sessionStorage.reserva = id_rva;
    sessionStorage.Pagado = true;
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    
    console.log(this.state)
    
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
              <Form.Control  name="Cantidad" required/>
            </Form.Group>
          </Form>

          {from && to && (
              <Button variant="success" onClick={this.HandleReserva}>
                  Continuar con la Reserva
              </Button>
          )}
        </div>
    );
  }
}