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
            datos = JSON.parse(this.responseText);
            var htmlstr = '';

            datos.forEach(element => {
                htmlstr += '<tr>';
                        htmlstr += '<td>' + element["Nombre"] + '</td>';
                        htmlstr += '<td>' + element["Email"] + '</td>';
                        htmlstr += '<td>' + element["carrito"] + '</td>';
                        htmlstr += '</tr>';
            });

            document.getElementById('tAdmin').innerHTML = htmlstr;
        }
    };

    xhttp.open("GET", "php/reservas.php");
    xhttp.send();
}












