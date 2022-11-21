
var articulo = {
    id: 0
}
mostrarindice();

var Buttons = document.querySelectorAll('button.boton');

Buttons.forEach(function (item) 
{
    item.addEventListener('click', function (e) 
    { 
        e.preventDefault();
        const id = parseInt(item.dataset.id);
        const precio = item.dataset.precio;
        const titulo = item.dataset.titulo;

        let articulos = [];
        
        articulo = {
            id: id,
            precio: precio,
            titulo: titulo,
            cantidad: 1
        }
        articulos.push(articulo);

        /*if (articulos.length == 0) 
        { 
            articulo = {
                id: id,
                precio: precio,
                titulo: titulo,
                cantidad: 1
            }
            articulos.push(articulo);

        }else{

            articulos.forEach(element => {
                var ids = element.id;
                if(ids!= id)
                {
                    articulo = {
                        id: id,
                        precio: precio,
                        titulo: titulo,
                        cantidad: 1
                    }
                    articulos.push(articulo);
                }
                else{
                    var alamcen = element.cantidad;
                    articulo.cantidad = alamcen + 1;
                }
            });
            
        }*/
        
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


