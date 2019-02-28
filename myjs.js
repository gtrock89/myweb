$(document).ready(function(){
  $('.gotop a').click(function(event){
   event.preventDefault();
  $('html,body').animate({
    scrollTop:0
  },700);
  });
  
      $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('.gotop a').fadeIn();
        } else {
            $('.gotop a').fadeOut();
        }
    });

      $('.carousel-caption').fadeIn(1000);

  }); 




