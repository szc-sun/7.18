<?php
	include '../public.php';
	//接收用户传递的信息
	$uname = $_POST['uname'];
	$upwd = $_POST['upwd'];
	
	//4.编写sql语句
	$sql = "SELECT * FROM `users` WHERE uname='$uname'";
	//5.执行sql语句
	$set = mysql_query($sql); //返回值是数据集合
	//将集合转为数组
	$arr = mysql_fetch_array($set);
//	print_r($arr);
	//判断用户名是否存在，如果存在，判断密码是否正确
	if($arr['uname'] == $uname){
		if($arr['upwd'] == $upwd){
			echo "<script>alert('登录成功！');location.href='../../index.html';</script>";
		}else{
			echo "<script>alert('密码错误！');location.href='../../login.html';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在！');location.href='../../login.html';</script>";
	}
?>