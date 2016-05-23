window.onload = function(){

	//var mtc = document.getElementById("mycardChange");
	var changePageTag = 0;//UPDATE:2016年05月23日
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

		if(changePageTag == 0){
			$.mobile.changePage ($("#myChange"), 'fade');
		}
		else if(changePageTag == 1){
			$.mobile.changePage ($("#myHome"), 'fade');
		}
		else if(changePageTag == 2){
			$.mobile.changePage ($("#personalInfo"), 'fade');
		}
		
	});

	$("#backToHome2").on("tap",function(){

		if(changePageTag == 0){
			$.mobile.changePage ($("#myChange"), 'fade');
		}
		else if(changePageTag == 1){
			$.mobile.changePage ($("#myHome"), 'fade');
		}
		else if(changePageTag == 2){
			$.mobile.changePage ($("#personalInfo"), 'fade');
		}
		
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
   			$("#errorTipsName").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入12位数字</div>");
   		}
   		else{
   			$("#errorTipsName").html("");
   		}
   });

   $("#pointCardPwd").on("blur",function(){
   		//console.log($("input[name='pointCardPwd']").val());
   		var inputValue = $("input[name='pointCardPwd']").val();
   		if(!checkPwd(inputValue)){
   			$("#errorTipsPwd").html("<div style='padding:14px;font-size:12px; color:#DD0001;'>输入格式不合法，请输入12位数字和字母混合</div>");
   		}
   		else{
   			$("#errorTipsPwd").html("");
   		}
   });
	// EventUtil.addHandler(mtc, "click", function(event){

	// 	//统一事件处理程序
	// 	event = EventUtil.getEvent(event);
	// 	var target = EventUtil.getTarget(event);
	// 	var content;
	
	// 	if (event.className == "changeItemBox") {
	// 		console.log(target);
	// 		document.getElementById("alertTitle").innerHTML = "卡券详情"
	// 		document.getElementById("alertContent").innerHTML ="<span>128888088821</span><img src='images/vipCode.jpg'>"
			
	// 		$("#alertWindow").css("display","block");
	// 	}

	// });

	// EventUtil.addHandler(mcc, "click", function(event){

	// 	//统一事件处理程序
	// 	event = EventUtil.getEvent(event);
	// 	var target = EventUtil.getTarget(event);
	// 	var content;
	// 	var desc;
	// 	var time;
	// 	var state;
	// 	//console.log(target);

	// 	if (target.tagName == "IMG" || target.tagName == "DIV" || target.tagName == "SPAN") {

	// 		var fatherNode = target.parentNode;
	// 		//console.log(fatherNode);
	// 		var imgNode = fatherNode.getElementsByTagName("img")[0];
	// 		var desNode = fatherNode.getElementsByTagName("div")[0].innerHTML;
	// 		content = imgNode.cloneNode();
	// 		desNode = "商品名称："  + desNode;
	// 		timeNode = "兑换时间：" + "2016年04月15日";
	// 		stateNode = "物流状态：" + "已发货";

	// 		var textNode = document.createTextNode(desNode);
	// 		desc = document.createElement("div")
	// 		desc.appendChild(textNode);

	// 		textNode = document.createTextNode(timeNode);
	// 		time = document.createElement("div")
	// 		time.appendChild(textNode);

	// 		textNode = document.createTextNode(stateNode);
	// 		state = document.createElement("div")
	// 		state.appendChild(textNode);
			
	// 		//console.log(desc);

	// 		document.getElementById("alertTitle").innerHTML = "实物详情"
	// 		document.getElementById("alertContent").appendChild(content);
	// 		document.getElementById("alertContent").appendChild(desc);
	// 		document.getElementById("alertContent").appendChild(time);
	// 		document.getElementById("alertContent").appendChild(state);


	// 		$("#alertWindow").css("display","block");

	// 	}

	// });

	//添加签到日历
	//$("#calendar").dateCheckIn();

	//UPDATE:2016年05月23日

	$("#point-pay-btn").on("tap",function(){

		changePageTag = 1;//弹出页面点击确认后跳转到主页
		alert(cardNo);
		var pointCardNo = document.getElementById("pointCardName").value;
		var pointCardPwd = document.getElementById("pointCardPwd").value;
		console.log(pointCardNo);
		var md5pwd = $.md5(pointCardPwd);
		var aj = $.ajax( {  
		    url:'http://www.whuahuw.com/wechat/wwb.do',
		    data:{  
		        MTYPE:"1200",
		        MCODE:"1001",
		        CARD_NO:cardNo,
		        POINTS_CARD_NO:pointCardNo,
		        POINTS_PASSWORD:md5pwd
		    },  
		    type:'post',  
		    cache:false,  
		    dataType:'json',
		    async:true,
		    contentType: "application/x-www-form-urlencoded; charset=utf-8",
		    success:function(data) {  
		        //todo
		        if(data.RESP_STATUS == "S"){
		            //交易成功
		            //alert(data.NEW_POINTS);
		            $("#changeRightPage .weui_msg_title").html("充值成功");
					$("#changeRightPage .weui_msg_desc").html("充值后积分为:" + data.NEW_POINTS);
		            $.mobile.changePage ($("#changeRightPage"), 'fade');

		        }
		        else if(data.RESP_STATUS == "F"){
		            //alert(data.RESP_MSG);
		            $("#changeWrongPage .weui_msg_title").html("充值失败");
					$("#changeWrongPage .weui_msg_desc").html("错误信息：" + data.RESP_MSG);
		            $.mobile.changePage ($("#changeWrongPage"), 'fade');
		        }
		    },  
		     error : function(XMLHttpRequest, textStatus, errorThrown) {  
		          // view("异常！");  
		          $("#changeWrongPage .weui_msg_title").html("异常");
				  $("#changeWrongPage .weui_msg_desc").html(textStatus);
		          $.mobile.changePage ($("#changeWrongPage"), 'fade');
		    }  
		});

	});

	$("#person-name").val("萨asdasd迪");
  	$("#person-birth").val("2013-04-03");
  	$("#person-tel").val("1392139103");		
  	$("#person-identi").get(0).selectedIndex = "3";
  	$("#person-addr").val("asdasds123123adsadasd");

	//个人信息页面填充：页面加载完成后异步触发，填充页面
	// var personAj = $.ajax( {  
	//     url:'http://www.whuahuw.com/wechat/wwb.do',
	//     data:{  
	//         MTYPE:"1200",
	//         MCODE:"1002",
	//         MEMBER_CARD_NO:cardNo
	//     },  
	//     type:'get',  
	//     cache:false,  
	//     dataType:'json',
	//     async:true,
	//     contentType: "application/x-www-form-urlencoded; charset=utf-8",
	//     success:function(data) {  
	//         //todo
	//       	$("#person-name").val(data.USER_NAME);
	//       	$("#person-birth").val("1995/12/24");
	//       	$("#person-tel").val(data.PHONE);		
	//       	$("#person-identi").get(0).selectedIndex = data.IDETITY;
	//       	$("#person-addr").val(data.RECEIPT_ADDRESS);
	//     },  
	//     error : function(XMLHttpRequest, textStatus, errorThrown) {  
	//           // view("异常！");  
	//          alert("异常");
	//     }  
	// });

	$("#info-save-btn").on("tap",function(){

		changePageTag = 2;//弹出页面点击确认后跳转到主页
		var personName = $("#person-name").val();
      	var personBirth = $("#person-birth").val();
      	var personTel = $("#person-tel").val();		
      	var personIdenti = $("#person-identi").get(0).selectedIndex;
      	var personAddr = $("#person-addr").val();
      	//console.log(personName + personBirth + personTel + personIdenti+ personAddr);
		var aj = $.ajax( {  
		    url:'http://www.whuahuw.com/wechat/wwb.do',
		    data:{  
		        MTYPE:"1200",
		        MCODE:"1001",
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
		        //todo
				$("#changeRightPage .weui_msg_title").html("修改成功");
				$("#changeRightPage .weui_msg_desc").html(data.RESP_MSG);
	            $.mobile.changePage ($("#changeRightPage"), 'fade');
		    },  
		     error : function(XMLHttpRequest, textStatus, errorThrown) {  
		          $("#changeWrongPage .weui_msg_title").html("异常");
				$("#changeWrongPage .weui_msg_desc").html(textStatus);
	            $.mobile.changePage ($("#changeWrongPage"), 'fade');
		    }  
		});

	});
	//UPDATE END

}

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


