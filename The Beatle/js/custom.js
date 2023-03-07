$(function () {
   
    // scroll button fadeIn and fadeOut

    $(window).scroll(function(){
       var scrolling  = $(this).scrollTop();

       if(scrolling > 50){
           $(".back_top i").fadeIn(800)
       }else{
        $(".back_top i").fadeOut(800)
       };
       
    });

//    back to top 

    $('.back_top i').click(function () {
      $('html, body').animate({
          scrollTop:0
      }, 2000);  
   });

   // loading part 

   $(window).on("load", function () {
       $('.preloader').delay(500).fadeOut(1000)
   });
});


// first one done 

$(function() {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
      })
});


// slick part 
$(function () {
    $('.iteam_main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      });
});
