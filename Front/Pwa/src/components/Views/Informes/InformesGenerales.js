import React from "react";
import { Form } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from "axios";
import '../../../assetss/css/informeGeneral.css';
// import { position, width } from "dom-helpers";
// import { faHandMiddleFinger } from "@fortawesome/free-solid-svg-icons";
///////import PWA
<link rel="manifest" href="../../public/manifest.json"></link>





/////Notificaciones pop

const notifyE = () =>{
    toast.error('Correo y/o contraseña inválidos, asegúrese que las credenciales son correctas');
};

const notifyESuspendida = () =>{
    toast.error('Su cuenta se encuentra suspendidad o aún no se sido activada, comuníquese con nosotros a través de los medios proporcionados al pie de la página');
};

const notifyS = () =>{
    toast.success('Inicio de sesión existoso, Bienvenido(a) Turismo Real');
};

toast.configure({
});
class InformesGenerales extends React.Component{

    state = {
        // agno: null,
        informe: [],
        count: 0
    }

    manejadorChange = async (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    RedirigirRegistrar = () =>{
        this.props.history.push("/UsuarioNew");
    }

    manejadorBoton = async(fecha) =>{
        let x = {
            agno: parseInt(fecha)
        }
        const res = await axios.post("http://localhost:4000/API/informeResGen", x)
        let y = res.data
        this.setState({
            informe: y
        })
        console.log('fecha:', fecha)
        console.log('agno', x)
        console.log('informe',this.state.informe)    
        console.log('res data:', res.data)
        // this.setState({
        //     count:1
        // })
    };
    
    manejadorSubmit(e){
        e.preventDesafult();
        notifyS();
    }

    
    render(){ 

        const {agno} = this.state;
        let x = this.state.count
        const info = this.state.informe
        console.log('info', info)

        if(x === 0){
        return(
                <div id="login-body">
                    <br/>
                    <div className="container" id="login-container">
                        <div className="print-container" id="Informe">
                            <h1 id="title-login">Informe</h1>
                            <Form onSubmit={this.manejadorSubmit}>
                                <Form.Group className="mb-1">
                                    <Form.Label>Año</Form.Label>
                                    <Form.Control className=" row mb-3 mx-auto" type="number" placeholder="Ingrese un año" 
                                        style={{width:'25VH'}}
                                        name="agno"
                                        onChange={this.manejadorChange}
                                    />
                                </Form.Group>
                            </Form>
                            <button type="submit" class="btn btn-primary mb-3 col-4" style={{width:'25VH'}} onClick={()=>this.manejadorBoton(agno)}>VER</button>
                            <button type="submit" class="btn btn-primary mb-3 col-4" style={{width:'25VH'}} onClick={()=>window.print("Informe")}>Imprimir</button>

                            <div >
                            <table class="table-wrapper-scroll-y my-custom-scrollbar"  style={{backgroundColor:'gray', color:'white', fontSize:'12px'}}>
                                                <thead>
                                                    <th style={{width:'25VH'}}>Departamento</th>
                                                    <th style={{width:'25VH'}}>Cliente</th>
                                                    <th style={{width:'25VH'}}>Estado_reserva</th>
                                                    <th style={{width:'25VH'}}>Fecha</th>
                                                </thead>
                                                        
                                {
                                    
                                info.map((data)=>{

                                    return(
                                            <tbody style={{backgroundColor:'white', color:'black', fontSize:'12px'}}>
                                                <tr >
                                                    <td style={{width:'25VH'}}>{data.Departamento}</td>
                                                    <td style={{width:'25VH'}}>{data.Cliente}</td>
                                                    <td style={{width:'25VH'}}>{data.Estado_reserva}</td>
                                                    <td style={{width:'25VH'}}>{data.Fecha}</td>
                                                </tr>
                                            </tbody>                                                                           
                                    )
                                })
                            }
                            </table>
                           
                       
                        </div>
                        </div>                               
                    </div>
                    <br/>
                </div>
            )}
    }
}

// /(3) [{…}, {…}, {…}]
// 0:
// Cliente: "matias fuentes venegas"
// Departamento: "Miraflores 315"
// Estado_reserva: "terminada"
// Fecha: "01/01/2022 - 09/01/2022"

export default InformesGenerales