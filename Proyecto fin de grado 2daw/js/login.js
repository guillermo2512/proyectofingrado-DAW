document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", login);
    }
}

function login() {
    var enviar = new Object();
    enviar.email = document.getElementById("email").value;
    enviar.pass = document.getElementById("pwd").value;

    document.getElementById("boton").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("boton").disabled = false;
            var respuesta = this.responseText;
            if (respuesta == 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La contraseña o el usuario no existen'
                });
            }
            else {
                var json = JSON.parse(this.responseText);
                var usuario = new Object();
                usuario.email = json.Email;
                usuario.nombre = json.Nombre;
                usuario.usuario = json.Usuario;
                usuario.id = json.Id;
                usuario.fecha = json.Fecha_Alta;

                var userjson = JSON.stringify(usuario);

                localStorage.setItem("usuario", userjson);
                Swal.fire({
                    icon: 'success',
                    title: 'Login',
                    text: 'Bienvenido ' + json.Usuario
                });

                setInterval(function () 
                {
                    if (localStorage.getItem("articulos") != null) 
                    {
                        window.location = "pago.html";
                    }
                    else {
                        window.location = "login.html";
                    }
                },3000);
            }
        }
    };
    xhttp.open("GET", "PHP/login.php?enviar=" + myJSON);
    xhttp.send();
}