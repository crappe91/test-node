//fetch
console.log("FETCH")

fetch("https://pokeapi.co/api/v2/pokemon/") // fetch se usa para consumir datos de una api
.then((res) => {
return res.json() // transformamos la respuesta a json
})
//.then( res => res.json()) // PODRIAMOS CONVERTIR LA FUNCION DE ARRIBA ASI
.then(data => {
    console.log(data.results)
    data.results.forEach(element => {
        console.log(element)
        //console.log(element.name)
        //console.log(element.url)
    });
})

.catch(error => console.log(error)) 

console.log("ASYNC, AWAIT")
//Conociendo async await
const obtenerPokemon = async()=> //await debe de estar siempre dentro de una funcion async
{
try{
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/"); // await: espera la respuesta de fetch
  const data = await res.json();
  console.log(data.results);
}catch (error){
    console.log(error)
}
}

obtenerPokemon()