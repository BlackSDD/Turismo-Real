import React from 'react';
import '../../assetss/css/footer.css';
import '../../assetss/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import depto1 from '../../assetss/img/depto1.jpg';
import depto2 from '../../assetss/img/depto2.jpg';
import depto3 from '../../assetss/img/depto3.jpg';
import depto4 from '../../assetss/img/depto4.jpg';
// import {faAccessibleIcon} from '@fortawesome/free-brands-svg-icons';
import {faUser, faPhoneAlt, faAt} from '@fortawesome/free-solid-svg-icons';
import Email from './Email';
import {Image} from 'react-bootstrap';

function Footer() {
    return (
        <div className="main-footer">
            <div className="container sm" id="container-footer">
                <div className="row" id="row-footer">
                    <div className="col-sm-3">
                        <h4 className="text-center">Contactanos</h4>
                        <Email/>
                    </div>
                    <div className="col-sm-3" id="equipo">              
                        <h4 className="text-center">Nuestro Equipo</h4>  
                        <div className="container">
                            <div className="col-sm" id="equipo">
                                <ul id="ul-footer-equipo">
                                    <li><FontAwesomeIcon icon={faUser} color="white" /> Cristian Prieto</li>
                                    <li><FontAwesomeIcon icon={faPhoneAlt} color="white" /> + 569 2050 3942</li>
                                    <li><FontAwesomeIcon icon={faAt} color="white"/> cristian.prieto@gmail.com</li>
                                </ul>
                                <ul id="ul-footer-equipo">
                                    <li><FontAwesomeIcon icon={faUser} color="white" /> Matías Fuentes</li>
                                    <li><FontAwesomeIcon icon={faPhoneAlt} color="white" /> + 569 4882 1386</li>
                                    <li><FontAwesomeIcon icon={faAt} color="white"/> matias76097795@gmail.com</li>
                                </ul>
                                <ul id="ul-footer-equipo">
                                    <li><FontAwesomeIcon icon={faUser} color="white" /> Eugenio Echeverria</li>
                                    <li><FontAwesomeIcon icon={faPhoneAlt} color="white" /> + 569 8751 5486</li>
                                    <li><FontAwesomeIcon icon={faAt} color="white"/> TurismoReal.CEO@gmail.com</li>
                                </ul>
                            </div>
                        </div>                        
                    </div> 
                    <div className="col-sm-3">
                        <h4 className="text-center">Links de interés</h4>
                        <ul id="ul-footer-links">
                            <li><a  href="/departamento" id="a-footer">Ver Departamentos</a></li>
                            <li><a id="a-footer">Ver Convenios</a></li>
                            <li><a id="a-footer">Consultar reservas</a></li>
                            {/* <li class="menuitem"><a href="index.php"><div class="menulink">Lnk1</div></a></li> */}
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="text-center">Top departamentos</h4>
                        <div className="row">
                            <div className="col-sm">
                                <a href=""><Image rounded id="image-footer" fluid src={depto1} class="img-footer" alt="Escapada en parejas"></Image></a>
                            </div>
                            <div className="col-sm">
                                <a href=""><Image rounded id="image-footer" fluid src={depto2} alt="Departamento de lujo Viña"></Image></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <a href=""><Image  rounded id="image-footer" fluid src={depto3} alt="Departamento con vista al volcán villarica"></Image></a>
                            </div>
                            <div className="col-sm">
                                <a href=""><Image rounded id="image-footer" fluid src={depto4} alt="Departamento "></Image></a>
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