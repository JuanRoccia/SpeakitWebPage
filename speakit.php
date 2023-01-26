<?php

// No guarde cache de navegador
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado

// Introduce la función de conexión
include("conexion.php");
// Procesamiento de datos
$name = $_POST['name'];
$email = $_POST['email'];
$country = $_POST['country'];
$date = date("d/m/y");
// Envio de información a la DB
$conectar = conex();
$sql = "INSERT INTO formulario (Name, Email, Country, Fecha)
VALUES ('$name','$email','$country','$date')";
$resul = mysqli_query($conectar,$sql) or trigger_error("Query Failed SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);

?>