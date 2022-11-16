document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", login);
    }
}

function login() {
    var enviar = new Object();
    enviar.email = document.getElementById("email").value;
    enviar.psw = document.getElementById("pwd").value;

    document.getElementById("boton").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("boton").disabled = false;
            if (this.response == false) {
                alert("La contraseña o el usuario no existe");
                form.reset();
            }
            else {
                var json = JSON.parse(this.response);
                var usuario = new Object();
                usuario.email = json.nombre;
                usuario.nombre = json.email;
                
                var userjson = JSON.stringify(usuario);

                localStorage.setItem("usuario", userjson);

                window.location("http://localhost/Proyecto%20fin%20de%20grado/home.html");
                alert("Bienvenido ", document.getElementById("nombre").value);
            }
        }
    };
    xhttp.open("GET", "PHP/login.php?enviar=" + myJSON);
    xhttp.send();
}