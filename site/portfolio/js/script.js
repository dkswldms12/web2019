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
	$('.photo').slick({
	 	slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
$(document).ready(function(){
	var slide = $(".slide").bxSlider({mode:'vertical',auto:true,controls:false,pager:false});
		$(".prevB").click(function(){
			slide.goToPrevSlide();
		});
		$(".nextB").click(function(){
			slide.goToNextSlide();
		});
});