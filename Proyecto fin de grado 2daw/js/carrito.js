var articulos = [];
var articulo = {
    id: 0,
}
mostrarindice();

var Buttons = document.querySelectorAll('button.boton');

Buttons.forEach(function (item) 
{
    item.addEventListener('click', function (e) 
    { 
        e.preventDefault();
        const id = item.dataset.id;
        const precio = item.dataset.precio;
        const titulo = item.dataset.titulo;

        articulo = {
            id: id,
            precio: precio,
            titulo: titulo
        }   
        articulos.push(articulo);
        
        localStorage.setItem('articulos', JSON.stringify(articulos));
        mostrarindice();
    });
});

function mostrarindice(){
    if (localStorage.getItem("articulos") != null) {
        var array = JSON.parse(localStorage.getItem('articulos'));
        if (array) 
        {
            var x = array.length;
            document.getElementById("carrito").innerHTML = x;
        }
    }
}


