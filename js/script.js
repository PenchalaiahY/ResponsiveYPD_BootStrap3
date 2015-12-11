/* script to set the height of left hero element */
$('#left_hero').css('height', $('#right_hero').height()+'px');
$('#contentWrapper').css('margin-top',$('#hero').height()/4+'px');

$(window).on('resize', function(event){
    $('#left_hero').css('height', $('#right_hero').height()+'px');
    $('#contentWrapper').css('margin-top',$('#hero').height()/4+'px');
});
