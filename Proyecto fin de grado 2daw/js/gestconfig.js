var usuario;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        usuario = JSON.parse(localStorage.getItem('usuario'));
        cargardatos();
        document.getElementById("guardar").addEventListener("click", actualizar);
        document.getElementById("eliminar").addEventListener("click", borrar);
    }
}

function cargardatos() {
    var enviar = new Object();
    enviar.id = usuario.id;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var datos = JSON.parse(this.responseText);
            if (datos == 1);
            else 
            {
                document.getElementById("nombre").value = datos.Nombre;
                document.getElementById("email").value = datos.Email;
                document.getElementById("usuario").value = datos.Usuario;
                document.getElementById("fecha").value = datos.Fecha_Alta;
            }
        }
    };

    xhttp.open("GET", "PHP/cargarconfig.php?enviar=" + myJSON);
    xhttp.send();
}


function actualizar() 
{
    var enviar = new Object();
    enviar.id = usuario.id;
    enviar.nombre = document.getElementById("nombre").value;
    enviar.email = document.getElementById("email").value;
    enviar.usuario = document.getElementById("usuario").value;
    enviar.fecha = usuario.fecha;

    document.getElementById("guardar").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("guardar").disabled = false;
            var respuesta = this.responseText;
            if (respuesta == 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Los datos de usuario no se han podido modificar'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Actualizacion Usuario',
                    text: 'Los datos de usuario se han modificado correctamente'
                });
                setInterval(function () { location.reload() }, 4000);
            }
        }
    };
    xhttp.open("GET", "PHP/gestconfig.php?enviar=" + myJSON);
    xhttp.send();
}

function borrar() {
    Swal.fire({
        title: 'Estas seguro de borrar este producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            var enviar = new Object();
            enviar.idusuario = usuario.id;

            document.getElementById("eliminar").disabled = true;

            var myJSON = JSON.stringify(enviar);

            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("eliminar").disabled = false;
                    var respuesta = this.responseText;
                    if (respuesta == 1) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'El usuario no se puede borrar'
                        });
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Borrar Usuario',
                            text: 'Usuario Eliminado'
                        });
                    }
                }
            };

            xhttp.open("GET", "php/borrar.php?enviar=" + myJSON);
            xhttp.send();
        }
    });
}