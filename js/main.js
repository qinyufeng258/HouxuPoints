window.onload = function(){


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

}