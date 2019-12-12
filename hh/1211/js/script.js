//객체구성
var cell_phone = new Object(); //cell_phone라는 변수를 새로운 객체로 생성하겠다는것을 의미
cell_phone.width="8cm";
cell_phone.height="14cm";
cell_phone.weight="200g";
cell_phone.color="classic blue";
document.write(cell_phone.width+"<br>");
document.write(cell_phone.height+"<br>");
document.write(cell_phone.weight+"<br>");
document.write(cell_phone.color+"<br>");

var $t = new Date();//년, 월, 일, 요일, 시간(시분초)의 날짜 정보를 받아오겠다
var nowYear = $t.getFullYear();//년도
var nowMonth = $t.getMonth()+1;//1월은 시스템 데이터값에서 "0"이라는 값을 가져온다
var nowDate = $t.getDate();//일 정보(서수개념-첫쨋날, 둘쨋날...) 1일에 대한 데이터의 값은 '1'

var nowHours = $t.getHours();
var nowMinutes = $t.getMinutes();
var nowSeconds = $t.getSeconds();

var nowDay = $t.getDay();//요일정보(일:0~토:6)

document.write("현재 년도 : "+nowYear+"<br>");
document.write("현재 월 : "+nowMonth+"<br>");
document.write("현재 일 : "+nowDate+"<br>");

if(nowDay==0){
	document.write("현재 일 : 일요일"+"<br>");
}else if(nowDay==1){
	document.write("현재 일 : 월요일"+"<br>");
}
else if(nowDay==2){
	document.write("현재 일 : 화요일"+"<br>");
}
else if(nowDay==3){
	document.write("현재 일 : 수요일"+"<br>");
}
else if(nowDay==4){
	document.write("현재 일 : 목요일"+"<br>");
}
else if(nowDay==5){
	document.write("현재 일 : 금요일"+"<br>");
}
else if(nowDay==6){
	document.write("현재 일 : 토요일"+"<br>");
}

document.write("현재 요일 : "+nowDay+"<br>");

document.write("현재 시간 : "+nowHours+"<br>");
document.write("현재 분 : "+nowMinutes+"<br>");
document.write("현재 초 : "+nowSeconds+"<br>");

var mybirth = new Date("1995-12-01");
var theYear = mybirth.getFullYear();
var theMonth = mybirth.getMonth()+1;
var theDate = mybirth.getDate();
var theDay = mybirth.getDay();

if(theDay==0){
	ch_day="일요일"
}else if(theDay==1){
	ch_day="월요일"
}
else if(theDay==2){
	ch_day="화요일"
}
else if(theDay==3){
	ch_day="수요일"
}
else if(theDay==4){
	ch_day="목요일"
}
else if(theDay==5){
	ch_day="금요일"
}
else if(theDay==6){
	ch_day="토요일"
}
document.write(theYear+"년 "+theMonth+"월 "+theDate+"일 "+ch_day+"<br>");

//요일별 이미지 적용하기
var $n_date=new Date();
var $nDay=$n_date.getDay();

if($nDay==0){
	document.write("<img src='img/img-day/sunday.gif'>");
}else if($nDay==1){
	document.write("<img src='img/img-day/monday.gif'>");
}else if($nDay==2){
	document.write("<img src='img/img-day/tuesday.gif'>");
}else if($nDay==3){
	document.write("<img src='img/img-day/wednesday.gif'>");
}else if($nDay==4){
	document.write("<img src='img/img-day/thursday.gif'>");
}else if($nDay==5){
	document.write("<img src='img/img-day/friday.gif'>");
}else if($nDay==6){
	document.write("<img src='img/img-day/saturday.gif'>");
}

//날짜객체를 이용한 계절별 이미지 변경
var $n=new Date();
var $nMonth=$n.getMonth()+1;

if($nMonth>=3 && $nMonth<=5){
	document.write("<img src='img/img-season/img-m.jpg'>");
}else if($nMonth>=6 && $nMonth<=8){
	document.write("<img src='img/img-season/img-s.jpg'>");
}else if($nMonth>=9 && $nMonth<=11){
	document.write("<img src='img/img-season/img-f.jpg'>");
}else{
	document.write("<img src='img/img-season/img-w.jpg'>");
}

//숫자객체
var maxNum=Math.max(12,24, 5, 3, 30);//가장 큰 수 추출
document.write("최대값"+maxNum+"<br>")
var minNum=Math.min(12,24, 5, 3, 30);//가장 작은 수 추출
document.write("최소값"+minNum+"<br>")

var num=2.62345;
var roundNum=Math.round(num);//저장된 숫자의 반올림한 값을 반환(정수형태, 소수점 첫번째 자리에서 반올림함)
document.write("반올림한 값은 "+roundNum+"<br>");

var floorNum=Math.floor(num);//내림한 값을 반환
document.write("내림한 값은 "+floorNum+"<br>");

var ceilNum=Math.ceil(num);//올림한 값을 반환
document.write("올림한 값은 "+ceilNum+"<br>");

var randomNum=Math.random();//0-1 사이의 숫자(실수)를 반환(소수점 아래 자리까지)
document.write("랜덤 무작위 숫자 "+randomNum+"<br>");

var piNum=Math.PI;
document.write("원주율 구하기 "+piNum+"<br>");

var randomNum=Math.floor(Math.random()*20);//0-10사이의 숫자를 난수로 반환
document.write("0-10까지 아무 숫자 "+randomNum+"<br>");

//폰트사이즈를 10~110 이하까지 랜덤으로 추출
document.getElementById("txt").style.fontSize=Math.floor((Math.random()*100)+10)+"px";

