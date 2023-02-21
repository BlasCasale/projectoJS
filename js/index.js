import { hacerCards } from "./crearCards.js";


// capturando los elementos del html
const buscarProducto = document.getElementById('buscarProducto')
const btnBuscar = document.getElementById('btnBuscar')
const cleanFilter = document.getElementById('cleanFilter')


// funciones para buscar y filtrar objetos y despues crear cards
const makeCards = (product) => {
    const div = document.createElement('div')
    div.classList.add('card__producto')
    div.innerHTML += `    
                    <img src="${product.img}" alt="${product.nombre}" class="card__producto-img"></img> 

                    <p class="card__producto-p">${product.nombre}</p>

                    <h3 class="card__producto-h3">$${product.precio}</h3>

                    <button type="submit" id="${product.id}" class="card__producto-boton">Agregar al carrito</button>
    `
    contenedor.appendChild(div)
}

const searchProduct = (productoNombre, categoria) => {
    let producto = productos.find(producto => producto.nombre == productoNombre)
    let cate = productos.filter(producto => producto.categoria === categoria)

    if (producto || cate != undefined) {
        buscarProducto.value = ""

        contenedor.innerHTML = ""

        makeCards(producto)
    }else {
        Toastify({
            text: "Producto no encontrado",
            duration: 2000,
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
}

const clearHTML = () => {
    contenedor.innerHTML = ""
    hacerCards()
}


// eventos del html en botones con input
btnBuscar.addEventListener('click', () => {
    searchProduct(buscarProducto.value)
})

cleanFilter.addEventListener('click', () => {
    clearHTML()
})

