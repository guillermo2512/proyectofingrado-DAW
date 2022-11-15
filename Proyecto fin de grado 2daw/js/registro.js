document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") 
    {
        document.getElementById("email").addEventListener("change", validarEmail);
        document.getElementById("boton").addEventListener("click", registro);
    }
}

var regexmail = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");

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

function registro() {
    document.getElementById("email").addEventListener("change", validarEmail);
    var enviar1 = new Object();
    enviar1.email = document.getElementById("email").value;

    document.getElementById("boton").disabled = true;

    var myJSON = JSON.stringify(enviar1);

    const xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("boton").disabled = false;
            if (this.response == false) {
                alert("El usuario ya existe, porfavor introduzca otro diferente");
            }
            else {
                var enviar2 = new Object();
                enviar2.email = document.getElementById("email").value;
                enviar2.psw = document.getElementById("pwd").value;

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
                            alert('Error al registrarse');
                        }
                        else{
                            window.location("http://localhost/Proyecto%20fin%20de%20grado/home.html");
                            alert('El registro se ha completo satisfactoriamente');
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