<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "conexion.php";
include_once 'password_salt.php';

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }

    public function enviar_ajax($titular, $ntar, $cod)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO datoscom (titular, ntar, cod) VALUES (?, ?, ?)");
            $consulta->bindparam(1, $titular);
            $consulta->bindparam(2, $ntar);
            $consulta->bindparam(3, $cod);
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

$ntar = Password::hash($enviar->ntar);
$cod = Password::hash($enviar->cod);

/*$ntar = Password::hash(4500283493);
$cod = Password::hash(456);*/

if(empty($enviar->titular))
{
    $resp = 1;
    $envio = json_encode($resp);
    echo $envio;
}else
{
    $condb = new Comprar();
    $condb -> enviar_ajax($enviar->titular, $ntar, $cod);
}

//$condb -> enviar_ajax("pepe", "gimemez", $ntar, $cod);


?>