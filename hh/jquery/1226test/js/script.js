$(document).ready(function(){

$("#select").css({"font-size":"28px","background":"#ffff00"});


$(".test_03 p:eq(0), .test_03 p:eq(2)").css("color","#00dd00");

$(".trend").each(function(index){
		if(index%2==1){
			$(this).css("background","#aaffff");
		}
	});

$(".walk").each(function(index){
		if(index!=3){
			$(this).css("color","#0000ff");
		}
	});

$(".menu li:eq(2) a").closest(".menu").css("background","#ffff77");


$(".port").closest(".main_menu").next().css("background","skyblue").find("span").css("color","red")


$(".test_08 input[type='text'] ").css("background","#ffffaa");

$(".test_09 p").text("텍스트 변경 완료").css("background","#aaffaa");


$(".test_10 p").click(function(){
	$(this).slideUp();
});

/*
  $(".test_11 p").mouseover(function(){
 	 $(".test_11 p").css("background-color", "gray");
  });
  $("p").mouseout(function(){
    $(".test_11 p").css("background-color", "yellow");
  });
  */
  $(".test_11 p").hover(function(){
  	$(this).addClass("highlight");
/*    var $over=$(this).hasClass("highlight");// 가지고 있는지 아닌지 true 또는 false로 확인
		if($over==true){
			$(".test_11 p").removeClass("highlight");
		}else{
			$(this).addClass("highlight");
		}
		*/
  }, function(){
  	$(this).removeClass("highlight");
  });

$(".test_12 select").change(function(){
		var $trip=$(this).val();
		console.log($trip);
		$(".result").text($trip);
});

$(".test_13 size_change").change(function(){
	var $width=$(window).width();
		var $trip=$(this).val();
		console.log($trip);
		$(".result").text($trip);
});


function resize_ev(){
		var $width=$(window).width();
		var $height=$(window).height();
		$(".widthTxt").text($width);
		$(".heightTxt").text($height);
	}
resize_ev();


$(window).scroll(function(){
		var $location_y=$(this).scrollTop();
		$(".scroll_location").text($location_y);
	});


$(".test_15 p").hide();
	$(".test_15 .hide-btn").click(function(){
		$(".test_15 p").hide();
	});
	$(".test_15 .show-btn").click(function(){
		$(".test_15 p").show();
	});




$(".test_16 p").hide();
	$(".test_16 .hide-btn").click(function(){
		$(".test_16 p").hide();
	});
	$(".test_16 .show-btn").click(function(){
		$(".test_16 .normal").show(0);
		$(".test_16 .very-fast").show(50);
		$(".test_16 .fast").show("fast");
		$(".test_16 .slow").show("slow");
		$(".test_16 .very-slow").show(2000);
	});


$(".test_17 p").hide();
	$(".test_17 .out-btn").click(function(){
		$(".test_17 p").fadeOut();
	});
	$(".test_17 .in-btn").click(function(){
		$(".test_17 p").fadeIn();
	});

$(".test_18 p").hide();
	$(".test_18 .up-btn").click(function(){
		$(".test_18 p").slideUp();
	});
	$(".test_18 .down-btn").click(function(){
		$(".test_18 p").slideDown();
	});

	var $img=0;
	$(".test_19 button").click(function(){
		$(".test_19 img").animate({"margin-left":$img+=200}, 1000);
	});


$(".test_20 img").click(function(){
		var $title=$(this).attr("title");
		console.log($title);
		$(".test_20 p").text($title);
	});

$(".test_21 button").click(function(){
	$(this).attr("src");
		}, function(){
			$(".test_21 img").attr("src","img/kakao_img2.jpg");
		});

$(".test_22 button.left_add").click(function(){
		$(".test_22 .img_frame").prepend("<img src='img/wall_img1.jpg'>");
	});
$(".test_22 button.right_add").click(function(){
		$(".test_22 .img_frame").append("<img src='img/wall_img3.jpg'>");
	});


$(".test_23 button.before_add").click(function(){
		$(".test_23 .img_frame").before("<img src='img/wall_img4.jpg'>");
	});
$(".test_23 button.after_add").click(function(){
		$(".test_23 .img_frame").after("<img src='img/wall_img6.jpg'>");
	});


$(".test_24 button.effect_add").click(function(){
		$(".img_frame img").addClass("effect");
	});
$(".test_24 button.effect_remove").click(function(){
		$(".img_frame img").removeClass("effect");
	});


	$(".test_25 .effect_confirm").click(function(){
		var $has=$(".img_frame img").hasClass("effect");
		if($has==true){
			$(".img_frame img").removeClass("effect");
		}else{
			$(".img_frame img").addClass("effect");
		}
	});


	$(".test_26 .img_frame img").not(":eq(0)").hide();
	$(".test_26 .fadein_img").click(function(){
		$(".test_26 .img_frame img:eq(1)").fadeIn(1000, function(){
			$(".test_26 .img_frame img:eq(2)").fadeIn(1000, function(){
				$(".test_26 .img_frame img:eq(3)").fadeIn(1000, function(){
					$(".test_26 .img_frame img:eq(4)").fadeIn(1000, function(){

					});
				});
			});
		});
	});


	$("#txt_ch").css("font-size","20px");

	var $p=$("#txt_02").text();
	$("#txt_sel span").text($p);

	$("#ex_03 p#vo_04").css("color","red");

	$("#ex_04").attr("src","img/kakao_img2.jpg");

	$("#ex_05").attr("src","img/image_02.jpg");

	var $img=0;
		$("#ex_06").attr("src","img/image_02.jpg").animate({"margin-left":$img+=200}, 2000);

	$("#ex_07 p:eq(2)").addClass("active");

	$("#ex_08 p").last().remove();


	var $first=$("#ex_09 p").eq(3);
	$(".ho_01").before($first);

	var $val=$("#ex_10 input[type='text']:eq(2)").val();
	console.log($val);
	$(".lo_03").val("대전");


	$("#ex_11>li").hover(function(){
		$(this).css("background","red");
		$(this).find(".sub").slideDown();
	}, function(){
		$(this).css("background","#fff");
		$(this).find(".sub").slideUp();
	});
	$("#ex_11").click(function(a){
		a.preventDefault();
	});

	$(".slider li").eq(0).css("z-index","1");
	$(".slide_num li").eq(0).css("background","#ffaaff");

	$(".slide_num li").click(function(){
		var $index=$(this).index();
		$(".slider li").css("z-index","0");
		$(".slider li").eq($index).css("z-index","1");
		$(".slide_num li").css("background","#999");
		$(this).css("background","#ffaaff");

	});



});
