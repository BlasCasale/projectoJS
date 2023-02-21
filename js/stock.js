const productos = []

const productosLS = JSON.parse(localStorage.getItem('productos'))

class Producto {
    constructor (nombre, categoria, img, precio, id) {
        this.nombre = nombre.toUpperCase()
        this.categoria = categoria
        this.img = img
        this.precio = precio
        this.id = id
    }
}

const ryzen5 = new Producto ("Ryzen 5", "procesador", 'img/ryzen5__4500.webp', 16000, 1)
const ryzen7 = new Producto ("Ryzen 7", "procesador", 'img/rzyen7__5700G.webp', 18500, 2)
const ryzen9 = new Producto ("Ryzen 9", "procesador", 'img/ryzen9__5900x.webp', 21000, 3)
const motherB450m = new Producto ("Mother B450M", "mother", 'img/mother__b450m.webp', 14000, 4)
const motherB550 = new Producto ("Mother B500", "mother", 'img/mother__b550.webp', 16000, 5)
const motherX570 = new Producto ("Mother X570", "mother", 'img/mother__x570.webp', 19500, 6)
const rtx2080 = new Producto ('RTX 2080', "gpu", 'img/rtx2080.webp', 28000, 7)
const rtx3080 = new Producto ('RTX 3080', "gpu", 'img/rtx3080.webp', 33500, 8)
const rtx4080 = new Producto ('RTX 4080', "gpu", 'img/rtx4080.webp', 38000, 9)
const ramKingston = new Producto ('RAM Kingston', "ram", 'img/ram__kingston8gb.webp', 3500, 10)
const ramCorsair = new Producto ('RAM Corsair', "ram", 'img/ram__corsiar8gb.webp', 4500, 11)
const ramViper = new Producto ('RAM Viper', "ram", 'img/ram__viper16gb.webp', 6000, 12)
const hdd1TB = new Producto ('Disco HDD 1TB','discos', 'img/discoHDD1TB.webp', 4700, 13)
const hdd2TB = new Producto ('Disco HDD 2TB','discos', 'img/discoHDD2TB.webp', 5250, 14)
const sdd1TB = new Producto ('Disco SDD 1TB','discos', 'img/discoSDD1TB.webp', 7550, 15)
const sdd2TB = new Producto ('Disco SDD 2TB','discos', 'img/discoSDD1TB.webp', 9750, 16)


productos.push(ryzen5, ryzen7, ryzen9, motherB450m, motherB550, motherX570, rtx2080, rtx3080, rtx4080, ramKingston, ramCorsair, ramViper, hdd1TB, hdd2TB, sdd1TB, sdd2TB)

const productosJSON = JSON.stringify(productos)
localStorage.setItem('productos', productosJSON)