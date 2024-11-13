/*
  Crea ejemplos de funciones básicas que representen las diferentes
  posibilidades del lenguaje:
  Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
*/

// Funciones declaradas (Function declarations)
function saludar() {
    console.log('Hola, este es una saludo con funciones declaradas')
}
saludar()

// Funciones expresadas (Function expressions)

const saludarExpresada = function(){
    console.log('Este es un saludo con funciones expresada')
}

saludarExpresada()

// arrow funtion

const suma = (a) => a + 100 // this is to arrow funtion 

suma()
// This is to arrow funtion too
const saludarFlecha = () => {
    console.log('Este es un saludo desde un arrow funtion')
}
saludarFlecha()

// Funciones anónimas (Anonymous functions)

// asignar una funcion anonima a una variable
const saludar2 = function (){
    console.log('Hola!')
}
saludar2()

//usarlar como callbacks
const numeros = [1,2,3,4,5,6,7]
numeros.forEach(function(numero){
    console.log(numero)
})

// funciones arrow anonimas 

const multiplicadrPorDos = (num) => num * 2
console.log(multiplicadrPorDos(4)) // 8

// Funciones de método (Method functions)

//hay dos formas llamemoles forma larga  forma corta

//forma larga
const persona = {
    nombre: "Miguel",
    saludar: function(){
        console.log("Hola soy " + this.nombre + "!")
    }
}
persona.saludar()

//forma corta

const persona2 ={
    nombre: "Gabriel",
    saludar2(){
        console.log("Hola soy " + this.nombre + "!")
    }
}

persona2.saludar2()

// Funciones constructoras (Constructor functions)

// aqui pondre ejemplo de ejemplo uno basico y otro con prototype

// basico
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad

    this.saludar = function(){
        console.log(" Hola, yo soy " + this.nombre + " y tengo " + this.edad + "!")
    }
}

//crear un nuevo ojecto usado la funcion contructora

const juan = new Persona("Juan", 26)
juan.saludar()

const maria = new Persona("Maria", 22)
maria.saludar()

// con prototype

/* Si tienes métodos que no cambian, es mejor agregarlos al prototipo de la función constructora, ya que así no se duplican en cada instancia creada. */

function Persona2(nombre, edad){
    this.nombre = nombre
    this.edad = edad

    Persona2.prototype.saludar2 = function(){
        console.log("Hola, soy " + this.nombre + "Y tengo " + this.edad + " !")
    }
}
const sebastian = new Persona2("Sabastian", 30)
const cristina = new Persona2("Cristina", 24)

sebastian.saludar2()
cristina.saludar2()

// Funciones generadoras (Generator functions)

// Basico
function* contador(){
    yield 1
    yield 2
    yield 3
}

const generador = contador()

console.log(generador.next().value) // 1
console.log(generador.next().value) // 2
console.log(generador.next().value) // 3
console.log(generador.next().done) // true (Ya no quedan valores)

// Ej: de una funcion generadora con buble
/*
function* generadorSecuencia(){
    let i = 1;
    while(true){
        yield 1++
    }
}

const secuencia = generadorSecuencia();

console.log(secuencia.next().value) // 1
console.log(secuencia.next().value) // 2
console.log(secuencia.next().value) // 3
*/

// Funciones asíncronas (Async functions)

// Este codigo simula una api
function obtenerDatos(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("Datos Obtenidos")
        },2000)
    })
}

// Funcion asincrona

async function mostrarDatos() {
    console.log("Esperado datos...")
    const datos = await obtenerDatos() // Pausa aquí hasta que se resuelva la promesa
    console.log(datos) // Datos obtenidos 
}

mostrarDatos()

// otro ejemplo
async function obtenerDatos() {
    const respuesta = await fetch('https://valorant-api.com/v1/agents');
    const datos = await respuesta.json();
    console.log(datos);
  }
  obtenerDatos();

  // variable local y global

  var global =20
  function func(){
    var local = 10
    console.log(local , global)
  }
func()

// funtiones anidadas 

function outerFuntion(){
    console.log(" Soy la funcion exterior")
    function innerFuntion(){
        console.log(" Soy la funcion interior")
    }
    // Llamado a la funcion interior dentre de la funcion exterior
    innerFuntion()
}
// llamador a la funcion exterior 
outerFuntion()



/*Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.

 Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
*/

const ejercicioExtra = (text1 , text2) =>{
   let contador = 0
for(let n = 1; n <= 100 ; n++){
    if(n % 3 === 0 ){
        console.log(text1)
    }else if(n % 5 === 0){
        console.log(text2)
    }else if(n % 3 === 0 && n % 5 === 0){
        console.log(text1, text2)
    }else{
        console.log(n)
        contador++
    }
}
return contador
}
const result = ejercicioExtra("num1", "num2")

console.log( "El total de numero es " + result)