import React from 'react';
import uber from "../../assetss/img/uber.jpg";
import taxi from "../../assetss/img/taxi.jpg";
import '../../assetss/css/bootstrap.min.css';
import '../../assetss/css/carrusel-servicio.css';
import {Carousel} from 'react-bootstrap';


function CarruselTaxi() {  
    return (
                <Carousel variant="dark" fade touch >
                    <Carousel.Item interval="4000">
                        <img  className="d-block w-100" class="servicio" src={taxi} alt="Taxis de zona"/>                                          
                        <Carousel.Caption >
                            <h3 className="h3-Slide">Taxis turistas Chile</h3>
                            <p className="p-Slide">Recorre la ciudad con un guía experimentado</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval="4000">
                        <img className="d-block w-100" class="servicio" src={uber} alt="Uber"/>
                        <Carousel.Caption>
                            <h3 className="h3-Slide">Uber</h3>
                            <p className="p-Slide">Pide un aventón a tu medida</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    );
}

export default CarruselTaxi;