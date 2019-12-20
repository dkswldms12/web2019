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

	//is() 메서드 : 현재 상태의 유무를 체크하여 true 또는 false를 반환(논리형 데이터)
	var $isChk=$("#agree").is(":checked");
	console.log($isChk);

//each문은 선택자에 의해 해당하는 요소를 선택하지만
//개별적인 요소로 순차 접근함
//index라는 매개변수, each문에서 접근시 최초의 인덱스 번호로 0을 자동 생성
//index는 알아서 번호가 부여된다 0번부터~

//자동으로 부여된 인덱스 번호의 0에 따라서 <li>laptop</li>에 접근
	$(".each_box li").each(function(index){
		if(index>2){//0 1 2보다 큰것은 red 
			$(this).css("color","red");
		}else{
			$(this).css("color","pink");
		}
	});




	var $arr=["orange","red","green","yellow"];
	var $arr_txt=["box_01","box_02","box_03","box_04"];

	// var $repeat="";//데이터의 형태가 정의되지 않은 초기값 undefined
	// for(i=0; i<4; i++){
	// 	$repeat+="<div class='in_box'></div>";
	// }
	// $(".each_box_01").html($repeat);


	var $repeat=$(".each_box_01").html();
	for(i=0; i<4; i++){
		$(".each_box_01").html("<div class='in_box'>"+i+"</div>");
	}

	$(".each_box_01 .in_box").each(function(a){//a=0(orange) 1(red) 2(green) 3(yellow)
		$(this).css("background",$arr[a]);
	//	$(this).text($arr_txt[a]);
	});



	var $html_txt=$(".html_txt").html();
	console.log($html_txt);
	$(".html_txt").html("02. <span>사생결단</span>");//html이랑 innerHTML이랑 같다
	$(".detail").text("-감추기");
	$(".detail").text("<span>-감추기</span>");
	//html() 메서드와는 달리 text() 메서드는 내부에 들어가는 데이터를 텍스트로만 인식하기 때문에 
	//태그명을 포함하였다면 태그명 조차도 텍스트로 인식이 됨


	var $pic_img=$(".ch_img").attr("src");
	console.log($pic_img);
	$(".ch_img").attr({"src":"../img/pic-2.jpg", "alt":"이미지2"});
	//attr은 변경

	$(".control_txt").addClass("active");
	$(".control_txt").removeClass("active");
	var $has_class=$(".control_txt").hasClass("active");
	//선택자가 지정한 클래스를 갖고 있는지에 대한 유무를 판단 true false
	console.log($has_class);
	if($has_class==true){
		$(".control_txt").text("active 클래스가 있음")
	}else{
		$(".control_txt").text("클래스가 없음")
	}

	$(".control_txt").prop("id","active_box");
	//prop 생성 prop("id","active_box")아이디가 active_box라는걸 생성시켜줘라

	var $val=$("#user_name").val("");//기존의 value 속성의 값을 가져온다
	console.log($val);
	$("#user_name").val("이하늬");


	var $win_width=$(window).width();//브라우저의 가로값
	var $win_height=$(window).height();//브라우저의 세로값
	console.log("현재 브라우저의 가로값"+$win_width);
	console.log("현재 브라우저의 세로값"+$win_height);


	var $c_w=$(".property").width();
	console.log($c_w);

	var $in_w=$(".property").innerWidth();
	console.log("innerWidth : "+$in_w);

	var $out_w=$(".property").outerWidth();
	console.log("outerWidth : "+$out_w);



	var $po_top=$(".po_in").position().top;
	console.log("position y 위치"+$po_top);
	var $po_out=$(".po_out").offset().top;
	console.log("offset y 위치"+$po_out);


	var $sc_top=$(window).scrollTop();
	console.log("브라우저 상단으로부터 스크롤 바가 이동한 위치 : "+$sc_top);


	$(window).scroll(function(){
		var $sc=$(window).scrollTop();
		console.log($sc);

		if($sc>=$po_out){
			$(".po_in").css("background","#ffffaa");
		}else{
			$(".po_in").css("background","#ffaaff");
		}
	});

	$(".po_in").click(function(){
		$("html, body").animate({scrollTop:$("body").offset().top},1000);
		//현제위치에서 꼭대기로 올려주겠다
	});


});