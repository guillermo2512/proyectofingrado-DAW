document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") 
    {
        document.getElementById("email").addEventListener("change", validarEmail);
        document.getElementById("nombre").addEventListener("change", validarNombre);
        document.getElementById("boton").addEventListener("click", registro);
    }
}

var regexmail = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");
var regexnombre = /^[A-Za-z]+$/;

function validarEmail() {
    const email = document.getElementById("email");
    if (regexmail.test(email.value) === false) {
        email.classList.remove("alert", "alert-success");
        email.classList.add("alert", "alert-danger");
        email.value = "";
        email.placeholder = "El formato del email es incorrecto."
    } else {
        email.classList.remove("alert", "alert-danger");
        email.classList.add("alert", "alert-success");
        email.placeholder = "";
    }
}

function validarNombre() 
{
    if (regexnombre.test(nombre.value) === false) {
        nombre.classList.remove("alert", "alert-success");
        nombre.classList.add("alert", "alert-danger");
        nombre.value = "";
        nombre.placeholder = "El nombre solo puede contener letras.";
    } else {
        nombre.classList.remove("alert", "alert-danger");
        nombre.classList.add("alert", "alert-success");
        nombre.placeholder = "";
    }
}

function registro() {
    var enviar1 = new Object();
    enviar1.usuario = document.getElementById("usuario").value;

    document.getElementById("boton").disabled = true;

    var myJSON = JSON.stringify(enviar1);

    const xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("boton").disabled = false;
            if (this.response == false) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El usuario ya existe, porfavor introduzca otro diferente'
                });
            }
            else {
                var enviar2 = new Object();
                enviar2.email = document.getElementById("email").value;
                enviar2.pass = document.getElementById("pwd").value;
                enviar2.nombre = document.getElementById("nombre").value;
                enviar2.usuario = document.getElementById("usuario").value;

                document.getElementById("boton").disabled = true;

                var json = JSON.stringify(enviar2);

                const xhttps = new XMLHttpRequest();
                xhttps.responseType = "json";
                xhttps.onreadystatechange = function () 
                {
                    if (this.readyState == 4 && this.status == 200) 
                    {
                        document.getElementById("boton").disabled = false;
                        if (this.response == false) 
                        {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Error al registrarse'
                            });
                        }
                        else{
                            Swal.fire({
                                icon: 'success',
                                title: 'Registro',
                                text: 'El registro se ha completo satisfactoriamente'
                            });
                            setInterval(function(){window.location = "login.html"}); 
                        }
                    }
                }
                xhttps.open("GET", "PHP/registro2.php?enviar=" + json);
                xhttps.send();
            }
        }
    };
    xhttp.open("GET", "PHP/registro1.php?enviar=" + myJSON);
    xhttp.send();
}