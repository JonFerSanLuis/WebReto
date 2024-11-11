// Credenciales
let name = "dcd";
let password = "123";

// Funcion que valida el inicio de sesión
function validarInicioSesion() {
    // recoge los datos que ha introducido el usuario en el formulario
    let inputName = document.getElementById("usuario").value;
    let inputPassword = document.getElementById("password").value;

    // bloque condicional que compara los datos del formulario con las credenciales
    if (inputName == name && inputPassword == password) {
        console.log("Valido");
    } else {
        console.log("No valido");
    }
}