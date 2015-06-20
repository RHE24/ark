<?php

    if (array_key_exists('server_status', $_GET)) {
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
