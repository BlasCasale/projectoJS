const productos = []

class Producto {
    constructor (nombre, img, precio, id) {
        this.nombre = nombre
        this.img = img
        this.precio = precio
        this.id = id
    }
}

const ryzen5 = new Producto ("Ryzen 5", 'img/ryzen5__4500.webp', 16000, 1)
const ryzen7 = new Producto ("Ryzen 7", 'img/rzyen7__5700G.webp', 18500, 2)
const ryzen9 = new Producto ("Ryzen 9", 'img/ryzen9__5900x.webp', 21000, 3)
const motherB450m = new Producto ("Mother B450M", 'img/mother__b450m.webp', 14000, 4)
const motherB550 = new Producto ("Mother B500", 'img/mother__b550.webp', 16000, 5)
const motherX570 = new Producto ("Mother X570", 'img/mother__x570.webp', 19500, 6)
const rtx2080 = new Producto ('RTX 2080', 'img/rtx2080.webp', 28000, 7)
const rtx3080 = new Producto ('RTX 3080', 'img/rtx3080.webp', 33500, 8)
const rtx4080 = new Producto ('RTX 4080', 'img/rtx4080.webp', 38000, 9)
const ramKingston = new Producto ('RAM Kingston', 'img/ram__kingston8gb.webp', 3500, 10)
const ramCorsair = new Producto ('RAM Corsair', 'img/ram__corsiar8gb.webp', 4500, 11)
const ramViper = new Producto ('RAM Viper', 'img/ram__viper16gb.webp', 6000, 12)
const hdd1TB = new Producto ('Disco HDD 1TB', 'img/discoHDD1TB.webp', 4700, 13)
const hdd2TB = new Producto ('Disco HDD 2TB', 'img/discoHDD2TB.webp', 5250, 14)
const sdd1TB = new Producto ('Disco SDD 1TB', 'img/discoSDD1TB.webp', 7550, 15)
const sdd2TB = new Producto ('Disco SDD 2TB', 'img/discoSDD1TB.webp', 9750, 16)


productos.push(ryzen5, ryzen7, ryzen9, motherB450m, motherB550, motherX570, rtx2080, rtx3080, rtx4080, ramKingston, ramCorsair, ramViper, hdd1TB, hdd2TB, sdd1TB, sdd2TB)