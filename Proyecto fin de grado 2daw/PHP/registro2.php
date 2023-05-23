<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "conexion.php";
include_once 'password_salt.php';

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }


    public function enviar_ajax($usuario, $nombre, $pass, $mail, $fecha)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO usuarios (Usuario, Nombre, Contrasena, Email, Fecha_Alta) VALUES (?, ?, ?, ?, ?)");
            $consulta->bindparam(1, $usuario);
			$consulta->bindparam(2, $nombre);
            $consulta->bindparam(3, $pass);
            $consulta->bindparam(4, $mail);
            $consulta->bindparam(5, $fecha);

            if (!$consulta->execute()) 
            {
                print_r($consulta->errorInfo());
                $resp = false;
                $envio = json_encode($resp);
                echo $envio;
            }

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}
$clave = Password::hash($enviar->pass);
$fecha = date("d-m-Y");

$condb = new Comprar();
$condb->enviar_ajax($enviar->usuario, $enviar->nombre ,$clave, $enviar->email, $fecha);
?>