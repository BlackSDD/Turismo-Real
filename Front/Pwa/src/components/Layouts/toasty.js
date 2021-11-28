import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function toasty(type,message) {
    toast.configure({
    });
    
    let tipo = {type};

    const notifyS = () =>{
        toast.tipo({message},{
            position: toast.POSITION.TOP_CENTER,
            theme: "colored"
        });
    };
    const notifyE = () =>{
        toast.tipo({message},{
            position: toast.POSITION.TOP_CENTER,
            theme: "colored"
        });
    };

    return (
        <div>
            
        </div>
    )
}

export default toasty
