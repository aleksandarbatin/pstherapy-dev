//***********
//SLIDER
//*********

$(document).ready(function(){
  $('.slider_holder').slick({
  	dots: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear'
  });
});
