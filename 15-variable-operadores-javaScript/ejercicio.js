/*
    📌 EJERCICIO (OPCIONAL):
    - Predice los resultados de estas expresiones antes de ejecutarlas.
    - Explica en qué orden se ejecutan los operadores en cada caso.
*/

var a = 8, b = 4, c = 2, d = "8";

var resultadoEjercicio1 = a + b * c; // Se ejecuta, (4 * 2) + 8 = 16       OK
var resultadoEjercicio2 = (a + b) * c; // (8 + 4) = 12 * 2 = 24            OK
var resultadoEjercicio3 = a / b + c; // (8 / 4) = 2 + 2 = 4                OK
var resultadoEjercicio4 = a === d || b < c; // false || 4 < 2 = false      OK
var resultadoEjercicio5 = !(a > b) && (c < b); /* !(8 > 4) && (2 < 4) -> false && true = false    OK     */
var resultadoEjercicio6 = a % c == 0 && b + c > a; // 8 % 2 == 0 && 4 + 2 > 8 -> true && false = false   OK
var resultadoEjercicio7 = (a - c) ** b / c; // (8 - 2) ** 4 / 2 -> 1296 / 2 = 648             OK
var resultadoEjercicio8 = a + b > c && d == a; // 8 + 4 > 2 && 8 == 8 -> 16 > 2 && "8" == 8 -> true && true = true   OK
var resultadoEjercicio9 = !((a / c) > b) || (b * c <= a); /* !((8 / 2) > 4) || (8 * 2 <= 8) -> !(4 > 4) || (16 <= 8) -> (true) || ( false) = true   OK*/
var resultadoEjercicio10 = (a % c) + (b ** c) - (a / b); // (8 % 2) + (4 ** 2) - (8 / 4) -> 0 + 16 - 2 = 14      OK

console.log(
    resultadoEjercicio1, resultadoEjercicio2, resultadoEjercicio3, resultadoEjercicio4, resultadoEjercicio5,
    resultadoEjercicio6, resultadoEjercicio7, resultadoEjercicio8, resultadoEjercicio9, resultadoEjercicio10
);