
/*sticky menu*/
var navbar_offset= $('.navbar').offset().top;

 $(window).scroll(function(){
    var scroll_offset = $(window).scrollTop();
            if (scroll_offset > navbar_offset){
                $('.navbar').addClass('stick');
            }else{
                $('.navbar').removeClass('stick');
            }
   
 });
 /* carousel */
 $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });

  /*go to top js*/
  
  mybutton = document.getElementById("go-to-top");
  window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    var body = $("html, body");
      body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
           console.log("Animation has finished");
      });
    }

/* mobile menu*/
    $(document).ready(function () {
        $('.menu-line').on('click', function () {
            $('.mobileMenu').toggle(200);
        });
    });

    $(document).ready(function () {
        $('.menu-line').on('click', function () {
            $('.menu-line').hide();
            $('.menu-line').show();
        });
    });


    /*submenu*/
    $(document).ready(function () {
        $(".amoz-btn ").click(function(){
             $('.amoz-show').slideToggle();
             $('.first').toggleClass("rotate");
          });
    });
    $(document).ready(function () {
        $(".pazh-btn").click(function(){
             $('.pazh-show').slideToggle();
             $('.second').toggleClass("rotate");
          });
    });
    $(document).ready(function () {
        $(".moav-btn").click(function(){
             $('.moav-show').slideToggle();
             $('.third').toggleClass("rotate");
          });
    });
    $(document).ready(function () {
        $(".danesh-btn").click(function(){
             $('.danesh-show').slideToggle();
             $('.fourth').toggleClass("rotate");
          });
    });
    $(document).ready(function () {
        $(".about-btn").click(function(){
             $('.about-show').slideToggle();
             $('.fifth').toggleClass("rotate");
          });
    });

    /* slideshow*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("activate", "dot");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "activate";
}