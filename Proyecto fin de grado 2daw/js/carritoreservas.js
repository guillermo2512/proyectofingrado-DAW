document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        mostrarcarrito();
        document.getElementById("ircarrito").addEventListener("click", function () {
            window.location = "carrito.html";
        });
    }
}


var articulos = [];
var articulosrese = [];
var articulo = {
    id: 0
}
var articulor = {
    id: 0,
}
mostrarindice();
mostrarcarrito();

var Buttons = document.querySelectorAll('button.boton');

Buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        const id = parseInt(item.dataset.id);
        const precio = item.dataset.precio;
        const titulo = item.dataset.titulo;
        const estado = item.dataset.estado;
        var cantidadest = true;

        var array = JSON.parse(localStorage.getItem('articulos'));
        var arrayrese = JSON.parse(localStorage.getItem('articulosrese'));

        if (Array.isArray(array)) {
            array.map(function (dato) {
                if (dato.id == id) 
                {
                    if (dato.estado == estado) 
                    {
                        dato.cantidad++;
                        cantidadest = false
                    }
                }
            });
            localStorage.setItem("articulos", JSON.stringify(array));


             if (cantidadest == true) 
             {
                var confir = array.some((articu) => {
                    return articu.id === id;
                })

                if (confir == false) 
                {
                    if (estado == "reserva") {
                        cuota = precio * 0.15
                    }
                    else cuota = precio;

                    articulo = {
                        id: id,
                        precio: cuota,
                        titulo: titulo,
                        estado: estado,
                        cantidad: 1
                    }
                    array.push(articulo);

                    localStorage.setItem('articulos', JSON.stringify(array));
                } else {
                    if (estado == "reserva") 
                    {
                        cuota = precio * 0.15
                    }
                    else cuota = precio;

                    articulo = {
                        id: id,
                        precio: cuota,
                        titulo: titulo,
                        estado: estado,
                        cantidad: 1
                    }
                    array.push(articulo);

                    localStorage.setItem('articulos', JSON.stringify(array));
                }
            }

        } else {

            if (estado == "reserva") {
                cuota = precio * 0.15
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
        }

        if (Array.isArray(arrayrese)) {
            arrayrese.map(function (dato) {
                if (dato.id == id) {
                    dato.cantidad++;
                }
            });

            localStorage.setItem("articulosrese", JSON.stringify(arrayrese));
            var confir = arrayrese.some((articu) => {
                return articu.id === id;
            })

            if (confir == false) {
                articulor = {
                    id: id,
                    titulo: titulo,
                    cantidad: 1
                }
                arrayrese.push(articulor);

                localStorage.setItem('articulosrese', JSON.stringify(arrayrese));
            }

        } else {

            articulor = {
                id: id,
                titulo: titulo,
                cantidad: 1
            }
            articulosrese.push(articulor);

            localStorage.setItem('articulosrese', JSON.stringify(articulosrese));
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
            document.getElementById("carrito").innerHTML = x;
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

