var express = require("express");
var pool = require("../utils/pool");
//var md5 = require("../utils/md5");

var router = express.Router();
router.get("/", function(req, res) {
	var sql = "select * from goods where gid = 'sp1'";
	pool.query(sql,function(err,data){
		console.log(data);
		if(data.length == 0){//没有数据
			res.render("./detailpage/detailpage.html",{pageCount:0});
		} else {//有数据
		
				res.render("./detailpage/detailpage.html",{data});
		}
	}); 	

});

module.exports = router;