$(document).ready(function(){

	 //$("*").css("color","red"); //"*"는 전체 선택자

	//$("#id_sel").css("background","pink").css("color","blue");
			//체이닝기법 : 연결하여 적용시 활용
	$("#id_Sel").css({"background":"#aaffaa","color":"#0000aa"});
			//복수의 스타일을 적용시 ({"선언":"선언값","선언1":"선언1값"});

	$(".class_01").css("font-size","40px");

	$(".el_selector p").css("color","aqua");

	$(".contain_select h4.contain").css("background","orange");


	$("#child").parent().css({"color":"yellow","background":"blue"});

	$(".children_sel .parent").children().css("color","red");

	$(".children_sel .parent").children("#child").css("background","#ccc");

	$(".my_sel").prev().css("border-bottom","2px dashed #00ffff");//이전
	$(".my_sel").prev().prev().css("background","#aaffff");//이전 이전

	$(".my_sel").next().children().css("color","#0000ff");//my_sel 밑에한테 주고싶을 때 children()
	$(".my_sel").next().next().css("background","pink");

	$(".my_sel").prevAll().css("font-size","24px");//my_sel이전에 모든것들
	$(".my_sel").nextAll().css("background","yellow");//my_sel이후에 모든것들

	$(".my_sel").siblings().css("border-left","8px solid #ff0000");
	//본인을 제외한 모든 형제들을 선택
	$(".my_sel").siblings(".last_br").css("border-bottom","8px solid #ffff00");
	//형제 중에서도 특정 요소(".last_br")만을 선택

	$(".my_unit").prevUntil(".prev").css("color","#ff0000");
	$(".my_unit").nextUntil(".next").css("color","#ffaaff");

	$(".my_menu").closest("li").css("background","#aaffaa");
	$(".my_menu").closest("li").next().css("background","pink");//closest는 상위 한테 갔다가 next로 다음것을 꾸며주는

	$(".first_sel p").first().css("color","red");
	$(".first_sel p:first").css("background","#aaa");
	$(".first_sel p").last().css("color","purple");
	$(".first_sel p:last").css("background","#aaa");

	$(".first_sel p").eq(2).css("background","pink");
	$(".first_sel p:lt(4)").css("font-size","30px");//4번쨰 이전
	$(".first_sel p:gt(4)").css("font-size","10px");//4번째 이후

	$("#wrap a[href]").css("color","blue");
	$("#wrap a[target='_blank']").css("background","#ffff00");
	$("#wrap a[href$='net']").css("font-style","italic");//$* net로 끝나는
	$("#wrap a[href*='go']").css("background","pink");// *= go가 들어가는
	$("#wrap a[href^='http']").css("border-bottom","2px solid green");// ^= http 시작하는

	var $val_in=$("#wrap input[type='text']").val();//val()는 value값을 뽑아오겠다
	console.log($val_in);

	var $sel_in=$("#fav_region option:selected").val();
	console.log($sel_in);

	var $check_in=$("#wrap input[type='checkbox']:checked").val();
	console.log($check_in);


	$("#cont_search p:contains('콘텐츠-02')").css("color","red");
	$("#cont_search p.cont01").has("span").css("border-bottom","5px solid #0000ff");

	$("#cont_search p.cont01").not(":last").css("font-style","italic");

});