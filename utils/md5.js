const crypto = require('crypto');

var secret = "adsfjafdsalkfjdsalfjlkdsajfldsajflsajdu90ew432840932/.***lkjfaldsfja中文尽量快点撒减肥了的撒";

function md5(str){
    
    //使用哪种编码 sha256 md5
    const hash = crypto.createHash("md5");

    //需要加密的内容
    hash.update(str + secret);

    //已十六进制显示内容
    return hash.digest("hex");//e10adc3949ba59abbe56e057f20f883e

}

module.exports = md5;
