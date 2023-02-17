import { hacerCards } from "./crearCards.js";

const carrito = []

const carritoLS = JSON.parse(localStorage.getItem('carrito'))

productos.push(...productosLS)
carrito.push(...carritoLS)


const contenedor = document.getElementById('padreCards')

contenedor.addEventListener('click', (e) => {
    searchProduct(e.target.id)
})

const searchProduct = (productoID) => {
    const producto = productos.find(producto => producto.id == productoID)

    findStock(producto)
}

const findStock = (parameter) => {
    let {stock} = parameter

    if (stock > 0) {
            Toastify({
                text: "Producto agregado",
                duration: 1500,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(90deg, rgba(0,53,84,1) 30%, rgba(121,173,220,1) 83%)",
                    color: "#fff",
                    borderRadius: "30px",
                    border: "solid 2px #110e82"
                },
                destination: "pages/carrito.html",
                newWindow: true,
                close: true,
                stopOnFocus: true,
            }).showToast()
            stock--
            let h3stock = document.getElementById('stock')
            h3stock.innerText = ''
            h3stock.innerText = `Stock ${stock}`
            
            carrito.push(parameter)
        }else {
        Toastify({
            text: "No hay stock",
            duration: 1500,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(90deg, rgba(0,53,84,1) 30%, rgba(121,173,220,1) 83%)",
                color: "#fff",
                borderRadius: "30px",
                border: "solid 2px #110e82"
            },
            stopOnFocus: true,
        }).showToast()
    }

    const carritoJSON = JSON.stringify(carrito)
    localStorage.setItem('carrito', carritoJSON) 
}



// // con esta funcion busco los productos por id y los voy pusheando al array
// const agregarAlCarrito = (productoID) => {
//     const producto = productos.find(producto => producto.id == productoID)


// }