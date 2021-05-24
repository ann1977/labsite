// Preloader js
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

$(document).ready(function () {
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

	// Zoom gallery init
	$('.history-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade mfp-huge-captions',
			closeOnContentClick: false,
			closeBtnInside: false,
			preload: [1, 2],
			image: {
				verticalFit: true
			}
		});
	});

	// scroll functions
	previousScroll = 0;
	$(window).scroll(function(e) {
		// add/remove class to navbar when scrolling to hide/show
		var scroll = $(window).scrollTop();
		if (scroll < previousScroll) {
			if (scroll + 10 < previousScroll || scroll < 150) {
				$('.navbar').removeClass("navbar-hide");
			}
		} else if (scroll >= 150) {
			$('.navbar').addClass("navbar-hide");
		}
		previousScroll = scroll;
	});
});


