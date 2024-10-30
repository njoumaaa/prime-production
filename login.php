<?php
session_start();

//connection to the database
$conn = new mysqli('localhost', 'root', '', 'primedb');

//check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//get the information from the form
$email = $_POST['email'];
$password = $_POST['password'];

//sql query to check if the email and password exist in the database
$sql = "SELECT * FROM information WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

//check if the email and password exist in the database
if ($result->num_rows > 0) {
    //email and password exist, login successful
    $_SESSION['email'] = $email;
    header("Location: acceuil.html");
    exit;
} else {
    //email and password do not exist, return to the cnx page
    echo "<script>alert('Please create an account.');window.location.href='cnx.html';</script>";
    exit;
}

//close the connection
$conn->close();
?>


