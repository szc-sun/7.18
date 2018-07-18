<?php
	include '../public.php';
	$gid = $_GET['gid'];
	//操作数据 库
	//4.编写sql语句
	$sql = "SELECT * FROM `goods` WHERE gid = '$gid'";
	//5.执行sql语句
	$set = mysql_query($sql);
	//将集合转为数组
	$arr = mysql_fetch_array($set);
	echo $arr = json_encode($arr);