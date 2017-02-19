function ajax(obj){
	var url=obj.url;
	var type=obj.type||"get";
	var data=obj.data||"";
	var dataType=obj.dataType||"text";
	var asynch=obj.asynch=="undefined"?obj.asynch:true;
	var success=obj.success;
	var ajax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	
	if(typeof obj!=="object"){
		console.error("请输入正确的参数");
		return false;
	}
	if(url==undefined){
		console.error("请传入链接地址");
		return false;
	}
	
//	switch(data){
//		case "object":
//			var str="";
//			for(var i in obj.data){
//				str+=i+"="+data[i]+"&";
//			}
//			data=str.slice(0,-1);
//		break;
//	}

	if(typeof data=="object"){
		var str="";
		for(var i in data){
			str+=i+"="+data[i]+"&";
		}
		data=str.slice(0,-1);
	}
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){
			if(ajax.status==200){
//				alert(ajax.response)
				if(ajax.dataType=="xml"){
					var result=ajax.responseXML;
				}else{
					var result=ajax.response;
				}
				success(result);
			}
		}
	}
	
	if(type=="get"){
		ajax.open("get",url+"?"+data,asynch);
		ajax.responseType=dataType;
		ajax.send();
	}else if(type=="post"){
		ajax.open("post",url,asynch);
		ajax.responseType=dataType;
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send(data);
	}
	
}
