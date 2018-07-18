var mysql = require("mysql");
//创建连接池 10
var pool = mysql.createPool({
	connectionLimit:30,
	host:"localhost",
	user:"root",
	password:"root",
	database:"haitao"	
});

module.exports = pool;

