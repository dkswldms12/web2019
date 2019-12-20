$(document).ready(function(){
	//bootstrap customize

	$("#slideShow").carousel({
		interval:1000, //슬라이드가 멈추어서 대기하는 시간(밀리세컨드)
		pause:"hover"//슬라이드 이미지 위에 마우스가 있으면 멈추게 하는거, 아웃시 재생
	});	

	$("[data-toggle='tooltip']").tooltip();
	//해당 선택자의 속성 중 title의 속성값을 툴팁 박스에 보여주겠다는 의미

	
});