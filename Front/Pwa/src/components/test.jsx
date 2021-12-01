import React, {  Component } from 'react';
import PaypalCheckout from './Layouts/PaypalCheckout';
import axios from 'axios';


export default class Test extends Component{

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

            <button onClick="window.print">
                Boton
            </button>
            </div>
        )
    }
}

