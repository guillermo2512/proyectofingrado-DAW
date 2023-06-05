<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "../../PHP/conexion.php";

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }


    public function borrar_productos($Id)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("DELETE FROM productos WHERE Id = ?;");
            $consulta->bindparam(1, $Id);

            if (!$consulta->execute()) 
            {
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
$condb->borrar_productos($enviar->id);

?>