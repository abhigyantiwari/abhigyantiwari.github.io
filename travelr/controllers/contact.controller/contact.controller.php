<?php

require_once("../../config/config.php");

$host = HOST;
$username = USERNAME;
$password = PASSWORD;
$db = DB;
$port = PORT;

error_reporting(E_ALL);

$dsn = "mysql:host=".$host.";dbname=".$db.";port=".$port."";
$options = array(
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
);
$conn = new PDO($dsn, $username, $password, $options);

$contact_data_post = file_get_contents("php://input");
$contact_data = json_decode($contact_data_post);

$first_name = $contact_data[0];
$last_name = $contact_data[1];
$email = $contact_data[2];
$city = $contact_data[3];
$message = $contact_data[4];

echo $first_name;

$stmt = $conn->prepare("INSERT INTO FEEDBACK(FIRST_NAME, LAST_NAME, EMAIL, CITY, MESSAGE) VALUES(:FIRST_NAME, :LAST_NAME, :EMAIL, :CITY, :MESSAGE)");

$stmt->bindParam("FIRST_NAME", $first_name, PDO::PARAM_STR);
$stmt->bindParam("LAST_NAME", $last_name, PDO::PARAM_STR);
$stmt->bindParam("EMAIL", $email, PDO::PARAM_STR);
$stmt->bindParam("CITY", $city, PDO::PARAM_STR);
$stmt->bindParam("MESSAGE", $message, PDO::PARAM_STR);

$stmt->execute();
