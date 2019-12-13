// var num1=36;
// var num2=12;
// document.write("sum = "+(num1+num2)+"<br>");
// document.write("substract = "+(num1-num2)+"<br>");
// document.write("meltiply = "+(num1*num2)+"<br>");
// document.write("divide = "+(num1/num2)+"<br>");
// document.write("reminder = "+(num1%num2)+"<br>");

// var w=prompt("브라우저의 가로 값","");
// var h=prompt("브라우저의 세로 값","");
// document.write("브라우저의 총 면적"+(w*h)+"<br>");

// var t="<table border='1'>";
// t+="<tr><td>1</td><td>2</td><td>3</td></tr>";
// t+="<tr><td>4</td><td>5</td><td>6</td></tr>";
// t+="</table>";
// document.write(t+"<br>");

// var num=prompt("네자리 이상의 수를 입력하세요","");
// if(num%7==0){
// 	document.write("입력한"+num+"은 7의 배수입니다"+"<br>");
// }else{
// 	document.write("입력한"+num+"은 7의 배수가 아닙니다"+"<br>");
// }

// for(i=1; i<=10; i++){
// 	document.write("<div class='box1'></div>");
// }
// document.write("<div class='clear'></div>");

// var num=prompt("보여줄 박스위 개수를 입력하세요","");
// for(i=1; i<=num; i++){
// 	document.write("<div class='box2'></div>");
// }

document.write("BOM"+"<br>");
var $bom="브라우저 객체 모델";
//bom은 전체에 영향을 미칠 수 있는 전역 변수
window.document.write($bom);//window는 생략가능
function winOpen(){
	window.open("popup.html","popup","width=640, height=400, left=50, top=50");
}
/*open("url주소(절대경로/상대경로","창이름",
"창을 구성하는 옵션(가로, 세로, 왼쪽, 위쪽(좌상단(좌측맨위쪽)으로부터 얼만큼 떨어져있느냐")*/
//function은 메모리다
function unmember(){
	var $c_01=confirm("정말 회원을 탈퇴하시겠습니까?");//'확인'이라는 버튼을 클릭하는 것 자체만으로도 행동을 진행한다는 값이 있음을 저장
	if($c_01){
		location.href="index.html";//회원탈퇴가 확실할때 보통의 경우 홈화면으로 돌아오게한다
	}
}
document.write("<div class='clear'></div>");
//screen객체
var $sc_w=screen.width;
document.write("현제 스크린의 가로 크기 : "+$sc_w+"<br>");
var $sc_h=screen.height;
document.write("현제 스크린의 세로 크기 : "+$sc_h+"<br>");
var $sc_availW=screen.availWidth;
document.write("현제 스크린의 가로 가용 크기 : "+$sc_availW+"<br>");
var $sc_availH=screen.availHeight;
document.write("현제 스크린의 세로 가용 크기(작업표시줄 제외한) : "+$sc_availH+"<br>");

var i=0;
var $inter=setInterval(function(){
	$time=i++;
	document.write($time);
}, 2000);//2초마다 내부의 실행문을 반복하여 실행시키겠다는 의미
clearInterval($inter);//작동안시키는(if로 몇초이상 넘어갔을때 끝내라고 만들수있따)

var $hash_txt=location.hash;
console.log($hash_txt);
var $ch_hash=$hash_txt.replace("#","")//replace는 "바꿀문자", "새문자""
console.log($ch_hash);

