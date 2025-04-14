const maleta = [];

function agregarItem() {
    // 🚀 Completar: Obtener el valor del input y validar que no esté vacío ni duplicado.
    // 🚀 Completar: Agregar el artículo al array maleta y actualizar la lista.
    const input = document.getElementById("item");
    const inputmaleta = input.value.trim();

    if (inputmaleta === "") {
        alert(`El elemento no puede estar vacio`);
        return;
    }

    if (maleta.includes(inputmaleta)) {
        alert(`Este producto ya esta en la maleta`);
        return;
    }

    maleta.push(inputmaleta)

    actualizarMaleta();

    input.value = ""
}

function vacirMaleta() {
    maleta.length = 0;
    actualizarMaleta();
}

function ordenarMaleta() {
    // 🚀 Completar: Ordenar los elementos de la maleta alfabéticamente.
    maleta.sort();
    actualizarMaleta();
}

function finalizarEmpaque() {
    // 🚀 Completar: Mostrar alerta si hay menos de 3 artículos, de lo contrario, mensaje de éxito.
    const elementosMinimos = 3;
    if (maleta.length < elementosMinimos) {
        alert(`La maleta esta casi vacia solo tiene ${maleta.length} elemento`)
    } else { alert(`Maleta completa`) }
    // actualizarMaleta();
}

function actualizarMaleta() {
    // 🚀 Completar: Renderizar los elementos de la maleta en la lista <ul>."
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    maleta.forEach((maleta) => {
        const li = document.createElement("li");

        const texto = document.createTextNode(`${maleta}`);
        li.appendChild(texto);

        lista.appendChild(li);
    });
}