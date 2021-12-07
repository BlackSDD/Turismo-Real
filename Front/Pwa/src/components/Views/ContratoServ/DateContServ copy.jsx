import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../../assetss/css/Date-Picker.css";
import axios from "axios";
import {toast} from 'react-toastify';
import Taxi from '../../../assetss/img/taxi.jpg';
import Tour from '../../../assetss/img/tourLogo.jpg';
import '../../../assetss/css/contratoServ.css';
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
    this.state = {selectedDay: null,
      servicios:[],
      paso:1,
      seleccionado: [],
      tipo: ""
    };
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

  async componentDidMount(){
    const datos = this.props.datosDepto
    console.log('datos: prop', datos)
    const res = await axios.post('http://localhost:4000/API/serviciosDisponibles', datos)
    this.setState({
      servicios: res.data
    })
    console.log('servicios:', this.state.servicios)
  } 

  handleSeleccionar = async (id, tipo)=>{
    let datos ={
      id_serv: id
    }
    const res = await axios.post('http://localhost:4000/API/servicioExtraID', datos)
    this.setState({
      seleccionado: res.data,
      paso: 2,
      tipo: tipo
    })
    console.log('seleccion', this.state.seleccionado);
    console.log('paso', this.state.paso)

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
    const servicios = this.state;
    const selectServ = this.state;
    // console.log({from})
    // console.log({to})
    // console.log({servicios})
    if(this.state.paso ==1){
    return (
            <div className="container" id="servicios-disp">
              <div className="row">
                {this.state.servicios.map((e)=>{
                  if(e.tipo_serv ==='T')
                    return(
                      <div className="col-lg-4 col-md-6 col-sm-12" >
                      <Card id="card-servicio">
                        <Card.Img variant="top" src={Tour} id="img_card" />
                        <Card.Body>
                          <Card.Title id="serv-text">{e.nom_serv}</Card.Title>
                          <Card.Text>
                            {e.desc_serv}
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          {/* <ListGroupItem>Duración del tour: {e.duracion}</ListGroupItem>
                          <ListGroupItem>Ubicación partida: {e.partida}</ListGroupItem>
                          <ListGroupItem>Terminarás en: {e.fin}</ListGroupItem>
                          <ListGroupItem>Alimento incluido {e.alimentacion}</ListGroupItem>
                          <ListGroupItem>Transporte incluido: {e.transporte_tour}</ListGroupItem>
                          <ListGroupItem>Costo adultos: {e.cost_adult}</ListGroupItem>
                          <ListGroupItem>Costo adulto mayor: {e.cost_3ra}</ListGroupItem>
                          <ListGroupItem>Costo niño: {e.cost_nigno}</ListGroupItem> */}
                        </ListGroup>
                        <Card.Body>
                          {/* <Card.Link href="#">Card Link</Card.Link> */}
                          <ListGroup.Item id="btn-cont" action onClick={()=>this.handleSeleccionar(e.id_servicio)}>
                              Contratar Servicio
                          </ListGroup.Item>
                        </Card.Body>
                      </Card>
                      </div>
                      )
                  else
                  return(
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                      <Card id="card-servicio">
                        <Card.Img variant="top" src={Taxi} id="img_card"/>
                        <Card.Body>
                          <Card.Title>{e.nom_serv}</Card.Title>
                          <Card.Text id="serv-text">
                            {e.desc_serv}
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          {/* <ListGroupItem>Cras justo odio</ListGroupItem>
                          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                          <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                        </ListGroup>
                        <Card.Body>
                          {/* <Card.Link href="#">Card Link</Card.Link> */}
                          <ListGroup.Item id="btn-cont" action onClick={()=>this.handleSeleccionar(e.id_servicio , e.tipo_serv)}>
                            Contratar Servicio
                          </ListGroup.Item>
                        </Card.Body>
                      </Card>
                    </div>
                )})
                }
              </div>
      </div>   
    );}
    
    if(this.state.paso ==2 && this.state.tipo == 'T'){
      return(
        <div className="container">
          <div className="row">
              info
          </div>
          <div className="row">
            form
          </div>
          <div className="row">
          <div id="container-date-picker">
              <div id="color"><p id="p-date-mant"> Agendar Mantencion</p> </div>
              <div id="container-form-picker">
                <h3>
                  {!this.selectedDay && 'Elija una fecha de Mantención'}
                  {this.selectedDay && 
                  `Fecha de reserva desde: ${this.selectedDay.toLocaleDateString()}`}{' '}
                </h3><br/>
                <DayPicker id="date-picker"
                    initialMonth={new Date(from)}
                    className="Selectable"
                    selectedDays={this.state.selectedDay}
                    showOutsideDays
                    disabledDays={[{after: new Date(to)},{before: new Date(from)}]}
                    onDayClick={this.handleDayClick}
                /><br/>
              </div>
            </div>              
              {this.state.selectedDay && selectServ &&(
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
      )
    }if(this.state.paso ==2 && this.state.tipo == 'V'){
      return(
        <div className="container">
          <div className="row">
              info
          </div>
          <div className="row">
            form
          </div>
          <div className="row">
          <div id="container-date-picker">
              <div id="color"><p id="p-date-mant"> Agendar Mantencion</p> </div>
              <div id="container-form-picker">
                <h3>
                  {!this.selectedDay && 'Elija una fecha de Mantención'}
                  {this.selectedDay && 
                  `Fecha de reserva desde: ${this.selectedDay.toLocaleDateString()}`}{' '}
                </h3><br/>
                <DayPicker id="date-picker"
                    initialMonth={new Date(from)}
                    className="Selectable"
                    selectedDays={this.state.selectedDay}
                    showOutsideDays
                    disabledDays={[{after: new Date(to)},{before: new Date(from)}]}
                    onDayClick={this.handleDayClick}
                /><br/>
              </div>
            </div>              
              {this.state.selectedDay && selectServ &&(
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
      )
    }else{

    }
  }
}