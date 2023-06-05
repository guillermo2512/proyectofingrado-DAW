document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        var user = JSON.parse(localStorage.getItem("user"));

        if (localStorage.getItem("user") == null) 
        {
            window.location = "http://localhost/Proyecto%20fin%20de%20grado%20definitivo/admin/index.html";

        }else if(user.usuario != "admin")
        {
            document.getElementById("nuevo").style.display = "none";
            document.getElementById("pagos").style.display = "none";
            document.getElementById("tbmodificar").style.display = "none";
            document.getElementById("tborrar").style.display = "none";
            mostar();
        }
        else{
            mostaradmin();
        }

        document.getElementById("user").innerHTML = user.Nombre;
        document.getElementById("registrar").addEventListener("click", crear);
        document.getElementById("Modificar").addEventListener("click", modificar);
        document.getElementById("borrar").addEventListener("click", borrar);
        
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
                htmlstr += '<td>' + element["Cantidad"] + '</td>';
                htmlstr += '</tr>';
            });
            document.getElementById('tAdmin').innerHTML = htmlstr; 
        }
    };

    xhttp.open("GET", "php/mostrar.php");
    xhttp.send();
}

function mostaradmin() 
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
                htmlstr += '<td><button onclick="cargarModificacion(' + element["Id"] + ')" type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modificarproducto"><i class="fas fa-user-edit"></i></button></td>';
                htmlstr += '<td><button id="borrar" onclick="borrar(' + element["Id"] + ')" type="button" class="btn btn-danger"><i class="fas fa-user-edit"></i></button></td>';
                htmlstr += '</tr>';
            });
            document.getElementById('tAdmin').innerHTML = htmlstr; 
        }
    };

    xhttp.open("GET", "php/mostrar.php");
    xhttp.send();
}

function crear() 
{
    var enviar = new Object();
    enviar.id_articulo = id_articulo;
    enviar.titulo = document.getElementById("titulo").value;
    enviar.precio = document.getElementById("precio").value;
    enviar.cantidad = locdocument.getElementById("cantidad").value;

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
                text: 'Articulo añadido'
            });
        }
    };

    xhttp.open("GET", "php/crear.php?enviar=" + myJSON);
    xhttp.send();
}

function cargarModificacion(Id) {
    const reserva = datos.filter(item => parseInt(item.Id) === Id);
    var htmlstr = '';

    reserva.forEach(element => {
        htmlstr += '<label for="idID">ID</label>';
        htmlstr += '<input id="Id" class="form-control" type="text" placeholder="IdArticulo" value="' + Id + '" disabled>' + '<br>';
        htmlstr += '<label for="idID">Titulo</label>'
        htmlstr += '<input type="text" class="form-control" id="Titulo" placeholder="Titulo" value="' + element["Titulo"] + '">' + '<br>';
        htmlstr += '<label for="idCodigo">Precio</label>';
        htmlstr += '<input type="text" class="form-control" id="Precio" placeholder="Precio" value="' + element["Precio"] + '">' + '<br>';
        htmlstr += '<label for="idCodigo">Cantidad</label>';
        htmlstr += '<input type="text" class="form-control" id="cantidad" placeholder="fecha_salida" value="' + element["Cantidad"] + '">';
    });

    document.getElementById('modificardatos').innerHTML = htmlstr;

}

function modificar() {
    var enviar = new Object();
    enviar.id = document.getElementById("Id").value;
    enviar.titulo = document.getElementById("Titulo").value;
    enviar.precio = document.getElementById("Precio").value;
    enviar.fecha = document.getElementById("cantidad").value;

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
                    text: 'El producto no se puede modificar'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Modificar',
                    text: 'El producto modificado'
                });
            }
        }
    };

    xhttp.open("GET", "php/modificar.php?enviar=" + myJSON);
    xhttp.send();
}

function borrar(id) 
{
    Swal.fire({
        title: 'Estas seguro de borrar este producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.isConfirmed) 
        {
            var enviar = new Object();
            enviar.id = id;
        
            document.getElementById("borrar").disabled = true;
        
            var myJSON = JSON.stringify(enviar);
        
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("borrar").disabled = false;
                    var respuesta = this.responseText;
                    if (respuesta == 1) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'El producto no se puede borrar'
                        });
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Borrar',
                            text: 'El Producto borrado'
                        });
                    }
                }
            };
        
            //xhttp.open("GET", "php/borrar.php?enviar=" + myJSON);
            //xhttp.send();
        }
      });
}












