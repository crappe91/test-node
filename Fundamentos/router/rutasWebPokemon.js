//base (se usa siempre)
const express= require('express');
const router = express.Router();


//utilizamos router

router.get("/", (req, res)=>{
    //console.log(__dirname) //ACCEDEMOS A LA RUTA EN LA QUE NOS ENCONTRAMOS
    //res.send("Mi respuesta desde express ACABA DE FUNCIONAR 20")
    res.render("pokemon") 
})



//devemos exportar las rutas (se usa siempre)

module.exports = router;