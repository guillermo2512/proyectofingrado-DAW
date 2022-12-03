let datos;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        document,getElementById("user").innerHTML = localStorage.getItem("user");
        mostar();
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
                htmlstr += '<td>' + element["Cantidad"] + '</td>';
                htmlstr += '</tr>';
            });
            document.getElementById('tAdmin').innerHTML = htmlstr; 
        }
    };

    xhttp.open("GET", "php/mostrar.php");
    xhttp.send();
}

var Buttons = document.querySelectorAll('button.editar');

Buttons.forEach(function (item) {
    item.addEventListener('click', function () {

    console.log(item);
        const id = parseInt(item.dataset.id);
        const precio = item.dataset.precio;
        const titulo = item.dataset.titulo;

    });
});

function crear() 
{
    var enviar = new Object();
    enviar.id_articulo = id_articulo;
    enviar.titulo = document.getElementById("apellidos").value;
    enviar.precio = document.getElementById("mail1").value;
    enviar.cantidad = localStorage.getItem('articulos');

    document.getElementById("btn").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("btn").disabled = false;
            Swal.fire({
                icon: 'success',
                title: 'Borrado',
                text: 'Cliente borrado con exito'
            });
        }
    };

    xhttp.open("GET", "php/editar.php");
    xhttp.send();
}

function borrar() 
{
    var boton = document.getElementsByTagName("editar");

    boton.forEach(function (item) 
    {
        item.addEventListener('click', function () 
        {
            console.log(item);
        });
    });

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            Swal.fire({
                icon: 'success',
                title: 'Borrado',
                text: 'Cliente borrado con exito'
            });
        }
    };

    xhttp.open("GET", "php/borrar.php");
    xhttp.send();
}












