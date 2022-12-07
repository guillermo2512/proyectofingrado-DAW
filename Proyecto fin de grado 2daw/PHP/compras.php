<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "conexion.php";

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }


    public function compras($Nombre, $Apellidos, $Email, $carrito, $Direccion, $Codigo_postal)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO clientes (Nombre, Apellidos, Email, carrito, Direccion, Codigo_postal) VALUES (?,?,?,?,?,?)");
            $consulta->bindparam(1, $Nombre);
            $consulta->bindparam(2, $Apellidos);
            $consulta->bindparam(3, $Email);
            $consulta->bindparam(4, $carrito);
            $consulta->bindparam(5, $Direccion);
            $consulta->bindparam(6, $Codigo_postal);

            if (!$consulta->execute()) {
                //print_r($consulta->errorInfo());
                $resp = 1;
                $envio = json_encode($resp);
                echo $envio;
            }

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

$condb = new Comprar();
$condb -> compras($enviar->nombre, $enviar->apellidos, $enviar->email, $enviar->productos, $enviar->direccion, $enviar->codigo_postal);

//$condb -> compras("pepe", "gimenez", "perico@gmail.com", "Jedi Fallen Order", "calle del pez", "28050");


?>