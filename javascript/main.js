

$(document).ready(function(){

   //jQuery code here

   $(".close, .hamburger").click(function(e){
     e.preventDefault();
     $(".main-nav").toggleClass('open-nav');
   });

});
