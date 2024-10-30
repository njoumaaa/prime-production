<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "primedb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email1'];
$user = $_POST['user'];
$password = $_POST['password1'];
$confirm = $_POST['confirm'];

$sql = "SELECT * FROM information WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo '<script type="text/javascript">alert("You have an account with this email");window.location.href="cnx.html";</script>';
} else {
    $sql = "INSERT INTO information (email, user, password)
    VALUES ('$email', '$user', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "<script type='text/javascript'>alert('Sign up successful');window.location.href='acceuil.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();

?>
