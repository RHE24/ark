<?php

    $uri = $_SERVER['REQUEST_URI'];

    if ($uri == '/server_status') {
        $ip = "84.73.131.144:27015";
        $status = json_decode(file_get_contents("http://arkservers.net/api/query/$ip"));
        $status->info->Ip = $ip;

        header('Content-Type: application/json');
        echo json_encode($status);
        exit;
    } else {
        require('index.html');
    }

?>
