$path = 'images';
$d = dir($path);
if ($d) {
    $files = array();
    while (false !== ($name = $d->read())) {
        if ($name === '.' || $name === '..') continue;
        $fullName = $path . "/" . $name;
        if (is_file($fullName)) $files[] = $name;
    }
    $d->close();
    echo '[ { src: "images/'.implode('", dir: "up"},{ src: "images/', $files).'", dir: "up"}]';
}