let frutas = ["Manzanas"]
let otrasFrutas = ["Uva", "Aguacate"]

//.push() -> Agrega un elemento al FINAL del arreglo
frutas.push("Pera")
frutas.push("Guayaba")
frutas.push(otrasFrutas) //-> length = 4 porque agrega todo el arreglo completo en la ultma posicion
console.log("Despues de push", frutas);

//.pop() -> Elimina el Ultimo elemento del arreglo
console.log(frutas.pop());
console.log("Despues de pop", frutas);

//.unshift() ->
frutas.unshift("Melon")
console.log("Despues de unshift", frutas);

//.shift() -> 
console.log(frutas.shift());
console.log("Despues de shift", frutas);



//Ejemplo 1 : Multiplicamos cada elemento (item) del arreglo por dos

let numeros = [1,2,3]

let numerosPorDos = numeros.map( (numero) => numero * 2 )

console.log("Numeros multiplicados por 2", numerosPorDos);

//Ejemplo2: Convertir cada fruta en mayusculas

let frutasEnMayusculas = frutas.map((frutas) => frutas.toUpperCase())
console.log("Frutas en mayuscula", frutasEnMayusculas);

"Cadena".toLowerCase()

let frutasEnMinisculas = frutas.map((frutas) => frutas.toLowerCase())
console.log("Ejercicio 1.2", frutasEnMinisculas);


let verduras = ["Espinaca", "Zanahoria", "Calabaza"]

console.log(verduras.sort());

//.sort() numeros -> IMPORTANTE