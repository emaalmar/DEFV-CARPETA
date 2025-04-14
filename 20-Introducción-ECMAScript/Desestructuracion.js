const destinos = ["Roma", "Madrid", "Barcelona", "Londres"];

const [primero, segundo] = destinos; // Desestructuración de arreglos

console.log(primero); // Roma
// console.log(destinos[0]); // Roma
console.log(segundo); // Madrid

const [, , tercer] = destinos; // Desestructuración de arreglos con el operador rest
console.log(tercer); // Barcelona

const [primeroDestino, ...restoDestinos] = destinos; // Desestructuración de arreglos con el operador rest
// console.log(primeroDestino); // Roma
console.log(restoDestinos); // [ 'Madrid', 'Barcelona', 'Londres' ]

const viaje = {
    destino: "Londres",
    duración: 300,
    precio: 1200
}

const { destino, duración } = viaje; // Desestructuración de objetos
console.log(destino); // Londres
console.log(duración); // 12
console.log(viaje.precio); // 1200