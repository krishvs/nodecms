module.exports.execute = function(app)
{
	console.log('>>>> I am in after start of start,js');
	require('clayjs').set('hello','the hello set in after start ');
}