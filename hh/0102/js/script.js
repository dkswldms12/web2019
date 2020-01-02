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


	$(".q_box p").hide();
	$(".q_box").click(function(){
		var $cur=$(this).children("p").hasClass("open");//가상의 클래스가 본인을 체크 할 수 있는 열쇠
		if($cur==true){//본인을 클릭시, 현재 열려있는지 또는 닫혀 있는지를 체크, 열려있다면
			$(this).children("p").removeClass("open");//제거해주고
			$(this).children("p").slideUp();
		}else{//다른 곳을 클릭했을때
			$(".q_box p").removeClass("open");//열려있는걸 강제로 닫고
			$(".q_box p").slideUp();
			$(this).children("p").addClass("open");//클릭한곳에 새로 클레스 부여 
			$(this).children("p").slideDown();
		}
	});

	$(".per_bar_frame").each(function(){
		var $per=$(this).attr("data-percent");
		console.log($per);
		$(this).find(".per_bar").animate({"width":$per},1000);
		$(this).find(".cur_per").text($per);
	});

































});