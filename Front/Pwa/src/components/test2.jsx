import React, {useEffect, useState} from 'react';
import {  useHistory} from "react-router-dom";

const Test2 = () =>{


    let history = useHistory();

    function handleClick() {
      history.push("/");
    }
  
    // https://mindicador.cl/api/dolar
    const [valorDolar, setValorDolar] = useState([]);
    const getDolar = async() =>{
        const data = await fetch('https://mindicador.cl/api/dolar')
        const valorD = await data.json()
        setValorDolar(valorD)
    }
    useEffect(()=> {
        getDolar()
    },[])
    console.log({valorDolar})
        

    return (
        <div>
            {
                valorDolar.dolar.map(e =>(
                    <li key={e.fecha}>{e.valor}</li>
                ))
            }
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
        
    );

}

export default Test2