<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "pizza_website";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
    $username = $_POST['register-username'];
    $email = $_POST['register-email'];
    $password = $_POST['register-password'];

    $stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "Email already registered.";
    } else {
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $hashed_password);
        if ($stmt->execute()) {
            header("Lsocation: index.html#menu"); 
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
    }

    $stmt->close();
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $email = $_POST['login-email'];
    $password = $_POST['login-password'];

    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);

    $stmt->execute();
    $stmt->store_result();
    
    $stmt->bind_result($hashed_password);
    $stmt->fetch();

    if (password_verify($password, $hashed_password)) {
        header("Location: index.html#menu"); 
        exit();
    } else {
        echo "Invalid email or password.";
    }

    $stmt->close();
}

$conn->close();

?>
