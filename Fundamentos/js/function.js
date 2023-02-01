//EJEMPLO 1
console.log("EJEMPLO 1")
function sumar(num){
    console.log(num)
}

sumar(10) // al pasarle el num a la funcion por parametros accede a  la funcion y lo pinta en consola


//EJEMPLO 2
console.log("EJEMPLO 2")
const sumarDos =(num1, num2)=>{
    console.log(num1 + num2)
}

sumarDos(20,30)

//EJEMPLO 3
console.log("EJEMPLO 3")

const sumar3 =(num1, num2)=>{
    return (num1 + num2) //utilizaremos return para devolver el resultado
}

const resultado = sumar3 (50, 50)
console.log(resultado)

//EJEMPLO 4
console.log("EJEMPLO 4")

const mensaje = () => {
    return "Hola soy Drupalero"
}

const resultadoDos = mensaje()
console.log(resultadoDos)

//EJEMPLO 5 (otra forma de realizar ejemplo 4)
console.log("EJEMPLO 5")

const mensaje2 = nombre => { // al ser un solo parametro no necesitamos parentesis
    return "Hola soy "+nombre
}

const resultadoTres = mensaje2("Drupalero")
console.log(resultadoTres)


//EJEMPLO 6 (otra forma de realizar ejemplo 4,5)
console.log("EJEMPLO 6")

const mensaje3 = nombre =>  "Hola soy " + nombre //quitamos llaves y parentesis


const resultadoCuatro = mensaje3("Drupalero")
console.log(resultadoCuatro)

//EJEMPLO 7
console.log("EJEMPLO 7")

const sumaTres =(num = 0) => {//si igualamos la variable a cualquier valor tomará este por defecto si no le pasa parametros a la funcion
    console.log(num+3) // le sumamos 3 al numero pasado por parametros
}

sumaTres(9)
sumaTres() //devolverá 3 al tomar como valor pasado por parametros el 0

sumaTres(10) // sin embargo aunque este igualado el valor a 0, si le pasamos cualquier parametro toma este como valor


//EJEMPLO 8
console.log("EJEMPLO 8")

const numero=(num)=>{
    return "el numero es: "+ num
}

const resultadoCinco= numero(10)
console.log(resultadoCinco)

//EJEMPLO 9
console.log("EJEMPLO 9")

const numero9=(num)=>{
    return `el numero es: ${num}`
}

const resultadoNueve= numero9(15)
console.log(resultadoNueve)

//EJEMPLO 10
console.log("EJEMPLO 10")

const numero10=(num1, num2)=>{
    return `el numero es: ${num1+num2}`
}

const resultadoDiez = numero10(15,20)
console.log(resultadoDiez)