// const frutas = ["platano", "manzana", "platano", "pera"]; LA UTILIZAREMOS DESDE FRTUAS.JS

//Importamos frutas.js

// const frutero = require("./frutas")

//PARA IMPORTAR TANTO FRUTAS COMO DINERO HAREMOS LO SIGUIENTE

const {frutas,dinero} = require("./frutas");



// el siguiente forEach pintará en consola los elementos dentro de fruta

frutas.forEach(item => {
    console.count(item)
})

console.log(dinero);

//EJEMPLO COWSAY QUE INSTALAMOS DE FORMA LOCAL (VER EN PACKAGE.JSON DEPENDENCIAS)

const cowsay = require ("cowsay");

console.log(cowsay.say({
    text : "Hola drupaleros",
    e : "oO",
    T : "UU "
}));