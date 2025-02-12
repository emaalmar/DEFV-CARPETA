//Ejemplo 1: Contador simple con while

let contador = 10;

while(contador <= 5){
    console.log("El contador esta en el ciclo:", contador);
    contador ++; // <- es equivalente a contador = contador + 1 o contador += 1
}

//Ejemplo 2: Contador en reversa

let cuentaRegresiva = 0;

while(cuentaRegresiva > 0){
    console.log("Cuenta regresiva:", cuentaRegresiva);
    cuentaRegresiva --;
}

//Ejemplo #: Solcitar confirmación hasta que el usuario acepte

let confirmacion = true;

while (confirmacion) {
    // otras tareas dentro del ciclo
    confirmacion = confirm("Quieres realizar otra operación"); //confirm devuelve true o false
    console.log("confirmación recibida", confirmacion);
}