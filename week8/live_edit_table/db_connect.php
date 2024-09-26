<?php
$host = "localhost";
$user = "root";
$password = "708090";
$database = "test_db";

$conn = mysqli_connect($host, $user, $password, $database);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
