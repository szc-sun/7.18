
/*new $ajax({
	type : "get",
	url : "php/detailpage/detailpage.php",
	data : {
		"gid" : "1"
	},
	success : function(response){
		console.log(typeof response);
		var arr = JSON.parse(response);
		console.log(typeof arr);
		console.log(arr.gname)
		$(".gname").html(arr.gname);
		$(".price1").html(arr.price);
		$(".remark").html(arr.remark);
		$(".product_group_more #a1").append(arr.tab1);
		$(".product_group_more #a2").append(arr.tab2);
		$(".product_group_more #a3").append(arr.tab3);
		$(".product_group_more #a4").append(arr.tab4);
		$(".product_group_more #a5").append(arr.tab5);
		$(".product_group_more #a6").append(arr.tab6);
		$(".img1").attr("src",arr.pic1);
		$(".img2").attr("src",arr.pic2);
		$(".img3").attr("src",arr.pic3);
		$(".img4").attr("src",arr.pic4);
		$(".img5").attr("src",arr.pic5);
		$(".img6").attr("src",arr.pic6);
					
	}
}); */
//选中商品
$.each($(".product_group_more a"),function(){
	$(this).click(function(){
		$(this).toggleClass("on");
		$(".num").text("1");
		$(".product_group_more a"). not($(this)).attr("class","");
	})
})
//商品数量
$(".num").text("1");
var t = $(".num").text();
$('.count .numup').click(function(){
	var tmp = parseInt($(".num").text()) + 1;
	$(".num").text(tmp);
//	console.log(typeof parseInt($(".num").text()));
})
$('.count .numdown').click(function(){
	var tmp = parseInt($(".num").text()) - 1;
	$(".num").text(tmp);
//	console.log(typeof parseInt($(".num").text()));
})

/*//添加到购物车
addCart();
function addCart(){
	//获取商品id,名字,价格,优惠价格,件数;
	var $gid = $("#gid");
	var $gname = $(".gname");
	var $price1 = $(".price1");
	var	$price2 = $(".price2");
	var $nums =$(".num");
	$(".btn-car").click(function(){
		var sendMsg = `gid=${$gid.text()}&gname=${$gname.text()}&price1=${$price1.text()}&price2=${$price2.text()}&nums=${$nums.text()}`
		
		$.ajax({
			type : "post",
			url : "php/detailpage/addCart.php",
			data : sendMsg,
			success : function(response){
				alert("添加成功");
				location.reload();
				
			}
		}); 
	
	})
	
}*/

$("<div>", {
  		"class": "btnCart fa fa-cart-plus",
  		"style":"position: fixed;font-size:26px;right: 10px;bottom: 50%;width: 40px;height: 60px;line-height: 60px;opacity: 0.9;border-radius: 20px;color: #fff;text-align: center;background: #d00;cursor: pointer;z-index: 1000;overflow: hidden;",
  		
}).appendTo($("body"));


//$(".btn-car").click(function(e){
	//addCart();

	//飞入
	/*var cloneImg = $(".img1").clone().css({width:50,height:50});
	cloneImg.fly({
		start : {
			top : e.clientY,
			left : e.clientX
		},
		end :{
			top : $(".btnCart").offset().top,
			left : $(".btnCart").offset().left,
			width:0,
			height:0
		},
		autoPlay : true,
		onEnd : function(){
			
	cloneImg.remove();
		}
	})*/
//})
addCart();
function addCart(){
	//var json = JSON.parse(localStorage.json);

	$(".btn-car").click(function(evt){
			//获取端口Id
			var $gid = $(this).parents(".goods_sold_right").attr('data-good-id');
			//获取名称
			var $gRemark = $(this).parents(".goods_right_box").children(".desc").text();
			//获取价格
			var $goodPrice = parseInt($(this).parents(".goods_right_box").children(".price_show").children(".price1").text());
			//获取src
			var $goodSrc = $(this).parents(".goods_right_box").children(".product_group_more").children(".on").children("img").attr('src');
			var $nums = parseInt($(this).parent().siblings(".count").children(".num").text());
			console.log($gid,$gRemark,$goodPrice,$goodSrc);
			
			console.log(localStorage.json)
			if(!localStorage.sp){
				spObj = JSON.parse("{}");

				spObj[$gid]= {
						gid:$gid,
						gRemark:$gRemark,
						goodPrice:$goodPrice,
						goodSrc:$goodSrc,
						nums:$nums
					}
			}else{
				var spObj = JSON.parse(localStorage.sp);
				if($gid in spObj){
					spObj[$gid].nums += $nums;
				}else{
					spObj[$gid]= {
						gid:$gid,
						gRemark:$gRemark,
						goodPrice:$goodPrice,
						goodSrc:$goodSrc,
						nums:$nums
					}
				}
			}
			
			localStorage.sp = JSON.stringify(spObj);
			


	//获取商品id,名字,价格,优惠价格,件数;
	//console.log($gid,$gRemark,$goodPrice,$goodSrc);
	});
}



	
//console.log($("h1").text());
//放大镜
glass();
function glass(){
	var oBigBox = document.querySelector(".big_box");
	var oMark = document.querySelector(".mark");
	var oFloat = document.querySelector(".float");
	var oBigPic = document.querySelector(".big_pic");
	var oBigImg = document.querySelector(".big_img");
	oMark.onmouseenter = function(){
		oFloat.style.display = 'block';
		oBigPic.style.display = 'block';
	}
	oMark.onmouseleave = function(){
		oFloat.style.display = 'none';
		oBigPic.style.display = 'none';
	}
	oMark.onmousemove = function(evt){
		var e = evt || window.event;
		let left = e.pageX - oBigBox.offsetLeft - oMark.offsetLeft - oFloat.offsetWidth / 2;
		let top = e.pageY - oBigBox.offsetTop - oMark.offsetTop - oFloat.offsetHeight / 2;
		//设置边界
		if(left <= 0){
			left = 0;
		}else if(left >= oMark.offsetWidth - oFloat.offsetWidth){
			left = oMark.offsetWidth - oFloat.offsetWidth;
		}
		if(top <= 0){
			top = 0;
		}else if(top >= oMark.offsetHeight - oFloat.offsetHeight){
			top = oMark.offsetHeight - oFloat.offsetHeight;
		}
		oFloat.style.left = left + 'px';
		oFloat.style.top = top + 'px';
		
		
		//滑块在小图的移动比例
		let pX = left / (oMark.offsetWidth - oFloat.offsetWidth);
		let pY = top / (oMark.offsetHeight - oFloat.offsetHeight);
		//设置大图的坐标值
		oBigImg.style.left = - pX * (oBigImg.offsetWidth - oBigPic.offsetWidth) + 'px';
		oBigImg.style.top = - pY * (oBigImg.offsetHeight - oBigPic.offsetHeight) + 'px';
	}
	
	
}


	
	


