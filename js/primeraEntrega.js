// simulador entrega 1

alert("Bienvenido a Mundo Gamer! Hoy vamos a mostrarte los combos que tenemos disponibles para vos. \n Comencemos!")

alert("Aca te dejamos las opciones:\n 1) Combo económico: Ryzen 5, mother AM4 AMD, GTX 1060 y 8 GB RAM. Precio $140.000. \n 2) Combo inicial: Ryzen 5, mother AM4 AMD, RTX 2060 Super y 16 GB RAM. Precio $220.000. \n 3) Combo medio: I9, mother AM4 Intel, RTX 3080 TI, 16 GB RAM. Precio $450.000. \n 4) Combo premium: I9, mother AM4 Intel, RTX 4090 TUF, 32 GB RAM. Precio $750.000")

let combo = prompt("Indicanos cual combo te gusto (con numeros):")
let precioAPagar = Number

switch (combo) {
    case "1":
        precioAPagar = 140000
        console.log(precioAPagar)
        break;

    case "2":
        precioAPagar = 220000
        console.log(precioAPagar)
        break;
    
    case "3":
        precioAPagar = 450000
        console.log(precioAPagar)
        break;
    case "4":
        precioAPagar = 750000
        console.log(precioAPagar)
        break;

    default:
        break;
}

console.log(precioAPagar)

alert("Como queres abonar? \n En efectivo tenes un 10% de descuento y con tarjeta tenes 1, 3 o 6 cuotas sin interes.")

let metodoPago = prompt("Indicanos como queres pagar:")
let efectivo = "efectivo" || "Efectivo"
let tarjeta = "tarjeta" || "Tarjeta"
let total = Number

let descuento = (n1) => {return resultado = n1 - (n1 * 0.1) }
let cuota1 = (n1, n2) => {return resultado = n1 / n2}
let cuota3 = (n1, n2) => {return resultado = n1 / n2}
let cuota6 = (n1, n2) => {return resultado = n1 / n2}

if (efectivo == metodoPago) {
    total = descuento(precioAPagar)
        alert("Tu total a pagar es $" + total)
        console.log(total)
} else if (tarjeta == metodoPago) {
    
    let cuotas = prompt("En cuantas cuotas queres pagar? En 1, 3 o 6 (respuesta con numeros).")
    switch (cuotas) {
        case "1":
            total = cuota1(precioAPagar, 1)
            alert("El precio a pagar es $" + precioAPagar + ", en 1 cuota de $" + total)
            console.log(total)
            break;
        
        case "3":
            total = cuota3(precioAPagar, 3)
            alert("El precio a pagar es $" + precioAPagar + ", en 3 cuotas de $" + total)
            console.log(total)
            break;
        
        case "6":
            total = cuota6(precioAPagar, 6)
            alert("El precio a pagar es $" + precioAPagar + ", en 6 cuotas de $" + total)
            console.log(total)
            break;
    
    default:
        break;
    }
}

let nombre = prompt("Indicanos tu nombre para registrar el pedido.")
let apellido = prompt("Indicanos tu apellido para registrar el pedido")
const dni = prompt("Indicanos tu DNI para registrar el pedido.")
let direccion = prompt("Indicanos tu dirección para hacer el envio.")
const ciudad = prompt("Indicanos tu ciudad.")
let correo = prompt("Indicanos cual corre queres que te entregue el paquete (correo argentino, correo andreani).")

alert("El pedido esta hecho a nombre de " + nombre + " " + apellido + " con DNI n°" + dni + " y dirección " + direccion + " en la ciudad de " + ciudad + ".")
alert("Gracias por tu compra! Te llegara en 7 dias habiles por el " + correo + ".")