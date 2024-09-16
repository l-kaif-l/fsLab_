<?php
$servername = "127.0.0.1";

$username = "root";  // Replace with your MySQL username
$password = "708090";      // Replace with your MySQL password (leave blank if no password)
$dbname = "live_edit_db"; // Database name

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
$conn = new mysqli($servername, $username, $password, $dbname, 3303); // Use correct port

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
