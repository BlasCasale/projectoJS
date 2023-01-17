// constructores

class Procesador {
    constructor (nombre, ghz, nucleos, hilos, precio, posicion) {
        this.nombre = nombre;
        this.ghz = ghz;
        this.nucleos = nucleos;
        this.hilos = hilos;
        this.precio = precio;
        this.posicion = posicion
    }
}

class Gpu {
    constructor (nombre, vram, pines, precio, posicion) {
        this.nombre = nombre;
        this.vram = vram;
        this.pines = pines;
        this.precio = precio;
        this.posicion = posicion
    }
}

class Disco {
    constructor (nombre, capacidad, estado, precio, posicion) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.estado = estado.toUpperCase();
        this.precio = precio;
        this.posicion = posicion
    }
}

class Ram {
    constructor (nombre, memoria, frecuencia, precio, posicion) {
        this.nombre = nombre;
        this.memoria = memoria;
        this.frecuencia = frecuencia;
        this.precio = precio;
        this.posicion = posicion
    }
}


// array vacios con sus push

const procesadores = []
const gpus = []
const discos = []
const rams = []

procesadores.push(new Procesador("Ryzen 5", 3.2, 6, 12, 15000, 1))
procesadores.push(new Procesador("Ryzen 7", 3.5, 8, 16, 25000, 2))
procesadores.push(new Procesador("Ryzen 9", 4, 10, 20, 35000, 3))

gpus.push(new  Gpu("RTX 2080", 8, 6, 50000, 1))
gpus.push(new  Gpu("RTX 3080", 8, 8, 70000, 2))
gpus.push(new  Gpu("RTX 4080", 16, 16, 130000, 3))

discos.push(new  Disco("Samsung", 1, "sdd", 3000, 1))
discos.push(new Disco("Samsung", 2, "sdd", 5000, 2))
discos.push(new  Disco("Seagate", 2, "hdd", 3400, 3))

rams.push(new Ram("Corsair", 16, 4333, 5000, 1))
rams.push(new Ram("Viper", 16, 3200, 2800, 2))


// funciones

const buscarObjeto = (array, busqueda) => {return array.find(pieza => pieza.nombre === busqueda)}
const sumarCompras = (n1, n2, n3, n4) => {return resultado = n1 + n2 + n3 + n4}
const sumarIva = (n1) => {return resultado = n1 * 1.21}
const descuentoEfectivo = (n1) => {return resultado = n1 - (n1 * 0.1)}
const cantidadCuotas = (n1, n2) => {return resultado = n1 / n2}


// bienvenida

alert("Hola, somos Mundo PC. Te vamos a mostrar las opciones que tenemos a la venta!")


// eleccion procesador

procesadores.forEach(element => {
    alert(`Los procesadores son ${element.nombre}, con ${element.ghz} Ghz, con ${element.nucleos} nucleos, con ${element.hilos} hilos, un precio de $${element.precio} y su número asignado es ${element.posicion}`)
});

let eleccionProcesador = prompt("Indica el número del procesador que deseas.")
let compraProcesador
let nombreProcesador

switch (eleccionProcesador) {
    case "1":
        let compra = procesadores[0]
        compraProcesador = compra.precio
        nombreProcesador = compra.nombre
        break;
    
    case "2":
        let compra2 = procesadores[1]
        compraProcesador = compra2.precio
        nombreProcesador = compra2.nombre
        break;
        
    case "3":
        let compra3 = procesadores[2]
        compraProcesador = compra3.precio
        nombreProcesador = compra3.nombre
        break;

    default:
        break;
}
console.log(compraProcesador)

// eleccion gpu

gpus.forEach(element => {
    alert(`Las GPU son ${element.nombre}, tiene ${element.vram}GB de VRAM, tiene ${element.pines} pines, tiene un precio $${element.precio} y su número asignado es ${element.posicion}`)
})

let eleccionGpu = prompt("Indica el número de la GPU que deseas.")
let compraGpu
let nombreGpu

switch (eleccionGpu) {
    case "1":
        let compra = gpus[0]
        compraGpu = compra.precio
        nombreGpu = compra.nombre
        break;

    case "2":
        let compra2 = gpus[1]
        compraGpu = compra2.precio
        nombreGpu = compra2.nombre
        break;

    case "3":
        let compra3 = gpus[2]
        compraGpu = compra3.precio
        nombreGpu = compra3.nombre
        break;

    default:
        break;
}
console.log(compraGpu)

// eleccion discos

discos.forEach(element => {
    alert(`Los discos disponibles son ${element.nombre}, con una capacidad de ${element.capacidad}, en estado ${element.estado}, con un precio de $${element.precio} y su número asignado es ${element.posicion}`)
})

let eleccionDiscos = prompt("Indica el número del disco que deseas.")
let compraDiscos
let nombreDiscos

