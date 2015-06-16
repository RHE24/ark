<?php

$items = json_decode(file_get_contents('items.json'));
$dir = __DIR__ . "/resources/items";

if (is_dir($dir)) {
    exec("rm -rf $dir");
}

mkdir($dir);

echo "Downloading images:\n";

foreach ($items as $key => $item) {
    if ($item->icon == null) {
        echo "\t{$item->id} \tx Skip\n";
        continue;
    }

    $img = "{$dir}/{$item->id}.png";
    $url = "http:{$item->icon}";

    echo "\t$key\t";

    file_put_contents($img, file_get_contents($url));

    echo "√ Done\n";
}
