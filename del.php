<?php
	include "db.php";
	$id=$_GET["id"];
	$dle=$sql->query("delete from newstu where id='$id'");
	if($dle->affected_rows>0){
		echo "ok";
	};
	
	
?>


