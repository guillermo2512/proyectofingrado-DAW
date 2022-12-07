
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
    item.addEventListener('click', function () {
        
        const id = parseInt(item.dataset.id);
        var precio = item.dataset.precio;
        const titulo = item.dataset.titulo;
        const estado = item.dataset.estado;
        var cuota = 0;

        if(estado == "reserva")
        {
            cuota = precio*0.15
        }
        else cuota = precio;

        articulo = {
            id: id,
            precio: cuota,
            titulo: titulo,
            estado: estado,
            cantidad: 1
        }
        articulos.push(articulo);

        localStorage.setItem('articulos', JSON.stringify(articulos));
        mostrarindice();

    });
});

function mostrarindice() {
    if (localStorage.getItem("articulos") != null) {
        var array = JSON.parse(localStorage.getItem('articulos'));
        if (array) {
            var x = array.length;
            document.getElementById("carrito").innerHTML = x;
        }
    }
}

