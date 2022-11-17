function change() {
    var sup = document.getElementById("next").value;
    var sub = document.getElementById("naxt").value;

    if (sup.length == 0 && sub.length == 0) {
        swal.fire({
            title: "¡Los campos estan vacios!",
            icon: "warning",
            iconColor: "rgb(212, 76, 76)",
            background: "rgb(30, 30, 30)",
            color: "white",
        })
        document.getElementById("next").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("next").style.borderColor = "rgb(76, 212, 202)";

        document.getElementById("naxt").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("naxt").style.borderColor = "rgb(76, 212, 202)";
    }
    else {
        sup = parseInt(sup);
        sub = parseInt(sub);

        if (sup == 43 && sub == 35) {
            swal.fire({
                title: '¡Correcto!',
                icon: 'success',
                color: "white",
                iconColor: "rgb(76, 212, 202)",
                background: "rgb(30, 30, 30)",
                allowOutsideClick: false
            }).then(function () {
                window.location = ("3°1.html");
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

            document.getElementById("naxt").style.backgroundColor = "rgb(24, 11, 11)";
            document.getElementById("naxt").style.borderColor = "rgb(212, 76, 76)";
        }
    }

}

function car() {
    var sup = document.getElementById("next").value;
    var sub = document.getElementById("naxt").value;

    if (sup.length == 0 && sub.length == 0) {
        swal.fire({
            title: "¡Los campos estan vacios!",
            icon: "warning",
            iconColor: "rgb(212, 76, 76)",
            background: "rgb(30, 30, 30)",
            color: "white",
        })
        document.getElementById("next").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("next").style.borderColor = "rgb(76, 212, 202)";

        document.getElementById("naxt").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("naxt").style.borderColor = "rgb(76, 212, 202)";
    } else {
        sup = parseInt(sup);
        sub = parseInt(sub);

        if (sup == 57 && sub == 135) {
            swal.fire({
                title: '¡Correcto!',
                icon: 'success',
                color: "white",
                iconColor: "rgb(76, 212, 202)",
                background: "rgb(30, 30, 30)",
                allowOutsideClick: false
            }).then(function () {
                window.location = ("3°2.html");
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

            document.getElementById("naxt").style.backgroundColor = "rgb(24, 11, 11)";
            document.getElementById("naxt").style.borderColor = "rgb(212, 76, 76)";
        }
    }

}

function ahh() {
    var sup = document.getElementById("next").value;
    var sub = document.getElementById("naxt").value;

    if (sup.length == 0 && sub.length == 0) {
        swal.fire({
            title: "¡Los campos estan vacios!",
            icon: "warning",
            iconColor: "rgb(212, 76, 76)",
            background: "rgb(30, 30, 30)",
            color: "white",
        })
        document.getElementById("next").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("next").style.borderColor = "rgb(76, 212, 202)";

        document.getElementById("naxt").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("naxt").style.borderColor = "rgb(76, 212, 202)";
    } else {
        sup = parseInt(sup);
        sub = parseInt(sub);

        if (sup == 21 && sub == 32) {
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

            document.getElementById("naxt").style.backgroundColor = "rgb(24, 11, 11)";
            document.getElementById("naxt").style.borderColor = "rgb(212, 76, 76)";
        }
    }
}

var cuenta = 2;

function alinear(nodo) {
    var num = parseInt(nodo.id);

    if (num != cuenta) {
        document.getElementById(nodo.id).style.backgroundColor = "rgb(24, 11, 11)";
        document.getElementById(nodo.id).style.borderColor = "rgb(212, 76, 76)";
    }

    if (num == cuenta) {
        document.getElementById(nodo.id).style.backgroundColor = "rgb(13, 24, 11)";
        document.getElementById(nodo.id).style.borderColor = "rgb(87, 212, 76)";

        if (num == 2) {
            cuenta = cuenta + 1
        }
        else {
            cuenta = cuenta + 2
        }

        if (num == 7) {
            swal.fire({
                title: '¡Correcto!',
                icon: 'success',
                color: "white",
                iconColor: "rgb(76, 212, 202)",
                background: "rgb(30, 30, 30)",
                allowOutsideClick: false
            }).then(function () {
                window.location = ("2°3.html");
            });
            for (var i = 1; i < 10; i++) {
                document.getElementById(i).style.backgroundColor = "initial";
            }
        }
    } else {
        swal.fire({
            title: 'Te has equivocado',
            icon: 'question',
            color: "white",
            iconColor: "rgb(212, 148, 76)",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false,
        });
    }
}

var tr = 630;
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
            window.location = ("2°2.html");
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



var ter = 3.5;
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

function ult() {
    var sup = document.getElementById("next").value;
    var sub = document.getElementById("naxt").value;
    var sib = document.getElementById("nixt").value;

    if (sup.length == 0 && sub.length == 0) {
        swal.fire({
            title: "¡Los campos estan vacios!",
            icon: "warning",
            iconColor: "rgb(212, 76, 76)",
            background: "rgb(30, 30, 30)",
            color: "white",
        })
        document.getElementById("next").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("next").style.borderColor = "rgb(76, 212, 202)";

        document.getElementById("naxt").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("naxt").style.borderColor = "rgb(76, 212, 202)";

        document.getElementById("nixt").style.backgroundColor = "rgb(25, 49, 48)";
        document.getElementById("nixt").style.borderColor = "rgb(76, 212, 202)";
    } else {


        if (sup == "2x = 8 - 4" && sub == "x = 4 / 2" && sib == "x = 2") {
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

            document.getElementById("naxt").style.backgroundColor = "rgb(24, 11, 11)";
            document.getElementById("naxt").style.borderColor = "rgb(212, 76, 76)";

            document.getElementById("nixt").style.backgroundColor = "rgb(24, 11, 11)";
            document.getElementById("nixt").style.borderColor = "rgb(212, 76, 76)";
        }
    }
}