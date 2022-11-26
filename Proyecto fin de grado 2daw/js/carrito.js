
var articulos = [];
var articulo = {
    id: 0
}
mostrarindice();

if (localStorage.getItem("articulos") != null) {
    var articulos = JSON.parse(localStorage.getItem('articulos'));
}


var Buttons = document.querySelectorAll('button.boton');

Buttons.forEach(function (item) 
{
    item.addEventListener('click', function () 
    { 

        const id = parseInt(item.dataset.id);
        const precio = item.dataset.precio;
        const titulo = item.dataset.titulo;
        
        articulo = {
            id: id,
            precio: precio,
            titulo: titulo,
            cantidad: 1
        }
        articulos.push(articulo);

        //si se repite borrar el anterior con con el valor menos 1
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

            const lookup = articulos.reduce((a, e) => {
                a[e.id] = ++a[e.id] || 0;
                return a;
              }, {});
              
              const datos = articulos.filter(e => lookup[e.id])
              
              // Se reduce el arreglo data2 para formar un indice
              const index = datos.reduce((prev, curr) => {
                  return {
                      ...prev,
                      [curr.id]: curr.cantidad
                  }
              },
              {})
              
              console.log(index);
              
              // Se reduce el arreglo data1 comparandolo respecto al indice
              const res = values.reduce((prev, curr) => {
                  // Si las cantidades son iguales se agrega el objeto a los correctos
                  if (index[curr.id] !== curr.cantidad) {
                      return {
                          right: [...prev.right, curr],
                          wrong: prev.wrong
                      }
                  }
                  // De lo contrario se agrega a los incorrectos
                  return {
                      right: prev.right,
                      wrong: [...prev.wrong, curr]
                  }
              },
              {
                  right: [],
                  wrong: []
              })
            
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

function modal()
{
    
}

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

