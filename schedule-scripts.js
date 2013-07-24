var schedule_init = function()
{
	var $ = window.jQuery;
	$('.wp-color-picker').wpColorPicker();
}
window.jQuery(document).on("ready", schedule_init);