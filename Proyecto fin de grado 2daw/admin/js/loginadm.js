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
                    text: 'La contraseña o el usuario no son correctos'
                });
            }
            else {
                var datos = this.responseText;
                localStorage.setItem("user", datos);
                window.location = "admin/administrar.html";
            }
        }
    };
    xhttp.open("GET", "PHP/loginadm.php?enviar=" + myJSON);
    xhttp.send();
}