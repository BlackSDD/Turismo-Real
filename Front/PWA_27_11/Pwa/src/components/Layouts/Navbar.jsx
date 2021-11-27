import React, {Component} from 'react';
import '../../assetss/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    render() {
        return (
            <Navbar id="navbar" bg="dark" variant="dark" sticky="top" expand="lg" >
      
                <Navbar.Brand>
                            <FontAwesomeIcon icon={faBuilding} /> {' '} 
                            Turismo Real APP 
                </Navbar.Brand>

                <Navbar.Toggle/>

                <Navbar.Collapse>

                    <Nav>
                        <Nav.Link href="/"> Home </Nav.Link> 
                        <Nav.Link href="/login"> Acceder </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
        
            </Navbar>
        )
    }
}

export default NavBar;