var checkPostData = {
	jsonid:"time-2015-05",
	date:"1",
	state:"2",
	logo:"1"
};
var checkDateTag;
$.fn.dateCheckIn = function(){

	var that = this;
	var tableDate =  new Date(); //应该显示的时间,需要构造
	tableDate.setDate(1);//设定这个月的第一天

	var currentDate = new Date(); //当前时间

	var jsonData;

	//每日签到表

	//STEP 1：实现日历基础功能
	//	首先：根据当前日期，显示当前时间的日历表
	//	其次，若向前翻，则当前日期月份-1，若为1，则年份-1，月份=12;
	//	若向后翻，则当前日期月份+1，若为12，则年份+1，月份=1; 
	
	//STEP 2: 实现读取签到情况功能
	//  读取JSON文件，将该月的签到数据存储进JSON对象数组中
	//	每次加载完日期表，就渲染一次签到情况（也就是日期数字下边的图标：已签到\补签、已签到\未签到（当日）、无）
	//	已签到又分为四种LOGO

	//STEP 3: 实现点击日期签到功能
	//	监听checkInTable元素，处理监听事件
	//	判断元素的data-state值
	//  若为0，则[逻辑处理]，然后出现四个LOGO，选择一个LOGO后，变成LOGO图片，且底部显示签到信息
	//  若为1，则不做处理，显示签到信息
	//	若为2，则[逻辑处理]，然后出现四个LOGO，选择一个LOGO后，变成LOGO图片，且底部显示签到信息

	//前后翻动按钮 + 中间显示年份-月份
	$("#calendar").append("<div id='tableTitle'></div>");
	$("#tableTitle").append("<a id='tableLeft'><span class='icon-circle-left'></span></a>");
	$("#tableTitle").append("<span id='tableYear'></span>");
	$("#tableTitle").append("<a id='tableRight'><span class='icon-circle-right'></span></a>");
	$("#calendar").append("<table id='checkInTable' ></table>");

	//添加签到表底部栏信息
	$("#calendar").append("<div id='checkInfo'></div>");
	$("#checkInfo").append("<div id='infoTitle'>签到说明</div>");

	$("#checkInfo").append("<div id='checkBefore'></div>");
	$("#checkBefore").append("欢迎参加逅续积分计划签到活动，点击签到，选择签到品牌可获得该品牌赠送的逅续积分，每天只能选择一个\
		一个品牌签到，签到一次可获得1积分，签到7次、14次、21次可获得该品牌的卡券奖励，每自然月签到为同一品牌，可额外获得60逅续积分\
		(30分由合作品牌提供，30分由逅续积分提供。");

	$("#checkInfo").append("<div id='checkMiddle'></div>");
	$("#checkMiddle").append("<table id='logoTable'></table>");
	$("#logoTable").append("<thead></thead>");
	$("#logoTable thead").append("<tr id='logoRow'></tr>");
	$("#logoTable thead tr").append("<td><img src='images/checklogo1.jpg' class='checkLogo'><a href='' id='checkBtn1' data-num='1'>点我</a></td>");
	$("#logoTable thead tr").append("<td><img src='images/checklogo2.jpg' class='checkLogo'><a href='' id='checkBtn2' data-num='2'>点我</a></td>");
	$("#logoTable thead tr").append("<td><img src='images/checklogo3.jpg' class='checkLogo'><a href='' id='checkBtn3' data-num='3'>点我</a></td>");
	$("#logoTable thead tr").append("<td><img src='images/checklogo4.jpg' class='checkLogo'><a href='' id='checkBtn4' data-num='4'>点我</a></td>");

	$("#checkInfo").append("<div id='checkAfter'></div>");
	$("#checkAfter").append("逅续科技（<span id=logoName>品牌名称</span>）感谢您的选择，我们为您提供了以下奖励<br>\
		每签到一次：赠送1积分<br>每7次签到：9.5折卡券一张<br>每14次签到：9折卡券一张<br>每21次签到：8.5折卡券一张<br>全月签到：8折卡券一张，30逅续积分");



	//初次渲染日期表
	renderCalendarTable(currentDate, tableDate, that);

	var checkBtn = document.getElementById("checkInTable");

	EventUtil.addHandler(checkBtn, "click", function(event){

		//console.log("sadasd");
		//统一事件处理程序
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		var content;

		//alert(this);
		var jqTag = $(target);

		if(target.tagName == 'TD' &&  jqTag.data("date")){
			


			checkDateTag = jqTag;
			var stat = jqTag.data("state");
			var date = jqTag.data("date");
			//console.log(stat);
			//console.log(date);
			checkPostData.date = date.toString();
			if(stat == 0){

				console.log("我是补签，点击我可以补签，发送数据到服务端");
				//出现选择LOGO界面,选择LOGO后			
				
				$("#checkMiddle").show();//显示LOGO选择界面
				$("#checkBefore").hide();//隐藏签到说明一
				$("#checkAfter").hide();//隐藏签到说明二

			}else if(stat == 1){

				console.log("我是已签到，我会显示四种图片LOGO，点击我，信息栏会出现签到说明");
				//显示签到说明
				$("#checkBefore").hide();//隐藏签到说明一
				$("#checkMiddle").hide();//隐藏LOGO选择界面
				$("#checkAfter").show();//显示签到说明二

			}else if(stat == 2){

				console.log("我是未签到，只有当日才会出现，点击我可以签到，发送数据到服务端");
				//出现选择LOGO界面,选择LOGO后，

				$("#checkMiddle").show();//显示LOGO选择界面
				$("#checkBefore").hide();//隐藏签到说明一
				$("#checkAfter").hide();//隐藏签到说明二

			}

		}else if(target.tagName == 'A' || target.tagName == 'DIV' || target.tagName == 'IMG' ){

			if(jqTag.parent().data("date")){


				var stat2 = jqTag.parent().data("state");
				var date2 = jqTag.parent().data("date");
				checkDateTag = jqTag.parent();
			
				
				//console.log(stat);
				//console.log(date);
				checkPostData.date = date2.toString();
				if(stat2 == 0){

					console.log("我是补签，点击我可以补签，发送数据到服务端");
					//出现选择LOGO界面,选择LOGO后			
					
					$("#checkMiddle").show();//显示LOGO选择界面
					$("#checkBefore").hide();//隐藏签到说明一
					$("#checkAfter").hide();//隐藏签到说明二

				}else if(stat2 == 1){

					console.log("我是已签到，我会显示四种图片LOGO，点击我，信息栏会出现签到说明");
					//显示签到说明
					$("#checkBefore").hide();//隐藏签到说明一
					$("#checkMiddle").hide();//隐藏LOGO选择界面
					$("#checkAfter").show();//显示签到说明二

				}else if(stat2 == 2){

					console.log("我是未签到，只有当日才会出现，点击我可以签到，发送数据到服务端");
					//出现选择LOGO界面,选择LOGO后，

					$("#checkMiddle").show();//显示LOGO选择界面
					$("#checkBefore").hide();//隐藏签到说明一
					$("#checkAfter").hide();//隐藏签到说明二

				}
			}

		}

	});

	//$("#checkInTable").cellSpacing = "2";

	//console.log(tableDate);
	//注册监听事件，前后翻动月份

	$("#tableLeft").on("tap",function(){

		if(tableDate.getMonth() == 0){
			
			tableDate.setFullYear(tableDate.getFullYear() - 1);
			tableDate.setMonth(11);
			//console.log(tableDate);

		}
		else{

			tableDate.setMonth(tableDate.getMonth() - 1);
			//console.log(tableDate);

		}
		//移除事件监听
		$("#titleMonth").html(tableDate.getMonth() + 1);
		renderCalendarTable(currentDate, tableDate, that);
		$("#checkBefore").show();//显示LOGO选择界面
		$("#checkMiddle").hide();//隐藏签到说明一
		$("#checkAfter").hide();//隐藏签到说明二
		//添加事件监听
		
		
	});

	$("#tableRight").on("tap",function(){
		
		if(tableDate.getMonth() == 11){
			
			tableDate.setFullYear(tableDate.getFullYear() + 1);
			tableDate.setMonth(0);
			//console.log(tableDate);

		}
		else{

			tableDate.setMonth(tableDate.getMonth() + 1);
			//console.log(tableDate);

		}
		$("#titleMonth").html(tableDate.getMonth() + 1);
		renderCalendarTable(currentDate, tableDate, that);
		$("#checkBefore").show();//显示LOGO选择界面
		$("#checkMiddle").hide();//隐藏签到说明一
		$("#checkAfter").hide();//隐藏签到说明二
	});

	//注册监听事件，选择LOGO
	var logoBtn = document.getElementById("logoRow");

	EventUtil.addHandler(logoBtn, "click", function(event){

		//console.log("sadasd");
		//统一事件处理程序
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		var content;

		var id;
		
		if( target.tagName == 'A'){

			id = target.getAttribute("data-num");

			console.log("你选择了LOGO %d号品牌！",id);
			checkPostData.logo = id;
			checkDateTag.data("state",1);
			checkDateTag.find("div").remove();//删除补签字体
			checkDateTag.append("<img class='checkImg' src='images/checklogo"+ id +".jpg'>");

			$("#checkMiddle").hide();
			$("#checkAfter").show();
			
			$.post("checkInfo.php",{
				jsonid:checkPostData.jsonid,
				date:checkPostData.date,
				stat:1,
				logo:checkPostData.logo},
				function(result){

			});
			console.log("POST给服务端的数据为：jsonid:" + checkPostData.jsonid + ", date："+checkPostData.date + ", state:1, logo:" + checkPostData.logo);
			
		}

	});
	
	


	

}

