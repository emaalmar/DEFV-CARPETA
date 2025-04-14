class Videojuego {
    constructor(titulo, genero, precio) {
        // 🚀 Completar: Definir propiedades para título, género y precio.
        this.titulo = titulo;
        this.genero = genero;
        this.precio = precio;
    }
}

const juegos = [];

function agregarJuego() {
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto Videojuego al array juegos.

    const titulo = document.getElementById("titulo").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const precio = parseFloat(document.getElementById("precio").value.trim());


    if (titulo === "" || isNaN(precio)) {
        alert("Por favor, ingresa un producto válido.");
        return; // Detiene la ejecución si el input está vacío
    }

    // Validación: Evitar productos duplicados
    if (juegos.some(juego => juego.titulo === titulo)) {
        alert("❌ Este producto ya está en la lista.");
        return; // Detiene la ejecución si el producto ya existe
    }

    juegos.push(new Videojuego(titulo, genero, precio))

    actualizarJuegos();

    titulo.value = "";
    genero.value = "";
    precio.value = "";

}

function filtrarPorGenero() {
    const generoFiltro = document.getElementById("filtro").value.trim().toLowerCase();

    const filtrados = juegos.filter(juego =>
        juego.genero.toLowerCase().includes(generoFiltro)
    );

    actualizarJuegos(filtrados);
}

function calcularTotal() {
    // 🚀 Completar: Calcular el total gastado usando reduce().

    const total = juegos.reduce((acum, juego) => acum + juego.precio, 0)
    alert(`Total: $${total}`);
}

function actualizarJuegos(lista = juegos) {
    // 🚀 Completar: Renderizar la lista de videojuegos en el DOM.

    const ul = document.getElementById("lista");

    ul.innerHTML = lista.map((juego, index) =>
        `<li>${index + 1}. ${juego.titulo} - ${juego.genero} - $${juego.precio}</li>`
    ).join("");

}