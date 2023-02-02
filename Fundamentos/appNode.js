//PRIMER PASO

// const http = require ("http");
// const server = http.createServer ((req, res)=>{ //creamos el servidor, es una funcion de http anterior
//     res.end("Estoy respondiendo a tu solicitud 1")
// })

// const puerto = 3000; //tenemos que crear un puerto para que funcione

// server.listen(puerto,()=>{
//     console.log("Escuchando solicitudes")
// })

//instalamos nodemon con npm install -g nodemon (para mantener la pagina actualizada sin tener que reiniciar el servidor)

//SEGUNDO PASO

//instalamos express con npm i express para mayor comodidad

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Mi respuesta desde express")
})

app.listen(port, ()=>{
    console.log("Servidor a su servicio en el puerto ", port)
})

//NO PUEDO UTILIZAR NODEMON COMPROBAR , MIN VID 4.41 (https://www.youtube.com/watch?v=VmH4tPbbDsM&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6&index=7)