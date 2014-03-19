//= require_tree .

$(document).ready(function(){

	// mobile nav toggle

	$('.icon-reorder').click(function() {
		$('nav ul').fadeToggle();
	});

	// schedule session descriptions

	$('.sessions h3').click(function() {
		$(this).siblings('.session-description').fadeToggle();
	});

	$('.session-description').prepend('<strong><i class="icon-remove"></i></strong>');

	$('.session-description strong').bind('click',function() {
		$(this).closest('.session-description').fadeToggle();
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('.session-description').fadeOut();
		}
	});

	// gallery slider

	if (!/iPhone|iPad|iPod|Android|BlackBerry|webOS/i.test(navigator.userAgent)) {
		confGallery = $('.conference-center-gallery').bxSlider({
			pager: false,
			touchEnabled: true
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 37) {
				confGallery.goToPrevSlide()
			}
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 39) {
				confGallery.goToNextSlide()
			}
		});
	}

	// styling iframe content
	
	// $('#eventbrite').contents().find('.button_css a').css('background','#000');

});