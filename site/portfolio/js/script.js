var n=new Date();
var dal=n.getMonth()+1;
document.getElementById("main").style.backgroundImage = "url(img/bg"+dal+".jpg)";
document.getElementById("main").style.opacity = "0.3";

/*
for(i=1; i<=12; i++){
	if(dal==i){
		document.write("<img src='img/bg"+i+".jpg'>");
	}
}
*/
/*
var text = "가나다라마바사<br><br>가나다라마바사";
var cnt = 0;
var speed = 100;//글자가 찍히는 속도
var timer1 = null;

	function gogo(){
	document.getElementById('texts').innerHTML = text.substring(0, cnt);
	document.getElementById("texts").style.fontSize = "20px";
	cnt++;
	timer1 = setTimeout('gogo()', speed);
					 
	if(text.length < cnt){
 // 아래 주석으로 처리된 부분을 지우면 한번만 실행됩니다.
 //clearTimeout(timer1)
	cnt = 0;
	}
}
gogo();
*/

$(document).ready(function(){
	var slide = $(".slide").bxSlider({mode:'vertical',auto:true,controls:false,pager:false});
	$(".prevB").click(function(){
		slide.goToPrevSlide();
	});
	$(".nextB").click(function(){
		slide.goToNextSlide();
	});


	/*
	var $img_group = `
	<img src="img/m_1.png" alt="m1">
	<img src="img/m_2.png" alt="m2">
	<img src="img/m_3.png" alt="m3">
	<img src="img/m_4.png" alt="m4">
	<img src="img/m_5.png" alt="m5">
	<img src="img/m_6.png" alt="m6">
	<img src="img/m_7.png" alt="m7">
	<img src="img/m_8.png" alt="m8">
	<img src="img/m_9.png" alt="m9">
	<img src="img/m_10.png" alt="m10">
	<img src="img/m_11.png" alt="m11">
	<img src="img/m_12.png" alt="m12">
	`;

	$(".main_slid li").each(function(index){
		$(this).find(".photo1").html($img_group);

	});
	$(".photo1").css("width", "1200%");
	$(".photo1 img").css("width", "calc(100% / 12)");

	setInterval(function(){
		var $f_child = $(".photo1 img").eq(0);
		$(".photo1").animate({"margin-left":"-100%"}, 500, function(){
			$(".photo1").append($f_child).css({"margin-left":"0"});

		});
	}, 2000);

	*/

	$('.photo').slick({
	 	slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed:1000,
		callbacks:function(){
		}
	});



	function scrollEv(){
		var $scrollTop = $(window).scrollTop();
		console.log($scrollTop);

		if($scrollTop > $(".five_box").offset().top - 120){
			$(".line_box1 .in_color").addClass("active");
			$(".line_box2 .in_color").addClass("active");
		}else{


		}	

	}


	$(window).scroll(function(){
		scrollEv();


	});

/*
	var $head_h = document.getElementsByTagName("header")[0].innerHeight;
	console.log($head_h);

	var $scrollY=window.scrollY;
	console.log($scrollY);
*/	
/*
	if($scrollY>=){

	}

*/

	// $("move_slid").vegas({
	// 	slides: [
	// 		{ src: "../img/kakao.mp4"}
	// 	]
	// });

});