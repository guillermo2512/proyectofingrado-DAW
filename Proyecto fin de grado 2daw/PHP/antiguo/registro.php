<?php

require("conexion.php");
$conexion = mysqli_connect($servidor,$usuario,$clavee,$DB) or die("Falla la conexion");
$email = $_POST['email'];
$password = $_POST['pwd'];

mysqli_set_charset($conexion,"utf8");
$insertar = "INSERT INTO clientes (Email,password) VALUES ('$email','$password')";
$verificar_email = mysqli_query($conexion,"SELECT * FROM clientes where Email = '$email'");
if(mysqli_num_rows($verificar_email)>0){
    echo "<script>
    alert('El correo ya esta registrado');
    window.location= 'http://localhost/Proyecto%20fin%20de%20grado/formulario registro.html'
    </script>";
    exit;
}

$verificar_password = mysqli_query($conexion,"SELECT * FROM clientes WHERE password = '$password' ");
if(mysqli_num_rows($verificar_password)>0){
    echo "<script>
    alert('La contraseña no existe');
    window.location= 'http://localhost/Proyecto%20fin%20de%20grado/formulario registro.html'
    </script>";
    exit;
}

$resultado=mysqli_query($conexion,$insertar) or die("Falla la consulta");
if(!$resultado){
    echo "<script>
    alert('Error al registrarse');
    window.location= 'http://localhost/Proyecto%20fin%20de%20grado/formulario registro.html'
    </script>";
    exit;
}else{
    echo "<script>
    alert('Usted ha sido registrado correctamente');
    window.location= 'http://localhost/Proyecto%20fin%20de%20grado/home.html'
    </script>";
}
mysqli_close($conexion);

?>