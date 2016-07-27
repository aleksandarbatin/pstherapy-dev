//***************
//--- SLIDER
//**************

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

  $('.dropdown-menu').mouseover(function(){
    $(this.parentNode.firstChild).css({'background-color': '#76D6F9','color':'#fff'});

  });
   $('.dropdown-menu').mouseout(function(){
    $(this.parentNode.firstChild).css({'background-color': 'black','color':'#86b4d9'});
  });
});


