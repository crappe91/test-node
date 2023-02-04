//base (se usa siempre)
const express= require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("pokemon", {
        arrayPokemon: [
            {id: "1", nombre: "pikachu", descripción: "Bueno"},
            {id: "2", nombre: "charmander", descripción: "Regular"},
            {id: "3", nombre: "bulbasaur", descripción: "Perfecto"}
        ]
    })
})

//devemos exportar las rutas (se usa siempre)
module.exports = router;
