<?php
	include "db.php";
	$id=$_GET["id"];
	$hqname=$_GET["hqname"];
	$value=$_GET["value"];
	$up="update newstu set {$hqname}='{$value}' where id='$id' ";
	$result=$sql->query($up);
	echo $result;
?>