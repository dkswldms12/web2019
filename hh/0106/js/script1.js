$(document).ready(function(){

	var $member_arr=[
		{$name:"홍길동", $age:"19", $location:"서울"},
		{$name:"홍길순", $age:"20", $location:"부산"},
		{$name:"홍길서", $age:"22", $location:"대구"},
		{$name:"홍길북", $age:"25", $location:"을왕리"}
	];

	var $info_html=`<p class="info">이름 : <span class="name">000</span>, 나이 : <span class="age">00세</span>, 지역 : <span class="location">00</span></p>`;

	for(i=0; i<=$member_arr.length-1; i++){
		$("#objData").append($info_html);
	}

	$("#objData .info").each(function(index){
		$(this).find(".name").text($member_arr[index].$name);
		$(this).find(".age").text($member_arr[index].$age);
		$(this).find(".location").text($member_arr[index].$location);
	});
	//each로 objdate .info에 각각 찍어주겠다 index(순서대로)
	//find로 .name을 찾고 text로 $member_arr[index]번호에 .name을 넣어줘라



	var $img_arr=[
		{$img:"img/kakao_01.jpg", $title:"카카오 귀환"},
		{$img:"img/kakao_02.jpg", $title:"카카오 개설"},
		{$img:"img/kakao_03.jpg", $title:"카카오 나들이"}
	];

	var $info=`<li><div class="img"></div><p class="title"></p></li>`;

	for(i=0; i<=$img_arr.length-1; i++){
		$("#ex_05 ul").append($info);
	}

	$("#ex_05 li").each(function(index){
		$(this).find(".img").css("background-image","url("+$img_arr[index].$img+")");
		$(this).find(".title").text($img_arr[index].$title);
	});


	$(".data_method span").data("name", "홍길동");//내부에 데이터로 축적 "name"="홍길동"
	$(".data_method span").data({"age":18, "location":"서울"});

	var $dataName=$(".data_method span").data("name");
	var $dataAge=$(".data_method span").data("age");
	var $dataLocation=$(".data_method span").data("location");

	console.log($dataName);
	console.log($dataAge);
	console.log($dataLocation);


	$(".removeDate_method span").data("name", "홍길영");
	$(".removeDate_method span").data({"age":25, "location":"부산"});

	var $dataName=$(".removeDate_method span").data("name");
	var $dataAge=$(".removeDate_method span").data("age");
	var $dataLocation=$(".removeDate_method span").data("location");

	console.log($dataName);
	console.log($dataAge);
	console.log($dataLocation);

	var $dataAge=$(".removeDate_method span").removeData("age");
	var $result_dataAge=$(".removeDate_method span").data("age");
	console.log($result_dataAge);






	var $ex02_pr_arr=[
		{$dataSrc:"img/logo-01.jpg", $dataType:"PIXAR"},
		{$dataSrc:"img/logo-02.jpg", $dataType:"DISNEY"},
	];

	var $ex02_p_arr=[
		{$dataSrc:"img/anmation-01.jpg", $dataType:"CAR"},
		{$dataSrc:"img/anmation-02.jpg", $dataType:"ToyStory"},
		{$dataSrc:"img/anmation-03.jpg", $dataType:"Guitar Boy"},
	];
	var $ex02_d_arr=[
		{$dataSrc:"img/d-ani-01.jpg", $dataType:"COW"},
		{$dataSrc:"img/d-ani-02.jpg", $dataType:"DESTINY"},
		{$dataSrc:"img/d-ani-03.jpg", $dataType:"TINGKER BELL"},
	];


	$("#ex_02 .logo li").each(function(index){
		$(this).css("background-image","url("+$ex02_pr_arr[index].$dataSrc+")");
		$(this).data("data-brand",$ex02_pr_arr[index].$dataType);
	});



	$("#ex_02 .animation-p li").each(function(index){
		$(this).css("background-image","url("+$ex02_p_arr[index].$dataSrc+")");
		$(this).data("data-name",$ex02_p_arr[index].$dataType);
	});

	$("#ex_02 .animation-d li").each(function(index){
		$(this).css("background-image","url("+$ex02_d_arr[index].$dataSrc+")");
		$(this).data("data-name",$ex02_d_arr[index].$dataType);
	});



	$("#ex_02 .logo li").click(function(){
		var $b_index=$(this).index();//인덱스번호 필요
		var $brand_name=$(this).data("data-brand");
		$(".brand").text($brand_name);
		$(".sub-box ul[class^='animation-']").removeClass("active");
		$(".sub-box ul[class^='animation-']").eq($b_index).addClass("active");
		$(".detail").text("000");//초기화
	});

	$("#ex_02 .sub-box li").click(function(){
		var $movie_name=$(this).data("data-name");
		$(".detail").text($movie_name);
	});






	var $sel_01="";//여행지역
	var $sel_02="";//여행타입

	$(".sel_btn").click(function(){
		$(".category_01 input:checked").each(function(){
			$sel_01=$(this).val();
		});
		$(".category_02 input:checked").each(function(){
			$sel_02=$(this).val();
		});
		$(".img-txt").slideUp().slideDown().text("내가 선택한 여행 지역은 "+$sel_01+"이며, 여행지역은 "+$sel_02+"입니다.");

		//or검색(둘중에 하나라도 맞으면 보여준다)
		$(".img-cont").hide();
		$(".img-box div[data-region*='"+$sel_01+"']").show();
		$(".img-box div[data-type*='"+$sel_02+"']").show();


		//and검색(둘다 일치하는 항목만 보여준다)
		$(".img-cont").hide();
		$(".img-box div[data-region*='"+$sel_01+"'][data-type*='"+$sel_02+"']").show();

	});
















});