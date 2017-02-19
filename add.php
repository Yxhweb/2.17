<?php
	include "db.php";
	$add=$sql->query("insert into newstu () values ()");
	if($sql->affected_rows>0){
		echo $add;
	};
?>