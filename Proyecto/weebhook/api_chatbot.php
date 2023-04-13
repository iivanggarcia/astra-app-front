<?php
define('APPLICATION', true);
include('../dbmanager/dbmanager.php');

$challenge = $_REQUEST['hub_challenge'];
$verify_token = $_REQUEST['hub_verify_token'];

class Chatbot extends dbmanager {
  var $sender;
  var $id_whatsApp;
  var $authorization;
  var $verify_token;

  public function __construct($sender, $id_whatsApp, $authorization)
  {
    $this->verify_token = "EAAS48HHOKn8BADTA2WsRGrH3NgbCDiZBUDd4L3t2bTXNbjsAOih3Mm5lwhlWZBU5URvuU7e1hVxwAHDLTqT5DdE8oZA1ZC8jV3fUGIIZCa7L7tTXo4fZCAqsWbwf2G4XoyEjeJ7ZAQDmsAf5m8OLZAGpWtT6eK6g5ZChU5w2TeYze6SAwlJ29HXLXZAFuIPm4qiTKrtZA7JtaFJmQZDZD";
    $this->sender = $sender;
    $this->id_whatsApp = $id_whatsApp;
    $this->authorization = $authorization;
  }

  public function entrada($type_user, $message)
  {
      switch ($message) {
        case 'hola':
          $jsonData = $this->mensaje_bienvenida($type_user); //Llamamos metodo para empezar la conversacion
          $result = $this->hecho_envio_mensaje($jsonData); //Mandamos el curl y envia el mensaje
          return json_decode($result); //Returna el envio y termina el programa
          break;
        case "1":
          $jsonData = $this->pdf_incidente($type_user); //Llamamos metodo para empezar la conversacion
          $result = $this->hecho_envio_mensaje($jsonData); //Mandamos el curl y envia el mensaje
          return json_decode($result); //Returna el envio y termina el programa
          break;
        case "2":
          $jsonData = $this->menu($type_user); //Llamamos metodo para empezar la conversacion
          $result = $this->hecho_envio_mensaje($jsonData); //Mandamos el curl y envia el mensaje
          return json_decode($result); //Returna el envio y termina el programa
          break;
          case "2":
            $jsonData = $this->menu($type_user); //Llamamos metodo para empezar la conversacion
            $result = $this->hecho_envio_mensaje($jsonData); //Mandamos el curl y envia el mensaje
            return json_decode($result); //Returna el envio y termina el programa
            break;
        case 's':
          $jsonData = $this->mensaje_salir();
          $result = $this->hecho_envio_mensaje($jsonData);
          return json_decode($result);
          break;
        default:
          $jsonData = $this->correxion();
          $result = $this->hecho_envio_mensaje($jsonData);
          return json_decode($result);
          break;
      }
  }

  public function mensaje_bienvenida($type_user)
  {
    switch ($type_user) {
      case 'admin':
        $jsonData = '{
            "messaging_product": "whatsapp", 
            "recipient_type": "individual", 
            "to": ' . $this->sender . ', 
            "type": "text", 
            "text": { 
              "preview_url": false, 
              "body": "*Hola Daniel Leyva Lopez*\n\nSoy el bot de Astrazeneca, se detecto un nuevo incidente, para mas detalles, *ingresa el numero 1*"
            } 
          }';
        return $jsonData;
        break;
    }
  }

  public function pdf_incidente()
  {
    $jsonData = '{
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": '.$this->sender.',
      "type": "document", 
      "document": { 
        "link" : "https://www.proturbiomarspa.com/files/_pdf-prueba.pdf",
        "filename" : "INCIDENTE FK39291"
      }
    }';
    return $jsonData;
  }

  public function menu()
  {
    $jsonData = '{
      "messaging_product": "whatsapp", 
      "recipient_type": "individual", 
      "to": ' . $this->sender . ', 
      "type": "text", 
      "text": { 
        "preview_url": false, 
        "body": "*MENU*\n1 - Enviar al encargado\n2 - Salir"
      } 
    }';
    return $jsonData;
  }

  public function numero_encargado()
  {
    $jsonData = '{
      "messaging_product": "whatsapp", 
      "recipient_type": "individual", 
      "to": ' . $this->sender . ', 
      "type": "text", 
      "text": { 
        "preview_url": false, 
        "body": "Ingresa el numero del encargado:"
      } 
    }';
    return $jsonData;
  }

  //---------------------------------- EXTERNOS ---------------------------------- //

  public function mensaje_salir()
  {
    $jsonData = '{
        "messaging_product": "whatsapp", 
        "recipient_type": "individual", 
        "to": ' . $this->sender . ', 
        "type": "text", 
        "text": { 
          "preview_url": false, 
          "body": "Tu sesion ah finalizado, para volver a ingresar escribe cualquier mensaje..." 
        } 
      }';
    return $jsonData;
  }

  public function correxion()
  {
    $jsonData = '{
      "messaging_product": "whatsapp", 
      "recipient_type": "individual", 
      "to": ' . $this->sender . ', 
      "type": "text", 
      "text": { 
        "preview_url": "true", 
        "body": "Losiento, no te entiendo.\nIngresa de nuevo el mensaje correctamente."
      } 
    }';
    return $jsonData;
  }

  public function hecho_envio_mensaje($jsonData)
  {
    //Codigo de curl para enviar un mensaje a whatsApp
    $url = 'https://graph.facebook.com/v15.0/' . $this->id_whatsApp . '/messages';
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Authorization: Bearer ' . $this->authorization));
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    $result = curl_exec($ch);
    curl_close($ch);

    return $result;
  }
}

