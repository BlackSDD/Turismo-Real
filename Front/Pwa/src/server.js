const { request } = require('express');
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    console.log("dasdasdas")
    res.sendFile(__dirname + "/src/index.js");
})

app.post("/files", (req,res) =>{

})

app.listen(3000,() => console.log("Multer iniciado"));


app.post('/api/consultation', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        
        let mailerConfig = {    
            host: "smtpout.secureserver.net",  
            secure: true,
            secureConnection: false, // TLS requires secureConnection to be false
            tls: {
                ciphers:'SSLv3'
            },
            requireTLS:true,
            port: 465,
            debug: true,
            auth: {
                user: "turismoreal.portafolio2021@gmail.com",
                pass: "tlyqeqtymwutxpnx"
            }
        };
        let transporter = nodemailer.createTransport(mailerConfig);
        let email = sessionStorage.correo
        let mailOptions = {
            from: 'turismoreal.portafolio2021@gmail.com',
            to: email,
            subject: 'Some Subject',
            html: 'prueba'
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (error) {
                console.log('error:', err);
            } else {
                console.log('Message sent: %s', info.content);
                console.log('Message URL: %s', nodemailer.getTestMessageUrl);
            }
        });
    })
})