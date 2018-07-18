<?php
	include '../public.php';
	//接收前端传递的数据
	$gid = $_REQUEST['gid'];
	$nums =$_REQUEST['nums'];
	echo $gid,$nums;
	//4.编写sql
	$sql = "UPDATE `cart` SET `nums`= $nums WHERE gid = $gid";
	$row = mysql_query($sql);
	