/*
    POO
        -CLASE: Es una plantilla para crear objetos. Define atributos y métodos. Se define con la aplabra reservada class seguido del nombre
        empezando con mayuscula y en singular.
        -OBJETO: Es la instancia de una clase, con sus propios valores para los atributos en la clase.
        -ATRIBUTO: Son las caracteristiicas o propiedades de una clase
        -METODOS: Son las funciones dentro de una clase que definen el comportamiento de los objetos
        -CONSTRUCTOR: Es un metodo especial de una clase que se ejecuta automaticamente al crear un objeto. Sirve para inicializar los atributos
        de la clase.
*/

//Paso 1. Definicion de una clase con sus atributos y métodos
class Persona {

    // Atributos dentro del constructor
    constructor(nombre, edad, nacionalidad){
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }

    //Metodos de la clase
    saludar(){
        console.log("Hola, mi nombre es", this.nombre, "tengo", this.edad, "años, soy", this.nacionalidad);
    }

    despedirse(nombreAmigo){
        console.log("Adios", nombreAmigo);
    }
}

// Paso2. Creación del/los objetos a partir de la clase

let persona1 = new Persona("emanuel", 25, "mexicano");

console.log(persona1);

//Paso 3. Llamar a los metodos de mi objeto

persona1.saludar();
persona1.despedirse("Lucas");

//Ejercicio: Crear un objeto a partir de la clase persona con los datos 

//new es una palabra reservada que me ayuda a reservar que me ayuda a ejecutar el metodo constructor para darle valores a mi nuevo objeto
let persona2 = new Persona("Lucia", 30, "canadienese");
console.log(persona2);
persona2.saludar();

//Lucia se despide de Juan
persona2.despedirse("Juan");
