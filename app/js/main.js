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
    arrows: false,
  	cssEase: 'linear'
  });
});

  // #####################################
  // Toggle mobile menu
  // #####################################

  var mobileMenuToggle = function () {

    $('.menu_btn').on('click', function() {
      $('.nav_menu').toggleClass('show'); /* hide and show menu*/
    });

};


