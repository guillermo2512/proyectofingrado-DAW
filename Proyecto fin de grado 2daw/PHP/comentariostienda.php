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


    public function insertarcomentarios($idusuario, $idproducto, $reseña, $fecha)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO comentarios(IdUsuario, IdProducto, Reseña, Fecha) VALUES (?,?,?,?);");
            $consulta->bindparam(1, $idusuario);
            $consulta->bindparam(2, $idproducto);
            $consulta->bindparam(3, $reseña);
            $consulta->bindparam(4, $fecha);

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
$fecha = date("d-m-Y");

$condb = new Comprar();
$condb -> insertarcomentarios($enviar->ididusuario, $enviar->idproducto, $enviar->reseña, $fecha);

?>