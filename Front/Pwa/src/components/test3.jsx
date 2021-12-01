import React from 'react'
import Modal from './Layouts/modal';
import {Button} from 'react-bootstrap';
import UseModal from './hook/useModal';
import axios from 'axios';

function test3() {

    const [isOpenLoginModal, openLoginModal ,closeLoginModal ] = UseModal();


    return (
        <div>
            <Button onClick={openLoginModal}>
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
                </Modal>

                
        </div>
    )
}

export default test3
