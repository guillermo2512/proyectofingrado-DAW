<?php

include_once "conexion.php";

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }


    public function enviar_ajax()
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("SELECT ID_Articulo, Titulo, Precio FROM productos;");

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                return false;
            }

            $almacen = $consulta->fetchAll(PDO::FETCH_ASSOC);   

            $envio = json_encode($almacen);
            echo $envio;

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

$condb = new Comprar();
$condb -> enviar_ajax();



?>