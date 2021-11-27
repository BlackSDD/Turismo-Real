import React from 'react';
import '../../assetss/css/footer.css';
import '../../assetss/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faAccessibleIcon} from '@fortawesome/free-brands-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Email from './Email';


function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
            <div className="row" id="row-footer">
                <div className="col-4">
                <h4 className="text-center">Contactanos</h4>
                    <Email/>
                </div>
                    <div className="col-8" id="equipo">              
                        <h4 className="text-center">Nuestro Equipo</h4>  
                        <div className="container">
                            <div className="row" id="icono">
                                <div className="col">
                                    <h5 className="text-center">Nombre</h5> 
                                    <p><FontAwesomeIcon icon={faUser} color="white" /> Cristian Prieto</p>
                                </div>
                                <div className="col">
                                    <h5 className="text-center">Correo</h5> 
                                    <p>cristian.prieto@gmail.com</p>
                                </div>
                                <div className="col">
                                    <h5 className="text-center">Teléfono</h5>     
                                    <p>+569 2050 3942</p>
                                </div>
                            </div>
                            <div className="row" id="icono">
                                <div className="col">
                                    <p><FontAwesomeIcon icon={faUser} color="white" /> Matias Fuentes</p>
                                </div>
                                <div className="col">
                                    <p>mati.fuentes@duocuc.cl</p>
                                </div>
                                <div className="col">
                                    <p>+569 4882 1386</p>
                                </div>
                            </div>
                            <div className="row" id="icono">
                                <div className="col">
                                    <p><FontAwesomeIcon icon={faUser} color="white"  /> Jesús Aguayo</p>
                                </div>
                                <div className="col">
                                    <p>jesus.aguayo.06@gmail.com</p>
                                </div>
                                <div className="col">
                                    <p>+569 7575 9027</p>
                                </div>
                            </div>
                            <div className="row" id="icono">
                                <div className="col">
                                    <p><FontAwesomeIcon icon={faUser} color="white"/> Mario Serrano</p>
                                </div>
                                <div className="col">
                                    <p>marioserrano.c@gmail.com</p>
                                </div> 
                                <div className="col">
                                    <p>+569 5234 6288</p>
                                </div>
                            </div>
                        </div>                        
                    </div> 
                </div>
            </div>
            
            <hr></hr>
            <div className="footer-bottom">
                <p className="text-center"> &copy; {new Date().getFullYear()} Turismo Real App</p>
            </div>
        </div>
    )
}

export default Footer;
