document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", comprar);
        //document.getElementById("npay").addEventListener("change", validarTarjeta);
    }
}

function comprar() {
    var enviar = new Object();
    enviar.nombre = document.getElementById("nombre").value;
    enviar.apellidos = document.getElementById("apellidos").value;
    enviar.ntarjeta = document.getElementById("npay").value;
    enviar.codigo = document.getElementById("CCV").value;

    document.getElementById("boton").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("boton").disabled = false;
            console.log("OK");
        }
    };
    xhttp.open("GET", "PHP/pasarelapago.php?compras=" + myJSON);
}
 