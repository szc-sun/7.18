var createError = require("http-errors");
var logger = require("morgan");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");
var consolidate = require("consolidate");
var multer = require("multer");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/listpage');
var detailRouter = require('./routes/detailpage');



var app = express();

//文件上传
var multerMiddleware = multer({dest:"upload"}).any();
app.use(multerMiddleware);

// 模板引擎
app.set("view engine", "html");
app.set("views", "views");
app.engine("html", consolidate.ejs);

//日志
app.use(logger("dev"));

//处理post数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie-session
app.use(cookieParser());


var keys = [];
for(var i = 0; i < 10000; i++){
	keys.push("sessionid"+Math.random());
}

app.use(cookieSession({
	name:"sid",
	keys,
	maxAge:30*60*1000 //ms
}));


//静态服务器
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/listpage", listRouter);
app.use("/detailpage", detailRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
