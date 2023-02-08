let carrito = localStorage.getItem('carrito')

let carritoJSON = JSON.parse(carrito)

// sumar compra
const sumarCompra = () => {
    const totalCarro = document.getElementById('totalCarro')

    let valorInicial = 0
    const sumaCompra = carritoJSON.reduce((acumulador, compra) => acumulador + compra.precio, valorInicial, 0)
        
    totalCarro.innerText = `$${sumaCompra}`
}

const hacerCarrito = () => {
    const contenedor = document.getElementById('carrito')

    carritoJSON.forEach((compra) => {
        const div = document.createElement('div')
        div.classList.add('card__carro')
        div.innerHTML += `
                        <img src="../${compra.img}" alt="" class="card__carro-img">

                        <p class="card__carro-p">${compra.nombre}</p>
                        
                        <p class="card__carro-p">$${compra.precio}</p>

                        <button class="btn__tacho">
                            <img src="../img/tachoBasura.webp" alt="Basura" class="btn__tacho-img" id="${compra.id}">
                        </button>

        `
        
        contenedor.prepend(div)
    });
    sumarCompra()
}

hacerCarrito()

// obtengo botones para eliminar uno por uno los elementos

const btnTacho = document.getElementById('carrito')

btnTacho.addEventListener('click', (e) => {
    sacarDelCarrito(e.target, e.target.id)
})

const sacarDelCarrito = (productoIndex, productoID) => {
    let index = carritoJSON.findIndex(producto => producto == productoIndex)
    let id = carritoJSON.find(producto => producto.id == productoID)
    
    if (index && id) {
        carritoJSON.splice(index, 1)
        carrito = JSON.stringify(carritoJSON)
        localStorage.setItem('carrito', carrito)
        
        const contenedor = document.getElementById('carrito')
        contenedor.innerHTML = ""

        Toastify({
            text: "Producto eliminado",
            duration: 1500,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(90deg, rgba(0,53,84,1) 30%, rgba(121,173,220,1) 83%)",
                color: "#fff",
                borderRadius: "30px",
                border: "solid 2px #110e82"
            },
        }).showToast()
    
        hacerCarrito()
        sumarCompra()
    }

}


// para vaciar todo el carrito
let vaciarCarro = document.getElementById('vaciarCarro')

vaciarCarro.addEventListener('click', () => {
    
    // vacio el array y lo paso a LS para salvar los datos
    carritoJSON = []
    console.log(carritoJSON)
    carrito = JSON.stringify(carritoJSON)
    localStorage.setItem('carrito', carrito)

    const contenedor = document.getElementById('carrito')
    contenedor.innerHTML = ""

    sumarCompra()
})

