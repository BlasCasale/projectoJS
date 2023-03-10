import { hacerCards } from "./crearCards.js";

// array para la busqueda

const filtredArray = []

// capturando los elementos del html
const buscarProducto = document.getElementById('buscarProducto')
const btnBuscar = document.getElementById('btnBuscar')
const cleanFilter = document.getElementById('cleanFilter')
const procesador = document.getElementById('procesador')
const mother = document.getElementById('mother')
const gpu = document.getElementById('gpu')
const ram = document.getElementById('ram')
const discos = document.getElementById('discos')


// crear cards
const makeCards = (product) => {
    const contenedor = document.getElementById('padreCards')
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

const makeFiltedCards = () => {
        const contenedor = document.getElementById('padreCards')
        filtredArray.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('card__producto')
            div.innerHTML += `    
                            <img src="${producto.img}" alt="${producto.nombre}" class="card__producto-img"></img> 
        
                            <p class="card__producto-p">${producto.nombre}</p>
        
                            <h3 class="card__producto-h3">$${producto.precio}</h3>
        
                            <button type="submit" id="${producto.id}" class="card__producto-boton">Agregar al carrito</button>
            `
            contenedor.appendChild(div)
        })
}


// buscador de productos
const searchProduct = (productoNombre) => {
    let product = productos.find(producto => producto.nombre == productoNombre)

    if (product != undefined) {
        buscarProducto.value = ""

        contenedor.innerHTML = ""

        makeCards(product)
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

// filtro para los botones de categoria 
const filterCategories = (categoria) => {
    const contenedor = document.getElementById('padreCards')
    while (filtredArray.length > 0){
        filtredArray.pop()
    }

    let prod = productos.filter(product => product.categoria === categoria)


    contenedor.innerHTML = ""

    for (const product of prod) {
        filtredArray.push(product)
    }
    makeFiltedCards()

    // en vez de hacer esto, hice esto tambien y tampoco funciona

    // console.log(prod)
    // makeCards(prod)
}

// limpio el HTML y hago las cards de nuevo
const clearHTML = () => {
    contenedor.innerHTML = ""
    hacerCards()
}


// eventos del html en botones con input
btnBuscar.addEventListener('click', () => {
    searchProduct(buscarProducto.value.toUpperCase())
})

procesador.addEventListener(('click'), () =>{
    filterCategories("procesador")
})

mother.addEventListener(('click'), () =>{
    filterCategories("mother")
})

gpu.addEventListener(('click'), () =>{
    filterCategories("gpu")
})

ram.addEventListener(('click'), () =>{
    filterCategories("ram")
})

discos.addEventListener(('click'), () =>{
    filterCategories("discos")
})

cleanFilter.addEventListener('click', () => {
    clearHTML()
})

