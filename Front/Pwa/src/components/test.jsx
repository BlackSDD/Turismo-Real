import React, { useState, Component } from 'react';
// import Modal from './Layouts/modal';
// import {Button} from 'react-bootstrap';
// import useModal from './hook/useModal';
import MyNotify from './Layouts/mynotify';
import PaypalCheckout from './Layouts/PaypalCheckout';
import axios from 'axios';


export default class Test extends Component{

    // const [isOpenLoginModal, openLoginModal ,closeLoginModal ] = useModal();
    state = {
        valor: []
    }


    async componentDidMount() {
        this.getMontoPago(1);
    }

    getMontoPago = async (id) =>{
        const res = await axios.get('http://localhost:4000/API/pago/montoPago/' + id)
        console.log(res)
        this.setState({
            valor: res.data
        })
    }

    getReserva = async () =>{
        const x = 0;

    }
 
    render(){
        return (
            <div>
                {/* <Button onClick={openLoginModal}>
                    Open Modal
                </Button>

                <Modal
                    isOpen={isOpenLoginModal} 
                    closeModal={closeLoginModal}
                    title="soy un Modal"
                >
                    <form>
                    <input 
                        type="email"
                        placeholder="Correo"
                    />
                    <input 
                        type="password"
                        placeholder="Contraseña"
                    />
                    </form>
                </Modal> */}
                <MyNotify
                    type={'success'} 
                    title= {'Operación realizada con éxito'}
                    message="Soy un Toast"
                />
                {
                    this.state.valor.map(mont => (
                        <div key={mont.id}>
                        <PaypalCheckout
                            precio = {mont.Pago}
                            id_rva = {1}
                        />
                        </div>
                    ))
                }

            <button 
            
            >
                Boton
            </button>
                

            </div>
        )
    }
}

