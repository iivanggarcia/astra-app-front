<?php

//Accesos a las peticiones JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 3000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

// Se incluye la conexión con la base de datos
include('../dbmanager/dbmanager.php');

// Se instancia el objeto dbmanager
$ob = new dbmanager();

// Consulta a la base de datos
$query = "SELECT * FROM categorias";
$resultado = mysqli_query($ob->con, $query);

// Crear el arreglo con los datos de la consulta
$data = array();
while ($row = mysqli_fetch_assoc($resultado)) {
    $data[] = $row;
}

// Crear el objeto JSON con los datos de la consulta
$json = json_encode($data);

// Configurar la cabecera de la respuesta HTTP
header('Content-Type: application/json');

// Imprimir la respuesta JSON
echo $json;

// Se cierra la conexión a la base de datos
mysqli_close($ob->con);

?>