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


    public function modificar_reservas($titulo, $precio, $fecha, $Id)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("UPDATE reservas SET Titulo = ?, Precio = ?, Fecha_Salida = ? WHERE Id = ?;");
            $consulta->bindparam(1, $titulo);
			$consulta->bindparam(2, $precio);
            $consulta->bindparam(3, $fecha);
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
$condb->modificar_reservas($enviar->titulo, $enviar->precio, $enviar->fecha, $enviar->id);

?>