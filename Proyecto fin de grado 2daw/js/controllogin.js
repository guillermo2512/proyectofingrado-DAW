document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") 
    {
        document.getElementById("login").addEventListener("click", comprobarlogin);
    }
}

function comprobarlogin()
{
    if(localStorage.getItem('usuario') == null)
        {
            window.location = "login.html";
        }
        else
        {
            document.getElementById("Login").style.display = "block"; 
        }
}
