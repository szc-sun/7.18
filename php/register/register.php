<?php
	include '../public.php';
	//接收用户传递的信息
	$uname = $_POST['uname'];
	$upwd = $_POST['upwd'];
//	echo $uname,$upwd;
	
	//4.编写sql语句
	$sql = "INSERT INTO `users`( `uname`, `upwd`) VALUES ('$uname','$upwd')";
	//5.执行sql语句
	$row = mysql_query($sql); //返回行
	if($row){
		echo "<script>alert('注册成功！');location.href='../../login.html';</script>";
	}else{
		echo "<script>alert('注册失败！');location.href='../../register.html';</script>";
	}
?>