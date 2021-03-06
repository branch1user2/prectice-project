function loadscroler(){
	$('body').prepend('<a href="#" class="bottom-top"><i class="icofont icofont-bubble-up"></i></a>');
	var amountScrolled = 300;
	$(window).on('scroll',function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.bottom-top').fadeIn('slow');
		} else {
			$('a.bottom-top').fadeOut('slow');
		}
	});
	$('a.bottom-top').on('click',function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
}

$(document).on('ready',function(){ 
	"use strict";
	loadscroler();
	
	/*slideshow script code start here*/
	$('.slideshow').owlCarousel({
		items: 1,
		autoPlay: 5000,
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="icofont icofont-scroll-bubble-left fa1"></i>', '<i class="icofont icofont-scroll-bubble-right fa2"></i>'],
		pagination: true,
	});
	/*slideshow script code end here*/
	
	/*testimonails script code start here*/
	$('.testimonails').owlCarousel({
		items: 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="icofont icofont-scroll-bubble-left fa1"></i>', '<i class="icofont icofont-scroll-bubble-right fa2"></i>'],
		pagination: true,
	});
	/*testimonails script code end here*/
	
	/*blogs script code start here*/
	$('.blogs').owlCarousel({
		items: 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="icofont icofont-long-arrow-left fa1"></i> Prev', 'Next <i class="icofont icofont-long-arrow-right fa2"></i>'],
		pagination: false,
	});
	/*blogs script code end here*/
});
