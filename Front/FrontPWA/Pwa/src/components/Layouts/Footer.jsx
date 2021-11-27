import React from 'react';
import '../../assetss/css/footer.css';
import '../../assetss/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faAccessibleIcon} from '@fortawesome/free-brands-svg-icons';
import {faUser, faPhoneAlt, faAt} from '@fortawesome/free-solid-svg-icons';
import Email from './Email';


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
                                    <li><FontAwesomeIcon icon={faUser} color="white" /> Cristian Prieto</li>
                                    <li><FontAwesomeIcon icon={faPhoneAlt} color="white" /> + 569 2050 3942</li>
                                    <li><FontAwesomeIcon icon={faAt} color="white"/> cristian.prieto@gmail.com</li>
                                </ul>
                                <ul id="ul-footer-equipo">
                                    <li><FontAwesomeIcon icon={faUser} color="white" /> Cristian Prieto</li>
                                    <li><FontAwesomeIcon icon={faPhoneAlt} color="white" /> + 569 2050 3942</li>
                                    <li><FontAwesomeIcon icon={faAt} color="white"/> cristian.prieto@gmail.com</li>
                                </ul>
                            </div>
                        </div>                        
                    </div> 
                    <div className="col-sm-3">
                        <h4 className="text-center">Links de interés</h4>
                        <ul id="ul-footer-links">
                            <li><a  href="/departamento">Ver Departamentos</a></li>
                            <li><a id="a-footer">Ver Convenios</a></li>
                            <li><a id="a-footer">Consultar reservas</a></li>
                            {/* <li class="menuitem"><a href="index.php"><div class="menulink">Lnk1</div></a></li> */}
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="text-center">Top departamentos</h4>
                        <ul id="ul-footer-links">
                            <li><a  href="/departamento">Ver Departamentos</a></li>
                            <li><a id="a-footer">Ver Convenios</a></li>
                            <li><a id="a-footer">Consultar reservas</a></li>
                            {/* <li class="menuitem"><a href="index.php"><div class="menulink">Lnk1</div></a></li> */}
                        </ul>
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
