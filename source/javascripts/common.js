//= require_tree .

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
