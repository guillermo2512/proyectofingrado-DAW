document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        document.getElementById("boton").addEventListener("click", mostar);
    }
}

function mostar() 
{
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            var almacen = JSON.parse(this.responseText);

            alert(almacen);

            
            //document.getElementById("precio").innerHTML = almacen.precio;

            //var datos = document.querySelectorAll('button.boton');
        }
    };
}







