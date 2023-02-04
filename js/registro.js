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

    buscarCliente(nombreRegistro.value)
})

const buscarCliente = (nombreUsuario) => {

    const buscarNombre = clientes.find(usuario => usuario.nombre == nombreUsuario)
 
    console.log(buscarNombre)

    if (nombreRegistro.value == buscarNombre) {

        registroForm.innerText = `Ya existe nombre para ese usuario`
        
    }else if (nombreRegistro.value != buscarNombre) {
        
        clientes.push(new Cliente(nombreRegistro.value, contraRegistro.value))

        const clientesJSON = JSON.stringify(clientes)
        localStorage.setItem('clientes', clientesJSON)

        nombreRegistro.value = ""
        contraRegistro.value = ""

        registroForm.innerText = `Usuario registrado exitosamente.`
    }
}
console.log(clientes)

