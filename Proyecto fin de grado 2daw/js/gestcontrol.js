var user;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) 
{
    if (document.readyState == "interactive") 
    {
        user = JSON.parse(localStorage.getItem("usuario"));
        mostar();
    }
}

function mostar() 
{
    var enviar = new Object();
    enviar.id = user.id;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            var recoger = JSON.parse(this.responseText);
            
            document.getElementById("comentarios").innerHTML = recoger.numerocomentarios;
            document.getElementById("productos").innerHTML = recoger.numeropedidos;
            document.getElementById("reservas").innerHTML = recoger.numeroreservas;
            
        }
    };

    xhttp.open("GET", "PHP/cargargestion.php?enviar=" + myJSON);
    xhttp.send();
}
