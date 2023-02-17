const hacerCards = () => {
    const contenedor = document.getElementById('padreCards')
    
    productos.forEach((producto) => {
        let i = 0
        const div = document.createElement('div')
        div.classList.add('card__producto')
        div.innerHTML += `    
                        <img src="${producto.img}" alt="${producto.nombre}" class="card__producto-img"></img> 
    
                        <p class="card__producto-p">${producto.nombre}</p>
    
                        <h3 class="card__producto-h3">$${producto.precio}</h3>

                        <h3 class="card__producto-h3" id="${i}">Stock: ${producto.stock}</h3>
    
                        <button type="submit" id="${producto.id}" class="card__producto-boton">Agregar al carrito</button>
        `
        contenedor.appendChild(div)
        
        i++
    })
}

hacerCards()

export{hacerCards}