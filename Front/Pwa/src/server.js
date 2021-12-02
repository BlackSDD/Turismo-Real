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