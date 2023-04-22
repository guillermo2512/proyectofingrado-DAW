var articulos = [];
var articulo = {
    id: 0
}
mostrarindice();

if (localStorage.getItem("articulos") != null) {
    var articulos = JSON.parse(localStorage.getItem('articulos'));
}

var Buttons = document.querySelectorAll('button.boton');

Buttons.forEach(function (item) {
    item.addEventListener('click', function () 
    {
        const id = parseInt(item.dataset.id);
        const precio = item.dataset.precio;
        const titulo = item.dataset.titulo;
        const estado = item.dataset.estado;

        articulo = {
            id: id,
            precio: precio,
            titulo: titulo,
            cantidad: 1,
            estado: estado
        }
        articulos.push(articulo);

        localStorage.setItem('articulos', JSON.stringify(articulos));

        mostrarindice();
        
    });
    item.addEventListener('click', function () 
    {
        location.reload();
    });
});

function mostrarindice() {
    if (localStorage.getItem("articulos") != null) {
        var array = JSON.parse(localStorage.getItem('articulos'));
        if (array) {
            var x = array.length;
            document.getElementById("carro").innerHTML = x;
        }
    }
}

