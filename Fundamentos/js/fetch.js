//fetch

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

//Conociendo async await

