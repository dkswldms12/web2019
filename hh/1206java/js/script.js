// 자바스크립트 기초
document.write("안녕하세요","<br>");
//데이터의 종류(문자형데이터, 숫자형데이터, 논리형데이터, 빈데이터)
var message="너는누구냐";
document.write(message,"<br>");
var $tag="<h2 class='txt_01'>title</h2>";
document.write($tag,"<br>");
var studentName="홍길동";

var num_01=2;
var num=Number("7");//문자형 데이터를 숫자형으로 변형시키려면 Number("")해준다
document.write(num_01,"<br>");
document.write(num_01+num,"<br>");
document.write(num,"<br>");

var num=150>100;
var $real_01=false;
var $big=24<21;
var $isTxt=Boolean("hi");
var $isTxt1=Boolean("");
document.write($real_01,"<br>");
document.write($big,"<br>");
document.write(num,"<br>");
document.write($isTxt,"<br>");
document.write($isTxt1,"<br>");

var $init;//초기값을 선언하지 않은 상태
var t=null;//값이 null로 선언된 상태
document.write($init,"<br>");
document.write(t,"<br>");

//console.log() : 검사창의 console창에 값이 표현
var $num_03 = 3;
var $num_04 = 4;
console.log($num_03+$num_04);

//데이터의 형태가 무엇인지를 확인
console.log(typeof message);//문자형 데이터
console.log(typeof num_01);//숫자형 데이터
console.log(typeof $real_01);//논리형 데이터
console.log(typeof $init);//undefined 데이터

//산술연산자
var $num_01=27;
var $num_02=4;
var $sum=$num_01+$num_02;
document.write($sum+"<br>");
var $subtract=$num_01-$num_02;
document.write($subtract+"<br>");
var $multi=$num_01*$num_02;
document.write($multi+"<br>");
var $divide=$num_01/$num_02;
document.write($divide+"<br>");
var $share=$num_01%$num_02;
document.write($share+"<br>");

//문자결합연산자 : 예약금액 * 예약인원
var $text_01="바나나 우유";
var $text_02=500;
var $text_03="ml";
var $txt_result=$text_01+$text_02+$text_03;
document.write($txt_result+"<br>");
console.log(typeof $txt_result);

//대입연산자 : 지속적으로 추가된 값(1보다 큰 정수)을 적용하여 증가 또는 감소
var $no_01=13;
var $no_02=6;
$no_01+=$no_02; //$no_01=$no_01+$no_02
document.write($no_01+"<br>");
$no_01-=$no_02; //$no_01=$no_01-$no_02
document.write($no_01+"<br>");
$no_01*=$no_02; //$no_01=$no_01*$no_02
document.write($no_01+"<br>");
$no_01/=$no_02; //$no_01=$no_01/$no_02
document.write($no_01+"<br>");
$no_01%=$no_02; //$no_01=$no_01%$no_02
document.write($no_01+"<br>"+"------------------");

var $t="<table border='1' style='border-collapse:collapse;'>";
$t+="<tr>";
$t+="<td>1</td>";
$t+="<td>2</td>";
$t+="<td>3</td>";
$t+="</tr>";
$t+="</table>";
document.write($t);
console.log($t);

//증감연산자 : 1씩 증가 시키거나 1씩 감소시킬때 사용하는 연산자
//받아오는 변수가 없는 경우, 단항($no++, ++$no)으로 연산
var $no=12;
$no++;
document.write($no+"<br>");
++$no;
document.write($no+"<br>");
$no--;
document.write($no+"<br>");
--$no;
document.write($no+"<br>");
// $no_ch=++$no;
// document.write("선행처리 결과값"+$no_ch+"증감연산된값 : "+$no+"<br>");
$no_ch=$no++;
document.write("후행처리 결과값"+$no_ch+"증감연산된값 : "+$no+"<br>");
$no_ch = --$no;
document.write($no_ch+"<br>");
$no_ch = $no--;
document.write($no_ch+"<br>");
document.write($no+"<br>");

var $num_01 = 10;
var $num_02 = 20;
$num_01++;//본인만 증감 연산자를 적용할때 본인의 값은 1씩 올라감
document.write($num_01+"<br>");
$rst = ++$num_02;
document.write($rst+","+$num_02+"<br>");
$rst = $num_02++;
document.write($rst+","+$num_02+"<br>");

var i = 1;
var j = i++ +1;
var k = ++i +1;
document.write(j+"<br>");
document.write(k+"<br>");

//비교연산자
var $num_01	= 24;
var $num_02 = 7;
var $num_03 = "12";

document.write($num_01 == 24);
document.write($num_02 == "7");
document.write($num_03 == 12);

document.write($num_01 === 24);
document.write($num_02 === "7");
document.write($num_03 === 12);

