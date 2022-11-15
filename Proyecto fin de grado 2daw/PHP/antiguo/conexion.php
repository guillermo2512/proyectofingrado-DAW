<?php
    $servidor="localhost";
    $usuario="root";
    $clavee="";
    $DB="aplicacion_web";

    class conectaBD
{
    public $db;
    function __construct()
    {
        $dsn = 'mysql:host=localhost;dbname=dwec;charset=utf8';
        $usuario = 'root';
        $pass = '';
        try {
            $this->db = new PDO($dsn, $usuario, $pass);
        } catch (PDOException $e) {
            echo $e->getMessage();
            exit();
        }
    }
}
?>