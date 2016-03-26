$(document).ready(function(){

	// Hover
	$(".yellow_stars").on("mouseover", "img", function(){
		$(this).prevAll().add($(this)).fadeTo(0,1);
		$(this).nextAll().fadeTo(0,0);

	})

	//Click
	 $(".yellow_stars").on("click", "img", function(){
		var score = $(this).index(".yellow_stars img") + 1;
		$("#ratingScore").text("Rating Score:" + score);
	 })
})