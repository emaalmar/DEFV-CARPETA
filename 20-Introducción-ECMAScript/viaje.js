class Viaje {
    // saludo= `Bienvenido al planifiicador de viajes`

    constructor(destino, origen, duracion) {
        this.destino = destino;
        this.origen = origen;
        this.duracion = duracion;
    }

    getInfo() {
        console.log(`
            Origen: ${this.origen};\n
            Destino: ${this.destino}\n
            Duración: ${this.duracion} minutos
            `)
    }

    getCost() {
        console.log(`El costo del viaje $${this.duracion * 35} MXN`)
    }

    static mensajeBienvenida(){
        // console.log(this.saludo)
        console.log(`Bienvenido al planifiicador de viajes`)
    }
}

class ViajeInternacional extends Viaje {
    constructor(destino, origen, duracion, pais){
        super(destino, origen, duracion); // Llama al constructor de la clase padre (Viaje)
        this.pais = pais;
    }

    mostrarInfo(){
        console.log(`destino: ${this.destino};\npais: ${this.pais}`)
    }
}

const viajeInternacional1 = new ViajeInternacional("Cairo", "CDMX", 900, "Egipto")

viajeInternacional1.getCost();
viajeInternacional1.getInfo();
viajeInternacional1.mostrarInfo();

const viaje1 = new Viaje("Guadalajara", "CDMX", "60")
const viaje2 = new Viaje("CDMX", "Guadalajara", "65")

// console.log({viaje1});
// console.log({viaje2});

// viaje1.getCost()
// viaje1.getInfo()

// Viaje.mensajeBienvenida()


