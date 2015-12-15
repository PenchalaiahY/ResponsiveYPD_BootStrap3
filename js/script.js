/* script to set the Margin of left hero element */
$('#contentWrapper').css('margin-top',$('#hero').height()/6+'px');
$('#contentWrapper').css('margin-left',$('#left_hero').width()/20+'px');
$(window).on('resize', function(event){
    $('#contentWrapper').css('margin-top',$('#hero').height()/6+'px');
    $('#contentWrapper').css('margin-left',$('#left_hero').width()/20+'px');
});

/* Modal selector */
$('.trow').click(function(event){
  $(this).css('background-color','#F0F0F0');
});
