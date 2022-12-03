<?php

include_once "../../PHP/conexion.php";

$enviar = json_decode($_GET["enviar"], false);

class Editar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }


    public function editar($Titulo, $Precio, $Cantidad, $ID_Articulo)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("UPDATE productos SET Titulo = ?, Precio = ?, Cantidad = ? WHERE ID_Articulo = ?;");

            $consulta->bindparam(1, $Titulo);
            $consulta->bindparam(2, $Precio);
            $consulta->bindparam(3, $Cantidad);
            $consulta->bindparam(4, $ID_Articulo);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                $resp = 1;
                $envio = json_encode($resp);
                echo $envio;
            }

            if ($consulta->rowCount() > 0)
            {
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

?>