function renderCalendarTable(currentDate, tableDate, that){

	//渲染日期表
	//参数：currentdate: 当前时间; tabledate: 日期表的应该显示的时间; that: 日期容器
	//参数类型为Date对象和JQUERY对象

	//切换到当月时，默认当日为Foucs状态
	//底部默认显示，状态1说明
	

	//var that = this;
	var weekday = new Array(7);
	weekday[0] = "日";
	weekday[1] = "一";
	weekday[2] = "二";
	weekday[3] = "三";
	weekday[4] = "四";
	weekday[5] = "五";
	weekday[6] = "六";

	var monthday = new Array(12);
	monthday[0] = "31";
	//做闰年判断
	monthday[1] = "29";
	monthday[2] = "31";
	monthday[3] = "30";
	monthday[4] = "31";
	monthday[5] = "30";
	monthday[6] = "31";
	monthday[7] = "31";
	monthday[8] = "30";
	monthday[9] = "31";
	monthday[10] = "30";
	monthday[11] = "31";

	// var tableDate =  new Date(); //当前日历表
	// var currentDate = new Date(); //当前日期
	var currentMonth = currentDate.getMonth(); //获取月份
	var currentWeek = weekday[currentDate.getDay()]; //获取当天是星期几
	var currentDay = currentDate.getDate();//获取当天是这个月的第几天
	var currentFullYear = currentDate.getFullYear();//获取年份
	var currentTime = currentDate.getFullYear() + "-" + currentMonth + "-" + currentDay;
	var tableMonth =  tableDate.getMonth(); //获取月份
	var tableFullYear = tableDate.getFullYear();//获取年份
	var tableDay = tableDate.getDate();//获取当天是这个月的第几天
	var tableWeek = weekday[tableDate.getDay()];//获取这个月的第一天是星期几,根据这个条件，循环将所有日期填充进表格内
	var tabledDays = new Array(monthday[tableMonth]);
	var tableTime = tableFullYear + "-" + tableMonth + "-" + tableDay;
	//console.log(tableTime);
	//console.log(currentTime);

	//初始化
	//that.html("<table id='checkInTable' ></table>");
	$("#tableYear").html(tableFullYear + "-" + numberFillZero(parseInt(tableMonth)+1));

	$("#checkInTable").html("");	
	$("#checkInTable").append("<thead></thead>");
	$("#checkInTable thead").append("<tr></tr>");

	for(var k = 0; k < 7; k++){

		$("#checkInTable thead tr").append("<td>" + weekday[k] + "</td>");

	}
	
	var sumDays = 0;

	var rows = Math.ceil((tableDate.getDay() + parseInt(monthday[tableMonth])) / 7);//计算日历的行数
	//console.log((tableDate.getDay() + parseInt(monthday[tableMonth])) / 7);

	var offset = - tableDate.getDay();
	//console.log(offset);

	for(var i = 0; i < rows; i++){

		var rowsnumber = "rows-num-" + i;//设定tr id值

		$("#checkInTable").append("<tr id=" + rowsnumber + "  class='checkInRows'></tr>");

		for(var j = 0 ;j < 7; j++){

			sumDays++;

			var itemsnumber = "items-num-" + (offset + sumDays);

			var atagnumber = "link-num-" + (offset + sumDays);

			var itemsdays = offset + sumDays;

			$("#checkInTable #" + rowsnumber ).append("<td id=" + itemsnumber + "  class='checkInItems'></td>");

			if( itemsdays >= 1 && itemsdays <= monthday[tableMonth] ){

				$("#checkInTable #" + itemsnumber).append("<a href='' id="+ atagnumber +">" + itemsdays + "</a>");

			}



		}
		
	}

	//向服务端发送年份-月份数据，并请求返回对应的签到情况
	//点击签到后，把对应日期的数据AJAX发送到服务端，服务端添加或修改JSON文件内的对应日期的数据
	//服务端做判断，当5月4号 0：01时，若5月3号的JSON数据不存在，则添加数据，格式为 "date":"3","state":"0","logo":"0"
	var totalName = "time-" + tableFullYear + "-" +  numberFillZero(parseInt(tableMonth)+1);
	//console.log(totalName);
	
	if(tableMonth == currentMonth){
		if(tableFullYear == currentFullYear){
			var currentnumber = "items-num-" + currentDay;
			$("#checkInTable #" + currentnumber).append("<div id='noCheckIn'>未签到</div>");
			$("#checkInTable #" + currentnumber).data("state",2);
			$("#checkInTable #" + currentnumber).data("date",currentDay);
		}	
	}


	$.getJSON("checkinfo.json", function(data){
		jsonData = data;
		for(var i in data){
			if(i == totalName){
				checkPostData.jsonid = i;
				//读取JSON数据中对应年份-月份的数据
				for(var j = 0; j< monthday[tableMonth]; j++){

					for(var m = 0; m < data[i].length; m++){
						if(data[i][m].date == j){
							console.log(data[i][m].date);
							var statenumber = "items-num-" + j;

							if(data[i][m].state == 0){

								$("#checkInTable #" + statenumber).append("<div>补签</div>");
								$("#checkInTable #" + statenumber).data("state",0);
								$("#checkInTable #" + statenumber).data("date",j);

							}else if(data[i][m].state == 1){

								if(tableMonth == currentMonth &&
									tableFullYear == currentFullYear &&
									j == currentDay){
									$("#noCheckIn").html("<img class='checkImg' src='images/checklogo" +data[i][m].logo +".jpg'>");
								}							
								else{
									$("#checkInTable #" + statenumber).append("<img class='checkImg' src='images/checklogo" +data[i][m].logo +".jpg'>");
									
								}
								$("#checkInTable #" + statenumber).data("state",1);
								$("#checkInTable #" + statenumber).data("date",j);
							}

						}

					}
					
					//console.log(data[i][j]);

				}

			}
			
		}
				
	});

	
	//每次加载完日期表，就渲染一次签到情况（也就是日期数字下边的图标：已签到\补签、已签到\未签到（当日）、无）
	//已签到又分为四种LOGO
	//从文件读取JSON对象
	//JSON对象数据结构为：date:yyyy-mm , state:0 | 1 | 2 , logo: 0 | 1 | 2 | 3 | 4
	//state:
	//如果为0，则表示补签，显示补签字体，可以点击签到
	//如果为1，则表示已签到，读取LOGO的编号，对应相应的LOGO图片
	//如果为2，则表示未签到，显示未签到字体，可以点击签到

	//logo:
	//如果为0，则表示该状态不需要LOGO图片
	//如果为非0，则表示对应的LOGO编号

	// var checkInState = {
	// 	totalCheckInfo : [],
	// }
	// var totalName = "time-" + tableFullYear + "-" +  numberFillZero(parseInt(tableMonth)+1);
	// console.log(totalName);
	// var dataroot="checkinfo.json"; 
	// $.getJSON(dataroot, function(data){ 
	// 	console.log(data);
	// 	for(var i=0;i<data.length;i++){

	// 	}
	// });



}

function numberFillZero(str){
    str ='00000'+str;
    return str.substring(str.length-2,str.length);
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