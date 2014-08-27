$(document).ready(function(){

	$('.class_content').hide();

	$('#class_2_subject').on('click', function(){
		if($('#class_1_content').is(':visible'))
		{
			$('#class_1_content').fadeOut();
		}
		$('#class_2_content').fadeToggle();
	});

	$('#class_1_subject').on('click', function(){
		if($('#class_2_content').is(':visible'))
		{
			$('#class_2_content').fadeOut();
		}
		$('#class_1_content').fadeToggle();
	});


});