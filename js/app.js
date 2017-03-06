$(document).ready(function(){
  $('.slides').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  dots: true,
	  arrows: false,
  });
});
	
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.nav').addClass("sticky");
  }
  else{
    $('.nav').removeClass("sticky");
  }
});

lightbox.option({
  'resizeDuration': 250,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'positionFromTop': 200,
})