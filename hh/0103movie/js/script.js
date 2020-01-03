$(document).ready(function(){

	$.ajax({
		url:"coverstory.html",
		type:"post",
		success:function(result){
			$("#content").html(result);
		}

	});

	$("nav li:nth-child(1)").click(function(){
		$.ajax({
			url:"coverstory.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");//모든 li에 removeClass
		$(this).addClass("active");//내가 있는곳엔 addClass

		return false;

	});


	$("nav li:nth-child(2)").click(function(){
		$.ajax({
			url:"characters.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");//모든 li에 removeClass
		$(this).addClass("active");//내가 있는곳엔 addClass

		return false;

	});

	$("nav li:nth-child(3)").click(function(){
		$.ajax({
			url:"snapshot.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");//모든 li에 removeClass
		$(this).addClass("active");//내가 있는곳엔 addClass

		return false;

	});

	$("nav li:nth-child(4)").click(function(){
		$.ajax({
			url:"epilogue.html",
			type:"post",
			success:function(result){
				$("#content").html(result);
			}
		});
		$("nav li").removeClass("active");//모든 li에 removeClass
		$(this).addClass("active");//내가 있는곳엔 addClass

		return false;

	});





});