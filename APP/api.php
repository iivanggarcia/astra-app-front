<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

require_once ('./twilio-php-main/src/Twilio/autoload.php');
include("dbmanager/dbmanager.php");

use Twilio\Rest\Client;

$sid = "ACb71912bb9eabda2a115189def8fa9f9a"; // Your Account SID from https://console.twilio.com
$token = "5e3cca182a9af9e98458da901c049b50"; // Your Auth Token from https://console.twilio.com
$twilio = new Twilio\Rest\Client($sid, $token);

//Se incluira la informacion de la base y se generaran variables dinamicas
$servicio = "Collaboration";
$categoria = "Box Platform / API";
$prioridad = "P2";
$status =  "In progress";
$num_incidencia = "FK279282";
$Descripcion = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit eius aliquid! Molestias itaque, numquam, unde quod voluptates odit provident dignissimos consequuntur sunt, magni error facere non tempora. Reiciendis, ullam!";

$execution = $twilio->studio->v1->flows("FW7397f6e18a8bca5888d3848c44f1b388")
                                ->executions
                                ->create("whatsapp:+5215527157126", // to
                                         "whatsapp:+14155238886", // from
                                         [
                                             "parameters" => [
                                                 "servicio" => $servicio,
                                                 "categoria" => $categoria,
                                                 "status" => $status,
                                                 "prioridad" => $prioridad,
                                                 "incidencia" => $num_incidencia,
                                                 "descripcion" => $Descripcion
                                             ]
                                         ]
                                );

print($execution->sid);