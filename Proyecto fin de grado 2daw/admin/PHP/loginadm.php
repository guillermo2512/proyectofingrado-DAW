<?php

$enviar = json_decode($_GET["enviar"], false);

include_once "../../PHP/conexion.php";
include_once '../../PHP/password_salt.php';

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
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("SELECT contrasena FROM gerencia WHERE usuario = ?;");
            $consulta->bindparam(1, $nombre);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                $resp = 1;
                $envio = json_encode($resp);
                echo $envio;
            }

            if ($consulta->rowCount() >= 0) {
                if ($row = $consulta->fetch()) 
                {
                    return $row["contrasena"];
                }
            }
            return 1;
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

    public function recibir_ajax($email, $pass)
    {
        $this->getconecBD();
        try {
            $consulta = $this->conexion->prepare("SELECT Nombre, usuario FROM gerencia WHERE usuario = ? and contrasena = ?;");
            $consulta->bindparam(1, $email);
            $consulta->bindparam(2, $pass);

            if (!$consulta->execute()) {
                print_r($consulta->errorInfo());
                $resp = 1;
                $envio = json_encode($resp);
                echo $envio;
            }

            if ($consulta->rowCount() > 0)
            {
                $almacen = $consulta->fetch(PDO::FETCH_ASSOC);
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

$condb = new Login();
$contra = $condb->comprobarExisteUsuario($enviar->email);

if (Password::verify($enviar->pass, $contra)) 
{
    $condb->recibir_ajax($enviar->email, $contra);

} else {
    $resp = 1;
    $envio = json_encode($resp);
    echo $envio;
}
