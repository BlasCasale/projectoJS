// eleccion discos

discos.forEach(element => {
    alert(`Los discos disponibles son ${element.nombre}, con una capacidad de ${element.capacidad}, en estado ${element.estado}, con un precio de $${element.precio} y su número asignado es ${element.posicion}`)
})

let eleccionDiscos = prompt("Indica el número del disco que deseas.")
let compraDiscos

switch (eleccionDiscos) {
    case "1":
        let compra = discos[0].precio
        compraDiscos = compra
        break;

    case "2":
        let compra2 = discos[1].precio
        compraDiscos = compra2
        break;

    case "3":
        let compra3 = discos[2].precio
        compraDiscos = compra3
        break;

    default:
        break;
}


// eleccion ram

rams.forEach(element => {
    alert(`La marca de las RAM disponibles es ${element.nombre}, su memoria es de ${element.memoria}GB, con una frecuencia de ${element.frecuencia}, tiene un precio de $${element.precio} y su número asignado es ${element.posicion}`)
})

let eleccionRam = prompt("Indica el número de la RAM que deseas.")
let compraRam

switch (eleccionRam) {
    case "1":
        let compra = rams[0].precio
        compraRam = compra
        break;

    case "2":
        let compra2 = rams[1].precio
        compraRam = compra2
        break;

    case "3":
        let compra3 = rams[2].precio
        compraRam = compra3
        break;

    default:
        break;
}