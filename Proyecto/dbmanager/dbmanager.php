<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

class dbmanager
{
    var $con;

    public function __construct()
    {
        $usuario = "gosoftware_leyva";
        $password = "*fDaz,A,g}mW6GRIoz";
        $servidor = "localhost";
        $basededatos = "gosoftware_softley";
        $this->con = mysqli_connect($servidor, $usuario, $password, $basededatos) or die("No se ha podido conectar al Servidor");
        mysqli_query($this->con, "SET SESSION collation_connection ='utf8_unicode_ci'");
        $db = mysqli_select_db($this->con, $basededatos) or die("Upps! Error en conectar a la Base de Datos");
    }

    public function ids($consulta)
    {
        $envio = mysqli_query($this->con, $consulta . " limit 1");
        $arreglo = mysqli_fetch_array($envio);
        return $arreglo[0];
    }

    public function consulta($consulta)
    {
        $envio = mysqli_query($this->con, $consulta);
        $i = 0;
        while ($arreglo = mysqli_fetch_array($envio)) {
            $array[$i] = $arreglo[0];
            $i++;
        }
        return $array;
    }

    public function update($consulta)
    {
        $envio = mysqli_query($this->con, $consulta);
        return $envio;
    }

    public function insert($consulta)
    {
        $envio = mysqli_query($this->con, $consulta);
        return $envio;
    }
}

?>