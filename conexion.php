<?php

// No guarde cache de navegador
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado

// Funcion para concetarse a la BD
function conex(){
    $hostname = "localhost";
    $usuraiobdd = "u749132191_speakitUser";
    $passwordbdd = "vR5&HpcI^M?G";
    $bddname = "u749132191_Speakit";
    // Definimos la variable
    $conectar = mysqli_connect($hostname,$usuraiobdd,$passwordbdd,$bddname);
    // Y la retornamos
    return $conectar;
}

?>