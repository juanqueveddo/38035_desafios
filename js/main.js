// FUNCION GENERAL
function usuario() {
    // DATOS DE LOS INPUTS
    const datos = [
        { crearNombre: document.getElementById("crearNombre").value },
        { crearPass: document.getElementById("crearPassword").value },
        { nombre: document.getElementById("nombre").value },
        { pass: document.getElementById("password").value },
    ]
    // INFO DATOS
    const info = [
        { infoRegister: document.getElementsByClassName("infoRegister")[0] },
        { infoLogin: document.getElementsByClassName("infoLogin")[0] }
    ]
    const divRegister = document.getElementsByClassName("display__register")[0];
    const divLogin = document.getElementsByClassName("display__login")[0];
    // REGISTER
    function register() {
        // VALIDACION
        if (datos[0].crearNombre.length == 0 || datos[1].crearPass.length == 0) {
            info[0].infoRegister.style.color = "red"
            info[0].infoRegister.style.fontWeight = "bold"
            info[0].infoRegister.style.marginTop = "10px"
            info[0].infoRegister.innerText = "Hay datos incompletos"
            return
        }
        if (datos[1].crearPass.length < 8) {
            info[0].infoRegister.style.color = "red"
            info[0].infoRegister.style.fontWeight = "bold"
            info[0].infoRegister.style.marginTop = "10px"
            info[0].infoRegister.innerText = "Su contraseña debe tener mas de 8 caracteres"
        } else {
            divRegister.style.display = "none"
            info[0].infoRegister.style.color = "green"
            info[0].infoRegister.style.fontWeight = "bold"
            info[0].infoRegister.style.marginTop = "10px"
            info[0].infoRegister.innerText = "El usuario ha sido creado correctamente"
            divLogin.style.display = "inline"
        }
    }
    // LOGIN
    function login() {
        // VALIDACION
        if (datos[2].nombre.length == 0 || datos[3].pass.length == 0) {
            return
        } else {
            if (datos[0].crearNombre == datos[2].nombre && datos[1].crearPass == datos[3].pass) {
                info[1].infoLogin.style.color = "green"
                info[1].infoLogin.style.fontWeight = "bold"
                info[1].infoLogin.style.marginTop = "10px"
                info[1].infoLogin.innerText = "Login exitoso"
            } else {
                info[1].infoLogin.style.color = "red"
                info[1].infoLogin.style.fontWeight = "bold"
                info[1].infoLogin.style.marginTop = "10px"
                info[1].infoLogin.innerText = "Login incorrecto o usuario no registrado"
            }
        }
    }
    // DEVUELVE LAS DOS FUNCIONES
    return {
        register,
        login
    }
}