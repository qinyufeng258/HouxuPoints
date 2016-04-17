window.onload = function(){

	var mtc = document.getElementById("mycardChange");
	
	var mcc = document.getElementById("mythingChange");

	var mcards = mtc.getElementsByClassName("changeItemBox");

	var mthings = mcc.getElementsByClassName("changeItemBox");

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
		
 		 $("#alertWindow").css("display","none");
 		document.getElementById("alertTitle").innerHTML = ""
		document.getElementById("alertContent").innerHTML = "";

	});

	for (var i = mcards.length - 1; i >= 0; i--) {
		(function(e){

			mcards[e].ontouchstart = function(){

				var card_id = this.dataset.id;
				document.getElementById("alertTitle").innerHTML = "卡券详情";
				document.getElementById("alertContent").innerHTML ="<span>"+  card_id  + "</span><img src='images/vipCode.jpg'>";

				$("#alertWindow").css("display","block");

			};

		})(i);
	}

	for (var i = mthings.length - 1; i >= 0; i--) {
		(function(e){

			mthings[e].ontouchstart = function(){

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

			};

		})(i);
	}

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