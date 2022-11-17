var tr = 3;

function seguir(nodo) {
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
            window.location = ("1°2.html");
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

    }
}

var tr = 2;
function alinear(nodo) {
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
            window.location = ("1°3.html");
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
        document.getElementById(nodo.id).style.color = "rgb(212, 76, 76)";
    }
}

var ter = 4;
function finiquito(nodo) {
    var pr = parseFloat(nodo.id);
    
    if (pr == ter) {
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
            title: 'Te has equivocado',
            icon: 'question',
            color: "white",
            iconColor: "rgb(212, 148, 76)",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        });

        document.getElementById(nodo.id).style.backgroundColor = "rgb(24, 11, 11)";
        document.getElementById(nodo.id).style.borderColor = "rgb(212, 76, 76)";
    }
}