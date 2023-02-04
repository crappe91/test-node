//base (se usa siempre)
const express= require('express');
const router = express.Router();


//utilizamos router

router.get("/", (req, res)=>{
    //console.log(__dirname) //ACCEDEMOS A LA RUTA EN LA QUE NOS ENCONTRAMOS
    //res.send("Mi respuesta desde express ACABA DE FUNCIONAR 20")
    res.render("index",{titulo: "Mi título dinámico" }) 
})

router.get("/servicios", (req, res)=>{
    //res.send("Estas en la página de servicios")
    res.render("servicios", {tituloServicios: "TituloServicios dinámico"})
})

//devemos exportar las rutas (se usa siempre)

module.exports = router;
