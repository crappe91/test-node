//instalamos express con npm i express para mayor comodidad

const express = require("express");
const app = express();
const port = 4000;

//Motor de plantillas (ejs)

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //indicamos donde se van a encontrar las vistas creadas



//MIDDLEWARE (lo colocamos arriba para que cuando accedamos a la pagina principal vaya a public )
app.use(express.static(__dirname + "/public"))

//Middleware Rutas Web
app.use('/', require('./router/rutasWebPokemon'));


//Configuramos un middleware por si no encuentra la pagina que buscamos nos redirija a 404.html
app.use((req,res,next)=>{
    //res.status(404).sendFile(__dirname + "/public/404.html")
    res.status(404).render("404", {
        error404: "404 dinámico",
        descripcion: "Página no encontrada"
    })
})

app.listen(port, () =>{
    console.log("Servidor a su servicio en el puerto ", port)
})


