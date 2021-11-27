import React from 'react'
import '../assetss/css/home.css';
import Carrusel from './Layouts/Carrusel';
import CarruselTours from './Layouts/carrusel-tours';
import CarruselTaxi from './Layouts/carrusel-taxi';

const MainAdmin = () => {
    return (
        <div className="col-sm" id="homdeDiv">
            <div id="carrusel1" >
                <Carrusel/>
            </div>

            <div id="home-body">
                <div id="homeContainer" >
                    <h1 id="titleSobre">Sobre Turismo Real...</h1>
                    <div className="row">
                        <h3>
                        Somos una empresa familiar con ya 10 años en el mercado, dedicada a entregar el mejor servicio de arriendo de departamentos, de los cuales nosotros mismos
                        somos propietarios, por lo que no tendrás problemas de intermediarios o gestión, además de recibir un trato cálido y gentil a lo largo de toda tu estadía.
                        </h3>
                    </div>
                    <div className="row"  id="row2">
                    <h1 id="titleServices">
                    También disponemos de convenios con otros servicios en las diferentes zonas turísticas del país, para que nuestros clientes más leales puedan
                    disfrutar al máximo su experiencia.
                    </h1>
                        <div className="col-sm">
                            <h4>Llega a donde tu quieras con transporte las 24 horas</h4>
                            <div id="carruselS">
                                <CarruselTaxi/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <h4>Diviertete y Conoce más con nuestros convenios de Tours</h4>
                            <div id="carruselS">
                                <CarruselTours/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h2>Actualmente contamos con 10 departamentos ubicados en zonas de alto interés turístico, cada uno de ellos acondicionados con 
                            un alto estándar de calidad, tal como tú mereces</h2>
                        <div id="list">
                            <ul id="ulComunas">
                                <li>La Serena</li>
                                <li>Pucón</li>
                                <li>Puerto Varas</li>
                                <li>Viña del Mar</li>
                                <li>Y más...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAdmin