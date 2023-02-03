let carrito = localStorage.getItem('carrito')

let carritoJSON = JSON.parse(carrito)


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
}

hacerCarrito()


// obtengo botones para eliminar uno por uno los elementos

const btnTacho = document.getElementById('carrito')

btnTacho.addEventListener('click', (e) => {
    sacarDelCarrito(e.target)
})

const sacarDelCarrito = (productoID) => {
    let index = carritoJSON.findIndex(producto => producto.id == productoID)
    carritoJSON.splice(index, 1)
    carrito = JSON.stringify(carritoJSON)
    localStorage.setItem('carrito', carrito)
    
    const contenedor = document.getElementById('carrito')
    contenedor.innerHTML = ""

    hacerCarrito()
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

    hacerCarrito()
})
