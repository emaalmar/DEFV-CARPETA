const obtenerDestino = (destino) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (destino) {
                resolve(`Destino confirmado: ${destino}`)
            } else {
                reject("No se ha podido confirmar el destino")
            }
        }, 3000);
    });
}

function notificarUsuario(destino) {
    console.log(` ${destino}`);
}

function notificarError(error) {
    console.log(`Error: ${error}`);
}

//Llamar a la función y manejar la promesa
obtenerDestino("")
    .then(notificarUsuario)
    .catch(notificarError)
    .finally(() => {
        console.log("Siempre se ejecuta, sin importar el resultado de la promesa");
    });



const frutas = ["manzana", "banana", "pera", "kiwi", "uva"];

function paraElForEach(elemento) {
    console.log(` para el forEach: ${elemento}`);
}

frutas.forEach(paraElForEach);