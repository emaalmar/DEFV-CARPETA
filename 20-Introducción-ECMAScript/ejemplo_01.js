/*// var nombre = "Juan Perez";

// nombre = "Aldofo Suarez"

// function mostrarNombre() {
//     var nombre="Jose Hernandez"
//     console.log(nombre);
// }

const nombre = "Juan Perez ";

// nombre = "Jose Hernández" - No permitido
/* const mostrarNombre = function (){
    console.log(nombre)
}


let nombre_alt = "Juan Perez";
nombre_alt = "Pancho"
function mostrarNombre() {
    let nombre_func= "Pedro";
    console.log(nombre_alt)
}

mostrarNombre();


console.log(pais);
var pais= "México";
console.log(pais);*/



function pruebaVar() {
    let ciudad = "Madrid";
    if (true) {
        console.log(ciudad)
    }
    console.log(ciudad); // Debería dar error, pero imprime "Madrid" debido a `var`
}

pruebaVar();