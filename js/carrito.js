const carrito = localStorage.getItem('carrito')

const carritoJSON = JSON.parse(carrito)

const compraFinal = []

carritoJSON.forEach(element => {
    let nuevaCompra = element.precio
    compraFinal.push(nuevaCompra)
    let sumatoria
    compraFinal.reduce((acc, nuevaCompra)=> sumatoria + nuevaCompra, 0)
});

console.log(compraFinal)




// const sumarCompra = () => {
//     let compras
//     let nuevasCompras
//     let precioFinal

//     carritoJSON.forEach(element => {
//         nuevasCompras = element.precio
//         return
//     });

//     precioFinal.reduce((compras, nuevasCompras) => compras + nuevasCompras, precioFinal)

//     console.log(compras)
//     console.log(precioFinal)
// }

// sumarCompra()