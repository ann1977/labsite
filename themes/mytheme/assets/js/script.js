// Preloader js
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

$(document).ready(function () {
	// Legend Popup init
	$('.ajax-popup-link').magnificPopup({
		type: 'ajax',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	// Legend Popup init
	$('.legend-popup-link').magnificPopup({
		type: 'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	// Zoom gallery init
	$('.zoom-gallery').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade',
			closeOnContentClick: false,
			closeBtnInside: false,
			preload: [1, 2]
		});
	});
});
