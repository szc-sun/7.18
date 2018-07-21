

//初始化页面
if(localStorage.sp){
	var spObj = JSON.parse(localStorage.sp);
	if(spObj){
		var total = 0;
		var nou = 0;
		$(".cart_none").css("display","none");
		$(".cart_show").css("display","block");
		for(var i in spObj){
			var obj = JSON.parse(spObj[i]);
			//var obj = eval('(' + spObj[i] + ')');
			//console.log(obj.gid);
			//console.log(typeof spObj[i],spObj[i]);
			//alert(spObj[i]);
			//var obj = eval('(' + str + ')');
			total += obj.nums * obj.goodPrice;
			nou += obj.nums;
			var $str =  `
					
				<div class="cart-group-item" data-good-id="${obj.gid}">
								
		            <div class="row">
		            	<div id = "gid" style = "display:none;">${obj.gid}</div>
		                <div class="col-xs-1 col">
		                	<span class="select_lable">
		                		<input type="checkbox" name="1984" id="check_product_1">
		                		<label for="check_product_1"></label>
		                	</span></div>
		                <div class="col-xs-2 col">
		                    <a href="#" target="_blank">
		                        <img src="${obj.goodSrc}" style="display: inline-block;width:60px;height:80px;">
		                    </a>
		                </div>
		                <div class="col-xs-3  text-left col">
		                    <p class="title">
		                    	<a href="#" target="_blank">${obj.gRemark}</a> 
		                    </p>
		                    <p>
		                        <span class="text-border text-border-red">包邮</span>                                                                									<span class="text-border text-border-gold">限5件</span> 
		                    </p>
		                </div>
		                <div class="col-xs-3 text-muted col">
		                	<b class="text-red ">${obj.goodPrice}</b>
		                    <p><span class="daren-price">
		                    	<i class="fa fa-vimeo text-gold"></i> 省55元</span>
		                    </p>                            
		                </div>
		                <div class="col-xs-2 num-btn text-center col">
		                    <a href="javascript:void(0);" name="${obj.gname}" id="numdown" class = "numdown"> - </a>
		                    <input name="nums" id="nums" class = "nums" type="text" value="${obj.nums}">
		                    <a href="javascript:void(0);" name="${obj.gname}"id="numup" class = "numup"> + </a>
		                </div>

		                <div class="col-xs-1 text-right col">
		                	<a href="javascript:void(0);" name="1984" id="delete" class="delete">
		                		<span class="fa fa-trash text-gray"></span>
		                	</a>
		                </div>
		            </div>
		        </div>
		    `;
			$($str).appendTo($(".cart_con"));

		}
		$(".total_price").html(total);
		$(".badge").html(nou);
	}
}else{
	localStorage.sp = ""; 
}


//件数减
var $minus=$(".numdown");
$minus.each(function(){
	$(this).click(function(){
		var $gid = $(this).parents('.cart-group-item').attr('data-good-id');
		console.log($gid);
		var obj = JSON.parse(localStorage.sp)
		var spObj = JSON.parse(obj[$gid]);
		if(spObj.nums > 1){
			spObj.nums --;
			var total = parseInt($(".total_price").html()) - spObj.goodPrice;
			$(".total_price").html(total);			
		}
		
		$(this).next().val(spObj.nums);
		//$(this).parent().next().html(cookieObj[goodId].num * cookieObj[goodId].price);
		obj[$gid] = JSON.stringify(spObj);

		localStorage.sp = JSON.stringify(obj);
		var nou = $(".badge").html();
		nou--;
		$(".badge").html(nou);
	})
})
//件数加
var $plus=$(".numup");
$plus.each(function(){
	$(this).click(function(){
		var $gid = $(this).parents('.cart-group-item').attr('data-good-id');
		var obj = JSON.parse(localStorage.sp)
		var spObj = JSON.parse(obj[$gid]);
		spObj.nums ++;
		var total = parseInt($(".total_price").html()) + spObj.goodPrice;
		$(".total_price").html(total);

		$(this).prev().val(spObj.nums);
		//$(this).parent().next().html(cookieObj[goodId].num * cookieObj[goodId].price);
		obj[$gid] = JSON.stringify(spObj);

		localStorage.sp = JSON.stringify(obj);
		var nou = $(".badge").html();
		nou++;
		$(".badge").html(nou);
	})
})

