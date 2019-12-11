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