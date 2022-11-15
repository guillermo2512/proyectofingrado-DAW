<?php

$enviar = json_decode($_GET["compras"], false);

include_once "conexion.php";

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }


    public function enviar_ajax($Nombre, $Apellidos, $ntar, $cod)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO datoscom VALUES (?, ?, ?, ?)");
            $consulta->bindparam(1, $Nombre);
            $consulta->bindparam(2, $Apellidos);
            $consulta->bindparam(3, $ntar);
            $consulta->bindparam(4, $cod);
            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                return false;
            }

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

$condb = new Comprar();
$condb -> enviar_ajax($enviar->Nombre, $enviar->Apellidos, $enviar->DN, $enviar->Email, $enviar->Articulo, $enviar->Precio, $enviar->Direccion, $enviar->Codigo_postal);


?>