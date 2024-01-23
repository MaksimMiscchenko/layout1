$(document).ready(function(){
	$('.data-btn').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));  
		$(popup_id).show(); 
		$('.letter-window').show();
	}) 
	$('.letter-window').click(function() {
		$('.letter-window, .letter').hide(); 
	})
});