switch (eleccionDiscos) {
    case "1":
        let compra = discos[0]
        compraDiscos = compra.precio
        nombreDiscos = compra.nombre
        break;

    case "2":
        let compra2 = discos[1]
        compraDiscos = compra2.precio
        nombreDiscos = compra2.nombre
        break;

    case "3":
        let compra3 = discos[2]
        compraDiscos = compra3.precio
        nombreDiscos = compra3.nombre
        break;

    default:
        break;
}
console.log(compraDiscos)


// eleccion ram

rams.forEach(element => {
    alert(`La marca de las RAM disponibles es ${element.nombre}, su memoria es de ${element.memoria}GB, con una frecuencia de ${element.frecuencia}, tiene un precio de $${element.precio} y su número asignado es ${element.posicion}`)
})

let eleccionRam = prompt("Indica el número de la RAM que deseas.")
let compraRam
let nombreRam

switch (eleccionRam) {
    case "1":
        let compra = rams[0]
        compraRam = compra.precio
        nombreRam = compra.nombre
        break;

    case "2":
        let compra2 = rams[1]
        compraRam = compra2.precio
        nombreRam = compra2.nombre
        break;

    case "3":
        let compra3 = rams[2]
        compraRam = compra3.precio
        nombreRam = compra3.nombre
        break;

    default:
        break;
}
console.log(compraRam)


// parte de la compra y el total

let compraFinal = sumarCompras(compraProcesador, compraGpu, compraDiscos, compraRam)
console.log(compraFinal)

alert(`Tu compra de procesador fue un ${nombreProcesador}, tu compra de GPU fue una ${nombreGpu}, tu compra de disco fue un ${nombreDiscos} y tu compra de RAM fue una ${nombreRam}. El total es $${compraFinal}`)

let compraConIva = sumarIva(compraFinal)
console.log(compraConIva)

alert(`Tu compra con IVA incluida suma el total de $${compraConIva}.`)


// metodo de pago y descuentos 

alert(`Indica como deseas pagar, en efectivo o en cuotas. \n En efectivo tenes un 10% de descuento. \n Con tarjeta podes hacerlo en 1, 3, 6, 9 y 12 pagos sin interes.`)

let metodoDePago = prompt("Indicanos como deseas abonar").toLowerCase()
let precioCuotas
let precioFinal


if (metodoDePago == "efectivo") {
    precioFinal = descuentoEfectivo(compraConIva)
    alert(`El precio final al abonar con efectivo es de $${precioFinal}`)    
} else if (metodoDePago == "tarjeta") {
    let cuotas = prompt("Indicanos en cuantas cuotas deseas hacerlo.")
    
    switch (cuotas) {
        case "1":
            precioCuotas = cantidadCuotas(compraConIva, cuotas)
            alert(`El importe final es de $${compraConIva} en ${cuotas} cuota/s y el valor de las cuotas es de ${precioCuotas}`)
            console.log(cuotas)
            break;
        
        case "3":
            precioCuotas = cantidadCuotas(compraConIva, cuotas)
            alert(`El importe final es de $${compraConIva} en ${cuotas} cuota/s y el valor de las cuotas es de ${precioCuotas}`)
            console.log(cuotas)
            break;

        case "6":
            precioCuotas = cantidadCuotas(compraConIva, cuotas)
            alert(`El importe final es de $${compraConIva} en ${cuotas} cuota/s y el valor de las cuotas es de ${precioCuotas}`)
            console.log(cuotas)
            break;

        case "9":
            precioCuotas = cantidadCuotas(compraConIva, cuotas)
            alert(`El importe final es de $${compraConIva} en ${cuotas} cuota/s y el valor de las cuotas es de ${precioCuotas}`)
            console.log(cuotas)
            break;
            
        case "12":
            precioCuotas = cantidadCuotas(compraConIva, cuotas)
            alert(`El importe final es de $${compraConIva} en ${cuotas} cuota/s y el valor de las cuotas es de ${precioCuotas}`)
            console.log(cuotas)
            break;

        default:
            break;
    }
}

console.log(precioFinal)
console.log(precioCuotas)

// saludo

class Cliente {
    constructor (nombre, apellido, direccion, ciudad) {
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.ciudad = ciudad
    }
}


// cliente y su array para envio

const cliente = []

cliente.push(new Cliente(prompt("Indicanos tu nombre.").toUpperCase(), prompt("Indicanos tu apellido.").toUpperCase(), prompt("Indicanos tu dirección."), prompt("Indicanos la localidad.").toUpperCase()))


cliente.forEach(element => {
    alert(`El envio se hara a nombre de ${element.nombre}, con apellido ${element.apellido}, con dirección ${element.direccion} en la localidad de ${element.ciudad}. Le llegara en 15 dias habiles. Muchas gracias por su compra!`)
});