import React from 'react';
import emailjs from 'emailjs-com';
import { Form} from 'react-bootstrap';


export default function Email() {

    function sendEmail(e) {

      e.preventDefault();
  
      emailjs.sendForm('service_51firgv', 'template_iwcnghr', e.target, 'user_9Qsp9Gb8zB38rcCe7I4Sh')
        .then((result) => {
            console.log(result.text);
            if(!result){
                alert("Su mensaje no se ha podido enviar, por favor intente de nuevo");
            } else{
                alert("Su mensaje ha sido enviado con éxito!");
                e.target.reset();
            }
        }, (error) => {
            console.log(error.text);
        });

    }
  
    return (
        <div>    
                <Form className="contact-form" onSubmit={sendEmail}>
                    <p>¿Tienes alguna duda? envianos un mensaje, te responderemos en breve</p>
                    <Form.Group className="mb-3" controlId="Nombre">
                        <Form.Label>Ingrese su nombre</Form.Label>
                        <Form.Control  name="nombre" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Ingrese su correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="nombre@example.com" name="email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Mensaje">
                        <Form.Label>Ingrese el mensaje a enviar</Form.Label>
                        <Form.Control as="textarea" name="mensaje" rows={2} required/>
                    </Form.Group>
                    
                    <button type="submit" className="btn btn-primary"> Enviar Mensaje</button>
                </Form>
                
        </div>
        
    );
  }