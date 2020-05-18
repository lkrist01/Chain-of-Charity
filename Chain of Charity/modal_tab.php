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

$type=$_POST['a']; //type
$place=$_POST['b']; //place
$time=$_POST['c']; //time

$sql="SELECT * FROM requests as r INNER JOIN disaster as d INNER JOIN gns as g ON r.disaster_id = d.disaster_id AND r.gns_id= g.item_id
AND d.type='$type' AND d.type='$type' AND d.place='$place' AND d.time='$time'";
$result = mysqli_query($connect,$sql);

if(mysqli_query($connect, $sql)){

  $i=1;

while($row = mysqli_fetch_array($result)) {

    echo "<tr>";
    echo "<td>" . $row['donator_id'] . "</td>" ;
    echo "<td>". $row['item_name'] . "</td>";
    echo "<td>" . $row['request_id'] . "</td>";
    echo "<td>" . $row['quantity'] . "</td>";
    echo "<td>";
    echo "<div class='input-group'>";
    echo "<button type='button' id='minus' onclick='subQuantity($i)' class='quantity-left-minus btn btn-danger btn-number' data-type='minus' data-field=''>" ;
    echo "<span class='glyphicon glyphicon-minus' aria-hidden='true'>-</span>";
    echo "</button>";
    echo "<input type='text' id='quantity$i' name='quantity$i' class='form-control input-number' value='1' min='1'>";
    echo "<button type='button' id='plus' onclick='addQuantity($i)' class='quantity-right-plus btn btn-success btn-number' data-type='plus' data-field=''>";
    echo "<span class='glyphicon glyphicon-plus' aria-hidden='true'>+</span>";
    echo "</button>";
    echo "</div>";
    echo "</tr>";
    echo "</td>";
    $i++;
}

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connect);
}

mysqli_close($connect);
?>
