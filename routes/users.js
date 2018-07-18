var express = require("express");
var pool = require("../utils/pool");
//var md5 = require("../utils/md5");

var router = express.Router();


//渲染购物车页面

router.get("/cart", function(req, res) {
	
	res.render("./users/cart",{error:1,msg:""});
}); 	



//登录页渲染页面
router.get("/login", function(req, res) {
  	res.render("./users/login",{error:1,msg:""});
});

//处理接口
router.post("/login", function(req, res) {
	var {uname,upwd} = req.body;
	console.log({uname,upwd});
	//pass = md5(pass);
	
	var sql = `select * from user_table where uname="${uname}" and upwd="${upwd}"`;
	pool.query(sql,function(err,data){
		
		if(data.length == 0){//用户名或者密码错误
			//res.send({error:0,msg:"用户名或者密码错误"});
			
			res.render("./users/login",{error:0,msg:"用户名或者密码错误"});
		} else {
			//res.send({error:1,msg:"登陆成功"});

			//req.session.isLogin = true;

			res.redirect("/");
		}	
	});
});


//注册页渲染
router.get("/reg", function(req, res) {
  	res.render("./users/register");
});
//处理接口
router.post("/reg", function(req, res) {
	var {uname,upwd} = req.body;
	  
	//pass = md5(pass);
	
	var querySql = `select * from user_table where uname="${uname}"`;
	pool.query(querySql,function(err,data){
		
		if(data.length == 0){//用户不存在 可以注册
			var inserSql = `insert into user_table(uname,upwd) values("${uname}","${upwd}")`
			pool.query(inserSql,function(err){
				res.send({error:1,msg:"注册成功"});	
			});
			 
		} else {//用户已经存在
			res.send({error:0,msg:"用户已存在"});
		}	
	}); 
});

module.exports = router;








