const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    nombre: "String",
    tipo: "String",
    descripcion: "String"
});

//Creamos el modelo
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;

