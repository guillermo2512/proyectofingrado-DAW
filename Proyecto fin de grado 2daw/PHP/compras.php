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


    public function compras($idusuario ,$Nombre, $Apellidos, $Email, $carrito, $Direccion, $Codigo_postal)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO clientes (IdUsuario, Nombre, Apellidos, Email, carrito, Direccion, Codigo_postal) VALUES (?,?,?,?,?,?,?)");
            $consulta->bindparam(1, $idusuario);
            $consulta->bindparam(2, $Nombre);
            $consulta->bindparam(3, $Apellidos);
            $consulta->bindparam(4, $Email);
            $consulta->bindparam(5, $carrito);
            $consulta->bindparam(6, $Direccion);
            $consulta->bindparam(7, $Codigo_postal);

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

$condb = new Comprar();
$condb -> compras($enviar->idusuario,$enviar->nombre, $enviar->apellidos, $enviar->email, $enviar->productos, $enviar->direccion, $enviar->codigo_postal);

//$condb -> compras("guillermo", "gimenez", "guillermo@gmail.com", "jedi survivor", "calle del almendra", "28011");


?>