import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assetss/css/modal.css';

const Modal = ({isOpen}) => {

    

    return (
        <div className={`modal ${isOpen && 'modal-open'}`}>
            <h1>Soy un modal</h1>
        </div>
    )
}

export default Modal;

