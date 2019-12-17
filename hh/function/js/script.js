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
document.write("<br>");


//매개변수
function fnc(name, region){
	document.write("저의 이름은"+name+"이며 사는곳은"+region+"입니다.");
}
fnc("홍길동","서울");document.write("<br>");
fnc("홍길영","부산");document.write("<br>");


function ch_img($img, $txt){
	document.write("<img src='img/"+$img+"' alt='"+$txt+"'>"+"<br>");
}
ch_img("ace.png","카드 앞면");
ch_img("card.png","카드 뒷면");


function imgChange(){
	var $coffee=document.getElementById("coffee");
	$coffee.setAttribute("src","img/coffee-gray.jpg");
}

//클릭시 이미지 교체
var $arr=["img/pic-1.jpg", "img/pic-2.jpg", "img/pic-3.jpg", "img/pic-4.jpg"];
var $i=0;
var $pic=document.getElementById("pic");

function next_img(){

	console.log($i);

	if($i>=$arr.length-1){//n값이 3이상이다
		$i=0; //클릭이라는 행동을 취한다면 다음 클린했을땐 $i의 값을 0으로 가져와야 pic-1.jpg호출이 가능하다
		$pic.setAttribute("src",$arr[$i]);
	}else{ //n값이 0,1,2가 들어왔을땐 +1
		$i++;
		$pic.setAttribute("src",$arr[$i]);
	}
	/*
	$i++;
	console.log($i);//0 1 2 3
	$pic.setAttribute("src",$arr[$i]);

	if($i>=$arr.length-1){//length 배열의 갯수는 4개니까 4-1
		$i=-1;
	}
	*/
}
function prev_img(){
	console.log($i);//3 2 1 0
	$i--;

	if($i<0){
		$i=$arr.length-1;//3
	}
	$pic.setAttribute("src",$arr[$i]);
}
document.write("<br>");



//return 참조변수 : 함수구문 내부에서 연산된 값을 함수 호출문에 저장할때 사용
function calc($num1, $num2){//2번
	var $total=$num1+$num2;
	return $total;
}
var $result=calc(100, 200);//1번
document.write("두수의 총 합계는"+$result+"<br>");
//브라우저가 실행되는 순간 함수문을 호출


function iImg($img){
	var $rstImg=$img;
	return $rstImg;

}
var $final=iImg("<img src='img/tree-1.jpg'>");
document.write($final+"<br>");

document.write("<br>");

function i_pic($pic1, $pic2){
	var $rst_pic=$pic1+$pic2;
	return $rst_pic;
}
var final_pic=i_pic("<img src='img/tree-2.jpg'>", "<img src='img/tree-3.jpg'>")
document.write(final_pic);

document.write("<br>");

function txt($name, $region){
	document.write("성명 : "+$name+"<br>")
	document.write("주소 : "+$region+"<br>")
}
txt("동동구","서울");

//재귀함수:함수문 호출한 후 내부의 함소호출문에 의해서 반복적으로 실행되는 함수
//(내부에서는 본인을 다시 호출)
var $k=0;
function selfT(){//2번
	$k++;//3번 $k값을 하나씩 증가시킨다
	console.log("재귀함수 테스트:"+$k);//4번 $k값 출연

	if($k>=10){//5번 $k값이 조건에 부합한지 확인
		return;
	}
	selfT();//6번 함수를 호출(본인을 호출)
}
selfT();//최초함수문 호출 1번

var $arr_t=["tree-1.jpg","tree-2.jpg","tree-3.jpg","tree-4.jpg","tree-5.jpg","tree-6.jpg"];
var $n=0;//인덱스번호 초기값 설정

function treeimg(){
	document.write("<img src='img/"+$arr_t[$n]+"'>");
	$n++;
	if($n>=$arr_t.length){//6이 됬을때 리턴
		return;
	}
	treeimg()
}
treeimg()

//전역변수 - 함수구문 외부에서 선언하여 전체(함수구문 내부 및 외부 전체)에 영향을 미침
//지역변수 - 함수구문 내부에서 선언하여 함수 내부에서만 영향을 주는 변수(지역변수의 값을 외부로 전달하기 위해서는 반드시 return 참조변수가 필요함)

var $num_01=400;//전역변수
function varNum(){
	var $num_01=600;//지역변수
	document.write("지역변수의 값 : "+$num_01+"<br>");
}
varNum();
document.write("최종 출력 값 : "+$num_01+"<br>");//전역변수의 값


//전역변수와 지역변수를 활용한 이미지 넣기
var $main=document.getElementById("main_img");//전역변수
var $thumb=document.getElementById("thumb");//전역변수
var $arr=["tree-1.jpg","tree-2.jpg","tree-3.jpg","tree-4.jpg","tree-5.jpg","tree-6.jpg"];//전역변수
$main.innerHTML="<img src='img/"+$arr[0]+"'>";
function chgimg(){
	var $arr=["tree-1-thumb.jpg","tree-2-thumb.jpg","tree-3-thumb.jpg","tree-4-thumb.jpg","tree-5-thumb.jpg","tree-6-thumb.jpg"]; //지역변수
	for(i=0; i<=$arr.length; i++){
		$thumb.innerHTML="<img src='img/"+$arr[i]+"'>";
	}
}
chgimg();