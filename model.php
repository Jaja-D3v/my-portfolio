<?php

include_once "./db.php";


$connection = new Database();
$connection->connect();

if ($connection) {
    echo "connnected successfully!";
} else {
    echo "failed to connect!";
}