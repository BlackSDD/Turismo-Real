import React, { useState } from 'react';
import Modal from './Layouts/modal';
import {Button} from 'react-bootstrap';

const Test= () => {
    
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () =>{
        setIsOpenModal(true);
    }

    return (
        <div>
            <Button onClick={openModal}>
                Open Modal
            </Button>

            <Modal isOpen={isOpenModal}/>
        </div>
    )
}

export default Test;