if ($verify_token === 'EAAS48HHOKn8BADTA2WsRGrH3NgbCDiZBUDd4L3t2bTXNbjsAOih3Mm5lwhlWZBU5URvuU7e1hVxwAHDLTqT5DdE8oZA1ZC8jV3fUGIIZCa7L7tTXo4fZCAqsWbwf2G4XoyEjeJ7ZAQDmsAf5m8OLZAGpWtT6eK6g5ZChU5w2TeYze6SAwlJ29HXLXZAFuIPm4qiTKrtZA7JtaFJmQZDZD') {
  echo $challenge;
}

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input)) {

  $obj = new dbmanager();

  $id_whatsApp = $input['entry'][0]['changes'][0]['value']['metadata']['phone_number_id']; //Encuentra el id del numero del bot
  $numero_whatsApp = $input['entry'][0]['changes'][0]['value']['metadata']['display_phone_number']; //Encuentra el numero del bot
  $sender = str_replace('521', '52', $input['entry'][0]['changes'][0]['value']['contacts']['0']['wa_id']); //Guardamos el numero del usuario
  $sender_db = str_replace('521', '', $input['entry'][0]['changes'][0]['value']['contacts']['0']['wa_id']); //Guardamos el numero del usuario
  
  $authorization = "EAAS48HHOKn8BADTA2WsRGrH3NgbCDiZBUDd4L3t2bTXNbjsAOih3Mm5lwhlWZBU5URvuU7e1hVxwAHDLTqT5DdE8oZA1ZC8jV3fUGIIZCa7L7tTXo4fZCAqsWbwf2G4XoyEjeJ7ZAQDmsAf5m8OLZAGpWtT6eK6g5ZChU5w2TeYze6SAwlJ29HXLXZAFuIPm4qiTKrtZA7JtaFJmQZDZD";
  $message = $input['entry'][0]['changes'][0]['value']['messages']['0']['text']['body']; //Guardamos el mensaje del usuario
  $message = strtolower($message);

  //Consulta para saber que tipo de usuario es, hasta ahorita puede ser alumno, padre y maestro
  //$type_user = $obj->ids("select tipo_usuario where numero_telefono = '".$sender_db."'");
  //$type_user = $obj->ids("select tipo_usuario where numero_telefono = '".$sender_db."'");

  //$nombre_usuario = $obj->ids("select if(nombre_2!=null,concat(nombre,' ', nombre_2, ' ', apellido_p, ' ', apellidoM),concat(nombre_1, ' ', apellidoP, ' ', apellidoM)) from ALUMNOS where numero_whatsapp = '" . $sender_db . "' and status!=0");
  $type_user = "admin";
  $Chatbot = new Chatbot($sender, $id_whatsApp, $authorization); //Creamos objeto y mandamos valores al constructor
  $jsonData = $Chatbot->entrada($type_user, $message);

  exit(); //Terminamos todo para no ocasionar un bucle
}
?>