document.write($num_01 > $num_02 +"<br>");
document.write("<br>");
document.write("<br>");
document.write("20191209"+"<br>");
//논리연산자 ||연산자->or 내부의 값이 하나라도 true면 전체의 값은 true
var $a = 10;
var $b = 12;
var $c = 24;
var $d = 21;

var $result;

$result = $a>$b || $c>$d;//true
document.write($result+"<br>");
$result = $a>$b && $c>$d;//false
document.write($result+"<br>");
$result = !($a>$b);//! not 연산자 기존의 값이 true라면 반대로 false를 반환
document.write($result+"<br>");

//삼항조건 연산자 조건문?  실행문1 : 실행문2 -> 조건식이 true면 1번을 false면 2번을 실행
var $hour = 14;
var $result = $hour>=12?"오후"+($hour-12)+"시":"오전"+$hour+"시";
document.write($result+"<br>");

//조건식 if(조건식){실행문}
var $age=17;
	if($age>=20){
		document.write("당신은 성년입니다."+"<br>");
	}else{
		document.write("당신은 미자입니다."+"<br>");
	}

//var $age=17;
/*var $age=prompt("당신의 나이는?","20");
if($age>0){	
	if($age>=20){
		document.write("당신은 어른입니다."+"<br>");
	}else if($age>=13&&$age<20){
		document.write("당신은 청소년입니다."+"<br>");
	}else{
		document.write("당신은 아동입니다."+"<br>");
	}
}else{
	alert("0보다 큰수로 다시입력해주세요");
	location.reload();//강제 새로고침
}

//var $userName=prompt("이름을 입력하세요","");
if($userName){//==true 생략
	document.write($userName+"님 환영합니다.")
}*/

/*중첩 if:1차 if문의 조건에 부합할때 2차if문의 조건식을 검사하여 해당하는 곳의 실행문을 출력*/
/*var $in_num= parseInt(prompt("네자리 이상의 수를 입력하세요.","0000"));
console.log($in_num);
if($in_num>=1000){
	if($in_num%3==0){
		document.write("3의 배수입니다");
	}else{
		document.write("3의 배수가 아닙니다.");
	}
}else{
	alert("입려한 숫자가 유효하지 않습니다. 재입력 바람");
	location.reload();
}*/
/*
var $season = prompt("현재 월을 입력하세요","");
if($season>=0 && $season<=12){
	if($season>=3&&$season<=5){
		document.write("봄!!")
	}else if($season>=6&&$season<=8){
		document.write("여름!!")
	}
	else if($season>=9&&$season<=11){
		document.write("가을!!")
	}else{
		document.write("겨울!!")
	}
}else{
	alert("0보다 큰수 입력해요");
	location.reload();
}
*/

/*
document.write("<br>");
var $month=parseInt(prompt("현재 월을 입력하세요",""));
if($month>=1&&$month<=12){
	document.write("<img src='img/m_"+$month+".png' alt='"+$month+"월'>"+"<br>");
}

//if문을 활용한 로그인 구성하기
var $user_id="dkswldms";
var $user_pw="1234";

var $in_id=prompt("아이디를 입력하세요","");
var $in_pw=prompt("비밀번호를 입력하세요","");

if($user_id==$in_id&&$user_pw==$in_pw){
	document.write($in_id+"님의 방문을 환영합니다")
}else{
	alert("다시입력하세요");
	location.reload();
}

// switch : switch~case+break....default
var $select=prompt("자주사용하는 포털 사이트는 어디인가요? \n조건:네이버, 다음, 구글 중에서 선택하여 입력하시오","");
var $url;//undefined 데이터
switch($select){
	case "네이버" : $url="https://www.naver.com";
	break;
	case "구글" : $url="https://www.google.com";
	break;
	case "다음" : $url="https://www.daum.net";
	break;
	default : alert("조건에 일치하는 사이트를 입력하세요");
}
if($url){
	location.href=$url;
}*/

var $session=prompt("관심있는 있는 분야의 세션 번호를 선택하세요. \n 힌트 : 1-디자인, 2-개발파트, 3-마케팅","");
console.log(typeof $session);
//문자형 데이터를 숫자형 데이터로 변경 : number("문자형 데이터") var num=Number("7");
switch($session){
	case "1" : document.write("<img src='img/img_01.png'<p>세미나실 201호</p>"+"<br>");
	break;
	case "2" : document.write("<img src='img/img_02.png'<p>세미나실 202호</p>"+"<br>");
	break;
	case "3" : document.write("<img src='img/img_03.png'<p>세미나실 203호</p>"+"<br>");
	break;
	default : alert("조건에 일치하는걸 입력하세요");
	location.reload();
}

//반복문은 세가지 필수항목 1 초기값 2 조건문 또는 조건식 3 증감식+실행문
document.write("<h3>while 문</h3>");
var $n=1;
while($n<=3){
	document.write("<div class='box box"+$n+"'><img src='img/img_0"+$n+".png'></div>");
	$n++;
}

