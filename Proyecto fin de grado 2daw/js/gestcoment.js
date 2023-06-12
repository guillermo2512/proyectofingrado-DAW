var usuario;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") 
    {
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
        if (this.readyState == 4 && this.status == 200) 
        {
            var datos = JSON.parse(this.responseText);
            if(datos == 1)
            {
                document.getElementById("tabla").style.display = none;
                document.getElementsById("coemntarios").innerHTML = "No ha realizado ninguna compra en nuestra tienda."
            }
            else{
                datos.forEach(element => 
                {
                    html += `
                    <tr>
                        <td>` + element.Titulo + `</td>
                        <td>` + element.Reseña + `</td>
                        <td>` + element.Fecha + `</td>
                    </tr>`
                });
                document.getElementsById("tbcoment").innerHTML = html;
            }
            
        }
    };

    xhttp.open("GET", "PHP/cargarcoment.php?enviar=" + myJSON);
    xhttp.send();
}