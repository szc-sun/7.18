<?php
	include '../public.php';
	//接收前端传递的数据
	$gid = $_REQUEST['gid'];	
	echo $gid,
	//4.编写sql
	$sql = "DELETE FROM `cart` WHERE gid = $gid";
	$row = mysql_query($sql);
	