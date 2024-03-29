<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "conexion.php";

class Login
{
    private $conexion;

    public function getconecBD()
    {
        $dbObj = new conectaBD();
        $this->conexion = $dbObj->db;
    }

    public function recibir_ajax($nombre)
    {
        $this->getconecBD();
        try {
			
            $consulta = $this->conexion->prepare("SELECT usuario FROM usuarios WHERE usuario = ?;");
            $consulta->bindparam(1, $nombre);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                $resp = true;
                $envio = json_encode($resp);
                echo $envio;
            }
            
            if ($consulta->rowCount() >= 0)
            {
                $resp = true;
                $envio = json_encode($resp);
                echo $envio;
            }
            else 
            {
                $resp = false;
                $envio = json_encode($resp);
                echo $envio;
            }
            return false;
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }
}

$condb = new Login();
$condb->recibir_ajax($enviar->usuario);

?>