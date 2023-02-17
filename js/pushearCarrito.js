import { hacerCards } from "./crearCards.js";

const carrito = []

const carritoLS = JSON.parse(localStorage.getItem('carrito'))

carrito.push(...carritoLS)


const contenedor = document.getElementById('padreCards')

contenedor.addEventListener('click', (e) => {
    agregarAlCarrito(e.target.id)
})


// con esta funcion busco los productos por id y los voy pusheando al array
const agregarAlCarrito = (productoID) => {
    const producto = productos.find(producto => producto.id == productoID)

    if (producto != undefined){

            carrito.push(producto)
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

    }    
    const carritoJSON = JSON.stringify(carrito)
    localStorage.setItem('carrito', carritoJSON)
}