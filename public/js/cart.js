

//初始化页面
if(localStorage.sp){
	var spObj = JSON.parse(localStorage.sp);
	if(spObj){
		var total = 0;
		$(".cart_none").css("display","none");
		$(".cart_show").css("display","block");
		for(var i in spObj){
			console.log(spObj[i]);
			total += spObj[i].nums * spObj[i].goodPrice;
			var $str =  `
					
				<div class="cart-group-item" data-good-id="${spObj[i].gid}">
								
		            <div class="row">
		            	<div id = "gid" style = "display:none;">${spObj[i].gid}</div>
		                <div class="col-xs-1 col">
		                	<span class="select_lable">
		                		<input type="checkbox" name="1984" id="check_product_1">
		                		<label for="check_product_1"></label>
		                	</span></div>
		                <div class="col-xs-2 col">
		                    <a href="#" target="_blank">
		                        <img src="${spObj[i].goodSrc}" style="display: inline-block;width:60px;height:80px;">
		                    </a>
		                </div>
		                <div class="col-xs-3  text-left col">
		                    <p class="title">
		                    	<a href="#" target="_blank">${spObj[i].gRemark}</a> 
		                    </p>
		                    <p>
		                        <span class="text-border text-border-red">包邮</span>                                                                									<span class="text-border text-border-gold">限5件</span> 
		                    </p>
		                </div>
		                <div class="col-xs-3 text-muted col">
		                	<b class="text-red ">${spObj[i].goodPrice}</b>
		                    <p><span class="daren-price">
		                    	<i class="fa fa-vimeo text-gold"></i> 省55元</span>
		                    </p>                            
		                </div>
		                <div class="col-xs-2 num-btn text-center col">
		                    <a href="javascript:void(0);" name="${spObj[i].gname}" id="numdown" class = "numdown"> - </a>
		                    <input name="nums" id="nums" class = "nums" type="text" value="${spObj[i].nums}">
		                    <a href="javascript:void(0);" name="${spObj[i].gname}"id="numup" class = "numup"> + </a>
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
	}
}else{
	localStorage.sp = ""; 
}


//件数加减
var $minus=$(".numdown");
$minus.each(function(){
	$(this).click(function(){
		var $gid = $(this).parents('.cart-group-item').attr('data-good-id');
		var spObj = JSON.parse(localStorage.sp);
		
		if(spObj[$gid].nums > 1){
			spObj[$gid].nums --;
			var total = parseInt($(".total_price").html()) - spObj[$gid].goodPrice;
			$(".total_price").html(total);			
		}
		
		$(this).next().val(spObj[$gid].nums);
		//$(this).parent().next().html(cookieObj[goodId].num * cookieObj[goodId].price);
		localStorage.sp = JSON.stringify(spObj);
	})
})
var $plus=$(".numup");
$plus.each(function(){
	$(this).click(function(){
		var $gid = $(this).parents('.cart-group-item').attr('data-good-id');
		var spObj = JSON.parse(localStorage.sp);
		spObj[$gid].nums ++;
		var total = parseInt($(".total_price").html()) + spObj[$gid].goodPrice;
		$(".total_price").html(total);

		$(this).prev().val(spObj[$gid].nums);
		//$(this).parent().next().html(cookieObj[goodId].num * cookieObj[goodId].price);
		localStorage.sp = JSON.stringify(spObj);
	})
})

//文本框
var $nums = $(".nums");
$nums.each(function(){
	$(this).blur(function(){
		var $gid = $(this).parents('.cart-group-item').attr('data-good-id');
		var spObj = JSON.parse(localStorage.sp);
		var total = parseInt($(".total_price").html()) + spObj[$gid].goodPrice*(parseInt($(this).val())-spObj[$gid].nums);
		spObj[$gid].nums = parseInt($(this).val());
		//var total = parseInt($(".total_price").html()) + spObj[$gid].goodPrice;
		$(".total_price").html(total);

		$(this).prev().val(spObj[$gid].nums);
		//$(this).parent().next().html(cookieObj[goodId].num * cookieObj[goodId].price);
		localStorage.sp = JSON.stringify(spObj);
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
			var spObj = JSON.parse(localStorage.sp);
			delete spObj[$gid];
			localStorage.sp = JSON.stringify(spObj);
			$(this).parents(".cart-group-item").remove();
		}
	})
})




$(".select_lable label").click(function(){
//	console.log($(".select_lable label"));
	 $(this).toggleClass("bg_red");
	 choose();
})

function choose(){
	$(".row .select_lable label").toggleClass("bg_red");
}
