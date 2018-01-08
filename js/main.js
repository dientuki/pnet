$(window).scroll(function(event){

  var yOffset = window.pageYOffset;
  var breakpoint = 50;
  if (yOffset > breakpoint){

$("header").removeClass('default');
    $("header").addClass('active');
    
  }else{
    $("header").removeClass('active');
    $("header").addClass('default');
  }

}).trigger("scroll");


function display() {
   $(this).children("ul").show();
}

function hide() {
   $(this).children("ul").hide();   
}


$(function(){
   $("ul.main li").hover(display,hide);
   $("ul.main li").focus(display);
   $("ul.main li").blur(hide);
});

