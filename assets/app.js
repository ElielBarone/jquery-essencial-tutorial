(function(argument) {
	$(initializeComponents);

	function initializeComponents(){
		$('.answer-btn').click(answerToggle);	
	}

	function answerToggle(event) {
		var btn 			= $(event.currentTarget);
		var container 		= btn.closest('.question-container');
		var answer 			= container.find('.answer');
		answer.hide();
		answer.removeClass('hide');
		answer.show('slow');
		btn.hide('slow');
	}
})();