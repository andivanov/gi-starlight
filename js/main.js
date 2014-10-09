$('#countdown').countdown('2014/11/15', function(event) {
	$(this).html(event.strftime('%D <span class="countdown-text"><span>days</span> %H <span>hours</span> %M <span>minutes</span></span>'));
});