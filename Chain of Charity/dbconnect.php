<?php
    $host = 'localhost';
    $dbname = 'coc';
    $username = 'root';
    $password = '';
	// Create connection
$connect = new mysqli($host, $username, $password,$dbname);

// Check connection
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}
echo "Connected successfully";

$id=$_POST['a'];
$dlist=$_POST['b'];

$sql = "INSERT INTO dlist (dlist_id, name) VALUES ('$id','$dlist')";
if(mysqli_query($connect, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($connect);
}

mysqli_close($connect);
?>
