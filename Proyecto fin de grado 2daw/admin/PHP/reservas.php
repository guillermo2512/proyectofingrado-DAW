<?php

class Singleton
{
    private $Idb;
    private static $instancia; 
    private function __construct() 
    {
        $dsn = 'mysql:host=localhost;dbname=compras;charset=utf8';
        $usuario = "root";
        $pass = "";
        $this->Idb = new PDO($dsn, $usuario, $pass);
    }

    public static function singleton() 
    {
        if (!isset(self::$instancia)) {
            $miclase = __CLASS__;
            self::$instancia = new $miclase;
        }
        return self::$instancia;
    }

    public function __clone() 
    {
        trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR);
    }

    public function personas() 
    {
        $sql = "SELECT Nombre, Email, carrito FROM clientes;";
        $consulta = $this->Idb->prepare($sql);

        if (!$consulta->execute()) {
            print_r($consulta->errorInfo());
            return false;
        }

        $almacen = $consulta->fetchAll(PDO::FETCH_ASSOC);

        $enviar = json_encode($almacen);
        echo $enviar;   
    }
}

$conBD = Singleton::singleton();
$conBD->personas();