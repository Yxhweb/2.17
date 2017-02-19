<?php
	include "db.php";
	
	$add="select * from newstu";
	$result=$sql->query($add);
	while($row=$result->fetch_assoc()){
		$arr[]=$row;
	}
	echo json_encode($arr);
	
	
	
?>