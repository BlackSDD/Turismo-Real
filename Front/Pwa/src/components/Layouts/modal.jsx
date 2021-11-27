import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class modal extends Component {

    render() {

        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.onHide({ msg: 'Cross Icon Clicked!' })}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.body}

                        

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.onClick({ msg: 'Modal Closed!' })} >Cancelar</Button>
                        <Button variant="primary" onClick={() => this.props.onClick({ msg: 'Modal Submitted!' })}  >Aceptar</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    };
}

export default modal;