//文本框
var $nums = $(".nums");
$nums.each(function(){
	$(this).blur(function(){
		var $gid = $(this).parents('.cart-group-item').attr('data-good-id');
		var obj = JSON.parse(localStorage.sp)
		var spObj = JSON.parse(obj[$gid]);
		var tmpnum = parseInt($(this).val())-spObj.nums;
		var total = parseInt($(".total_price").html()) + spObj.goodPrice*tmpnum;
		spObj.nums = parseInt($(this).val());
		//var total = parseInt($(".total_price").html()) + spObj[$gid].goodPrice;
		$(".total_price").html(total);

		$(this).prev().val(spObj.nums);
		//$(this).parent().next().html(cookieObj[goodId].num * cookieObj[goodId].price);
		obj[$gid] = JSON.stringify(spObj);

		localStorage.sp = JSON.stringify(obj);
		var nou = $(".badge").html();
		nou =parseInt(nou) + tmpnum;
		$(".badge").html(nou);
	})
})


//删除
var $dels = $(".delete");
$dels.each(function(){
	$(this).click(function(){
		var war = confirm("确定删除吗?")
		if(war == true){
			var $gid = $(this).parents('.cart-group-item').attr('data-good-id');
			console.log($gid)
			var obj = JSON.parse(localStorage.sp);
			var spObj = JSON.parse(obj[$gid]);
			var nou = $(".badge").html();
			nou =parseInt(nou) - spObj.nums;
			$(".badge").html(nou);
			var total = parseInt($(".total_price").html()) - spObj.goodPrice * spObj.nums;
			$(".total_price").html(total);
			//var spObj = JSON.parse(obj[$gid]);
			delete obj[$gid];
			//obj[$gid] = JSON.stringify(spObj);
			localStorage.sp = JSON.stringify(obj);
			$(this).parents(".cart-group-item").remove();
			
		}
	})
})

$(".btn-sm").click(function(){
	var spObj = JSON.parse(localStorage.sp);
	//console.log(spObj);
	$.ajax({
		type:"post",
		url:"/users/cart/up",
		data:spObj,
		dataType:"json",
		success:function(json){
			//console.log("66666",json);
			if(json.error == 0){
				if(json.msg == "未登录"){
					var tx = confirm("您还未登录,确定跳转到登录页吗?") 
					if(tx == true){
						location.href="/users/login";
					}					
				}
			}else{
				if(json.msg){
					console.log("23333",json.msg);
					/*$(".cart-group-item").remove();

				for(var i in json.msg){
					console.log(i);
					var $str =  `
					
				<div class="cart-group-item" data-good-id="${json["msg"][i].gid}">
								
		            <div class="row">
		            	<div id = "gid" style = "display:none;">${json["msg"][i].gid}</div>
		                <div class="col-xs-1 col">
		                	<span class="select_lable">
		                		<input type="checkbox" name="1984" id="check_product_1">
		                		<label for="check_product_1"></label>
		                	</span></div>
		                <div class="col-xs-2 col">
		                    <a href="#" target="_blank">
		                        <img src="${json["msg"][i].img}" style="display: inline-block;width:60px;height:80px;">
		                    </a>
		                </div>
		                <div class="col-xs-3  text-left col">
		                    <p class="title">
		                    	<a href="#" target="_blank">${json["msg"][i].remark}</a> 
		                    </p>
		                    <p>
		                        <span class="text-border text-border-red">包邮</span>                                                                									<span class="text-border text-border-gold">限5件</span> 
		                    </p>
		                </div>
		                <div class="col-xs-3 text-muted col">
		                	<b class="text-red ">${json["msg"][i].price1}</b>
		                    <p><span class="daren-price">
		                    	<i class="fa fa-vimeo text-gold"></i> 省55元</span>
		                    </p>                            
		                </div>
		                <div class="col-xs-2 num-btn text-center col">
		                    <a href="javascript:;"  id="numdown" class = "numdown"> - </a>
		                    <input name="nums" id="nums" class = "nums" type="text" value="${json["msg"][i].nums}">
		                    <a href="javascript:;"  id="numup" class = "numup"> + </a>
		                </div>

		                <div class="col-xs-1 text-right col">
		                	<a href="javascript:;" name="1984" id="delete" class="delete">
		                		<span class="fa fa-trash text-gray"></span>
		                	</a>
		                </div>
		            </div>
		        </div>
		    `;
			$($str).appendTo($(".cart_con"));
		}*/






					alert("结算成功");
				}
				
			}
		}

	})
})



var $change = $(".row .select_lable label");
$change.each(function(){
	$(this).click(function(){
		$(this).toggleClass("bg_red");
	})
})

$(".cart-heading .select_lable label").click(function(){
	 $(this).toggleClass("bg_red");
	 choose();
})

function choose(){
	$(".row .select_lable label").toggleClass("bg_red");
}
