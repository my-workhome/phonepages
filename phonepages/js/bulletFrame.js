function bulletFrame( title,content,tutton){
  var a='<div class="confirmPrompt">'+
  			'<div class="gray_div" style="display: block;"></div>'+
			'<div class="bank_question img-responsive img-rounded" style="display: block;" >'+
	    		'<div class="text_black_30px error_number_bank_phone">'+title+'</div>'+
	    		'<div class="error_number_bank_qus text_gray_30px">'+content+'</div>'+
	    		'<div id="close" class="error_number_bank_under text_blue_30px">'+tutton+'</div>'+
			'</div>'+
		'</div>';
	$("body").append(a);
	$(".bank_question").css({
		
	});
	$("#close").click(function () {
		$(".confirmPrompt").remove();
	});
}


// 错误提示框,第一个参数是显示的文本内容，
// 第二个是距离上边距的距离半分比，
// 第三个是淡出的时间,单位毫秒
function errorTips(text,top,time){
  var a='<div id="errorTips" class="img-rounded" style="display:none"><div class="errorTips img-rounded">'+text+'</div></div>';
  $("body").append(a);
  $(".errorTips").css({
  		
  		"fontSize" : "0.4rem",
  		"backgroundColor" : "#000",
  		"color" : "white",
  		"opacity" : "0.7",
  		"padding":"0.266667rem"	
  });
  $("#errorTips").css({
  		"position":"absolute",
  		"top":  top+"%",
  		"display" : "flex",
  		"align-items" : "center",
  		"justify-content":"center",
  		"width": 10.0 - 0.8 +"rem"
  });
  // 淡出提示框
  $("#errorTips").fadeOut(time);
}