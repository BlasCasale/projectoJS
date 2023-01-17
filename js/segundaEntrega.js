class Procesador {
    constructor (nombre, ghz, nucleos, hilos, precio) {
        this.nombre = nombre;
        this.ghz = ghz;
        this.nucleos = nucleos;
        this.hilos = hilos;
        this.precio = precio;
    }
}

class Gpu {
    constructor (nombre, vram, pines, precio) {
        this.nombre = nombre;
        this.vram = vram;
        this.pines = pines;
        this.precio = precio;
    }
}

class Disco {
    constructor (nombre, capacidad, estado, precio) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.estado = estado.toUpperCase();
        this.precio = precio;
    }
}

class Ram {
    constructor (nombre, memoria, frecuencia, precio) {
        this.nombre = nombre;
        this.memoria = memoria;
        this.frecuencia = frecuencia;
        this.precio = precio;
    }
}

const procesadores = []
const gpus = []
const discos = []
const rams = []

procesadores.push(new Procesador("Ryzen 5", 3.2, 6, 12, 15000))
procesadores.push(new Procesador("Ryzen 7", 3.5, 8, 16, 25000))
procesadores.push(new Procesador("Ryzen 9", 4, 10, 20, 35000))

gpus.push(new  Gpu("RTX 2080", 8, 6, 50000))
gpus.push(new  Gpu("RTX 3080", 8, 8, 70000))
gpus.push(new  Gpu("RTX 4080", 16, 16, 130000))

discos.push(new  Disco("Samsung", 1, "sdd", 3000))
discos.push(new Disco("Samsung", 2, "sdd", 5000))
discos.push(new  Disco("Seagate", 2, "hdd", 3400))

rams.push(new Ram("Corsair", 16, 4333, 5000))
rams.push(new Ram("Viper", 16, 3200, 2800))

const buscarObjeto = (array, busqueda) => {return array.find(pieza => pieza.nombre === busqueda)}
const sumarCompras = (n1, n2, n3, n4) => {return resultado = n1 + n2 + n3 + n4}
const sumarIva = (n1) => {return resultado = n1 * 1.21}
const descuentoEfectivo = (n1) => {return resultado = n1 - (n1 * 0.1)}
const cuotas = (n1, n2) => {return resultado = n1 / n2}

alert("Hola, somos Mundo PC. Te vamos a mostrar las opciones que tenemos a la venta!")