//document : 문서라는 객체에서
//.getElementById("txt") : 아이디명이 'txt'라고 설정되어 있는 요소로 접근
//.style : 접근하는 요소에 스타일을 적용
//.fontSize:폰트의 크기를 인라인 스타일 시트로 직접 적용하겠다는 의미
//<p id="txt" style="font-size:00px">문장</p>

//랜덤을 통해서 출력되는 정수값을 1-9
var random_img=Math.floor((Math.random()*9)+1);
document.write("<img src='img/view"+random_img+".jpg'>");
//만약 math.random()으로부터 받아온 값이 0.000001이라면 
//0.00000001*9=0.00000009
//좌측의 값으로부터 1을 더한다면 1.00000009가 되니까 floor로 내림을 적용하기 때문에 1
//만약 0.99*9=8.91 +1을 하면 9.91이 나오고 여기서 내림하면 최종값은 9 

document.write("<br>")
//문자객체
var txt = "Hello Thank You good luck to you";//0부터시작
document.write(txt.charAt(7)+"<br>");//charAt(숫자) 왼쪽으로부터 인덱스 번호를 측정하여 해당하는 문자를 반환
document.write(txt.indexOf("you")+"<br>");//indexOf(문자)좌측으로부터 최초로 시작하는 인덱스 번호를 반환
document.write(txt.indexOf("o",10)+"<br>");//10번째 이후로 최초로 o가 나오는 곳 번호 반환
document.write(txt.lastIndexOf("ou")+"<br>");//lastIndexOf(문자) 오른쪽으로부터 문자를 찾아서 최초로 일치하는 문자의 번호를 추출
document.write(txt.match("good")+"<br>");//match(문자) 문자를 찾아서 왼쪽으로부터 최초로 일치하는 문자를 반환
//이때 찾는 문자가 없으면 null을 반환
document.write(txt.search("luck")+"<br>");//search(문자)문자를 좌측으로부터 찾아서 최초로 일치하는 인덱스 번호를 반환
document.write(txt.substr(12,3)+"<br>");//substr은 인덱스 번호로 12번부터 3글자를 추출
document.write(txt.substring(16,20)+"<br>");//substring은 인덱스 번호 16번부터 20이전의 구간까지 문자를 추출
document.write(txt.replace("You","Me")+"<br>");//replace는 앞에"You"는 바꿀문자 "Me"는 새문자로 바꿔주는거
document.write(txt.replace("You","")+"<br>");
document.write(txt.toLowerCase()+"<br>");//모두 소문자로
document.write(txt.toUpperCase()+"<br>");//모두 대문자로

document.write("!!!!!!!!!!여기부터 중요!!!!!!!!!!!!!!"+"<br>");
document.write(txt.length+"<br>");//문자의갯수 띄어쓰기도 포함 1부터 시작

var $strArr=txt.split(" ");//공백을 기준으로 문자를 쪼개서 저장하기
document.write($strArr+"<br>");
document.write($strArr[1]+"<br>");//배열로 [1]두번째 문장의 글자가 나옴

var $phoneNum = "01012345678";
var $result = $phoneNum.substring(0,7)+"****";
document.write($result+"<br>");
/*
010-1234-5678, 010 1234 5678, 01012345678 공백 또는 기호가 포함 또는 공백이 없는 경우
*/
var $phoneNum = "010-1234-5678";
var $result = $phoneNum.substring(0,9)+"****";
var $result1 = $phoneNum.substring(0,$phoneNum.length-4)+"****";
//숫자길이가 다르기때문에 전체를 다 잡고 마지막 4부분은 *로
document.write($result1+"<br>");

//배열 객체 : DB내의 데이터처럼 운용이 가능하다는 장점
var $member=["유재석","김종국","하하","이광수","송지효","지석진","전소민","양세찬"];
document.write("벌칙대상자1 : "+$member[3]+"<br>");
document.write("벌칙대상자2 : "+$member[5]+"<br>");

var $arr_day=["일","월","화","수","목","금","토"];
var day=new Date();//년월일시분초 추출
var $yoil=$arr_day[day.getDay()];//일 추출
document.write($yoil+"<br>");

var $img_day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var $yoil=$img_day[day.getDay()];//일 추출
document.write("<img src='img/img-day/"+$yoil+".gif'>"+"<br>");

$member.pop();//pop은 배열 데이터중에서 마지막 인덱스를 삭제
document.write($member[7]+"<br>");
document.write($member.length+"<br>");
$member.push("강하늘");//push는 마지막인덱스에 추가
document.write($member+"<br>");
document.write($member.length+"<br>");
$member.shift();//첫번째 인덱스 데이터를 삭제
document.write($member+"<br>");
$member.unshift("이대휘");//첫번째 인덱스 데이터를 추가
document.write($member+"<br>");

//2차 배열을 활용한 콘텐츠 구성하기
var $arr_bx=[
	["shop_01.jpg", "마마스앤파파스", "NEW 스터그 트레이완구 포함", "월 17,480"],
	["shop_02.jpg", "알집매트", "알집 꾸러기소파", "월 7,500"],
	["shop_03.jpg", "알집매트", "알집 네오소파", "월 8,300원"],
	["shop_04.jpg", "알집매트", " 알집 핑크퐁소파", "월 9,100원"]
];
document.write("<div class='outer'>");
for(i=0; i<$arr_bx.length; i++){
	document.write("<div class='box'><img src='img/img_arr_02/"+$arr_bx[i][0]+"'><h2>"+$arr_bx[i][1]+"</h2><p class='context'>"+$arr_bx[i][2]+"</p><p class='price'>"+$arr_bx[i][3]+"</p></div>");
}
document.write("</div>");
