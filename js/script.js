$(document).ready(function(){
    var flag = 1;
    var slider_size = $('.slideshow img').length;
    function next_slide(){
        var active_pic = "#pic" + flag;  //#pic1
        $(active_pic).removeClass('active');
        flag = flag + 1;
        if( flag == slider_size + 1){
            flag=1;
            $('#pic1').addClass('active');
        }else{
        var next_pic = "#pic" + flag;  //#pic2
        }
        $(next_pic).addClass('active');
    }
    $('.next') .on ('click',function(){
        next_slide();
    })
});

$(document).ready(function(){
    var flag = 1;
    var slider_size = $('.slideshow img').length;
    function prev_slide(){
        var active_pic = "#pic"- flag;  //pic1
        $(active_pic).removeClass('active');
        flag = flag - 1;
        if( flag > 0){
            flag--;
        var prev_pic = "#pic" - flag; 
        }else{
        flag = slider_size;
        }
        $(prev_pic).addClass('active');
    }
    $('.prev') .on ('click',function(){
        prev_slide();
    })
});



$(document).ready(function () {
    $('.close').on('click', function () {
        $('.mobileMenu').hide(100);
        $('.blackboard').hide(150);
    });
});

var navbar_offset= $('.navbar').offset().top;

 $(window).scroll(function(){
    var scroll_offset = $(window).scrollTop();
            if (scroll_offset > navbar_offset){
                $('.navbar').addClass('stick');
            }else{
                $('.navbar').removeClass('stick');
            }
   
 });

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