$(document).ready(function(){

	// Animation for sidebar
	$('.post').mouseenter(function(){
		$('.slide').animate({"right": "-15%"}, "200");

	});
	$('.item-wrap').mouseleave(function(){
	        setTimeout( function(){
	        $('.slide').delay(300).animate({"right": "-5%"}, "500");
			});
	});


	// Voting action
	var voteCount = 0;
	
	$('.vote').click(function(){
		$(this).addClass('voted');
		voteCount++;
		$('.vote-count').text(voteCount);
		
	});


	// Colorbox Popup
	$(".popup").colorbox({ rel:"post-gal", iframe:true, innerWidth:800, innerHeight:400});


});