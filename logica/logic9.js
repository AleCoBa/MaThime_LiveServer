tr = 1
function ptja(nodo) {
    var pt = parseInt(nodo.id);
    if (pt == tr) {
        swal.fire({
            title: '¡Correcto!',
            icon: 'success',
            color: "white",
            iconColor: "rgb(76, 212, 202)",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        }).then(function () {
            window.location = ("4°1.html");
        });
    } else {
        swal.fire({
            title: 'Te has equivocado',
            icon: 'question',
            iconColor: "rgb(212, 148, 76)",
            color: "white",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        });
        document.getElementById(nodo.id).style.backgroundColor = "rgb(24, 11, 11)";
        document.getElementById(nodo.id).style.borderColor = "rgb(212, 76, 76)";
    }
}
ps = 180
function jesc(nodo) {
    var pk = parseInt(nodo.id);
    if (pk == ps) {
        swal.fire({
            title: '¡Correcto!',
            icon: 'success',
            color: "white",
            iconColor: "rgb(76, 212, 202)",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        }).then(function () {
            window.location = ("4°2.html");
        });
        document.getElementById(nodo.id).style.backgroundColor = "rgb(13, 24, 11)";
        document.getElementById(nodo.id).style.borderColor = "rgb(87, 212, 76)";
    } else {
        swal.fire({
            title: 'Te has equivocado',
            icon: 'question',
            iconColor: "rgb(212, 148, 76)",
            color: "white",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        });
        document.getElementById(nodo.id).style.backgroundColor = "rgb(24, 11, 11)";
        document.getElementById(nodo.id).style.borderColor = "rgb(212, 76, 76)";
    }
}
function asc() {
    var sds = document.getElementById("next").value;

    if (sds.length == 0) {
        swal.fire({
            title: "¡Los campos estan vacios!",
            icon: "warning",
            iconColor: "rgb(212, 76, 76)",
            background: "rgb(30, 30, 30)",
            color: "white",
        })
        document.getElementById("next").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("next").style.borderColor = "rgb(76, 212, 202)";
    } else {
        sds = parseInt(sds);

        if (sds == 39) {
            swal.fire({
                title: '¡Correcto!',
                icon: 'success',
                color: "white",
                iconColor: "rgb(76, 212, 202)",
                background: "rgb(30, 30, 30)",
                allowOutsideClick: false
            }).then(function () {
                window.location = ("eleccion4.html");
            });
        } else {
            swal.fire({
                title: "¿Estás seguro?",
                icon: "question",
                iconColor: "rgb(212, 148, 76)",
                background: "rgb(30, 30, 30)",
                color: "white",
            });
            document.getElementById("next").style.backgroundColor = "rgb(24, 11, 11)";
            document.getElementById("next").style.borderColor = "rgb(212, 76, 76)";
        }

    }
}