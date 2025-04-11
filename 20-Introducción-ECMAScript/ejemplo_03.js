const getName = (nombre) => "Pedro";
const getLastName = (apellido) => "Pao";

const nombre = getName();
const apellido = getLastName();

// let puesto = "Directivo"
let puesto = "Operador"


console.log (`¡Hola! ${
    puesto==="Directivo"?
    "Dir." + getName() :
    "Sr." + getName()
    } ${apellido} es un placer`);


// console.log(`htpps://api/${recurso}/${endpoint}/${id}`);



// const body = `
//     <p>Hola, cara de bola ${nombre} </p>
//     <h1> Lorem ipsum dolor sit amet. ${apellido} </h1>
//     <button> Presiona</button>
// `

