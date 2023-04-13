<?php

//Accesos a las peticiones JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 3000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

//Se incluye la conexion con la base
include('../dbmanager/dbmanager.php');

$user_correct = false;

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Obtenemos los parámetros de la petición
  $parametro_user = $_GET['num_telefono'];
  //$parametro_password = $_GET['password'];

  // Se instancia el objeto dbmanager
  $ob = new dbmanager();

  // Consulta a la base de datos
  $query = "SELECT * 
            FROM usuarios 
            WHERE num_telefono = '$parametro_user'";
  $resultado = mysqli_query($ob->con, $query);
  
  // Obtener el número de filas del resultado
  $num_filas = mysqli_num_rows($resultado);

  // Verificar si se encontraron filas o no
  if ($num_filas != 0) {
  $user_correct = true;
  }
  // Construir un arreglo con el resultado
  $data = array(
  'found' => $user_correct
  );
  
  // Convertir el arreglo en formato JSON
  $json_data = json_encode($data);

  // Establecer la cabecera HTTP para indicar que se está enviando JSON
  header('Content-Type: application/json');

  // Imprimir el resultado en formato JSON
  echo $json_data;

  // Se cierra la conexión a la base de datos
  mysqli_close($ob->con);
}

?>