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
document.write($no_01+"<br>");

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