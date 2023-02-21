const formRegistro = document.getElementById('formRegistro')
const nombreRegistro = document.getElementById('nombreRegistro')
const contraRegistro = document.getElementById('contraRegistro')
const btnSubmit = document.getElementById('btnSubmit')
const registroForm = document.getElementById('registroForm')


const clientes = []

const clientesLS = JSON.parse(localStorage.getItem('clientes'))

clientes.concat(clientesLS)

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

// con esta funcion lo que quiero hacer es buscar dentro del array si existe ese usuario ingresado con ese mismo nombre para ver si lo creo o no
const buscarCliente = (nombreUsuario) => {

    const buscarNombre = clientes.find(usuario => usuario.nombre == nombreUsuario)

    if (buscarNombre) {

        registroForm.innerText = `Ya existe nombre para ese usuario`
        
    }else  {

        clientes.push(new Cliente(nombreRegistro.value, contraRegistro.value))

        const clientesJSON = JSON.stringify(clientes)
        localStorage.setItem('clientes', clientesJSON)

        nombreRegistro.value = ""
        contraRegistro.value = ""

        registroForm.innerText = `Usuario registrado exitosamente.`

    }
}

