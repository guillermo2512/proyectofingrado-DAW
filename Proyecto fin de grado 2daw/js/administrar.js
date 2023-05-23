document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        var user = JSON.parse(localStorage.getItem("user"));

        if (localStorage.getItem("user") == null) 
        {
            window.location = "http://localhost/Proyecto%20fin%20de%20grado%20definitivo/login.html";

        }

        document.getElementById("user").innerHTML = user.usuario;
        document.getElementById("user-date").innerHTML = user.fecha;
        document.getElementById("exit").addEventListener("click", function(){
            localStorage.removeItem("user");
        });
    }
}












