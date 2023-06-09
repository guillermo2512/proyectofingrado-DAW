document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) 
{
    if (document.readyState == "interactive") 
    {
        var user;
        if (localStorage.getItem("user") == null) 
        {
            window.location = "login.html";

        }
        else{
            user = JSON.parse(localStorage.getItem("user"));
        }

        document.getElementById("user").innerHTML = user.usuario;
        document.getElementById("user-date").innerHTML = "Miembro desde: " + user.fecha;
        document.getElementById("exit").addEventListener("click", function(){
            localStorage.removeItem("user");
        });
    }
}