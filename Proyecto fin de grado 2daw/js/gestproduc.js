var usuario;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        cargardatos();
    }
    usuario = JSON.parse(localStorage.getItem('usuario'));
}

function cargardatos() {
    var html = "";
    var enviar = new Object();
    enviar.idusuario = usuario.id;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            var datos = JSON.parse(this.responseText);
            if(datos == 1)
            {
                document.getElementById("tabla").style.display = none;
                document.getElementsById("productos").innerHTML = "No ha realizado ninguna compra en nuestra tienda."
            }
            else{
                datos.forEach(element => 
                {
                    html += `
                    <tr>
                        <td>` + element.titulo + `</td>
                        <td>` + element.precio + "€" + `</td>
                    </tr>`
                });
                document.getElementsById("tbproduc").innerHTML = html;
            }
            
        }
    };

    xhttp.open("GET", "PHP/cargarproduct.php?enviar=" + myJSON);
    xhttp.send();
}