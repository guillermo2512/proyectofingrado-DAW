let datos = [];

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        var user = JSON.parse(localStorage.getItem("user"));

        document.getElementById("user").innerHTML = user.Nombre;
        mostar();

        document.getElementById("registrar").addEventListener("click", crear);
        document.getElementById("Modificar").addEventListener("click", modificar);
        document.getElementById("exit").addEventListener("click", function () {
            localStorage.removeItem("user");
        });
    }
}

function mostar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            var htmlstr = '';

            datos.forEach(element => {
                htmlstr += '<tr>';
                htmlstr += '<td>' + element["Titulo"] + '</td>';
                htmlstr += '<td>' + element["Precio"] + '</td>';
                htmlstr += '<td>' + element["Fecha_Salida"] + '</td>';
                htmlstr += '<td><button onclick="cargarModificacion(' + element["Id"] + ')" type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modificarreserva"><i class="fas fa-user-edit"></i></button></td>';
                htmlstr += '</tr>';
            });
            document.getElementById('tAdmin').innerHTML = htmlstr;
        }
    };

    xhttp.open("GET", "php/mostrarreservas.php");
    xhttp.send();
}

function crear() {
    var enviar = new Object();
    enviar.titulo = document.getElementById("titulo").value;
    enviar.precio = document.getElementById("precio").value;
    enviar.fecha = document.getElementById("fecha").value;

    document.getElementById("registrar").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("registrar").disabled = false;
            var respuesta = this.responseText;
            if (respuesta == 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La reserva no se puede añadir'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Crear',
                    text: 'Reserva añadida'
                });
            }
        }
    };

    xhttp.open("GET", "php/crearreservas.php?enviar=" + myJSON);
    xhttp.send();
}

function cargarModificacion(Id) {
    const reserva = datos.filter(item => parseInt(item.Id) === Id);
    var htmlstr = '';

    reserva.forEach(element => {
        htmlstr += '<label for="idID">ID</label>';
        htmlstr += '<input id="IdArticulo" class="form-control" type="text" placeholder="Id Articulo" value="' + Id + '" disabled>' + '<br>';
        htmlstr += '<label for="idID">Titulo</label>'
        htmlstr += '<input type="text" class="form-control" id="Titulo" placeholder="Titulo" value="' + element["Titulo"] + '">' + '<br>';
        htmlstr += '<label for="idCodigo">Precio</label>';
        htmlstr += '<input type="text" class="form-control" id="Precio" placeholder="Precio" value="' + element["Precio"] + '">' + '<br>';
        htmlstr += '<label for="idCodigo">fecha de salida</label>';
        htmlstr += '<input type="text" class="form-control" id="fecha_salida" placeholder="fecha_salida" value="' + element["Fecha_Salida"] + '">';
    });

    document.getElementById('modificardatos').innerHTML = htmlstr;

}

function modificar() {
    var enviar = new Object();
    enviar.id = document.getElementById("IdArticulo").value;
    enviar.titulo = document.getElementById("Titulo").value;
    enviar.precio = document.getElementById("Precio").value;
    enviar.fecha = document.getElementById("fecha_salida").value;

    document.getElementById("Modificar").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Modificar").disabled = false;
            var respuesta = this.responseText;
            if (respuesta == 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La reserva no se puede modificar'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Modificar',
                    text: 'La reserva modificada'
                });
            }
        }
    };

    xhttp.open("GET", "php/modificareservas.php?enviar=" + myJSON);
    xhttp.send();
}












