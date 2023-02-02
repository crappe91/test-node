fetch("https://pokeapi.co/api/v2/pokemon/") // fetch se usa para consumir datos de una api
.then((res) => {
return res.json() // transformamos la respuesta a json
})
.then(data => {
    let arrayNombres = [] //introducimos en un array los nombres de los pokemon extraidos de la api

    data.results.forEach(element => {
        arrayNombres.push(element.name)
        
    });
    console.log(arrayNombres)
    console.log (`El pokemon número 3 es: ${arrayNombres[2]}`)
})

//Conociendo async await
const obtenerPokemon = async()=> //await debe de estar siempre dentro de una funcion async
{
try{
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/"); // await: espera la respuesta de fetch
  const data = await res.json();
//   console.log(data.results);
  data.results.map( pokemon => console.log(pokemon)) // hacemos lo mismo que con el forEach de arriba pero en una sola linea
  const arrayNombres = data.results.map( pokemon => (pokemon.name)) // guardamos en un array la propiedad name del objeto pokemon
  console.log(arrayNombres);
}catch (error){
    console.log(error)
}
}

obtenerPokemon()