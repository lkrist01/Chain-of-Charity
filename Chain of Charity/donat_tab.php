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

$sql="SELECT * FROM disaster";
$result = mysqli_query($connect,$sql);

if(mysqli_query($connect, $sql)){

while($row = mysqli_fetch_array($result)) {

    echo "<tr>";
    echo "<td id='donid'>" . $row['dlist_id'] . "</td>";
    echo "<td id='type'>" . $row['type'] . "</td>";
    echo "<td>" . $row['place'] . "</td>";
    echo "<td>" . date('d-m-Y', strtotime($row['time'])) . "</td>";
    echo "<td class='m'> <button id='b' onclick='onclickDonate(\"{$row['type']}\", \"{$row['place']}\",\"{$row['time']}\" )'
    data-target='.donate_modal' data-toggle='modal' type='button data-target='.donate_modal' data-toggle='modal'
    class='btn btn-primary'><p>Donate<p></button data-target=''.donate_modal' data-toggle='modal'></td>";
    echo "</tr>";
}

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

mysqli_close($connect);
?>
