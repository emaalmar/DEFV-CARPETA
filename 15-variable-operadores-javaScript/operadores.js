/*
    Operadores de Javascript

    Tipos:
    -Matematicos: Para realizar calculos
*/

//Operadores matemáticos

let suma = 10 + 2;
let resta = 10 - 2;
let multiplicacion = 10 * 2;
let division = 10 / 2;
let modulo = 10 % 3;
let exponente = 10 ** 2;

console.log(` Es es una suma: ${suma}, esto es una resta: ${resta}, esto es una multiplicación: ${multiplicacion},esto es una division: ${division}, esto es un modulo: ${modulo}, esto es un exponente: ${exponente}`);

/*
    Jerarquía de operadores matemáticos
    1. Parentesis()
    2. Exponentes **
    3. Multiplicación * y Division /
    4. Suma + y Resta -
*/

let operacion1 = 10 + 5 * 2; //10 + (5 * 2) = 20
let operacion2 = (10 + 5) * 2; // 15 * 2 = 30

console.log(`${operacion1}, ${operacion2}`);

//Operadores de compáración

let mayor = 10 > 5; //Mayor que
let menor = 3 < 8; //Menor que
let igual = 5 == "5"; // Comparación de VALOR (true)
let estrictamenteIgual = 5 === "5"; //Comparación estrictica de VALOR y TIPO DE DATOS(false)
let diferente = 5 != "5"; //Diferente(false)
let estrictamenteDiferente = 5 !== "5"; //Estrictamente diferente(true)

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente);

//Operadores lógicos
let and = (10 > 5) && (3 < 8) //AND (true)
let and2 = (10 < 5) && (3 < 8) //AND (false)
let or = (10 > 5) || (3 > 8)//OR (true)
let or2 = (10 > 5) || (3 < 8)//OR (true)
let or3 = (10 < 5) || (3 > 8)//OR (false)
let not = !(10 > 5)// NOT (flase)

console.log(and, and2, or, or2, or3, not);

/*
Jeraquía de operadores lógicos
1. NOT (!) ->se evalúa primero
2. AND (&&) - >se evalúa segundo
3. OR (||) -> se evalúa al final

Nota: Siempres se evalúa lo que haya entre paréntesis primero
*/

//Ejemplo de jerarquía de operadores lógicos
var logico1 = true || false && false //Primero evalúo AND = true || false = true
var logico2 = (true || false) && false  //(true) && false = false
console.log(`${logico1}, ${logico2}`);