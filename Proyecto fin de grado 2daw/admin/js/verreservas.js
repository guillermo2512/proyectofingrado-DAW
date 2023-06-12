document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        var user = JSON.parse(localStorage.getItem("user"));

        document.getElementById("user").innerHTML = user.Nombre;
        mostar();
        document.getElementById("exit").addEventListener("click", function () {
            localStorage.removeItem("user");
        });
    }
}

function mostar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);

            var htmlstr = '';
            datos.forEach(element => {
                var articulo = JSON.parse(element["Articulos"]);
                articulo.forEach(element2 => {
                    htmlstr += `
                <tr>
                    <td>` + element2.titulo + `</td>
                    <td>` + element2.cantidad + `</td>
                </tr>`
                })
            });

            document.getElementById('tAdmin').innerHTML = htmlstr;
        }
    };

    xhttp.open("GET", "php/reservas.php");
    xhttp.send();
}












