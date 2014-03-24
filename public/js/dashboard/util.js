//move all inline js of ckeditor here

var ckeditorHelper = function()
{
	var count = 0;
}
ckeditorHelper.prototype = {
	replace : function(element)
	{
		CKEDITOR.replace( 'editor1' );
	}
}

var helper = new ckeditorHelper();
window.ckeditorDashboard = {
	helper: helper;
}