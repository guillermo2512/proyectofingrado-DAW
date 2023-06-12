var usuario;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        usuario = JSON.parse(localStorage.getItem('usuario'));
        cargardatos();
    }
}

function cargardatos() {
    var html = "";
    var enviar = new Object();
    enviar.idusuario = usuario.id;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);
            if (datos == 1) {
                document.getElementById("tabla").style.display = none;
                document.getElementsById("productos").innerHTML = "No ha realizado ninguna compra en nuestra tienda."
            }
            else {
                datos.forEach(element => {
                    var articulo = JSON.parse(element["carrito"]);
                    articulo.forEach(element2 => {
                        html += `
                    <tr>
                        <td>` + element2.titulo + `</td>
                        <td>` + element2.precio + "€" + `</td>
                    </tr>`
                    })

                });
                document.getElementById('tbproduc').innerHTML = html;
            }

        }
    };

    xhttp.open("GET", "PHP/cargarproduct.php?enviar=" + myJSON);
    xhttp.send();
}