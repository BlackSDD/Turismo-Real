import React from 'react'
import {Toast} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';


function MyNotify({type,title,message}) {
    
    return (
        <div>
            <Toast className="d-inline-block m-1" bg={type}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Bootstrap</strong>
                   {title}
                </Toast.Header>
                <Toast.Body className={'Dark' && 'text-black'}>
                {message}
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default MyNotify
