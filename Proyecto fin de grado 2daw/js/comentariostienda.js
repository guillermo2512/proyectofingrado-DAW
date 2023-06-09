var usuario;
var produc;

document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        document.getElementById("insertar").addEventListener("click", insertarcoment);
        usuario = JSON.parse(localStorage.getItem('usuario'));
    }
}

    var Buttons = document.querySelectorAll('button#idprod');

    Buttons.forEach(function (item) {
        item.addEventListener('mousedown', function () {
            produc = parseInt(item.dataset.id);
        });
    });



function insertarcoment() {
    var enviar = new Object();
    enviar.idusuario = usuario.id;
    enviar.idproducto = produc;
    enviar.reseña = document.getElementById("textcoment").value;


    document.getElementById("insertar").disabled = true;

    var myJSON = JSON.stringify(enviar);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("insertar").disabled = false;
            var respuesta = this.responseText;
            if (respuesta == 1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El comentario no se ha podido crear'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Comentarios',
                    text: 'El comentario ha sido creado correctamente'
                });
                setInterval(function () { location.reload() }, 4000);
            }
        }
    };
    xhttp.open("GET", "PHP/comentariostienda.php?enviar=" + myJSON);
    xhttp.send();
}