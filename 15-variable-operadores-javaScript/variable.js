/*
Diferencias entre var-let y const en JavaScript
-var: Se puede reasignar y redeclarar en cualquier parte del codigo
-let: Se puede reasignar, pero NO se puede redeclarar en el mismo ambito
-const: No se puede reasignar ni redeclarar; es un valor constante.
*/

//VAR
var nombre = "Jonathan" //Declaramos una variable con var
nombre = "Gilean" //Reasignamos el valor de nombre
var nombre = "Luis" //Redeclaro la variable sin problema
console.log(nombre);

//LET
let apellido = "Villanueva" //Declaro una variable con let
apellido = "Corona" //Reasignamos el valor de nombre
//let apellido = "Parra" //Esto daria error porque no se puede redeclarar la misma variable en el mismo ambito

//CONST
const gravedad = "9.81 M/s2"  //Declaramos una constante con const
//gravedad = "10.1 M/s2" // Esto daría error porque no se pueden reasignar constantes
//const gravedad = "10.1 M/s2" //Esto daría error porque no se puede redeclarar una constante en el mismo ambito
