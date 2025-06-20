function sumar(a, b, callback) {

    const result = a + b;
    console.log(`Antes de ejecutar el callback`);
    callback(result);


}

function callback(result) {
    console.log(`El resultado de la suma es: ${result}`);
    console.log(`Después de ejecutar el callback`);
}

console.log(`Antes de ejecutar la función sumar`);
// sumar(5,10, (result) => console.log(`El resultado de la suma es: ${result}`));
sumar(5, 10, callback);

/*const inputNombre = document.querySelector('#id-nombre');
inputNombre.addEventListener("focus", () => {
});*/

const jsonExample = `{
    "nombre": "Juan",
    "edad": 30
}`;

console.log(jsonExample.nomre); // undefined
const jsonObject = JSON.parse(jsonExample);
console.log(jsonObject.nombre); // Juan
