/*
    Estructura de control IF en Javascript
    - Permite ejecutar código solo si sumple una condicón.
    - Puede usarse con operadores de comparación y lógicos.
*/

let edad = 20;
let tieneINE = false;


if( edad >=18 && tieneINE){
    console.log("Tienes los requisitos para votar");
}

if( edad >=18 && tieneINE){
    console.log("Tienes los requisitos para votar");
}else{
    console.log("Uno o más requisitos no se cumplen, verifica tu información");
}

if(edad < 13){
    console.log("Eres un niño")
}else if (edad < 18){
    console.log("Eres un adolescente");
}else{
    console.log("Eres un adulto");
}

let tieneEntrada = false;

if(!tieneEntrada){
    console.log("Debes comprar una entrada");
}

console.log("Fin de la ejecución")

