document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) 
{
    if (document.readyState == "interactive") 
    {
        var user;
        if (localStorage.getItem("usuario") == null) 
        {
            window.location = "login.html";
        }
        else{
            user = JSON.parse(localStorage.getItem("usuario"));
        }

        document.getElementById("user").innerHTML = user.usuario;
        document.getElementById("user2").innerHTML = user.usuario;
        document.getElementById("user-date").innerHTML = "Miembro desde: " + user.fecha;
        document.getElementById("exit").addEventListener("click", function(){
            localStorage.removeItem("user");
        });
    }
}