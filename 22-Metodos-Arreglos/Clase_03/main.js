// ---- Clase principal que representa un viaje ----

class Viaje {
    constructor(nombre, origen, destino, duracion, pais) {
        // Guardamos los datos principales del viaje
        this.nombre = nombre;
        this.origen = origen;
        this.destino = destino;
        this.duracion = Number(duracion); // Aseguramos que la duración sea numérica
        this.pais = pais;
        this.tareas = []; // Lista de tareas relacionadas con el viaje
    }

    agregarTarea(tarea) {
        if (this.tareas.includes(tarea)) {
            console.log("La tarea ya esta en la lista")
        } else {
            this.tareas.push(tarea);
            console.log("Tarea añadida")
        }
        return
    }

    eliminarTarea(tarea) {
        const index = this.tareas.indexOf(tarea)
        if (index !== -1) { /*si existe el elemento*/
            this.tareas.splice(index, 1);
            console.log("tarea eliminada")
        } else {
            console.log("Tarea no encontrada")
        }
    }

    mostrarResumen() {
        const { nombre, origen, destino, duracion, pais, tareas } = this;
        console.log(`viaje${nombre} desde ${origen} hacia ${destino}, ${pais} por ${duracion} dias`);
        if (tareas.length === 0) {
            console.log("No hay tareas")
        } else {
            console.log("Tareas: ");
            tareas.forEach((tarea, index) => console.log(`${index + 1}. ${tarea}`))
        }

    }
}

const objViaje = new Viaje("Viaje de la familia Hernandez", "CDMX", "Guadalajara", "15", "Mexico");

// objViaje.agregarTarea("Llamar a reservar al hotel Holiday Inn");
// objViaje.agregarTarea("Reservar Automovil");
// objViaje.eliminarTarea("Llamar a reservar al hotel Holiday Inn");
// objViaje.mostrarResumen();

const cargarViajes = () => {
    const data = JSON.parse(localStorage.getItem('viajes')) || [];
    return data.map(viaje => Object.assign(new Viaje(), viaje))
}

const guardarViajes = () => localStorage.setItem('viajes', JSON.stringify(viajes));

/*Simula guardar el viaje en la nube*/
// Guarda un solo viaje con una pequeña demora (simula petición asíncrona)
const guardarViaje = viaje => new Promise(resolve => {
    setTimeout(() => {
        viajes.push(viaje);     // Lo agregamos al arreglo principal
        guardarViajes();        // Guardamos todos los viajes
        resolve();              // Indicamos que terminó
    }, 1000); // 1000 ms de delay (simulación)
});

const viajes = cargarViajes();

// Limpia los inputs del formulario para crear un nuevo viaje
const limpiarInputs = () => {
    ['nombre', 'destino', 'duracion', 'pais'].forEach(id => {
        document.getElementById(id).value = "";
    });
};
// Crea un nuevo viaje con los datos del formulario
const crearViaje = async () => {
    const campos = ['nombre', 'origen', 'destino', 'duracion', 'pais'];
    const valores = campos.map(id => document.getElementById(id).value.trim());

    // Verificamos que no haya campos vacíos
    if (valores.some(v => !v)) {
        mostrarModal("Por favor llena todos los campos.");
        return;
    }

    const [nombre, origen, destino, duracion, pais] = valores;
    const nuevoViaje = new Viaje(nombre, origen, destino, duracion, pais);

    await guardarViaje(nuevoViaje); // Lo guardamos en la "base de datos"

    renderizarViajes();             // Actualizamos la lista visual
    limpiarInputs();                // Limpiamos los inputs
};


//Funcion para elminar viaje

const eliminarViaje = index => {
    const confirmacion = confirm(`¿Estás seguro de eliminar el viaje ${viajes[index].nombre}`)
    if (confirmacion)) {
        viajes.splice(index,1);
        guardarViaje();
        renderizarViajes();
        mostrarModal("Viaje eliminado")
    }
}

const renderizarViajes = () => {
    const contenedor = document.getElementById('lista-viajes');
    contenedor.innerHTML = ""; // Limpiamos contenido anterior

    // Ordenamos por duración (de menor a mayor)
    viajes.sort((a, b) => a.duracion - b.duracion);

    // Creamos la estructura visual para cada viaje
    viajes.forEach((v, i) => {
        const div = document.createElement('div');
        div.className = 'viaje-card';

        // Generamos la lista de tareas en HTML
        const tareasHTML = v.tareas.map((t, ti) =>
            `<li>${t} <button onclick="eliminarTarea(${i}, ${ti})">Eliminar</button></li>`
        ).join('');



        // Insertamos los datos del viaje en la tarjeta
        div.innerHTML = `
            <h3 id="test">${v.nombre}</h3>
            <p>Origen: ${v.origen}</p>
            <p>Destino: ${v.destino}, ${v.pais}</p>
            <p>Duración: ${v.duracion} días</p>
            <button class="danger-button" onclick="eliminarViaje(${i})">Eliminar viaje</button>
            <button onclick="agregarTarea(${i})">Agregar tarea</button>
            <ul class="tareas">${tareasHTML}</ul>
        `;

        contenedor.appendChild(div); // Lo añadimos al DOM
    });
};

// ---- Modal de mensajes ----

// Muestra un mensaje en el modal
const mostrarModal = mensaje => {
    document.getElementById("modal-text").textContent = mensaje;
    document.getElementById("modal").style.display = "flex";
};

// Cierra el modal
const cerrarModal = () => {
    document.getElementById("modal").style.display = "none";
};


renderizarViajes();