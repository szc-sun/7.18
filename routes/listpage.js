var express = require("express");
var pool = require("../utils/pool");
//var md5 = require("../utils/md5");

var router = express.Router();


//渲染列表页面

router.get("/", function(req, res) {
	var pageSize = 2;
	var pageNo = req.query.pageNo || 1;
	var totalSql = "select count(*) as count from list_table";
	pool.query(totalSql,function(err,data){
		console.log(data);
		if(data.length == 0){//没有数据
			res.render("./listpage/listpage.html",{pageCount:0});
		} else {//有数据
			var count  = data[0].count;
			var pageCount = Math.ceil(count/pageSize);
			//做分页
			var beginIndex = (pageNo-1)*pageSize;
			var querySql = `select * from list_table limit ${beginIndex},${pageSize}`;
			console.log(1111,querySql);
			pool.query(querySql,function(err,data){
				console.log(111,data,pageCount);
				res.render("./listpage/listpage.html",{data,pageCount,pageNo});
			});
		}
	}); 	
});
router.get("/listpage/addCart", function(req, res) {
	
});
module.exports = router;