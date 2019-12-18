

var $img=document.getElementById("import");

function importImg(){
	$img.setAttribute("src", "img/pet.png");
}
function overImg(){
	$img.setAttribute("src", "img/pet.png");
}
function outImg(){
	$img.setAttribute("src", "img/dog.png");
}

//전체 구성 이벤트(resize, scroll)
var $realWidth=window.innerWidth;
//모니터 화면의 사이즈가 아닌 브라우저의 실제 가로값을 가져옴
console.log("브라우저 가로폭 : "+$realWidth);

var $realHeight=window.innerHeight;
console.log("브라우저 세로폭 : "+$realHeight);
//모니터 화면의 사이즈가 아닌 브라우저의 실제 세로값을 가져옴


var $write=document.getElementById("writeSize");
var $box=document.getElementById("box");
/*function resizeEvt(){// onresize="resizeEvt();" 이벤트를 해준다
	var $realWidth=window.innerWidth;
	//모니터 화면의 사이즈가 아닌 브라우저의 실제 가로값을 가져옴
	console.log($realWidth);
	if($realWidth<1200){//pc 모니터 구간 제외(w1200 미만)
		if($realWidth<768){//모바일 구간(w 768 미만)
			$write.innerHTML="<span>MOBILE 구간</span>";
			$box.setAttribute("class","mobile");
		}else{//태블릿 구간(w: 768~1199)
			$write.innerHTML="<span>태블릿 구간 구간</span>";
			$box.setAttribute("class","tablet");
		}
	}else{//현제 pc모니터 구간
		$write.innerHTML="<span>PC 구간</span>";
		$box.setAttribute("class","pc");
	}
}
resizeEvt();//최초 브라우저 로딩시 이벤트를 발생시켜 현재 사이즈에 해당하는 항목을 실행하도록 설정
*/

var $head_bg=document.getElementById("head_part");
function scrollEvt(){
	var $scrollY=window.scrollY;
	console.log($scrollY);
	//브라우저 상단으로부터 세로축으로 얼마나 떨어져 있는지 값을 가져옴(스크롤바의 상단 기준)
	if(scrollY>=72){
		$head_bg.style.background="#ffaaff";
		$head_bg.setAttribute("class","sticky");
		$img.style.paddingTop="100px";
	}else{
		$head_bg.style.background="#cfcfcf";
		$head_bg.setAttribute("class","");
		$img.style.paddingTop="0px";
	}
}
scrollEvt();//최초 브라우저 로딩시 함수문을 로드하여 현재 스크롤 위치를 파악하고 해당하는 항목을 실행


var $section=document.getElementById("sec");
function changeSize(){
	var $bx_width=window.innerWidth;
	var $bx_height=window.innerHeight;

	$section.style.width=$bx_width+"px";//세션의 가로폭을 가져오겠다
	$section.style.height=$bx_height+"px";//세션의 세로폭을 가져오겠다
	$section.style.background="#aaffaa";
}
function resizeEvt(){
	changeSize();//해상도가 조정이 되었을때 함수문을 실행해라라는 호출문
}

changeSize();//브라우저 최초 로딩시 함수문을 실행해라









var n=new Date();
//console.log(ndate);
var nyear=n.getFullYear();
var nmonth=n.getMonth()+1;
var ndate=n.getDate();
var nday=n.getDay();
var nhours = n.getHours();
var nminutes = n.getMinutes();
var nseconds = n.getSeconds();
var $arr=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];

var $result_01=document.getElementById("result_01");
$result_01.innerHTML=nyear+"년 "+nmonth+"월 "+ndate+"일 "+$arr[nday]+", "+nhours+" : "+nminutes+" : "+nseconds;




var str="welcom to my home";
var $result = str.substring(0,18)+"page";
var $result_02=document.getElementById("result_02");
$result_02.innerHTML=$result;





var $result_03=document.getElementById("result_03");
var $arr_01=["kakao_01.jpg","kakao_02.jpg","kakao_03.jpg"]
$result_03.innerHTML="<img src='img/"+$arr_01[0]+"'><img src='img/"+$arr_01[1]+"'><img src='img/"+$arr_01[2]+"'>";





var $result_04=document.getElementById("result_04");
var $kakao=document.getElementById("kakao_bx");
var $arr_01=["kakao_01.jpg","kakao_02.jpg","kakao_03.jpg"]
var $arr_02=["카카오소풍","카카오나들이","카카오휴가"]
$result_04.innerHTML="<div class='kakao_bx'><img src='img/"+$arr_01[0]+"'><span>"+$arr_02[0]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$arr_01[0]+"'><span>"+$arr_02[0]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$arr_01[0]+"'><span>"+$arr_02[0]+"</span></div>";






var $arr=["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
var $i=0;
var $result_05=document.getElementById("result_05"); 
var $slide_05=document.getElementById("slide"); 
function img(){
	if($i>=$arr.length-1){
		$i=0;
		$slide_05.setAttribute("src",$arr[$i]);//이미지 id
	}else{ 
		$i++;
		$slide_05.setAttribute("src",$arr[$i]);
	}
}


var i=1;
var $res_06=document.getElementById("res_06");
function next(){
	$res_06.setAttribute("src","img/img"+i+".jpg");
	i++;
	if(i>3){
		i=1;
	}
}