document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        mostrarcarrito();
        document.getElementById("ircarrito").addEventListener("click", function(){
            window.location = "carrito.html";
        });
    }
}

var articulos = [];
var articulo = {
    id: 0
}
mostrarindice();
mostrarcarrito();


if (localStorage.getItem("articulos") != null) {
    var articulos = JSON.parse(localStorage.getItem('articulos'));
}

var Buttons = document.querySelectorAll('button.boton');

Buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        const id = parseInt(item.dataset.id);
        const precio = item.dataset.precio;
        const titulo = item.dataset.titulo;
        const estado = item.dataset.estado;
        var comprobarid = true;

        var array = JSON.parse(localStorage.getItem('articulos'));

        if (Array.isArray(array)) {
            array.map(function (dato) {
                if (dato.id == id) 
                {
                    dato.cantidad++;
                    comprobarid = false;
                }
            });
            localStorage.setItem("articulos", JSON.stringify(array));

            
            if(comprobarid == true)
            {
                articulo = {
                    id: id,
                    precio: precio,
                    titulo: titulo,
                    cantidad: 1,
                    estado: estado
                }
                articulos.push(articulo);
    
                localStorage.setItem('articulos', JSON.stringify(articulos));
            }
            
        } else {
            articulo = {
                id: id,
                precio: precio,
                titulo: titulo,
                cantidad: 1,
                estado: estado
            }
            articulos.push(articulo);

            localStorage.setItem('articulos', JSON.stringify(articulos));
        }


        mostrarindice();

    });
    item.addEventListener('click', function () {
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

function mostrarcarrito() {
    var html = "";
    var total = 0;
    var acomualdor = 0;
    var totaliza = 0;
    if (localStorage.getItem("articulos") != null) {
        var array = JSON.parse(localStorage.getItem('articulos'));
        array.forEach(element => {
            acomualdor = parseInt(element.precio);
            totaliza = acomualdor * element.cantidad
            total += totaliza;
            html += `
            <tr>
                <td>` + element.titulo + `</td>
                <td>` + element.precio + "€" + `</td>
                <td>` + element.cantidad + `</td>
            </tr>`
        });
        document.getElementById("total_pagar").innerHTML = total + "€";
        document.getElementById("tCarrito").innerHTML = html;
    }
}