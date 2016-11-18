//***************
//--- SLIDER
//**************

$(document).ready(function(){

  var $slides = $(".slide-block"),
      $slides_container = $(".slider_container");

  $slides_container.css({"width":100*$slides.length+'%'});
        $slides.css({"width":100/$slides.length+'%'});
        setInterval(function(){
        var first = $slides[0];
        $slides_container.animate({"left":'-100%'}, 1000 ,  function(){
            $( first).remove();
            $slides_container.append( first);
            $slides = $(".slide-block");
           $slides_container.css({"left":"0%"});
       });

    },4000);
  });

  // #####################################
  // Toggle mobile menu
  // #####################################

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
  }

};


