// Credenciales
let usuarios = [{name: "jon", password: "123"},
                {name: "ibai", password: "123"},
                {name: "beverly", password: "123"},
                {name: "markel", password: "123"},
                {name: "daniela", password: "123"}
                ];


// Funcion que valida el inicio de sesión
function validarInicioSesion(evento) {

    evento.preventDefault();
    // recoge los datos que ha introducido el usuario en el formulario
    const inputName = document.getElementById("usuario");
    const inputPassword = document.getElementById("password");

    // bucle para recorrer array de usuarios
    for (let i = 0; i < usuarios.length; i++) {
        // bloque condicional que compara los datos del formulario con las credenciales
        if (inputName.value == usuarios[i].name && inputPassword.value == usuarios[i].password) {

            // Si las credenciales son correctas, guardamos un token en localStorage
            localStorage.setItem("isLoggedIn", "true");
            break;

        } else {
            console.log("No valido");
            // recoger elementos del html
            let textoError = document.getElementById("pErrorInicioSesion");
            textoError.innerHTML = "Nombre de usuario o contraseña incorrectos"; // mensaje de error en pantalla para notificar al usuario

            // vaciar inputs
            inputName.value = "";
            inputPassword.value = "";
        }
    }
    
}

function verificarSesion() {
    
}