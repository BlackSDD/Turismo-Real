import React from 'react';
import tourPuertoVaras from "../../assetss/img/tourPuertoVaras.jpg";
import tourTololo from "../../assetss/img/tourTololo.jpg";
import tourViña from "../../assetss/img/tourVina.jpg";
import tourVillarica from "../../assetss/img/tourVillarica.jpeg";
import '../../assetss/css/bootstrap.min.css';
import '../../assetss/css/carrusel-servicio.css';
import {Carousel} from 'react-bootstrap';


function CarruselTours() {  
    return (
                <Carousel variant="dark" fade touch >
                    <Carousel.Item interval="3000">
                        <img  className="d-block w-100" id="servicio" src={tourPuertoVaras} alt="Tour en bote por Puerto Varas"/>                                          
                        <Carousel.Caption >
                            <h3 className="h3-Slide">Tour en bote por Puerto Varas</h3>
                            <p className="p-Slide">Disfruta de un agradable viaje por las aguas calmas acompañado de un almuerzo o cena</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval="3000">
                        <img className="d-block w-100" id="servicio" src={tourTololo} alt="Tour astrológico al observatorio cerro Tololo"/>
                        <Carousel.Caption>
                            <h3 className="h3-Slide">Tour astrológico al observatorio cerro Tololo</h3>
                            <p className="p-Slide">Conoce que nos rodea más allá del sol y la luna</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval="3000">
                        <img className="d-block w-100" id="servicio" src={tourVillarica} alt="Tour expedición al volcán Villarica"/>
                        <Carousel.Caption>
                            <h3 className="h3-Slide">Tour expedición al volcán Villarica</h3>
                            <p className="p-Slide">Vive la aventura a más de 2000 mts de altura con vistas innolvidables</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval="3000">
                        <img className="d-block w-100" id="servicio" src={tourViña} alt="Tour por la ciudad de viña del Mar"/>
                        <Carousel.Caption>
                            <h3 className="h3-Slide">Tour por la ciudad de Viña del Mar</h3>
                            <p className="p-Slide">Recorre la ciudad jardín por los lugares más emblemáticos de la ciudad</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    );
}

export default CarruselTours;