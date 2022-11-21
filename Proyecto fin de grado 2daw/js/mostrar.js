document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        mostar();
    }
}

function mostar() 
{
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            var recoger = JSON.parse(this.responseText);
            
            document.getElementById("1").dataset.id = 1;
            
        }
    };

    xhttp.open("GET", "PHP/mostrarproductos.php");
    xhttp.send();
}








