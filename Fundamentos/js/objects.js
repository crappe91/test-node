//EJEMPLO OBJETOS 1
console.log("Ejemplo Objetos 1")

const mascota = {
    nombre: "Tom",
    edad: 10,
    color: "negro",
    vivo: true,
    razas: ["peludo", "sin nariz"]
}

console.log(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.color)
console.log(mascota.vivo)

//añadimos un nuevo valor al objeto

mascota.id=1

console.log(mascota)
console.log(mascota.id)

//añadimos el array razas
console.log(mascota.razas)
console.log(mascota.razas[1]) //accedemos al indice del array

//EJEMPLO OBJETOS 2
console.log("Ejemplo Objetos 2")

const coche ={
    marca: "Opel",
    modelo: "Corsa",
    kilometros: 200
}

console.log(coche)

const marcaCoche = coche.marca // podriamos acceder a la marca guardandola en una variable
console.log(marcaCoche)

const {marca, nombre} = coche // otra forma de acceder a la marca
console.log(marca)


//EJEMPLO OBJETOS 3
console.log("Ejemplo Objetos 3")

const web ={
    nombre: "google",
    links: {
        enlace: "www.google.es"
    },
    redesSociales: {
        youtube: {
            enlace: "www.youtube.com",
            nombree: "youtube"
        },
        facebook: {
            enlace: "www.fb.com",
            nombree: "faceBook"
        }
    }
}

console.log(web.redesSociales.youtube.enlace)
console.log(web.redesSociales.facebook.enlace)

const enlaceYouTube = web.redesSociales.youtube.enlace
console.log(enlaceYouTube)

//destructuring (accedemos a la parte del objeto que queremos destruyendolo y quedandonos solo en este caso con youtube)

const {enlace,nombree} = web.redesSociales.youtube //queremos acceder a enlace y nombre dentro de (web.redesSociales.youtube)

console.log(enlace)
console.log(nombree)

