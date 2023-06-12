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


    public function cargarproductos($id)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("SELECT carrito FROM clientes WHERE IdUsuario = ?;");
            $consulta->bindparam(1, $id);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                $resp = 1;
                $envio = json_encode($resp);
                echo $envio;
            }
            
            if ($consulta->rowCount() > 0)
            {
                $almacen = $consulta->fetchAll();
                $envios = json_encode($almacen);
                echo $envios;
            }
            else {
                $resp = 1;
                $envio = json_encode($resp);
                echo $envio;
            }
            return 1;

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

$condb = new Comprar();
$condb -> cargarproductos($enviar->idusuario);

?>