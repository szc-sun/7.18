//ES5
function Slider(id){
	this.ele = this.$id(id);
	this.ullis = this.$get(this.$get(this.ele,'ul')[0],'li');
	this.num = this.ullis.length;
	this.ollis = this.createEle();
	this.indexA = 0;
	this.div = this.$id('msg');
	this.slide();
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}
Slider.prototype = {
	$id : function(id){
		return document.getElementById(id);
	},
	$get : function(obj,tagName){
		if(typeof obj == 'object'){
			return obj.getElementsByTagName(tagName);
		}else if(typeof obj == 'string' && this.$id(obj)){
			return this.$id(obj).getElementsByTagName(tagName);
		}
	},
	$create : function(tagName){
		return document.createElement(tagName);
	},
	createEle : function(){
		var ol = this.$create('ol');
		var arr = [];
		for(var i = 0;i < this.num;i ++){
			var li = this.$create('li');
			arr.push(li);
			ol.appendChild(li);
		}
		this.ele.appendChild(ol);
		
		
		var leftSpan = this.$create('span');
		leftSpan.id = 'ltBtn';
		leftSpan.innerHTML = '&lt;';
		this.ele.appendChild(leftSpan);
		
		var rightSpan = this.$create('span');
		rightSpan.id = 'rtBtn';
		rightSpan.innerHTML = '&gt;';
		this.ele.appendChild(rightSpan);
		
		
		var div = this.$create('div');
		div.id = 'msg';
		this.ele.appendChild(div);
		
		
		return arr;
	},
	slide : function(){
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = 'none';
			this.ollis[i].style.background = '#656565';
		}
		this.ullis[this.indexA].style.display = 'block';
		this.ollis[this.indexA].style.background = '#da6f13';
		
	},
	addEvent : function(){
		this.ltBtn = this.$id('ltBtn');
		this.rtBtn = this.$id('rtBtn');
		var that = this;
		this.ltBtn.onclick = function(){
			that.indexA --;
			if(that.indexA == -1){
				that.indexA = that.num - 1;
			}
			that.slide();
		}
		this.rtBtn.onclick = function(){
			that.indexA ++;
			if(that.indexA == that.num){
				that.indexA = 0;
			}
			that.slide();
		}
		
		for(var i= 0;i < this.num; i ++){
			this.ollis[i].index = i;
			
			this.ollis[i].onmouseover = function(){
				that.indexA = this.index;
				that.slide();
			}
		}
	},
	autoPlay : function(){
		var that = this;
		this.timer = setInterval(function(){
			that.indexA ++;
			if(that.indexA == that.num){
				that.indexA = 0;
			}
			that.slide();
		},3000)
		this.ele.onmouseover = function(){
			clearInterval(that.timer);
		}
		this.ele.onmouseout = function(){
			that.autoPlay();
		}
	}
}





//二级菜单
var $ullis = $(".drowdown-menu li");
var $menuli = $(".drop_con");
$menuli.mouseover(function() {
	var $ul1 = $(this).children("ul")	
	$ul1.css("display", "block");
	var $lis = $ul1.children();
	$.each($lis,function(index,value){
				$(value).mouseenter(function(){
					$(this).css('color','red');
					$(this).children().css('color','red');
				})
				$(value).mouseleave(function(){
					$(this).css('color','');
					$(this).children().css('color','');
				})
			})
	$menuli.mouseout(function(){
		$ul1.css("display", "none");
	})
});

$(".drop_con").mouseover(function(){
	worldClockZone();
})

//动态时间
function calcTime(city, offset) { 
	var d = new Date(); 
	//getTimezoneOffset() 返回值:本地时间与 GMT 时间之间的时间差，以分钟为单位。
	//utc :GMT 时间
	var utc = d.getTime() + (d.getTimezoneOffset() * 60000); 
	var nd = new Date(utc + (3600000 * offset)); 
	var gmtTime = new Date(utc) 
	var day = nd.getDate(); 
	var month = nd.getMonth(); 
	var year = nd.getYear(); 
	var hr = nd.getHours(); //+ offset 
	var min = nd.getMinutes(); 
	var sec = nd.getSeconds(); 
	 
	year += 1900 
	
//var monthArray = new Array("1月", "2月", "March", "April", "May", "June", "July", "August", 
//"September", "October", "November", "December") 
	var monthArray = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12");
	var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	if (year % 4 == 0){ 
		monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
	} 
	if(year % 100 == 0 && year % 400 != 0){ 
		monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"); 
	} 
	if (hr >= 24){ 
		hr = hr-24;
		day -= -1;
	} 
	if (hr < 0){ 
		hr -= -24;
		day -= 1; 
	} 
	if (hr < 10){ 
		hr = "0" + hr;
	} 
	if (min < 10){ 
		min = "0" + min; 
	} 
	if (sec < 10){ 
		sec = "0" + sec; 
	} 
	if (day <= 0){ 
		if (month == 0){ 
			month = 11 
			year -= 1 
		} else{ 
		month = month -1 
		} 
		day = monthDays[month]; 
	} 
	if(day > monthDays[month]){ 
		day = 1 ;
		if(month == 11){ 
			month = 0;
			year -= -1; 
		} else{ 
			month -= -1 ;
		} 
	} 
	return city +"："+year+"年"+monthArray[month] +"月"+day + "日 " + hr + ":" + min + ":" + sec;
} 
function worldClockZone(){ 
	$("#localutc_time").html("本地时间：" + (new Date()).toLocaleString());
	$("#losangeles_time").html(calcTime('美国洛杉矶', '-8'));
	$("#frankfurt_time").html(calcTime('德国法兰克福', '+1'));
	$("#tokyo_time").html(calcTime('日本大阪', '+9'));
	$("#london_time").html(calcTime('英国伦敦', '+1'));
	$("#sydney_time").html(calcTime('澳洲悉尼', '+11'));
	
	setTimeout("worldClockZone()", 1000) 
}
	
//滑动效果1
var $dls = $("dl");
$.each($dls,function(index,value){
	$(value).mouseover(function(){
		$("<div>", {
  		"class": "test",
  		text: "全球海淘精选",
  		"style":"color:#fff;position:absolute;width:100%;height:50px;background: rgba(220,60,90,.5);left:0;top:0;text-align:center;line-height:50px;"
		}).appendTo($(value));	
	});
	$(value).mouseout(function(){
		$(".test").slideUp(1000,function(){
			$(this).remove();
		})
	});
	
})


//回到顶部
$(document).scroll(function(){
	var $scroll = $(this).scrollTop();
	if($scroll >= 400){
		$(".backToTop").css("display","block");
	}else{
		$(".backToTop").css("display","none");
	}
	
})
$("<div>", {
  		"class": "backToTop",
  		"style":"position: fixed;right: 10px;bottom: 10%;width: 40px;height: 40px;line-height: 40px;opacity: 0.9;border-radius: 20px;color: #fff;text-align: center;background: #000;cursor: pointer;z-index: 1000;overflow: hidden;display:none;"
		}).appendTo($("body"));
$("<span>",{
	"class":"fa fa-chevron-up"				
}).appendTo($(".backToTop"))


$(".backToTop").click(function(){
	$(document).scrollTop(0);
})

//划过变色
$(".select a").hover(function(){
	$(this).css({"color":"red","font-size":"16px"});
},function(){
	$(this).css({"color":"#888","font-size":"12px"});
})



$(".btn2").click(function(){
	$(location).attr('href', 'cart.html');
})