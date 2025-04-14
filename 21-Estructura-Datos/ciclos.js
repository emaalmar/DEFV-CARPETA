const destinos = ["Roma", "Madrid", "Barcelona", "Londres"];
const frutas = ["manzana", "banana", "pera", "kiwi", "uva"];
const numeros = [1, 2, 3, 4, 5];
const usuario = {
    nombre: "Jose",
    edad: 30,
    correo: "test@gmail.com",
    mensaje: "Hola! Soy josss y es un placer conocerte!",
    viajesRealizados: 0
}

for (let i = 0; i < destinos.length; i++) {
    console.log(destinos[i]);
}

for (let destino of destinos) {
    console.log(`"For of arreglos": ${destino}`);
}
setTimeout(() => { }, 5000);

for (let clave in usuario) {
    console.log(`"For in en objetos literalios": ${clave} -> ${usuario[clave]}`);
}

let acumulador = 0;

// destinos.forEach(elemento => {
//     console.log(`"ForEach arreglos": ${elemento}`);
// })
function paraElForEach(elemento) {
    console.log(` para el forEach: ${elemento}`);
}

function acum(elemento) {
    acumulador = acumulador + elemento;
}

destinos.forEach(paraElForEach);
frutas.forEach(paraElForEach);
numeros.forEach(acum);
console.log(`El resultado de la suma es: ${acumulador}`);