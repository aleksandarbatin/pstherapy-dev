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

  var hoverDropdown = function(){
    if ($(window).width() > 680) {
      $(".drop-btnOne").mouseover(function(){
        $(".drop-btnOne>a").css("color", "white");
      });
      $(".drop-btnOne").mouseout(function(){
        $(".drop-btnOne>a").css("color", "#8dbc7c");
      });
      $(".drop-btnTwo").mouseover(function(){
        $(".drop-btnTwo>a").css("color", "white");
      });
      $(".drop-btnTwo").mouseout(function(){
        $(".drop-btnTwo>a").css("color", "#8dbc7c");
      });
    }
  }

  var mobileMenuToggle = function () {
    if ($(window).width() < 680) {

    $('.menu_btn').on('click', function() {
      $('.nav_menu').toggleClass('show'); /* hide and show menu*/
    });
    $('.drop-btnOne').on('click', function() {
      $('.drop-menuOne').toggleClass('show'); /* hide and show menu*/
    });
     $('.drop-btnTwo').on('click', function() {
      $('.drop-menuTwo').toggleClass('show'); /* hide and show menu*/
    });
    $(".prevent-link").one("click", function(event) {
      event.preventDefault();
    });
   $(".dropdown-menu").mouseover(function(){
      $(".prevent-link").css("color", "white");
   });
  }

};

$(function() { 
  $('.accordian li').on('click', function() {
    if ($(this).find('ul').hasClass('open')) {
      $('ul.open').slideToggle().removeClass('open');
      $('.accordian h3 span').removeClass('closed');
      $('.accordian h3').removeClass('closed');
    } else {
      $('ul.open').slideToggle().removeClass('open');
      $(this).find('ul').slideToggle().addClass('open');
      $('.accordian h3, .accordian h3 span').removeClass('closed');
      $(this).find('h3, h3 span').addClass('closed')
    }
  });
  // Active class adds open class
  $('.accordian li.active ul').slideDown().addClass('open');
});

