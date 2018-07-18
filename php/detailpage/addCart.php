<?php
	include '../public.php';
	//接收前端传递的数据
	
	$gid = $_REQUEST['gid'];
	$gname = $_REQUEST['gname'];
	$desc = $_REQUEST['desc'];
	$price1 = $_REQUEST['price1'];
	$price2 = $_REQUEST['price2'];
	$nums =$_REQUEST['nums'];
	echo $gid,$gnume,$price1,$price2,$nums;
	//4.编写sql语句
	$sql = "INSERT INTO `cart`( `gid`, `gname`, `desc`,`price1`,`price2`,`nums`) VALUES ('$gid','$gname','$desc','$price1','$price2','$nums')";
	//5.执行sql
	mysql_query($sql);