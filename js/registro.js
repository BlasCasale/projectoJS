const formRegistro = document.getElementById('formRegistro')
const nombreRegistro = document.getElementById('nombreRegistro')
const contraRegistro = document.getElementById('contraRegistro')
const btnSubmit = document.getElementById('btnSubmit')
const registroForm = document.getElementById('registroForm')



let clientes = []

const clientesLS = JSON.parse(localStorage.getItem('clientes'))

if (clientesLS) {
    clientes = clientesLS
}

class Cliente {
    constructor (nombre, contra) {
        this.nombre = nombre
        this.contra = contra
    }
}

// evento del formulario

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()

    for (let {nombre: n} of clientes) {
        if (nombreRegistro.value != n) {

            clientes.push(new Cliente(nombreRegistro.value, contraRegistro.value))
    
            const clientesJSON = JSON.stringify(clientes)
            localStorage.setItem('clientes', clientesJSON)

            registroForm.innerText = `Usuario registrado exitosamente.`
            
        }else {

            registroForm.innerText = `Ya existe nombre para ese usuario`
            
        }
        console.log(n)
    }
})

console.log(clientes)

