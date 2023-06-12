<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "conexion.php";

$comentarios;
$productos;
$reservas;

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }

    public function cargarcomentarios($id)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("SELECT COUNT(Reseña) numerocomentarios FROM comentarios WHERE IdUsuario =?;");
            $consulta->bindparam(1, $id);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                $resp = 1;
                $envios = json_encode($resp);
                echo $envios;
            }
            
            if ($consulta->rowCount() > 0)
            {
                $almacen = $consulta->fetch();
                $auxcom = $almacen["numerocomentarios"];
            }

            $consulta2 = $this->conexion->prepare("SELECT COUNT(carrito) numeropedidos FROM clientes WHERE IdUsuario = ?;");
            $consulta2->bindparam(1, $id);

            if (!$consulta2->execute()) {
                print_r($consulta2->errorInfo());
                $resp = 1;
                $envios = json_encode($resp);
                echo $envios;
            }
            
            if ($consulta2->rowCount() > 0)
            {
                $almacen = $consulta2->fetch();
                $auxpedi = $almacen["numeropedidos"];
            }

            $consulta3 = $this->conexion->prepare("SELECT COUNT(Articulos) numeroreservas FROM reservasclientes WHERE IdUsuario = ?;");
            $consulta3->bindparam(1, $id);

            if (!$consulta3->execute()) {
                print_r($consulta3->errorInfo());
                $resp = 1;
                $envios = json_encode($resp);
                echo $envios;
            }
            
            if ($consulta3->rowCount() > 0)
            {
                $almacen = $consulta3->fetch();
                $auxreser = $almacen["numeroreservas"];
            }

            $envio = array('numerocomentarios' => $auxcom, 'numeropedidos' => $auxpedi , 'numeroreservas' => $auxreser);
            $resp = json_encode($envio);
            echo $resp;

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

$condb = new Comprar();
$condb -> cargarcomentarios($enviar->id);

//$condb -> cargarcomentarios(1);

?>