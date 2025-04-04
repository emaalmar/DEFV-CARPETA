class Usuario {
    constructor(nombre, edad, correo, saldo = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.saldo = saldo;
        this.viajesRealizados = [];
    }

    getInfo() {
        console.log(`
            Nombre: ${this.nombre}\n
            Edad: ${this.edad}\n
            Correo: ${this.correo}\n
            Saldo: ${this.saldo}\n
            `);
    }

    enviarInfoViajeCorreo(viaje){
        console.log(`Enviando información del viaje a ${this.correo} `)
        console.log(`
            Correo enviado a: ${this.correo}
            Origen: ${viaje.origen}
            Destino: ${viaje.destino}
            Duración: ${viaje.duracion}
            Estado: Confirmado
            `)
    }

    checkIn(viaje){
        console.log(`Check-in realizado para el viaje de ${viaje.origen} a ${viaje.destino}. ¡Buen viaje, ${this.nombre}!`);
    }

    esMayorDeEdad (){
        console.log(this.edad >= 18 ? `${this.nombre} es mayor de edad.`:`${this.nombre} es menor de edad.`);
    }

}

const usuario1 = new Usuario("Jose Pancho", 30, "jose@example.com");
usuario1.getInfo();
// usuario1.checkIn(viaje1);
// usuario1.enviarInfoViajeCorreo(viaje2);