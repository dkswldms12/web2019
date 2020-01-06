$(document).ready(function(){
/*
	var $menu_arr = [

		{$img:"images/cof11.jpg", $type:"COFFEE"},


	];
*/
	$('.mslide').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		});



	$(".menu_all .btn1").nextAll().hide();//버튼1을 누르면 nextAll hide해줘라
	$(".menu_all .btn2").hide();//버튼2 눌르면 hide해줘라
	$(".menu_all .btn1").click(function(){
		$(".menu_all .btn1").nextAll().slideDown();//버튼1 사진은 다 보여주기
		$(".menu_all .btn2").show();//버튼2 보여주기
		$(".menu_all .btn2").nextAll().hide();//버튼2 사진은 다 보여주기
		$(this).remove();//버튼1 지우기
	});

	$(".menu_all .btn2").click(function(){
		$(".menu_all .btn2").nextAll().slideDown();//버튼2 밑으로 다 보여주기
		$(this).remove();//버튼2 지우기
	});



	var $menu="";
	$(".check").click(function(){
		$(".check input:checked").each(function(){
			$menu=$(this).val();
		});
		$(".cont").hide();
		$(".menu_all li[data-region*='"+$menu+"']").show();


		$(".menu_all button[class^='btn']").hide();
	});



});