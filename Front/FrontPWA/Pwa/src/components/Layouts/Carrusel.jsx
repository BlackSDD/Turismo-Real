import React from 'react';
import villarica from "../../assetss/img/villarica.jpg";
import laSerena from "../../assetss/img/laSerena.jpg";
import costaQuilen from "../../assetss/img/costaQuilen.jpg";
import '../../assetss/css/bootstrap.min.css';
import '../../assetss/css/Carrusel.css';
import {Carousel} from 'react-bootstrap';


function Carrusel() {  
    return (
        <div id="div-carrusel">
            <div id="Carrusel">
                <Carousel variant="dark" fade touch >
                    <Carousel.Item interval="3000">
                        <img  className="d-block w-100" src={costaQuilen} alt="Imagen 1"/>                                          
                        <Carousel.Caption >
                            <h3 className="h3-Slide">Condominio Costa Quilen 5ta Región</h3>
                            <p className="p-Slide">Descripción Breve</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval="3000">
                        <img className="d-block w-100" src={villarica} alt="Imagen 2"/>
                        <Carousel.Caption>
                            <h3 className="h3-Slide">Departamentos Villarica</h3>
                            <p className="p-Slide">Descripción Breve</p>
                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item interval="3000">
                        <img className="d-block w-100" src={laSerena} alt="Imagen 3"/>
                        <Carousel.Caption>
                            <h3 className="h3-Slide">Condominio en La Serena</h3>
                            <p className="p-Slide">Descripción Breve</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>        
        </div>
    );
}

export default Carrusel;