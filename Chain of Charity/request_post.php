<?php


    $host="localhost";
		$username="root";
		$password="";
		$db="coc";

		$dbconnect=mysqli_connect($host,$username,$password,$db);
        if ($dbconnect->connect_errno){
            echo"no db";
        }else{
        $date=$_POST['date'];
        $type=$_POST['type'];
        $location=$_POST['location'];
        $name=$_POST['name'];
        $quantity=$_POST['quantity'];
        $rand=rand(1,100000);

        if ($query=mysqli_query($dbconnect,"SELECT * from dlist where name='$type';")){
            $row=mysqli_fetch_array($query);
            //echo $row['dlist_id'];
            $dlist=$row['dlist_id'];
            if ($query=mysqli_query($dbconnect,"Insert Into disaster(place,type,time,dlist_id,disaster_id) VALUES ('$location','$type','$date',$dlist,$rand);"))
            echo "Success";
        else
            echo "Insert Into disaster(place,type,time,dlist_id) VALUES ('$location','$type','$date',$dlist,$rand);";
            //echo "500 Bad request";
        }
        else
            echo "Insert Into disaster(place,type,time,dlist_id) VALUES ('$location','$type','$date',$dlist,$rand);";

            //echo "500 Bad request";
        if ($query1=mysqli_query($dbconnect,"INSERT into requests(request_id,quantity,gns_id,donator_id,organization_id,disaster_id) VALUES($rand,$quantity,22,9856,1,10);")){
            echo "success";
            }else{
              echo "fail insert request";
            }
        mysqli_close($dbconnect);

        }



?>
