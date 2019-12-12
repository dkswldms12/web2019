var text = "가나다라마바사<br><br>가나다라마바사";
var cnt = 0;
var speed = 100;//글자가 찍히는 속도
var timer1 = null;

	function gogo(){
	document.getElementById('texts').innerHTML = text.substring(0, cnt);
	cnt++;
	timer1 = setTimeout('gogo()', speed);
					 
	if(text.length < cnt){
 // 아래 주석으로 처리된 부분을 지우면 한번만 실행됩니다.
 //clearTimeout(timer1)
	cnt = 0;
	}
}
gogo();