class Pintura {
    constructor (marca, material, precio) {
        this.marca = marca
        this.material = material
        this.precio = precio
    }
    calcularPrecio () {
        return this.precio *= this.calcularSuperficie()
    }
    calcularSuperficie () {
        let ancho = prompt("indica el ancho de la pared")
        let alto = prompt("indica el alto de la pared")
        return ancho *= alto
    }
}

const latexExterior = new Pintura ("ligantex", "latex exterior" , 1500)
const latexInterior = new Pintura ("ligantex", "latex interior", 2500)

let compra = latexExterior.calcularPrecio()
console.log(compra)