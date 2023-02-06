const formLogin = document.getElementById('formLogin')
const nombreLogin = document.getElementById('nombreLogin')
const contralLogin = document.getElementById('contralLogin')
const loginSubmit = document.getElementById('loginSubmit')
const respuestaForm = document.getElementById('respuestaForm')

let clientes = []

const clientesLS = JSON.parse(localStorage.getItem('clientes'))

if (clientesLS) {
    clientes = clientesLS
}




formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    buscarCliente(nombreLogin.value, contralLogin.value)
})


// con esto estoy buscando en el array los clientes previamente pusheados y que me de respuestas
const buscarCliente = (nombreUsuario, contraUsuario) => {

    const buscarNombre = clientes.find(usuario => usuario.nombre == nombreUsuario)
    const buscarContra = clientes.find(usuario => usuario.contra == contraUsuario)

        if ((buscarNombre) && (buscarContra)) {
            respuestaForm.innerHTML = `Bienvenido a su cuenta.`
        } else {
            respuestaForm.innerText = `Los datos ingresados no coinciden con un usuario existente.`
            // for (let index = 3; index > 0; index--) {
            //     respuestaForm.innerText = `Los datos ingresados no coinciden con un usuario existente.\n Te quedan ${index} intentos.`
                // if (index = 0) {
                //     respuestaForm.innerText = `No te quedan mas itentos.`
                // }
                // aca intente hacer un contador pero no me funcionaba de ninguna manera, quisiera encontrarle la solucion
            // }
        }
}

