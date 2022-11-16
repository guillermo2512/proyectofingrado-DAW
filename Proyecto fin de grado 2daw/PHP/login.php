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

    public function comprobarExisteUsuario($nombre)
    {
        try {
            $consulta = $this->db->prepare("select Contrasena from usuarios where Email =?");
            $consulta->bindparam(1, $nombre);
            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                return false;
            }
            if ($consulta->rowCount() > 0) {
                if ($row = $consulta->fetch()) {
                    return $row["Contrasena"];
                }
            }
            return false;
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

    public function recibir_ajax($nombre, $pass)
    {
        $this->getconecBD();
        try {

            $consulta = $this->conexion->prepare("SELECT * FROM usuarios WHERE Email = ? and Contrasena = ?;");
            $consulta->bindparam(1, $nombre);
            $consulta->bindparam(2, $pass);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                return false;
            }

            if ($consulta->rowCount() > 0)
            {
                $almacen = $consulta->fetchAll();
                $envios = json_encode($almacen);
                echo $envios;
            }
            else {
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
$contra = $condb->comprobarExisteUsuario($enviar->nombre);

if (Password::verify($enviar->pass, $contra)) 
{
    $condb->recibir_ajax($enviar->nombre, $enviar->pass);

} else {

    $resp = false;
    $envio = json_encode($resp);
    echo $envio;
}
