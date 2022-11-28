document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        mostrarcarrito();
        document.getElementById("Vaciar").addEventListener("click", vaciarcarrito);
        document.getElementById("pagar").addEventListener("click", pagar);
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
            //<td>` + element.cantidad + `</td>
            html += `
            <tr>
                <td>` + element.id + `</td>
                <td>` + element.titulo + `</td>
                <td>` + element.precio + "€" + `</td>
                <td>` + element.cantidad + `</td>
            </tr>`;
        });
        document.getElementById("total_pagar").innerHTML = total + "€";
        document.getElementById("tCarrito").innerHTML = html;
    }
}

function vaciarcarrito() {
    localStorage.removeItem("articulos");
}

function pagar() {
    if (localStorage.getItem("articulos") != null) {
        if (localStorage.getItem("usuario") != null) {
            window.location = "http://localhost/Proyecto%20fin%20de%20grado%20definitivo/pago.html";
        }
        else {
            window.location = "http://localhost/Proyecto%20fin%20de%20grado%20definitivo/login.html";
        }
    }
    else
    {
        alert("Debe de haber algo en el carrito");
    }
}



