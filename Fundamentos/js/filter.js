console.log("USANDO FILTER")
const obtenerPokemon = async()=> //await debe de estar siempre dentro de una funcion async
{
try{
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/"); // await: espera la respuesta de fetch
  const data = await res.json();
//   console.log(data.results);
  const arrayNombres = data.results.filter( pokemon => pokemon.name === "bulbasaur") // guardamos en un array la propiedad name del objeto pokemon
  console.log(arrayNombres);

  const arrayNombres2 = data.results.filter( pokemon => pokemon.name !== "bulbasaur") // filtramos todo lo que no sea igual a bulbasaur
  console.log(arrayNombres2);
}catch (error){
    console.log(error)
}
}

obtenerPokemon()