document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        productos();
        document.getElementById("boton").addEventListener("click", comprar);
        //document.getElementById("nombre").addEventListener("change", validarNombre);
        document.getElementById("mail1").addEventListener("change", validarEmail);
        //document.getElementById("pwd").addEventListener("change", validarPwd);
        //document.getElementById("npay").addEventListener("change", validarTarjeta);
    }
}

function productos()
{
    var html = "";
    var total = 0.00;
    if (localStorage.getItem("articulos") != null) {
        var array = JSON.parse(localStorage.getItem('articulos'));
        array.forEach(element => {
            total = total + element.precio;
            html += `
                <tr>
                    <td>` + element.id + `</td>
                    <td>` + element.titulo + `</td>
                    <td>` + element.precio +  `</td>
                </tr>`;
        });
        //document.getElementById("total_pagar").innerHTML = total;
        document.getElementById("productos").innerHTML = html;
    }
}

var regexnombre = /^[A-Za-z]+$/;
var regexmail = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");
//var regexpwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,15}$/;

function validarNombre() {
    const nombre = document.getElementById("nombre");
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

/*function validarPwd() {
        if (regexpwd.test(pwd.value) === false) {
            pwd.classList.remove("alert", "alert-success");
            pwd.classList.add("alert", "alert-danger");
            pwd.value = "";
            pwd.placeholder = "Formato incorrecto. Minimo 8 caracteres - Maximo 15, al menos una letra mayúscula, una minusculas, un dígito, no espacios en blanco y 1 caracter especial";
        } else {
            pwd.classList.remove("alert", "alert-danger")
            pwd.classList.add("alert", "alert-success");
            pwd.placeholder = "";
        }
    }*/

    function cargarusuario()
    {
        if(localStorage.getItem("usuario") != null) 
        {
           var user = JSON.parse(localStorage.getItem('usuario'));
           document.getElementById("mail1").value = user;
        }
    }

function comprar() {
    var enviar = new Object();
    enviar.nombre = document.getElementById("nombre").value;
    enviar.apellidos = document.getElementById("apellidos").value;
    enviar.email = document.getElementById("mail1").value;
    enviar.articulo = document.getElementById("producto").value;
    enviar.precio = document.getElementById("precio").value;
    enviar.direccion = document.getElementById("direccion").value;
    enviar.codigo_postal = document.getElementById("codigopostal").value;

    document.getElementById("boton").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("boton").disabled = false;
            form.reset();
            alert("La Compra ha sido registrarda correctamente");
            localStorage.removeItem("usuario");
        }
    };
    xhttp.open("GET", "PHP/compras.php?compras=" + myJSON);
    xhttp.send();
}