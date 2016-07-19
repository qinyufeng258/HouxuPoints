window.onload = function(){


    FastClick.attach(document.body);

	//alert("hello world");
	//var mtc = document.getElementById("mycardChange");
	var changePageTag = 0;//UPDATE:2016年05月23日
	var isPhoneRight = 0;//默认为0，若成功则为1
	var isUsernameRight = 0;
	var isPwdRight = 0;
	var cardNo = document.getElementById("vip-card-id").innerHTML;
	var mtc = $("#mycardChange");
	var mcc = document.getElementById("mythingChange");
	//var mcc = $("#mythingChange");
	//var mcards = mtc.getElementsByClassName("changeItemBox");
	var mcards = $("#mycardChange .changeItemBox");
	//var mthings = mcc.getElementsByClassName("changeItemBox");
	var mthings = $("#mythingChange .changeItemBox");

	var pcards = $("#cardChange td");

	var pthings = $("#thingChange td");

	var changeInfo = $(".ususalChange td");

	var copName = "";

	$("#my-points").on("tap",function(){
		
		document.getElementById("alertTitle2").innerHTML = "积分说明";
		document.getElementById("alertContent2").innerHTML ="<p style='font-size:12px;'>1.积分可以兑换礼品以及抵现使用</p>\
			<p style='font-size:12px;'>2.逅续公司有权对积分用途使用规则做适当调整</p>\
			<p style='font-size:12px;'>3.会员积分以自然年度为单位，有限期为1年，每自然年3月份最后一天，自动清零上一年度获得的未使用的剩余积分。</p>";

		$("#alertWindow2").css("display","block");



	});

	$("#point-parchase").on("tap",function(){
		
		document.getElementById("alertTitle3").innerHTML = "特殊提醒";
		document.getElementById("alertContent3").innerHTML ="积分支付系统，正在开发中，敬请期待";

		$("#alertWindow3").css("display","block");



	});

	$("#thingChangeBtn").on("tap",function(){
		//点击实物兑换按钮，显示实物图片

 		 $("#thingChange").css("display","block");
 		 $("#cardChange").css("display","none");

	});

	$("#cardChangeBtn").on("tap",function(){
		//点击卡券兑换按钮，显示卡券图片
		
 		 $("#thingChange").css("display","none");
 		 $("#cardChange").css("display","block");

	});

	$("#mythingChangeBtn").on("tap",function(){
		//点击实物兑换按钮，显示实物图片

 		 $("#mythingChange").css("display","block");
 		 $("#mycardChange").css("display","none");

	});

	$("#mycardChangeBtn").on("tap",function(){
		//点击卡券兑换按钮，显示卡券图片
		
 		 $("#mythingChange").css("display","none");
 		 $("#mycardChange").css("display","block");

	});

	$("#alertWindow a").on("tap",function(){
		
		setTimeout(function(){
			$("#alertWindow").css("display","none");
 			document.getElementById("alertTitle").innerHTML = ""
			document.getElementById("alertContent").innerHTML = "";
		},400);
 		
	});

	$("#alertWindow2 a").on("tap",function(){
		
		setTimeout(function(){
			$("#alertWindow2").css("display","none");
 			document.getElementById("alertTitle2").innerHTML = ""
			document.getElementById("alertContent2").innerHTML = "";
		},400);
 		
	});

	$("#alertWindow3 a").on("tap",function(){
		
		setTimeout(function(){
			$("#alertWindow3").css("display","none");
 			document.getElementById("alertTitle3").innerHTML = ""
			document.getElementById("alertContent3").innerHTML = "";
		},400);
 		
	});

	$("#alertWindowChange #cancelBtn").on("tap",function(){
		
		setTimeout(function(){
			$("#alertWindowChange").css("display","none");
 			document.getElementById("alertTitle").innerHTML = ""
			document.getElementById("alertContent").innerHTML = "";
		},400);
 		
	});

	$("#alertWindowChange #rightBtn").on("tap",function(){
		
		setTimeout(function(){
			$("#alertWindowChange").css("display","none");
 			document.getElementById("alertTitle").innerHTML = ""
			document.getElementById("alertContent").innerHTML = "";

			var myPoint = 100;
			if(myPoint >-90){
				$("#changeRightPage .weui_msg_title").html("兑换成功");//UPDATE:2016年05月23日
				$("#changeRightPage .weui_msg_desc").html("请在积分商城-兑换记录里查看");//UPDATE:2016年05月23日
				
				$.mobile.changePage ($("#changeRightPage"), 'fade');
			}else{
				$("#changeWrongPage .weui_msg_title").html("兑换失败");//UPDATE:2016年05月23日
				$("#changeWrongPage .weui_msg_desc").html("积分不足 或 库存不足");//UPDATE:2016年05月23日
				$.mobile.changePage ($("#changeWrongPage"), 'fade');
			}
			
			
		},400);
 		
	});

	$("#backToHome").on("tap",function(){

		//event.preventDefault();
		setTimeout(function(){
			alert(changePageTag);
			if(changePageTag == 0){
			$.mobile.changePage ($("#myChange"), 'fade');
			}
			else if(changePageTag == 1){
				$.mobile.changePage ($("#myHome"), 'fade');
			}
			else if(changePageTag == 2){
				$.mobile.changePage ($("#pointPay"), 'fade');
			}
		},200);
		
	});

	$("#backToHome2").on('tap',function(e){
	//$('body').on('click', '#backToHome2', function(e) {
		//e.preventDefault();
		alert("click1");
		setTimeout(function(){
			alert(changePageTag);
				if(changePageTag == 0){
					$.mobile.changePage ($("#myChange"), 'fade');
				}
				else if(changePageTag == 1){
					$.mobile.changePage ($("#myHome"), 'fade');
				}
				else if(changePageTag == 2){
					$.mobile.changePage ($("#pointPay"), 'fade');
				}
		},200);
	
	});

	$("#imChangeBtn").on("tap",function(){

		$("#alertWindowChange").css("display","block");

	});


	changeInfo.on("tap",function(){

		var card_id = this.dataset.id;
		//alert("1");
		$.mobile.changePage ($("#changeDesc"), 'fade',false,false);
		//alert("2");
		// document.getElementById("goodImg").src = "images/change04.jpg";
		// document.getElementById("goodTitle").innerHTML = "笔记本电脑";
		// document.getElementById("goodNeedPoints").innerHTML = "所需积分：64000";
		// document.getElementById("goodInfo").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id, consectetur eveniet molestiae ducimus totam est eius dicta error, dolorum beatae, debitis, quam commodi nihil in tempora ratione saepe dolorem.<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id, consectetur eveniet molestiae ducimus totam est eius dicta error, dolorum beatae, debitis, quam commodi nihil in tempora ratione saepe dolorem.";
		// document.getElementById("goodChangeInfo").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id, consectetur eveniet molestiae ducimus totam est eius dicta error, dolorum beatae, debitis, quam commodi nihil in tempora ratione saepe dolorem.";
		// document.getElementById("lookOutInfo").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id, consectetur eveniet molestiae ducimus totam est eius dicta error, dolorum beatae, debitis, quam commodi nihil in tempora ratione saepe dolorem.";
		// document.getElementById("nowPoints").innerHTML = "您的当前积分：2300";
		//window.location.href = "index.html#changeDesc";

		



	});

	mcards.on("tap",function(){

		var card_id = this.dataset.id;
		document.getElementById("alertTitle").innerHTML = "卡券详情";
		document.getElementById("alertContent").innerHTML ="<span>"+  card_id  + "</span><img src='images/vipCode.jpg'>";

		$("#alertWindow").css("display","block");
	});

	mthings.on("tap",function(){

		//获取对应元素的id属性后，显示id 和 条形码图片
		var card_id = this.dataset.id;
		var fatherNode = this;
		var textNode;
		//console.log(fatherNode);
		var imgNode = fatherNode.getElementsByTagName("img")[0];
		var desNode = fatherNode.getElementsByClassName("thingName")[0].innerHTML;

		//console.log(desNode);
		var content = imgNode.cloneNode();//实物图片
		var descNode = "商品名称："  + desNode;
		var timeNode = "兑换时间：" + "2016年04月15日";
		var stateNode = "订单状态：" + "已发货";
		var expressNode = "订单号：<a href='http://m.kuaidi100.com/result.jsp?com=yuantong&nu=712983721893'>712983721893</a>";


		textNode = document.createTextNode(descNode);
		var desc = document.createElement("div")
		desc.appendChild(textNode);

		textNode = document.createTextNode(timeNode);
		var time = document.createElement("div")
		time.appendChild(textNode);

		textNode = document.createTextNode(stateNode);
		var state = document.createElement("div")
		state.appendChild(textNode);

		
		var express = document.createElement("div");
		express.innerHTML = expressNode;
		
		//console.log(desc);

		document.getElementById("alertTitle").innerHTML = "实物详情"
		document.getElementById("alertContent").appendChild(content);
		document.getElementById("alertContent").appendChild(desc);
		document.getElementById("alertContent").appendChild(time);
		document.getElementById("alertContent").appendChild(state);
		document.getElementById("alertContent").appendChild(express);

		$("#alertWindow").css("display","block");

	});
	
	$("#pointCardName").on("blur",function(){
   		//console.log($("input[name='pointCardName']").val());
   		var inputValue = $("input[name='pointCardName']").val();
   		if(!checkName(inputValue)){
   			isUsernameRight =0;
   			$("#errorTipsName").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入12位数字</div>");
   		}
   		else{
   			isUsernameRight=1;
   			$("#errorTipsName").html("");
   		}
   });

   $("#pointCardPwd").on("blur",function(){
   		//console.log($("input[name='pointCardPwd']").val());
   		var inputValue = $("input[name='pointCardPwd']").val();
   		if(!checkPwd(inputValue)){
   			isPwdRight=0;
   			$("#errorTipsPwd").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入12位数字和字母混合</div>");
   		}
   		else{
   			isPwdRight=1;
   			$("#errorTipsPwd").html("");
   		}
   });

    $("#person-tel").on("blur",function(){
   		//console.log($("input[name='pointCardPwd']").val());
   		var inputValue = $("input[id='person-tel']").val();
   		if(!checkTel(inputValue)){
   			isPhoneRight = 0;
   			$("#errorTipsTel").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入11位数字</div>");
   		}
   		else{
   			isPhoneRight = 1;
   			$("#errorTipsTel").html("");
   		}
   });

	//UPDATE:2016年05月23日
	

	$("#point-pay-btn").on('tap',function(){
		var inputValue = $("input[name='pointCardName']").val();
   		if(!checkName(inputValue)){
   			isUsernameRight =0;
   			$("#errorTipsName").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入12位数字</div>");
   			return;
   		}
   		var inputValue2 = $("input[name='pointCardPwd']").val();
   		if(!checkPwd(inputValue2)){
   			isPwdRight=0;
   			$("#errorTipsPwd").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入12位数字和字母混合</div>");
   			return;
   		}
		var inputValue3 = $("input[name='pointCardIden']").val();
   		if(!checkNull(inputValue3)){
			$("#errorTipsCode").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>请输入验证码</div>");
   			return;
   		}
		var pointCardNo = document.getElementById("pointCardName").value;
		var pointCardPwd = document.getElementById("pointCardPwd").value;
		var valicode = document.getElementById("pointCardIden").value;
		var md5pwd = $.md5(pointCardPwd);
		var timecheck = new Date().getTime();
		var oldsing = cardNo + "1001" + "1200" + pointCardNo + md5pwd + timecheck;
		console.log(oldsing);
		var sign = $.md5(oldsing);
		console.log(sign);
		var aj = $.ajax( {  
		    url:'http://weixin.whuahuw.com/wwb.do',
		    data:{  
		        MTYPE:"1200",
		        MCODE:"1001",
		        CARD_NO:cardNo,
		        POINTS_CARD_NO:pointCardNo,
				VALI_CODE:valicode,
		        TIMESTAMP:timecheck,
		        SIGN:sign
		    },   
		    type:'post',  
		    cache:false,  
		    dataType:'json',
		    async:true,
		    contentType: "application/x-www-form-urlencoded; charset=utf-8",
		    success:function(data) {  
		    	
		        if(data.RESP_STATUS == "S"){
		            //交易成功
						changePageTag = 1;
			            $("#changeRightPage .weui_msg_title").html("充值成功");
						$("#changeRightPage .weui_msg_desc").html("最新积分:" + data.NEW_POINTS);
			            $.mobile.changePage ($("#changeRightPage"), 'fade');
						$("#vip-card-points").html(data.NEW_POINTS);
						$("#my-points").html(data.NEW_POINTS);
						$("#errorTipsCode").html("");
		        }
		        else if(data.RESP_STATUS == "F"){
						if(data.RESP_CODE == '7007'){
							$("#errorTipsCode").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>验证码输入有误</div>");
						}else{
							changePageTag = 2;
							$("#changeWrongPage .weui_msg_title").html("充值失败");
							$("#changeWrongPage .weui_msg_desc").html("错误信息：" + data.RESP_MSG);
							$.mobile.changePage ($("#changeWrongPage"), 'fade');
							$("#errorTipsCode").html("");
						}
		        }
				reloadcode();
				$("input[name='pointCardIden']").val("")
		    },  
		     error : function(XMLHttpRequest, textStatus, errorThrown) {  
		          // view("异常！");  
		       
		          $("#changeWrongPage .weui_msg_title").html("异常");
				  $("#changeWrongPage .weui_msg_desc").html(textStatus);
		          $.mobile.changePage ($("#changeWrongPage"), 'fade');
		         
		    }  
		});
	
	});

	//个人信息页面填充：页面加载完成后异步触发，填充页面
	var personAj = $.ajax( {  
	    url:'http://weixin.whuahuw.com/wwb.do',
	    data:{  
	        MTYPE:"1200",
	        MCODE:"1002",
	        MEMBER_CARD_NO:cardNo
	    },  
	    type:'get',  
	    cache:false,  
	    dataType:'json',
	    async:true,
	    contentType: "application/x-www-form-urlencoded; charset=utf-8",
	    success:function(data) {  
	        //todo
	      	$("#person-name").val(data.USER_NAME);
	      	$("#person-birth").val(data.BRITHDAY);
	      	$("#person-tel").val(data.PHONE);		
	      	$("#person-identi").get(0).selectedIndex = data.IDENTITY;
	      	$("#person-addr").val(data.RECEIPT_ADDRESS);
	    },  
	    error : function(XMLHttpRequest, textStatus, errorThrown) {  
	          // view("异常！");  
	         alert("异常");
	    }  
	});

	$("#info-save-btn").on("tap",function(){
		//console.log(isPhoneRight);
		var inputValue = $("input[id='person-tel']").val();
   		if(!checkTel(inputValue)){
   			isPhoneRight = 0;
   			$("#errorTipsTel").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入11位数字</div>");
   			alert("123");
   			return;
   		}
   		alert("321");
		// if(isPhoneRight !=1){
		// 	return;
		// }
		
		var personName = $("#person-name").val();
      	var personBirth = $("#person-birth").val();
      	var personTel = $("#person-tel").val();		
      	var personIdenti = $("#person-identi").get(0).selectedIndex;
      	var personAddr = $("#person-addr").val();
      	//console.log(personName + personBirth + personTel + personIdenti+ personAddr);
		var aj = $.ajax( {  
		    url:'http://weixin.whuahuw.com/wwb.do',
		    data:{  
		        MTYPE:"1200",
		        MCODE:"1003",
		        MEMBER_CARD_NO:cardNo,
		        USER_NAME:personName,
		        BRITHDAY:personBirth,
		        PHONE:personTel,
		        IDENTITY:personIdenti,
		        RECEIPT_ADDRESS:personAddr
		    },  
		    type:'post',  
		    cache:false,  
		    dataType:'json',
		    async:true,
		    contentType: "application/x-www-form-urlencoded; charset=utf-8",
		    success:function(data) {  
		    	changePageTag = 2;//弹出页面点击确认后跳转到主页
		        if(data.RESP_STATUS == "S"){
					$("#changeRightPage .weui_msg_title").html("成功");
					$("#changeRightPage .weui_msg_desc").html("修改个人信息成功");
					$.mobile.changePage ($("#changeRightPage"), 'fade');
				} else if(data.RESP_STATUS == "F"){
		            //alert(data.RESP_MSG);
		            $("#changeWrongPage .weui_msg_title").html("失败");
					$("#changeWrongPage .weui_msg_desc").html("错误信息：" + data.RESP_MSG);
		            $.mobile.changePage ($("#changeWrongPage"), 'fade');
					
		        }
		    },  
		     error : function(XMLHttpRequest, textStatus, errorThrown) {  
		          $("#changeWrongPage .weui_msg_title").html("异常");
				$("#changeWrongPage .weui_msg_desc").html(textStatus);
	            $.mobile.changePage ($("#changeWrongPage"), 'fade');
		    }  
		});

	});
	//UPDATE END
	changeCops(0);

	//2016年07月11日16:04:29 update start
	$("#classFood").on("tap",function(){
		changeCops(0);
	});
	$("#classMarket").on("tap",function(){
		changeCops(1);
	});
	$("#classBeauty").on("tap",function(){
		changeCops(2);
	});
	$("#classSport").on("tap",function(){
		changeCops(3);
	});
	//update end
	function changeCops(index){
		var copTables = document.getElementsByClassName("copTable");
		copTables[index].className = "copTable copShow";
		for (var i = copTables.length - 1; i >= 0; i--) {
			if(i!=index){
				copTables[i].className = "copTable copHidden";
			}
		}
	}

	$(".copTableItem").on("tap",function(){
		$.mobile.changePage ($("#copInfos"), 'fade');
		copName = $(this).find("h1").text();
		console.log(copName);
	});
	
}
// function signEncrypt(signmap){
// 	//取出键值，放入数组进行升序排序
// 	var keys = signmap.keys();
// 	var keysarray = [];
// 	console.log(signmap);
// 	for(var item in keys) {
// 		keysarray.push(item);
//    		//console.log(item);
// 	}
// 	keysarray.sort();
// 	console.log(keysarray);
// 	var oldstring = "";
// 	keysarray.forEach(function(v,i,a){
// 		console.log(v + " : " + signmap.get(v));
// 		oldstring += signmap.get(v);
// 	});
// 	console.log(oldstring);
// 	oldstring = $.md5(oldstring);
// 	console.log(oldstring);
// 	return oldstring;
// }
function checkName(s){

    if(s!=null){
        var r,re;
        re = /\d{12}/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r==s)?true:false;
    }
    return false;
}
function checkPwd(s){

    if(s!=null){
        var r,re;
        re = /[0-9A-Za-z]{12}/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r==s)?true:false;
    }
    return false;
}
function checkNull(s){

    if(s==''){
		return false;
	}
    return true;
}
function checkTel(s){

    if(s!=null){
        var r,re;
        re = /[0-9]{11}/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r==s)?true:false;
    }
    return false;
}
//跨浏览器事件处理类
//包含增加/删除事件监听、获取事件event、获取事件目标、
//阻止默认事件、阻止事件冒泡、获取相关元素、获取鼠标按钮
//获取键盘字符编码
var EventUtil = {

	addHandler: function(element, type, handler){

		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}

	},

	removeHandler: function(element, type, handler){

		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}

	},

	getEvent: function(event){

		return event ? event : window.event;

	},

	getTarget: function(event){

		return event.target || event.srcElement;

	},

	preventDefault: function(event){

		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}

	},

	stopPropagation: function(event){

		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}

	},

	getRelatedTarget: function(event){

		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) {
			return event.toElement;
		} else if (event.fromElement) {
			return event.fromElement;
		} else{
			return null;
		}

	},

	getButton: function(event){

		if (document.implementation.hasFeature("MouseEvents", "2.0")) {
			return event.button;
		} else {
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}

	},

	getCharCode: function(event){

		if (typeof event.charCode == "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}

	},

};



function goDuiba(){
	var cardno = document.getElementById("vip-card-id").innerHTML;
	var url = "http://weixin.whuahuw.com/wwb.do?mtype=1200&mcode=1004&MEMBER_NO="+cardno+"&timestamp=" + new Date().getTime();
	location.href=url;
}

function reloadcode(){ 
var verify=document.getElementById('safecode'); 
verify.setAttribute('src','valicode.images?'+Math.random()); 
//这里必须加入随机数不然地址相同无法重新加载 
} 