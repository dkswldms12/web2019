//자바스크립트 DOM
window.onload=function(){//윈도우라는 최상위 객체가 로딩이 완료되면 functino(함수문)을 실행하라는 의미

	var $first=document.getElementById("title");
	console.log($first);
	$first.style.color="red";
	//<h2 id="title">문서객체 모델 테스트</h2>
	$first.style.backgroundColor="#aaffff";
	//<h2 id="title" style="color:red; background-color:#ffffaa;
	//">문서객체 모델 테스트</h2>

	$first.innerHTML="<span>더보기</span>"//새로운걸로 inner 교체시키겠다(문서객체 모델 테스트->더보기)
	//<h2 id="title" style="color:red; background-color:#ffffaa;
	//">문서객체 모델 테스트</h2>
	$first.innerHTML="<span>감추기</span>"//새로운걸로 inner 교체시키겠다 (더보기->감추기)


	//(원거리 선택자)태그이름으로 접근하여 스타일을 부여하는 과정
	var $menu=document.getElementById("menu");
	console.log($menu);
	//요소(element)명 기준으로 선택자를 정할 때 getElementsByTagName("p")[인덱스번호]
	$menu.getElementsByTagName("p")[1].style.background="#ffaaff";
	$menu.getElementsByTagName("p")[3].style.background="blue";
	//클레스명을 기준으로 선택자를 정할 때 getElementsByClassName(클레스명)[인덱스번호]
	$menu.getElementsByClassName("list")[0].style.background="pink";
	$menu.getElementsByClassName("list")[2].style.fontStyle="italic";


	//근거리 선택자
	var $m_list=document.getElementsByClassName("m_list")[1];
	console.log($m_list);

	var $m_list_parent=$m_list.parentNode;//부모가 누군지 찾는거
	console.log($m_list_parent);
	//parentNode는 선택자의 바로 상위 부모만을 선택하여 반환(노드(엔터값 포함)는 무시됨)
	$m_list_parent.style.backgroundColor="#aaffaa";

	var $m_list_children=$m_list_parent.children;
	//선택자의 하위 자식요소를 모두 반환(HTML 코딩 상의 엔터값이 무시된다)
	//실제 요소명만을 자식으로 저장
	console.log($m_list_children);
	$m_list_children[3].style.listStyle="none";

	var $m_list_childNodes=$m_list_parent.childNodes;
	//childNodes는 선택자의 하위 요소를 모두 반환(HTML 코딩 상의 엔터값까지 자식 요소로 저장)
	//엔터값에 의한 공백까지 자식요소로 저장
	console.log($m_list_childNodes);
	$m_list_childNodes[3].style.fontWeight=("bold");

	var $f_child=$m_list_parent.firstChild;
	console.log($f_child);
	//노드라는 개념 적용 상 첫번째 엔터값을 지정

	var $l_child=$m_list_parent.lastChild;
	console.log($l_child)
	//노드라는 개념 적용 상 마지막 엔터값을 지정

	var $prevSibling=$m_list_children[2].previousSibling.previousSibling;
	console.log($prevSibling);
	//previousSibling->text .previousSibling.previousSibling->product
	//노드라는 개념상 엔터값을 지정하고 그 이전 노드인 li를 선택하여 반환한다(product)
	//previousSibling 찾고자하는것의 전의것을 보여준다
	$prevSibling.style.borderBottom="2px dashed #ff0000";

	var $nextSibling=$m_list_children[2].nextSibling.nextSibling;
	console.log($nextSibling);
	$nextSibling.style.backgroundColor="pink";
	//nextSibling->text .nextSibling.nextSibling->nodice
	//노드라는 개념상 엔터값을 지정하고 그 이전 노드인 li를 선택하여 반환한다(notice)
	//nextSibling 찾고자하는것의 다음것을 보여준다

	//속성 변경 및 삭제, 추가
	var $ch_img=document.getElementById("ch_img");
	var $ch_img1=$ch_img.src;
	console.log($ch_img1);//값의 절대 경로
	//(값의 링크를 보여준다 file:///D:/%EC%95%88%EC%A7%80%EC%9D%80/web2019/hh/dom/img/boy.png)
	var $ch_img_getimg=$ch_img.getAttribute("src");
	console.log($ch_img_getimg);//값의 상대 경로(img/goy.png 이렇게 보여준다)

	//setAttribute는 추가!!!!!
	$ch_img.setAttribute("src","img/girl.png");//해당하는 속성명의 속성값을 변경 하겠다는 의미
	$ch_img.setAttribute("alt","소녀 이미지");
	$ch_img.setAttribute("class","img_01 girl_img");//기존에 없다면 새로운 클래스를 추가 할 수 있다
	//$ch_img.setAttribute("class","img_01 girl_img") 클래스 두개 다 선언해주려면 (클래스 클래스)
	//$ch_img.setAttribute("class","");//""공백은 기존에 선언된 속성의 값을 삭제하겠다

	var $sec_01=document.getElementById("section_01");
	console.log($sec_01);
	$sec_01.innerHTML="<p>상세 페이지</p>";//기존 하위 자식요소를 변경
	$sec_01.innerHTML="";//기존 하위 자식요소를 모두 삭제
	$sec_01.innerHTML="<h4>상세 페이지 내용</h4>";



	var $card=document.getElementById("card_img");
	$card.onclick=function(){
		$card.setAttribute("src","img/card.png");
		$card.setAttribute("alt","카드뒷면");
	}
	$card.onmouseover=function(){
		$card.setAttribute("src","img/card.png");
		$card.setAttribute("alt","카드뒷면");
	}
	$card.onmouseout=function(){
		$card.setAttribute("src","img/ace.png");
		$card.setAttribute("alt","카드앞면");
	}

}