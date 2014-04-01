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

	// map

	var map = L.mapbox.map('map', 'examples.map-9ijuk24y').setView([37.768284, -122.393491], 15);
	map.scrollWheelZoom.disable();
	map.dragging.disable();
	map.touchZoom.disable();
	var marker = L.mapbox.featureLayer({
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-122.393491, 37.768284]
		},
		properties: {
			title: 'Mission Bay Conference Center at UCSF',
			description: '1675 Owens Street, Suite 251, San Francisco, CA 94143-3008 | 866-431-8273 | <a href="http://www.acc-missionbayconferencecenter.com/">Website</a>',
			'marker-size': 'medium',
			'marker-color': '#e95868',
			url: 'http://www.acc-missionbayconferencecenter.com/'
		}
	}).addTo(map);
	marker.eachLayer(function(m) {
	  m.openPopup();
	});

});