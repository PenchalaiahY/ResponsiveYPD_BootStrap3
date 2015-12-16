/* Modal selector */
$(function(){
  $('.trow').click(function(event){
    $(this).css('background-color','#F0F0F0');
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $("#purchase").click(function(e){
    $("#successAlert").slideDown();
  });
  $('body').on('click', function (e) {
        //did not click a popover toggle, or icon in popover toggle, or popover
        if ($(e.target).data('toggle') !== 'popover'
            && $(e.target).parents('[data-toggle="popover"]').length === 0
            && $(e.target).parents('.popover.in').length === 0) {
            $('[data-toggle="popover"]').popover('hide');
        }
  });
});
