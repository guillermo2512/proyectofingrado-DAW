<?php

require("conexion.php");
$conexion = mysqli_connect($servidor,$usuario,$clavee,$DB) or die("Falla la conexion");
$nonmbre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$dni = $_POST["dni"];
$email = $_POST["mail1"];
$articulo = $_POST["producto"];
$precio = $_POST["precio"];
$direccion = $_POST["direccion"];
$codigopostal = $_POST["codigopostal"];
$targeta = $_POST["npay"];
$CCV = $_POST["CCV"];

mysqli_set_charset($conexion,"utf8");
$insertar = "INSERT INTO compras (Nombre, Apellidos, DNI, Email, Articulo, Precio, Direccion, Codigo_postal, tarjeta, CVV) VALUES 
('$nonmbre', '$apellidos', '$dni', '$email', '$articulo', '$precio', '$direccion', '$codigopostal', '$targeta', '$CCV')";

$resultado=mysqli_query($conexion,$insertar) or die("Falla la consulta");
if(!$resultado){
    echo "<script>
    alert('Compra creada incorrectamente');
    window.location= 'http://localhost/Proyecto%20fin%20de%20grado/videojuegos.html'
    </script>";
    exit;
}else{
    echo "<script>
    alert('La Compra ha sido creada correctamente');
    window.location= 'http://localhost/Proyecto%20fin%20de%20grado/home.html'
    </script>";
}
mysqli_close($conexion);

?>