var usuarios = [];

function registro() {

    var usuario1 = document.getElementById("user").value;
    var contraseña1 = document.getElementById("pass").value;
    var contraseña2 = document.getElementById("pass2").value;
    var email1 = document.getElementById("email").value;

    var marca = true;

    for (var i = 0; i < usuarios.length; i++) {

        if (usuarios[i].usuario == usuario1) {
            marca = false;
            break;
        }

    }

    if (contraseña1 == contraseña2 && contraseña1.length >= 3 && marca) {

        var guardarusuarios = {
            usuario: "",
            contraseña: "",
            email: "",
        }

        guardarusuarios.usuario = usuario1;
        guardarusuarios.contraseña = contraseña1;
        guardarusuarios.email = email1;

        usuarios.push(guardarusuarios);

        var usuarios_registados = JSON.stringify(usuarios);
        localStorage.setItem("usuariosr", usuarios_registados);

        swal.fire({
            title: "Usuario registrado",
            icon: "success",
            iconColor: "rgb(76, 212, 202)",
            background: "rgb(30, 30, 30)",
            color: "white",
        }).then(function () {
            window.location = ("iniciosesion2.html");
        });


    } else {
        swal.fire({
            title: "Error al registrar usuario",
            icon: "error",
            background: "rgb(30, 30, 30)",
            color: "white",
        });
    }

}

function login() {

    var usuario2 = document.getElementById("userlogin").value;
    var contraseña2 = document.getElementById("passlogin").value;
    var marca = false;


    for (var i = 0; i < usuarios.length; i++) {

        if (usuario2 == usuarios[i].usuario && contraseña2 == usuarios[i].contraseña) {
            marca = true;
            break;
        }
    }

    if (marca == false) {
        document.getElementById("p1").innerHTML = "*Usuario o contraseña incorrecto*";
    } else {
        window.location = ("eleccion4.html")
    }
}

function iniciar() {
    var ola = localStorage.getItem("usuariosr");

    if (ola != null) {
        usuarios = JSON.parse(ola);
    } else {
        usuarios = [];
    }
}

function recu() {
    var rcor = document.getElementById("userc").value;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario == rcor) {

            swal.fire({
                title: "Tu contraseña es: " + "*" + usuarios[i].contraseña + "*",
                icon: "info",
                background: "rgb(30, 30, 30)",
                color: "white",

            }).then(function () {
                window.location = ("iniciosesion2.html");
            });
            break;
        }
        else {
            swal.fire({
                title: "Usuario inexistente",
                icon: "error",
                background: "rgb(30, 30, 30)",
                color: "white",
            });
        }
    }
}

function vol(){
    window.location = ("iniciosesion2.html")
}


