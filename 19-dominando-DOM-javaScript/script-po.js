class Producto {
    constructor(nombre, precio, cateogria) {
    this.nombre = nombre;
    this.precio = precio;
    this.cateogria = cateogria;
    }

    mostrarInfo(){

        return `Producto: ${this.nombre} | Categoria: ${this.cateogria} | Precio: ${this.precio}`
    }
}

class ProductoConDescuento extends Producto{
    constructor(nombre,precio,categoria,descuento){
        super(nombre,precio,categoria)
        this.descuento = descuento;
    }

    calcularPrecioFinal(){
        return this.precio - (this.precio * this.descuento / 100);
    }

    //Sobreescritura de metodos = Podemos sobreescribir el metodo mostrarInfo de la clase padre para ajustar la acción 
    //del metodo a lo que la clase hija necesita

    mostrarInfo(){
        return `Producto: ${this.nombre} | Categoria: ${this.cateogria} | Precio original: ${this.precio}
        | Precio con descuento:(%${this.descuento}) $${this.calcularPrecioFinal()}`
    }
}

let refri = new Producto ("Refrigerador",12000,"Electronica")

console.log(refri.mostrarInfo());

let termo = new ProductoConDescuento ("Termo 13oz", 700, "cocina", 20
)

console.log(termo.mostrarInfo());


// --------------------Capturamos el formulario----------

const formulario = document.getElementById("producto-form");
console.log(formulario);
const listaProductos = document.getElementById("lista-productos")

//.addEventListener es un metodo que me ayuda a "escuchar un evento cuando se dispara un evento en particular"
//(onClick,onSubmit,etc.)
//Este metdoo recibe como parametros dos valores:
//Primer atributo.Nombre del evento que tiene que escuchar (click,submit,etc.)
//Segundo atributo: Funcion que se va a ejecutar cuando se escucha el evento.

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);

    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const categoria = document.getElementById("categoria").value;
    const descuento = parseFloat(document.getElementById("descuento").value);

    //Crear un elemento de lista y agregarlo al DOM

    const item = document.createElement("li");

    let nuevoProdcuto;
    if(descuento > 0){
        nuevoProdcuto = new ProductoConDescuento (nombre, precio, categoria, descuento)
        //Le asigno una clase
        item.classList.add("descuento")
    }else{
        nuevoProdcuto = new Producto (nombre, precio, categoria)
    }


    item.textContent = nuevoProdcuto.mostrarInfo()
    listaProductos.appendChild(item)

    formulario.reset()
})


