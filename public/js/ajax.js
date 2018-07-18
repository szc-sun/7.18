/*var ajax = {};
ajax.get = function(url,fn){
	var xhr = new XMLHttpRequest();
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			if(typeof fn === 'function'){
				fn(xhr.responseText);
			}
		}
	}
}
ajax.post = function(url,data,fn){
	var xhr = new XMLHttpRequest();
	xhr.open('POST',url,true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
	xhr.send(data);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			if(typeof fn === 'function'){
				fn(xhr.responseText);
			}
		}
	}
}
*/


function $ajax(obj){
	//初始化参数
	if(!obj){
		return ;
	}
	obj.type = obj.type || 'GET';
	obj.url = obj.url || "";
	obj.async = obj.async || 'true';
	obj.data = obj.data || {};
	obj.success = obj.success || function(){};
	
	//准备（转换参数）
	//{name:"张三"，age:18}
	//"name=张三&age=18"
	var str = '';
	for(var key in obj.data){
		str += key + '=' + obj.data[key] + '&';
		//"&name=张三&age=18";
	}
	str = str.substring(0,str.length - 1);
	
	var xhr = new XMLHttpRequest();
	if(obj.type.toUpperCase() == 'GET'){
		xhr.open(obj.type,obj.url + '?' + str,obj.async);
		xhr.send();
	}else if(obj.type.toUpperCase() == 'POST'){
		xhr.open(obj.type,obj.url,obj.async);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
		xhr.send(str);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			obj.success(xhr.responseText)
		}
	}
}