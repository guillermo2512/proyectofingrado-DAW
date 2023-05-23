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


    public function modificar_productos($titulo, $precio, $cantidad, $Id)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("UPDATE productos SET Titulo= ? ,Precio = ?, Cantidad= ? WHERE Id = ?;");
            $consulta->bindparam(1, $titulo);
			$consulta->bindparam(2, $precio);
            $consulta->bindparam(3, $cantidad);
            $consulta->bindparam(4, $Id);

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
$condb->modificar_productos($enviar->titulo, $enviar->precio, $enviar->cantidad, $enviar->id);

?>