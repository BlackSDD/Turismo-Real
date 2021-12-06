import React from 'react'
import '../assetss/css/home.css';
import Carrusel from './Layouts/Carrusel';
import CarruselTours from './Layouts/carrusel-tours';
import CarruselTaxi from './Layouts/carrusel-taxi';
import Navbar from '../components/Layouts/Navbar.jsx'
<link rel="manifest" href="../../public/manifest.json"></link>

//Forma de llamar a datos de sesion storage
let email = sessionStorage.correo
let tipo = sessionStorage.tipoUsr

if ( !tipo ){sessionStorage.tipoUsr = 0}

console.log('El correo es ' + email)
console.log('El tipo es ' + sessionStorage.tipoUsr)

const Landing = () => {
    return (
        <div className="col-md" id="homdeDiv">
        <Navbar/>
            <div id="carrusel1" >
                <Carrusel/>
            </div>
            <div id="home-body">
                <div id="homeContainer" >
                    <h1 id="title-home-about">Sobre Turismo Real...</h1>
                    <div className="row" id="row-home">
                        <h2 id="desc-home-about">
                        Somos una empresa familiar con ya 10 años en el mercado, dedicada a entregar el mejor servicio de arriendo de departamentos, de los cuales nosotros mismos
                        somos propietarios, por lo que no tendrás problemas de intermediarios o gestión, ademár de recibir un trato cálido y gentil a lo largo de toda tu estadía.
                        </h2>
                    </div>
                    <div className="row"  id="row2">
                    <h2 id="title-home-services">
                    También disponemos de convenios con otros servicios en las diferentes zonas turísticas del país, para que nuestros clientes más leales puedan
                    disfrutar al máximo su experiencia.
                    </h2>
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
                    <div className="row" id="row-home">
                        <h2>Actualmente contamos con 10 departamentos ubicados en zonas de alto interés turístico, cada uno de ellos acondicionados con 
                            un alto estándar de calidad, tal como tú mereces</h2>
                        <div id="list">
                            <ul id="ul-home">
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

export default Landing
