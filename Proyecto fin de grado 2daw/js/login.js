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

                var userjson = JSON.stringify(usuario);

                localStorage.setItem("usuario", userjson);
                Swal.fire({
                    icon: 'success',
                    title: 'Login',
                    text: 'Bienvenido ' + json.Nombre
                });
                setInterval(function () 
                {
                    if (localStorage.getItem("articulos") != null) 
                    {
                        window.location = "http://localhost/Proyecto%20fin%20de%20grado%20definitivo/pago.html";
                    }
                    else {
                        window.location = "http://localhost/Proyecto%20fin%20de%20grado%20definitivo/";
                    }
                });
            }
        }
    };
    xhttp.open("GET", "PHP/login.php?enviar=" + myJSON);
    xhttp.send();
}