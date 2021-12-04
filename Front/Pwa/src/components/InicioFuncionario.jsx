import React from 'react'
import "../assetss/css/Admin.css"
import { Router, Route, useHistory } from 'react-router-dom';
import NavBarAdmin from './Layouts/NavBarAdmin';
import {Button, Card} from 'react-bootstrap'
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

const MainFuncionario = () => {

    const history = useHistory();

    const routeChange = () =>{ 
      let path = `newPath`; 
      history.push(path);
    }

    
    return (
        <div id="menuAdmin">
            <NavBarAdmin/>
            <div className="container" id="container-funcionario">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="container" id="div-card-funcionario">                            
                            <Card id="card-main-funcionario">
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/02/17/21/09/welcome-to-our-home-1205888_960_720.jpg" id="img-main-funcionario"/>
                                <Card.Body id="card-body-funcionario">
                                    <Card.Title id="card-title-funcionario">Ingresar Check-in</Card.Title>
                                    <Card.Text id="card-text-funcionario">
                                        Registrar el check-in de una reserva.<br/>
                                        Se debe cobrar el resto del monto del arriendo, además de modificar el número de personas que se hospedarán
                                    </Card.Text>
                                    <br/>
                                    <Button id="button-card-funcionario" onClick={()=>history.push('/checkin')}>Ingresar Check-in</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" >
                        <div className="container" id="div-card-funcionario">
                            <Card id="card-main-funcionario">
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/03/25/10/02/farewell-3258939_960_720.jpg" id="img-main-funcionario"/>
                                <Card.Body id="card-body-funcionario">
                                    <Card.Title id="card-title-funcionario">Ingresar Check-out</Card.Title>
                                    <Card.Text id="card-text-funcionario">
                                        Registrar el check-out de una reserva.<br/>
                                        Recuerde cobrar al cliente los saldos pendientes
                                    </Card.Text>
                                    <br/>
                                    <Button id="button-card-funcionario" onClick={()=>history.push('/checkout')}>Ingresar Check-out</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFuncionario
