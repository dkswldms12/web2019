$(document).ready(function(){

	//배열 순서 : 이미지, 타이틀, 내용, 가격, 업데이트순서, 좋아요 횟수
	var $pd_arr=[
		["img1.jpg", "거실 인테리어", "합리적인 실용주의 인테리어1","30000","20190807","23"],
		["img2.jpg", "침실 인테리어", "합리적인 실용주의 인테리어2","40000","20191007","8"],
		["img3.jpg", "주방 인테리어", "합리적인 실용주의 인테리어3","50000","20190207","27"],
		["img4.jpg", "서재 인테리어", "합리적인 실용주의 인테리어4","10000","20190821","13"],
		["img5.jpg", "안방 인테리어", "합리적인 실용주의 인테리어5","20000","20190831","42"],
		["img6.jpg", "작은방 인테리어", "합리적인 실용주의 인테리어6","70000","20190920","53"],
		["img7.jpg", "끝방 인테리어", "합리적인 실용주의 인테리어7","100000","20190101","70"],
		["img8.jpg", "화장실 인테리어", "합리적인 실용주의 인테리어8","90000","20190802","9"],
		["img9.jpg", "다락방 인테리어", "합리적인 실용주의 인테리어9","80000","20190129","30"],
		["img1.jpg", "거실 인테리어", "합리적인 실용주의 인테리어1","30000","20190807","23"],
		["img2.jpg", "침실 인테리어", "합리적인 실용주의 인테리어2","40000","20191007","8"],
		["img3.jpg", "주방 인테리어", "합리적인 실용주의 인테리어3","50000","20190207","27"],
		["img4.jpg", "서재 인테리어", "합리적인 실용주의 인테리어4","10000","20190821","13"],
		["img5.jpg", "안방 인테리어", "합리적인 실용주의 인테리어5","20000","20190831","42"],
		["img6.jpg", "작은방 인테리어", "합리적인 실용주의 인테리어6","70000","20190920","53"],
		["img7.jpg", "끝방 인테리어", "합리적인 실용주의 인테리어7","100000","20190101","70"],
		["img8.jpg", "화장실 인테리어", "합리적인 실용주의 인테리어8","90000","20190802","9"],
		["img9.jpg", "다락방 인테리어", "합리적인 실용주의 인테리어9","80000","20190129","30"],
	];
	var $pd_box=`
		<div class="pd_box">
			<div class="pd_photo">
				<img src="img/img1.jpg">
			</div>
			<div class="pd_info">
				<h3 class="pd_title">title</h3>
				<p class="pd_text">context</p>
				<div class="pd_etc">
					<span class="pd_price">가격정보</span>
					<span class="pd_date">업데이트 날짜</span>
				</div>
				<p class="fav">좋아요&nbsp;<span>10</span></p>
			</div>
		</div>
	`;


var $ea_item=8;//각 페이지 별로 8개의 아이템을 보여주겠다는 초기 선언

	//배열의 데이터 갯수가 각 페이지별로 분배되는 과정에서 나머지값이 없다면
	// k < parseInt($pd_arr.length/$ea_item);
	if($pd_arr.length%$ea_item==0){
		for(k=0; k<parseInt($pd_arr.length/$ea_item); k++){
			$(".pager ul").append("<li>"+(k+1)+"</li>");
		}
	}else{//나머지 값이 있다면 k <= parseInt($pd_arr.length/$ea_item);
		for(k=0; k<=parseInt($pd_arr.length/$ea_item); k++){
			$(".pager ul").append("<li>"+(k+1)+"</li>");
		}
	}


//1. .pd_box 배열 데이터의 개수만큼 구성
	for(i=0; i<$ea_item; i++){//8개의 아이템 $pd_box를 구성한다
		$(".pd_frame").append($pd_box);
	}
//2. .pd_box에 순차적으로 접근한다. -> 배열의 데이터를 각 항목별로 넣어준다
	function pd_sort(){
		$(".pd_box").each(function(index){
			$(this).find(".pd_photo img").attr("src","img/"+$pd_arr[index][0]);
			$(this).find(".pd_title").text($pd_arr[index][1]);
			$(this).find(".pd_text").text($pd_arr[index][2]);
			$(this).find(".pd_price").text($pd_arr[index][3]);
			$(this).find(".pd_date").text($pd_arr[index][4]);
			$(this).find(".fav span").text($pd_arr[index][5]);
		});
	}
	pd_sort();//브라우저 로딩(ready() 이벤트)이 완료되면 함수를 호출



	//만약 pager의 통제에 의한 페이지 보여주기에서 각 페이지 별로 6개씩 보여주어야 한다면
	// 1번(인덱스 0) 페이지에 인덱스 0(8*인덱스(0)=0)~7(8*(인덱스(0)+1)-1=7)번까지 보여주어야 한다.
	// 2번(인덱스 1) 페이지에 인덱스 8(8*인덱스(1)=8)~15(8*(인덱스(1)+1)-1=15)번까지 보여주어야 한다.
	// 3번(인덱스 2) 페이지에 인덱스 16(8*인덱스(2)=16)~23(8*(인덱스(2)+1)-1=23)번까지 보여주어야 한다

	// n번(인덱스 n-1) 페이지에 인덱스 16(8*(인덱스 n-1))~23(8*((인덱스 n-1)+1)-1)번까지 보여주어야 한다

	

	$(".pager li").eq(0).addClass("active");//eq0번에 클래스 부여  //1번 번호에 active를 부여(최초 페이지 번호를 알려줌)
	$(".pager li").click(function(){//각 번호를 클릭했을때
		var $pager_index=$(this).index();//$pager_index에 인덱스 번호를 0번부터 부여해서 이걸 클릭하면  //클린된 번호의 인덱스를 추출
		$(".pager li").removeClass("active");//기존에 엑티브 클래스를 지우고  //전체 active를 회수(제거)
		$(this).addClass("active");//다시 엑티브 클래스 추가해줌   //클릭한 곳에 active를 부여(추가)
		$(".pd_box").show();//---------------역순으로 클릭하면 다시 보여주게 하는거

		// for($i=$ea_item*$pager_index; $i<=$ea_item*($pager_index+1)-1; $i++){
		// 	$(".pd_frame").append($pd_box);
		// }


		$(".pd_box").each(function(index){// index는 0~부터 행성된 개수만큼의 인덱스 번호로 순차적으로 접근
			
			if($pd_arr[$ea_item*$pager_index+index]!=undefined){//현재 인덱스번호의 데이터가 존재한다면

				$(this).find(".pd_photo img").attr("src","img/"+$pd_arr[$ea_item*$pager_index+index][0]);
				$(this).find(".pd_title").text($pd_arr[$ea_item*$pager_index+index][1]);
				$(this).find(".pd_text").text($pd_arr[$ea_item*$pager_index+index][2]);
				$(this).find(".pd_price").text($pd_arr[$ea_item*$pager_index+index][3]);
				$(this).find(".pd_date").text($pd_arr[$ea_item*$pager_index+index][4]);
				$(this).find(".fav span").text($pd_arr[$ea_item*$pager_index+index][5]);
			}else{//현재 인덱스 번호의 데이터가 존재하지 않는다면
				$(this).hide();//----------------보여줄게 없으면 숨김 
				//데이터가 존재하지 않는 박수를 숨김처리한다. (마지막 페이지에 해당하는 곳의 데이터 유무를)
			}
		});


	});







	//최신순 클릭시
	$(".date_sort").click(function(){
		$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[4]-b[4];
		});
		console.log("최신순으로 나열하기-x"+$pd_arr+"<br>");
		$pd_arr.reverse();//배열의 순서를 역순으로 변경
		console.log("최신순으로 나열하기"+$pd_arr+"<br>")
		pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출
	});

	//저가순 클릭시
	$(".low_sort").click(function(){
		$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[3]-b[3];
		});
		console.log("낮은 가격 순으로 나열하기"+$pd_arr+"<br>");
		pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출
	});
	//높은 가격순 클릭시
	$(".high_sort").click(function(){
		$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[3]-b[3];
		});
		$pd_arr.reverse();
		console.log("높은 가격 순으로 나열하기"+$pd_arr+"<br>");
		pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출
	});
	//인기순 클릭시
	$(".fav_sort").click(function(){
		$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[5]-b[5];
		});
		$pd_arr.reverse();
		console.log("인기순으로 나열하기"+$pd_arr+"<br>");
		pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출
	});





	$(".sort").change(function(){
		var $sel_select=$(this).val();
		console.log($sel_select);
		if($sel_select=="date"){
			$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[4]-b[4];
			});
			console.log("최신순으로 나열하기-x"+$pd_arr+"<br>");
			$pd_arr.reverse();//배열의 순서를 역순으로 변경
			console.log("최신순으로 나열하기"+$pd_arr+"<br>")
			pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출
		}else if($sel_select=="low"){
			$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[3]-b[3];
			});
			console.log("낮은 가격 순으로 나열하기"+$pd_arr+"<br>");
			pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출

		}else if($sel_select=="high"){
			$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[3]-b[3];
			});
			$pd_arr.reverse();
			console.log("높은 가격 순으로 나열하기"+$pd_arr+"<br>");
			pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출

		}else if($sel_select=="fav"){
			$pd_arr.sort(function(a,b){//sort() 메서드 : 순차적으로 
			return a[5]-b[5];
			});
			$pd_arr.reverse();
			console.log("인기순으로 나열하기"+$pd_arr+"<br>");
			pd_sort();//배열에 대한 sort 작업이 완료되면 함수문을 호출

		}
	});
























	
});