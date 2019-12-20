$(document).ready(function(){
	$(".icon").click(function(){
		var $has_icon = $(this).hasClass("active");
		if($has_icon){
			$(this).removeClass("active");
			$(this).find("i").removeClass("fa-minus");
			$(this).find("i").addClass("fa-plus");
			$(this).closest(".fi").find(".table_res").slideUp();
		}else{
			$(this).addClass("active");
			$(this).find("i").removeClass("fa-plus");
			$(this).find("i").addClass("fa-minus");
			$(this).closest(".fi").find(".table_res").slideDown();
		}
		return false;
	});
});
