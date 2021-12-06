import React, { Component } from "react";
import "../../assetss/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>



export default class NavBarAdmin extends Component {
  salir() {
    let x = 0;
    sessionStorage.Login = x;
    sessionStorage.correo = x;
    sessionStorage.tipoUsr = x;
    sessionStorage.idUsuario = x;
    window.location.shref = "/";
  }
  render() {
    // const login = sessionStorage.Login;
    let login = sessionStorage.Login;
    let tipo = parseInt(sessionStorage.tipoUsr)
    if(tipo != 1){
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

    } else
          return (
            <Navbar id="navbar" bg="dark" variant="dark" sticky="top" expand="lg">
              <Navbar.Brand>
                <FontAwesomeIcon icon={faBuilding} /> Turismo Real APP
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link href="/MainFuncionario"> Inicio Funcionario </Nav.Link>
                  <Nav.Link href="/checkin"> Ingresar Check-in </Nav.Link>
                  <Nav.Link href="/checkout"> Ingresar Checkout </Nav.Link>
                  <Nav.Link onClick={this.salir} href="/">Salir</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          );}
         
}