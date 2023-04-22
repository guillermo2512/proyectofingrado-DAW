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


    public function enviar_ajax($titulo, $precio, $fecha)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO reservas (Titulo, Precio, fecha_salida) VALUES (?, ?, ?);");
            $consulta->bindparam(1, $titulo);
			$consulta->bindparam(2, $precio);
            $consulta->bindparam(3, $fecha);

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
$condb->enviar_ajax($enviar->titulo, $enviar->precio, $enviar->fecha);

?>