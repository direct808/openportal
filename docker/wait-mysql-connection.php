<?php

$host = getenv("DB_HOST");
$name = getenv("DB_DATABASE");
$login = getenv("DB_USERNAME");
$pass = getenv("DB_PASSWORD");

while (true) {

    try {
        $dbh = new PDO("mysql:host=$host;dbname=$name", $login, $pass);
    } catch (Exception $e) {
        echo "Wait db connection..." . PHP_EOL;
        sleep(1);
        continue;
    }
    echo "DB connection...OK" . PHP_EOL;
    die(0);
}