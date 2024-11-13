// Credenciales
let usuarios = [{name: "jon", password: "123"},
                {name: "ibai", password: "123"},
                {name: "beverly", password: "123"},
                {name: "markel", password: "123"},
                {name: "daniela", password: "123"}
                ];

// Funcion que valida el inicio de sesión
function validarInicioSesion() {

    // recoge los datos que ha introducido el usuario en el formulario
    let inputName = document.getElementById("usuario");
    let inputPassword = document.getElementById("password");

    // bucle para recorrer array de usuarios
    for (let i = 0; i < usuarios.length; i++) {
        // bloque condicional que compara los datos del formulario con las credenciales
        if (inputName.value == usuarios[i].name && inputPassword.value == usuarios[i].password) {
            console.log("Valido");
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

/*
function redirigirIniciarSesion() {
    window.location.href = "../html/inciarSesion.html";
}
*/