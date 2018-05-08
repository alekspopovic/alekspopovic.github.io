// "Sometimes I forget things" trigger.

$("#archmage").click(function(){
    var iForgetThings = new Audio(this.href);
    iForgetThings.play();
    return false;
});

// smooth scrolling
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });


//sticky header
window.onscroll = function() {glue()};
var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;

function glue() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    $(".small-header-text").css("opacity", "1").css("left", "15px");
  } else {
    $(".small-header-text").css("opacity", "0").css("left", "-75px");
    navbar.classList.remove("sticky");
  }
}

// animate visible elements on the page
// https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var animatedElements = $('.card').add('.skills span').add('.job');
  
$(window).on('load resize scroll', function() {
    animatedElements.each(function() {
        var element = $(this);
        if (element.isInViewport()) {
            setTimeout(function(){ element.css("opacity", "1"); }, 200);
        }
    });
});