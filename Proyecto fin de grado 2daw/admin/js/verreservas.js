document.addEventListener("readystatechange", cargareventos, false);
function cargareventos(ev) {
    if (document.readyState == "interactive") {
        var user = JSON.parse(localStorage.getItem("user"));

        document.getElementById("user").innerHTML = user.Nombre;
        mostar();
        document.getElementById("exit").addEventListener("click", function () {
            localStorage.removeItem("user");
        });
    }
}

const personas = [
    { name: "pepe", age: 16, apellido: "gimenez" },
    { name: "luis", age: 20, apellido: "lopez" },
    { name: "juan", age: 18, apellido: "martinez" }
]
var pepe = [];
personas.some((persona) => {
    if (persona.name == "juan") {
        articulo = {
            age: persona.age,
            apellido: persona.apellido
        }
        pepe.push(articulo);
    }

})


function mostar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) 
        {
            var datos = JSON.parse(this.responseText);
            var carrito = [];
            var carritos = [];
            datos.forEach(element => {
                carritos.push(JSON.parse(element["carrito"]));
            })

            for (var i = 0; i < carritos.length; i++) 
            {
                for (var j = 0; j < carritos[i].length; j++) 
                {
                    if (carritos[i][j].estado == "reserva" || carritos[i][j].estado == "reserva pagado") 
                    {
                        articulo = {
                            id:  carritos[i][j].id,
                            precio:  carritos[i][j].precio,
                            titulo:  carritos[i][j].titulo,
                            cantidad:  carritos[i][j].cantidad,
                            estado:  carritos[i][j].estado
                        }
                        carrito.push(articulo);
                    }
                }
            } 

            var htmlstr = '';
            datos.forEach(element => {
                htmlstr += '<tr>';
                htmlstr += '<td>' + element["Nombre"] + '</td>';
                htmlstr += '<td>' + element["Email"] + '</td>';
                htmlstr += '<td>' + element["carrito"] + '</td>';
                htmlstr += '</tr>';
            });

            document.getElementById('tAdmin').innerHTML = htmlstr;
        }

        var htmlst = '';
        carrito.forEach(element => {
            htmlst += '<tr>';
            htmlst += '<td>' + element["id"] + '</td>';
            htmlst += '<td>' + element["titulo"] + '</td>';
            htmlst += '<td>' + element["precio"] + '</td>';
            htmlst += '<td>' + element["cantidad"] + '</td>';
            htmlst += '<td>' + element["estado"] + '</td>';
            htmlst += '</tr>';
        });

        document.getElementById('treservas').innerHTML = htmlst;
    };

    xhttp.open("GET", "php/reservas.php");
    xhttp.send();
}












