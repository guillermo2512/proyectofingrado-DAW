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


    public function ReservasCl($idusuario, $Reservasclien)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO reservasclientes (IdUsuario, Articulos) VALUES (?, ?)");
            $consulta->bindparam(1, $idusuario);
            $consulta->bindparam(2, $Reservasclien);

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
$condb -> ReservasCl($enviar->idusuario, $enviar->productos);

//$condb -> compras("pepe", "gimenez", "perico@gmail.com", "Jedi Fallen Order", "calle del pez", "28050");


?>