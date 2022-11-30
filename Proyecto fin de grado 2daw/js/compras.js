document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") 
    {
        productos();
        cargarusuario();
        document.getElementById("btn").addEventListener("click", comprar);
    }
}

var array = [];

function productos() {
    var html = "";
    var total = 0.00;
    if (localStorage.getItem("articulos") != null) {
        array = JSON.parse(localStorage.getItem('articulos'));
        array.forEach(element => {
            acomualdor = parseInt(element.precio);
            totaliza = acomualdor*element.cantidad
            total += totaliza;
            html += `
            <tr>
                <td>` + element.id + `</td>
                <td>` + element.titulo + `</td>
                <td>` + element.precio + "€" + `</td>
                <td>` + element.cantidad + `</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>` + total + `</td>
            </tr>`;
        });
        document.getElementById("productos").innerHTML = html;
    }
}

function cargarusuario() {
    if (localStorage.getItem("usuario") != null) {
        var usuario = JSON.parse(localStorage.getItem('usuario'));

        document.getElementById("nombre").value = usuario.nombre;
        document.getElementById("mail1").value = usuario.email;
    }
}

function comprar() {
    var enviar = new Object();
    enviar.nombre = document.getElementById("nombre").value;
    enviar.apellidos = document.getElementById("apellidos").value;
    enviar.email = document.getElementById("mail1").value;
    enviar.productos = localStorage.getItem('articulos');
    enviar.direccion = document.getElementById("direccion").value;
    enviar.codigo_postal = document.getElementById("codigopostal").value;

    document.getElementById("btn").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("btn").disabled = false;
            location.reload();
            alert("La Compra ha sido registrarda correctamente");
            localStorage.removeItem("usuario");
        }
    };
    xhttp.open("GET", "PHP/compras.php?compras=" + myJSON);
    xhttp.send();
}