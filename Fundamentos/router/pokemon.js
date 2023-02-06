//base (se usa siempre)
const express= require('express');
const router = express.Router();
const Pokemon = require("../models/pokemon.js")

router.get('/', async (req, res) =>{

    try{
        
        const arrayPokemonDB = await Pokemon.find();
       

        res.render("pokemon.ejs", { //nombre de la vista 
            arrayPokemon: arrayPokemonDB
            
            // arrayPokemon: [
            //     {id: "1", nombre: "pikachu", descripcion: "bueno", accion: "rayo"},
            //     {id: "2", nombre: "charmander", descripcion: "muy bueno", accion: "llamarada"},
            //     {id: "2", nombre: "charmander", descripcion: "muy bueno", accion: "llamarada"},
            //     {id: "2", nombre: "charmander", descripcion: "muy bueno", accion: "llamarada"},
            //     {id: "2", nombre: "charmander", descripcion: "muy bueno", accion: "llamarada"},
            // ]
        })
        console.log(arrayPokemonDB)
        
    }catch (error){
        console.log(error)
    }

    
})




//debemos exportar las rutas (se usa siempre)
module.exports = router;


