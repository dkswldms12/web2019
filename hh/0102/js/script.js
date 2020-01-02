$(document).ready(function(){
	$("#ex_01_title").click(function(){
		$(".p_01").css("background","#ffaaff");
		$(".p_03").css("background","#ffaaff");
	});

	$("#ex_02").click(function(){
		var $chk=$("input[name^='item_0']");
		if($chk.attr("checked")){//현제기준으로 체크되어 있는 상태
			$("input[name^='item_0']").removeAttr("checked");
			$("#ex_02_tit").text("전체선택");
		}else{//현재 기준으로 체크가 되어있지 않은상태
			$("input[name^='item_0']").attr("checked","checked");
			$("#ex_02_tit").text("전체해제");
		}
	});

	$(".ch_03_img span").click(function(){
		 $(this).closest("div").hide();

	});

	var $img=0;
	$("#ex_04 .go").click(function(){
		$(".ch_04_01").animate({"margin-left":$img+=200}, 1000);
	});
	$("#ex_04 .back").click(function(){
		$(".ch_04_01").animate({"margin-left":$img-=200}, 1000);
	});



/*
	$(".tab_01").fadeIn();

	$("#tab_01").click(function(){
		$(".tab_box>div").hide();
		$(".tab_01").fadeIn();
		$(".bg-bk").animate({"left":0},500);
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");

	});
	$("#tab_02").click(function(){
		$(".tab_box>div").hide();
		$(".tab_02").fadeIn();
		$(".bg-bk").animate({"left":"50%"},500);
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
	});
*/



	$(".tab_btn>div").click(function(){
		var $index=$(this).index();
		$(".tab_box>div").removeClass("activeBox");
		$(".tab_box>div").eq($index).addClass("activeBox");
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");		
		$(".bg-bk").animate({"left":50*$index+"%"},500);
	});


	$(".less").hide();
	$("#ex_06 p").hide();
	$(".more").click(function(){
		$(this).closest("h4").next("p").slideDown();
		$(this).hide();
		$(this).siblings(".less").show();
	  });
	$(".less").click(function(){
		$(this).closest("h4").next("p").slideUp();
		$(this).hide();
		$(this).siblings(".more").show();
	  });


	$("#ex_07 p").hide();
	$(".q_box").click(function(){
		$(".q_box p").not($(this).next(".q_box p").slideToggle(500)).slideUp();
	});
































});