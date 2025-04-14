const gastos = [];

function agregarGasto() {
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto con descripción y monto al array gastos.
    const inputDescripcion = document.getElementById("descripcion")
    const inputMonto = document.getElementById("monto")

    const descripcion = inputDescripcion.value.trim();
    const monto = parseFloat(inputMonto.value.trim());

    gastos.push({ descripcion, monto });

    actualizarGastos();

    inputDescripcion.value = ""; // Limpia el input para nuevas entradas
    inputMonto.value = ""; // Limpia el input para nuevas entradas
}

function ordenarGastos() {
    gastos.sort((a, b) => a.monto - b.monto); // Ordena los gastos por monto
    actualizarGastos(); // Actualiza la lista en pantalla
}


function calcularTotal() {
    // 🚀 Completar: Calcular el total gastado con reduce() y mostrarlo en alerta.
    const total = gastos.reduce((acum,gastos) => acum + gastos.monto, 0);

    alert(`Total acumulado: $${total}`)
}

function actualizarGastos() {
    // 🚀 Completar: Renderizar la lista de gastos en el DOM.
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    gastos.forEach((gasto) => {
        const li = document.createElement("li");
        const texto = document.createTextNode(`${gasto.descripcion} ${ gasto.monto}`);
        li.appendChild(texto);
        lista.appendChild(li);

    });
}