const formLogin = document.getElementById('formLogin')
const nombreLogin = document.getElementById('nombreLogin')
const contraLogin = document.getElementById('contraLogin')
const loginSubmit = document.getElementById('loginSubmit')
const respuestaForm = document.getElementById('respuestaForm')

const clientes = []

const clientesLS = JSON.parse(localStorage.getItem('clientes'))

for (const cliente of clientesLS) {
    clientes.push(cliente)
}



formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    buscarCliente(nombreLogin.value, contraLogin.value)
})


// con esto estoy buscando en el array los clientes previamente pusheados y que me de respuestas
const buscarCliente = (nombreUsuario, contraUsuario) => {

    const buscarNombre = clientes.find(usuario => usuario.nombre == nombreUsuario)
    const buscarContra = clientes.find(usuario => usuario.contra == contraUsuario)

        if ((buscarNombre) && (buscarContra)) {
            respuestaForm.innerText = `Bienvenido a su cuenta.`
        } else {
            respuestaForm.innerText = `Los datos ingresados no coinciden con un usuario existente.`
        }
}

