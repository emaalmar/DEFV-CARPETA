/* EJERCICIO 1 */

/* 

Tienes un sistema de comentarios donde puedes ver cuántas palabras escribió un usuario. Para eso, debes contar cuántas palabras hay en una lista de mensajes escritos por él.

*/

// Versión ITERATIVA ya implementada
function contarPalabras(mensajes) {
    let total = 0;
    for (let i = 0; i < mensajes.length; i++) {
        const palabras = mensajes[i].split(" ").length;
        total += palabras;
    }
    return total;
}

const mensajes = [
    "Hola, ¿cómo estás?",
    "Estoy aprendiendo JavaScript.",
    "¡Es divertido!"
];

console.log(contarPalabras(mensajes)); // → 9


/* Implementar versión recursiva */

const contarPalabras2 = (mensajes, i = 0, total = 0) => {
    if (mensajes.length === 0) return "Cadena vacia";

    if (i >= mensajes.length) {
        return total;
    }

    const palabras = mensajes[i].split(" ").length;

    return contarPalabras2(mensajes, i + 1, total + palabras);

};

const mensajes2 = [
    "Hola, ¿cómo estás? Estoy aprendiendo JavaScript. ¡Es divertido!"
]
console.log(contarPalabras2(mensajes2));
/* EJERCICIO 2 */

/*

Una aplicación muestra un historial de navegación como una pila (stack), y quiere invertir ese historial para mostrarlo cronológicamente.

*/




// Versión RECURSIVA ya implementada

function invertirHistorial(historial) {
    if (historial.length === 0) return [];
    const ultimo = historial.pop();
    return invertirHistorial(historial).concat(ultimo);
}

function invertirHistorial3(historial, i = null) {
    if (i === null) i = historial.length - 1;

    if (i < 0) return [];

    return [historial[i]].concat(invertirHistorial3(historial, i - 1));
}

const historial = ["Página A", "Página B", "Página C"];
console.log(invertirHistorial(historial)); // → ["Página C", "Página B", "Página A"]
const historial3 = ["Página A", "Página B", "Página C"];
console.log(invertirHistorial3(historial3)); // → ["Página C", "Página B", "Página A"]

/* Implementar versión iterativa */




const invertirHistorial2 = (historial) => {
    const invertido = [];

    for (let i = historial.length - 1; i >= 0; i--) {
        invertido.push(historial[i]);
    }

    return invertido;
};
const historial2 = ["Página A", "Página B", "Página C"];
console.log(invertirHistorial2(historial2));
