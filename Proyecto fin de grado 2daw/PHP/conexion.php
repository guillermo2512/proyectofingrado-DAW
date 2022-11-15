<?php

class conectaBD
{
    public $db;
    function __construct()
    {
        $dsn = 'mysql:host=localhost;dbname=compras;charset=utf8';
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
