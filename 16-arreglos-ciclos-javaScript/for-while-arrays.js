let frutas = ["Manzana","Uva","Fresa","Cereza","Pera","Sandia"]
let i = 0

while( i < frutas.length){
    console.log("Fruta", i, ":", frutas[i]);
    i++
}

for( let i = 0; i <= frutas.length - 1; i++){
    console.log("Fruta", i, ":", frutas[i]);
}


//Combinando while y for con arreglos

//Ejemplo 1: Recorrer un arreglo con while
let fruits = ["Manzana", "Uva", "Fresa", "Cereza", "Pera"]
let index = 0
while(index < fruits.length){
    console.log("Fruta " , index, ":" , fruits[index])
    index++
}

//Ejemplo 2: Recorrer un arreglo con for
for (let index = 0; index <= fruits.length - 1; index++) {
    console.log("(FOR)Fruta " , index, ":" , fruits[index]);
}