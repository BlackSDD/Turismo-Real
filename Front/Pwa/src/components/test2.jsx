import React from 'react';
import {  useParams} from 'react-router-dom';
import { Redirect , useHistory} from "react-router-dom";

function Test2(){


    let history = useHistory();

    function handleClick() {
      history.push("/");
    }
  
    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    );

}

export default Test2