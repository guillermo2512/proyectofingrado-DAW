let datos;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        var user = JSON.parse(localStorage.getItem("user"));

        document.getElementById("user").innerHTML = user.Nombre;
        mostar();

        document.getElementById("registrar").addEventListener("click",crear);
        document.getElementById("exit").addEventListener("click", function(){
            localStorage.removeItem("user");
        });
    }
}

function mostar() 
{
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            datos = JSON.parse(this.responseText);
            var htmlstr = '';

            datos.forEach(element => {
                htmlstr += '<tr>';
                htmlstr += '<td>' + element["Titulo"] + '</td>';
                htmlstr += '<td>' + element["Precio"] + '</td>';
                htmlstr += '<td>' + element["fecha_salida"] + '</td>';
                htmlstr += '</tr>';
            });
            document.getElementById('tAdmin').innerHTML = htmlstr; 
        }
    };

    xhttp.open("GET", "php/mostrarreservas.php");
    xhttp.send();
}

function crear() 
{
    var enviar = new Object();
    enviar.titulo = document.getElementById("titulo").value;
    enviar.precio = document.getElementById("precio").value;
    enviar.fecha = document.getElementById("fecha").value;

    document.getElementById("btn").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("btn").disabled = false;
            Swal.fire({
                icon: 'success',
                title: 'Crear',
                text: 'Reserva añadida'
            });
        }
    };

    xhttp.open("GET", "php/crearreservas.php?enviar=" + myJSON);
    xhttp.send();
}












