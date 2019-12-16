function proAlert(){
	alert("함수의 실행문 영역입니다.");
}

var $bg_color=["yellow","pink","green","skyblue"];
var $i=0;

function ch_bg(){
	document.getElementsByTagName("body")[0].style.background=$bg_color[$i];
	$i++;
	if($i>=4){
		$i=0;
	}
}