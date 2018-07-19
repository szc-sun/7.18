var express = require("express");
var pool = require("../utils/pool");
//var md5 = require("../utils/md5");

var router = express.Router();


//渲染购物车页面
router.get("/cart", function(req, res) {
	
	res.render("./users/cart",{error:1,msg:""});
}); 
router.post("/cart/up",function(req,res){
	if(!req.session.isLogin){
		res.send({error:0,msg:"未登录"});
	}else{
		console.log(req.body.gid);
		
	
		var arr = [];
		for(var j in req.body){
			console.log(j);
			arr.push(j);
		}

		arr.forEach(function(value){
			var obj = JSON.parse((req.body)[value]);
			console.log(typeof obj);
			console.log(obj.gid,obj.goodSrc,obj.gRemark,obj.goodPrice,obj.nums);
			var querySql = `select * from cart where gid = '${value}'`;
			console.log("11111111")
			pool.query(querySql,function(err,data){
				console.log(1,data);
				console.log("2222222222")
				if(data.length == 0){
					var inserSql = `insert into cart(gid,img,remark,price1,nums) values("${obj.gid}","${obj.goodSrc}","${obj.gRemark}",${obj.goodPrice},${obj.nums})`;
					//`insert into user_table(uname,upwd) values("${uname}","${upwd}")`
					pool.query(inserSql,function(err,data){
						console.log(2,data);
						console.log("333333333")
						//res.send({error:1,msg:"结算成功"});
					});
				//	`insert into user_table(uname,upwd) values("${uname}","${upwd}")`
				} else {
					var nums =parseInt(obj.nums) + parseInt(data[0].nums);
					console.log(nums);
					var updateSql = `update cart set nums = ${nums} where gid = '${value}'`;
					console.log(updateSql)
					pool.query(updateSql,function(err,data){
						console.log(3,data);
						//res.send({error:1,msg:"结算成功"});
					})

					//"UPDATE `cart` SET `nums`= $nums WHERE gid = $gid"

				}	
			})
		})

		res.send({error:1,msg:"结算成功"});
	
	}
	
})



//登录页渲染页面
router.get("/login", function(req, res) {
  	res.render("./users/login",{error:1,msg:""});
});

//处理接口
router.post("/login", function(req, res) {
	var {uname,upwd} = req.body;
	//console.log({uname,upwd});
	//pass = md5(pass);
	
	var sql = `select * from user_table where uname="${uname}" and upwd="${upwd}"`;
	pool.query(sql,function(err,data){
		if(data.length == 0){//用户名或者密码错误
			//res.send({error:0,msg:"用户名或者密码错误"});
			
			res.render("./users/login",{error:0,msg:"用户名或者密码错误"});
		} else {
			//res.send({error:1,msg:"登陆成功"});

			req.session.isLogin = true;

			res.redirect("./cart");
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








