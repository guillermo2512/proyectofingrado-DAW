<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "aplicacion_web";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) 
{
	die("No hay conexión: ".mysqli_connect_error());
}

$nombre = $_POST["email"];
$pass = $_POST["pwd"];

$query = mysqli_query($conn,"SELECT * FROM clientes WHERE Email = '".$nombre."' and password = '".$pass."'");
$nr = mysqli_num_rows($query);

if($nr == 1)
{
	echo "<script> alert('Bienvenido $nombre');window.location= 'http://localhost/Proyecto%20fin%20de%20grado/home.html' </script>";
}
else if ($nr == 0) 
{

	echo "<script> alert('Usuario no existe');window.location= 'http://localhost/Proyecto%20fin%20de%20grado/login.html' </script>";
}
?>
