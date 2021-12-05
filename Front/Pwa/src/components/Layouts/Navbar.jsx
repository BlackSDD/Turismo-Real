import React, { Component } from "react";
import "../../assetss/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>



export default class NavBar extends Component {
  salir() {
    let x = 0;
    sessionStorage.Login = x;
    sessionStorage.correo = x;
    sessionStorage.idUsuario = x;
    sessionStorage.tipoUsr = x;
    window.location.shref = "/";
  }

  render() {
    const login = sessionStorage.Login;
    // const tipo_usr = sessionStorage.tipoUsr;

    if (login ==1) {
        return (
          <Navbar id="navbar" bg="dark" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand>
              <FontAwesomeIcon icon={faBuilding} /> Turismo Real APP
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/listarDepto"> Ver departamentos </Nav.Link>
                <Nav.Link href="/ContratarServ"> Contratar Servicio Extra </Nav.Link>
                <Nav.Link onClick={this.salir} href="/">Salir</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }else {
      return (
        <Navbar id="navbar" bg="dark" variant="dark" sticky="top" expand="lg">
          <Navbar.Brand>
            <FontAwesomeIcon icon={faBuilding} /> Turismo Real APP
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/listarDepto"> Ver departamentos </Nav.Link>
              <Nav.Link href="/login"> Acceder </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}