function selg() {
    var sel = document.getElementById("sel").value;
    var div = document.getElementById("d5");

    while (div.childNodes.length > 7) {
        div.removeChild(div.lastChild);
    }

    if (sel == "1") {
        var inp = document.createElement("input");
        inp.setAttribute("id", "ts")
        inp.type = "button"
        inp.className = "b1"
        inp.value = "Los números"
        div.appendChild(inp);

        swal.fire({
            title: ' "Los números" ',
            icon: 'warning',
            iconColor: "white",
            text: '¿Estás listo/a?',
            cancelButtonText: 'No estoy listo/a',
            color: "white",
            background: "rgb(30, 30, 30)",
            confirmButtonText: 'Si, estoy listo/a',
            showCancelButton: true,
            allowOutsideClick: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = ("1°.html");
            } else {
                window.location = ("eleccion4.html");
            }
        });

    }
    if (sel == "2") {
        var inp1 = document.createElement("input");
        inp1.type = "button"
        inp1.className = "b1"
        inp1.value = "Operaciones Básicas"
        div.appendChild(inp1);

        swal.fire({
            title: ' "Operaciones Básicas" ',
            icon: 'warning',
            iconColor: "white",
            text: '¿Estás listo/a?',
            cancelButtonText: 'No estoy listo/a',
            color: "white",
            background: "rgb(30, 30, 30)",
            confirmButtonText: 'Si, estoy listo/a',
            showCancelButton: true,
            allowOutsideClick: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = ("2°.html");
            } else {
                window.location = ("eleccion4.html");
            }
        });
    }
    if (sel == "3") {
        var inp1 = document.createElement("input");
        inp1.type = "button"
        inp1.className = "b1"
        inp1.value = "Fraccionarios"
        div.appendChild(inp1);
        swal.fire({
            title: ' "Las fracciones" ',
            icon: 'warning',
            iconColor: "white",
            text: '¿Estás listo/a?',
            cancelButtonText: 'No estoy listo/a',
            color: "white",
            background: "rgb(30, 30, 30)",
            confirmButtonText: 'Si, estoy listo/a',
            showCancelButton: true,
            allowOutsideClick: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = ("3°.html");
            } else {
                window.location = ("eleccion4.html");
            }
        });
    }
    if (sel == "4") {
        var inp1 = document.createElement("input");
        inp1.type = "button"
        inp1.className = "b1"
        inp1.value = "Geometría"
        div.appendChild(inp1);

        swal.fire({
            title: ' "Geometría" ',
            icon: 'warning',
            iconColor: "white",
            text: '¿Estás listo/a?',
            cancelButtonText: 'No estoy listo/a',
            color: "white",
            background: "rgb(30, 30, 30)",
            confirmButtonText: 'Si, estoy listo/a',
            showCancelButton: true,
            allowOutsideClick: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = ("4°.html");
            } else {
                window.location = ("eleccion4.html");
            }
        });
    }
    if (sel == "5") {
        var inp1 = document.createElement("input");
        inp1.type = "button"
        inp1.className = "b1"
        inp1.value = "Ecuaciones"
        div.appendChild(inp1);

        swal.fire({
            title: ' "Ecuaciones" ',
            icon: 'warning',
            iconColor: "white",
            text: '¿Estás listo/a?',
            cancelButtonText: 'No estoy listo/a',
            color: "white",
            background: "rgb(30, 30, 30)",
            confirmButtonText: 'Si, estoy listo/a',
            showCancelButton: true,
            allowOutsideClick: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = ("5°.html");
            } else {
                window.location = ("eleccion4.html");
            }
        });
    }
}