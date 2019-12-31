$(document).ready(function(){
	var $item_arr=[
		["img_01.jpg","title_01","context_01","https://www.naver.com"],
		["img_02.jpg","title_02","context_02","https://www.google.com"],
	];

	$(".grid-item a").click(function(){
		$(".popup_bg").addClass("active");
		$(".popup_frame").addClass("active");
		var $index=$(this).closest(".grid-item").index();
		$(".popup_img").css("background-image","url(img/work/"+$item_arr[$index][0]+")");
		$(".popup_title").text($item_arr[$index][1]);
		$(".popup_text").text($item_arr[$index][2]);
		$(".popup_link a").attr("href",$item_arr[$index][3]);
		return false;
	});

	$(".popup_bg, .close").click(function(){
		$(".popup_bg").removeClass("active");
		$(".popup_frame").removeClass("active");
		return false;
	});

	$(".grid").masonry({
		itemSelector:".grid-item",//그리드를 적용할 대상
		isAnimated:true//애니메이션 기능을 활성화 시킨다(반응형까지 진행될 경우, 움직이는 동적효과를 부여 할 수 있다)
	});




});