<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "conexion.php";

class Login
{
    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
        $this->conexion = $dbObj->db;
    }

    public function actualizar_usuario($usuario, $nombre, $contrasena, $email, $fecha, $id)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("UPDATE usuarios SET Usuario = ?, Nombre = ?, Email = ?, Fecha_Alta = ? WHERE Id = ?;");
            $consulta->bindparam(1, $usuario);
            $consulta->bindparam(2, $nombre);
            $consulta->bindparam(3, $contrasena);
            $consulta->bindparam(4, $email);
            $consulta->bindparam(5, $fecha);
            $consulta->bindparam(6, $id);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                $resp = 1;
                $envio = json_encode($resp);
                echo $envio;
            }
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

$condb = new Login();
$condb->actualizar_usuario($enviar->usuario, $enviar->nombre, $enviar->contrasena, $enviar->email, $enviar->fecha, $enviar->id);

/*if (Password::verify($enviar->pass, $contra)) 
{
    $condb->actualizar_usuario($enviar->email, $contra);

} else {
    $resp = 1;
    $envio = json_encode($resp);
    echo $envio;
}*/
