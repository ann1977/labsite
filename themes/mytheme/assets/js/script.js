// Preloader js
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

$(document).ready(function () {
	// Legend Popup init
	$('.legend-popup-link').magnificPopup({
		type: 'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	// Zoom gallery init
	$('.device-gallery').each(function () {
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

	// Directions images
	$('.direction-gallery').each(function () {
		$(this).slick({
			autoplay: true,
			slidesToShow: 2,
			adaptiveHeight: false,
			lazyLoad: 'ondemand',
			autoplaySpeed: 5000,
			arrows: false,
			responsive: [
				{
					breakpoint: 720,
					settings: {
						centerMode: true,
						slidesToShow: 1,
						centerPadding: '40px'
					}
				}
			]
		});
	});
});
