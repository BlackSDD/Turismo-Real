import React, { useState } from 'react';
import Modal from './Layouts/modal';
import {Button} from 'react-bootstrap';
import useModal from './hook/useModal';

const Test= () => {
    
    const [isOpenLoginModal, openLoginModal ,closeLoginModal ] = useModal();
    
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

export default Test;
