import React, { Component } from "react";
import "../../assetss/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";




export default class NavBarAdmin extends Component {
  salir() {
    let x = 0;
    sessionStorage.Login = x;
    window.location.shref = "/";
  }
  render() {
    // const login = sessionStorage.Login;
    const tipo_usr = sessionStorage.tipoUsr;
        if(tipo_usr==2){
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
          else{
            return (
              <Navbar id="navbar" bg="dark" variant="dark" sticky="top" expand="lg">
                <Navbar.Brand>
                  <FontAwesomeIcon icon={faBuilding} /> Turismo Real APP
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Nav>
                    <Nav.Link href="/Admin"> Home </Nav.Link>
                    <Nav.Link href="/DeptosMant"> Mantenciones  </Nav.Link>
                    <Nav.Link onClick={this.salir} href="/">Salir</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            );}
  }
}