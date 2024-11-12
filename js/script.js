// Credenciales
let name = "dcd";
let password = "123";

// Funcion que valida el inicio de sesión
function validarInicioSesion() {

    // recoge los datos que ha introducido el usuario en el formulario
    let inputName = document.getElementById("usuario");
    let inputPassword = document.getElementById("password");

    // bloque condicional que compara los datos del formulario con las credenciales
    if (inputName.value == name && inputPassword.value == password) {
        console.log("Valido");
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

// TODO: 
function redirigirIniciarSesion(params) {
    
}