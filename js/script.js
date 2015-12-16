/* Modal selector */
$(function(){
  $('.trow').click(function(event){
    $(this).css('background-color','#F0F0F0');
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover(); 
  $("#purchase").click(function(e){
    $("#successAlert").slideDown();
  })
});
