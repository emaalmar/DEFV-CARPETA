const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com';

/* EJEMPLO GET */
// 1- Definir como llamaremos a la API
function obtenerProducto(id, callback) {
    axios.get(`${BASE_URL}/products/${id}`)
        .then(response => callback(null, response.data)) //caso exitoso
        .catch(error => callback(error, null)); // caso de error
    // axios.get(`${BASE_URL}/products/${id}`)
}

function obtenerProductoErrorForzado(id, callback) {
    axios.get(`${BASE_URL}/productss/${id}`)
        .then(response => callback(null, response.data)) //caso exitoso
        .catch(error => callback(error, null)); // caso de error
    // axios.get(`${BASE_URL}/products/${id}`)
}

/*Definir el callback que se ejecutará cuando la petición se complete.
Este callback recibirá dos parámetros: error y producto.*/
function callback(error, producto) {
    if (error) {
        console.error('Error al obtener el producto:', error.message);
    } else {
        console.log(`Producto obtenido:  ${producto.title} - $${producto.price}`);
    }
}

// 2- Llamar a la API con un ID de producto y pasar el callback
/* obtenerProducto(8, callback);
obtenerProductoErrorForzado(100, callback); */

/* EJEMPLO POST */
function addProduct(objeto, callback) {
    const body = JSON.stringify(objeto);
    axios.post(`${BASE_URL}/products`, body)
        .then(response => {
            // console.log(response)
            callback(null, response.data)
        }) // caso exitoso
        .catch(error => callback(error, null)); // caso de error

}

function callbackNuevoProd(error, producto) {
    if (error) {
        console.error('Error al obtener el producto:', error.message);
    } else {
        console.log(`Producto id:  ${producto.id} `);
    }
}

// 3- Llamar a la API para agregar un producto
const nuevoProducto = {
    title: 'PocoPhone',
    price: 29.99,
    description: 'Descripción del nuevo producto',
    category: 'electronics',
    image: 'https://example.com/image.jpg'
};

addProduct(nuevoProducto, callbackNuevoProd);


function obtenerProductoPorCategoria(categoria, callback) {
    axios.get(`${BASE_URL}/products`)
        .then(response => callback(categoria, null, response.data)) // caso exitoso
        .catch(error => callback(categoria, error, null)); // caso de error

}
function filtrarPorCategoria(categoria, error, producto) {
    if (error) {
        console.error('Error al obtener los productos:', error.message);
    } else {
        const productosCat = producto.filter(producto => producto.category === categoria);
        console.log(productosCat);
    }
}

obtenerProductoPorCategoria('jewelery', filtrarPorCategoria);