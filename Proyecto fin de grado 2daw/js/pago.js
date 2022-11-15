
window.onload = function () {
    var regexnombre = /^[A-Za-z]+$/;
    var regexmail = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");
    //var regexpwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,15}$/;
    //var regextarjeta = /^\d{0,4}-\d{0,4}-\d{0,4}-\d{0,4}$/;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("mail1");
    //const pwd = document.getElementById("pwd");
    //const tarjeta = document.getElementById("npay");

    nombre.addEventListener("change", validarNombre);
    email.addEventListener("change", validarEmail);
    //pwd.addEventListener("change", validarPwd);
    //tarjeta.addEventListener("change", validarTarjeta);

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

    function validarEmail() {
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

    /*function validarTarjeta() {
        if (regextarjeta.test(tarjeta.value) === false) {
            tarjeta.classList.remove("alert", "alert-success");
            tarjeta.classList.add("alert", "alert-danger");
            tarjeta.value = "";
            tarjeta.placeholder = "Formato incorrecto.";
        } else {
            tarjeta.classList.remove("alert", "alert-danger");
            tarjeta.classList.add("alert", "alert-success");
            tarjeta.placeholder = "";
        }
    }*/
}

/*document.getElementById("paySelect").addEventListener("change", mostrarOcultar);

    function mostrarOcultar() {
        var selectVal = document.getElementById("paySelect").value;
        var tarjeta = document.getElementById("tarjeta");
        var fechacad = document.getElementById("fechacad");
        var paypalemail = document.getElementById("paypal-email");
        var paypalpass = document.getElementById("paypal-pass");
        var CCV =document.getElementById("CCV");
        if (selectVal == "visa" || selectVal == "mastercard") {
            paypalemail.style.display = "None";
            paypalpass.style.display = "None";
            tarjeta.style.display = "block";
            fechacad.style.display = "block";
            CCV.style.display = "block";
        } else {
            paypalemail.style.display = "block";
            paypalpass.style.display = "block";
            tarjeta.style.display = "None";
            fechacad.style.display = "None";
            CCV.style.display = "None";
        }
    }*/