// function suma(a,b) {  // DEL LADO DEL SERVIDOR, FUNTION Y DEL CLIENTE ARROW
//     return a + b;
// }

// const suma = (a,b) => a + b;

/*const suma = (a,b) => {clave:25}; //No esta permitido
const suma = (a,b) => ({clave:25}); //No esta permitido
const suma = (a,b) => {
    return{clave:25}
};
*/



const suma = (a, b) => {
    return a + b
};

// const nombre = "Toño Lop";
// nombre = "Antony Lop";

const nombre = (nombre="Toño Lop")=> nombre;
const nombre_alt = nombre("Antony Lop");

const array = [2,3,4,5];
array.push(10)

console.log(suma(1, 2));
console.log(nombre_alt);
console.log(array);