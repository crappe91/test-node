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

//CONFIGURACIÓN DE MIDDLEWARE (lo colocamos arriba para que cuando accedamos a la pagina principal vaya a public )
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=>{
    //console.log(__dirname) //ACCEDEMOS A LA RUTA EN LA QUE NOS ENCONTRAMOS
    res.send("Mi respuesta desde express ACABA DE FUNCIONAR 45")
})

app.get("/servicios", (req, res)=>{
    res.send("Estas en la página de servicios")
})



app.listen(port, ()=>{
    console.log("Servidor a su servicio en el puerto ", port)
})

//Min video 13.15

//NO PUEDO UTILIZAR NODEMON COMPROBAR , MIN VID 4.41 (https://www.youtube.com/watch?v=VmH4tPbbDsM&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6&index=7)