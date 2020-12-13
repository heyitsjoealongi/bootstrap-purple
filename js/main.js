// Loader
$(window).on('load', function() {
	if ($('#loader').length) {
		$('#loader').delay(100).fadeOut('slow', function() {
			$(this).remove();
		});
	}
});
// Typed Text
if ($('.text-slider').length == 1) {
	var typed_strings = $('.text-slider-items').text();
	var typed = new Typed('.text-slider', {
		strings: typed_strings.split(','),
		typeSpeed: 80,
		loop: true,
		backDelay: 1100,
		backSpeed: 30
	});
};
// Smooth Scroll
$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
			return false;
		}
	}
});
// Responsive Nav Close
$('.smooth-scroll').click(function() {
	$('.navbar-collapse').collapse('hide');
});
// YouTube Modal
jQuery('#exampleModalCenter').on('hidden.bs.modal', function(e) {
	jQuery('#exampleModalCenter iframe').attr("src", jQuery("#exampleModalCenter  iframe").attr("src"));
});
//Back To Top
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#scroll-top').fadeIn();
		} else {
			$('#scroll-top').fadeOut();
		}
	});
	$('#scroll-top').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});
// Navbar Animate
$('body').scrollspy({
	target: '#nav',
	offset: 150
});
//Progress Bar Animate
window.onscroll = function() {
	myFunction()
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%"
};
