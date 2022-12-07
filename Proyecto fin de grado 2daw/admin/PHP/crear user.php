<?php

include_once "../../PHP/conexion.php";
include_once '../../PHP/password_salt.php';

class Comprar {

    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
		$this->conexion = $dbObj->db;
    }


    public function enviar_ajax($nombre, $pass, $mail)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("INSERT INTO gerencia (Nombre, usuario, contrasena) VALUES (?, ?, ?)");
            $consulta->bindparam(1, $mail);
			$consulta->bindparam(2, $pass);
            $consulta->bindparam(3, $nombre);

            if (!$consulta->execute()) 
            {
                print_r($consulta->errorInfo());
                $resp = false;
                $envio = json_encode($resp);
                echo $envio;
            }

        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}
$clave = Password::hash("1234");
$claves = Password::hash("5802");

echo $clave;
echo "<br>";
echo "<br>";
echo $claves;

//$condb = new Comprar();
//$condb->enviar_ajax("guillermo", "admin", $clave);
//$condb->enviar_ajax("miguel", "miguel58", $claves);

?>