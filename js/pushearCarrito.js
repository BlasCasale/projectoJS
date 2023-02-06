let carrito = []
const carritoLS = JSON.parse(localStorage.getItem('carrito'))

if (carritoLS) {
    carrito = carritoLS
}


const contenedor = document.getElementById('padreCards')

contenedor.addEventListener('click', (e) => {
    agregarAlCarrito(e.target.id)
})

// con esta funcion busco los productos por id y los voy pusheando al array
const agregarAlCarrito = (productoID) => {
    const producto = productos.find(producto => producto.id == productoID)

    if (producto != undefined){
        carrito.push(producto)
    } else {
        carrito.push()
    }
    
    const carritoJSON = JSON.stringify(carrito)
    localStorage.setItem('carrito', carritoJSON)
}


