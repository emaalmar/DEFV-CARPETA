// //Ejemplo 1 : contador simple con for

// for(let i = 1; i <=5; i++ ){
//     console.log("El contador esta en el ciclo (for):",i);
// }
// // let contador = 10;
// // while(contador <= 5){
// //     console.log("El contador esta en el ciclo:", contador);
// //     contador ++; // <- es equivalente a contador = contador + 1 o contador += 1
// // }

// // Ejemplo 2: Contador en reversa for
// for(let i = 10; i >= 0; i-- ){
//     console.log("El contador esta en el ciclo (for):",i);
// }

// //Ejemplo 3:
// for(let i = 1; i <= 10; i+=2 ){
//     console.log("El contador esta en el ciclo (for):",i);
// }


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;}
    console.log(i);
}
