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


    public function enviar_ajax($nombre, $pass, $mail)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO usuarios VALUES (?, ?, ?)");
            $consulta->bindparam(1, $mail);
			$consulta->bindparam(2, $pass);
            $consulta->bindparam(2, $nombre);
            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                return false;
            }

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}
$clave = Password::hash($enviar->pass);

$condb = new Comprar();
$condb->enviar_ajax($enviar->email, $clave, $enviar->nombre);

?>