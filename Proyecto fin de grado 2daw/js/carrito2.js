document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        mostrarcarrito();
        document.getElementById("Vaciar").addEventListener("click", vaciarcarrito);
        document.getElementById("pagar").addEventListener("click", pagar);
        //document.getElementById("añadir").addEventListener("click", sumarcantidad);
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
            totaliza = acomualdor*element.cantidad
            total += totaliza;
            html += `
            <tr>
                <td>` + element.titulo + `</td>
                <td>` + element.precio + "€" + `</td>
                <td>` + element.cantidad + `</td>
                <td><button class="btn btn-primary" " onclick="sumarcantidad(` + element.id + "," + "'" + element.estado + "'" + `);">+</button></td>
            </tr>`
        });
        document.getElementById("total_pagar").innerHTML = total + "€";
        document.getElementById("tCarrito").innerHTML = html;
    } 
}

function sumarcantidad(id, estado)
{
    var array = JSON.parse(localStorage.getItem('articulos'));

    array.map(function(dato)
    {
        if(dato.id == id)
        {
            if(dato.estado == estado)
            {
                dato.cantidad++;
            }
        }
    });
    localStorage.setItem("articulos", JSON.stringify(array));
    location.reload();
}

function vaciarcarrito() {
    localStorage.removeItem("articulos");
    location.reload();
}

function pagar() {
    if (localStorage.getItem("articulos") != null) {
        if (localStorage.getItem("usuario") != null) {
            window.location = "pago.html";
        }
        else {
            window.location = "login.html";
        }
    }
    else
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe de haber algo en el carrito'
        });
    }
}



