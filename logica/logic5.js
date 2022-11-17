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