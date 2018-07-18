<?php
	//设置字符集
	header("content-type:text/html;charset=utf-8");
	//操作数据库
	//1.连接数据库
	//第一个参数：连接数据库的URL地址
	//第二个参数：登录数据库的用户名
	//第三个参数：登录数据库的密码
	$db = mysql_connect("localhost","root","root");
	//2.选择数据库
	//第一个参数：选择所要操作的数据库
	//第二个参数：登录（连接）数据库的返回值
	mysql_select_db("haitao",$db);
	//3.设置数据库中的字符集
	mysql_query("set names utf-8");
?>