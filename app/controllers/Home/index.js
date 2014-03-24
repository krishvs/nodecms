
var logger = require('../../middleware/logger/index').logger;
var logger1 = require('../../middleware/logger/index').logger1;

module.exports.beforeFilters = [
	// {
	// 	actions : ['index'],
	// 	method : function(req,res,next)
	// 	{
	// 		console.log(require('clayjs').hello+' clayjs');
	// 		if(req.isAuthenticated())
	// 			next();
	// 		else
	// 			res.redirect('/login');
	// 	}
	// }
]

module.exports.afterFilters = [
	{
		actions : ['index'],
		method : logger1
	},
	{
		actions : ['index'],
		method : function(res)
		{
			console.log('Hello '+res.url);
		}
	}
]

module.exports.index = function(req, res,next){
  res.render('home/index',{});
};

module.exports.checking = function(req, res,next){
  res.render('home/index',{});
};

module.exports.new = function(req, res){
  console.log('I am in new dashboard');	
  res.send('new forum');
};

module.exports.create = function(req, res){
  res.send('create forum');
};

module.exports.show = function(req, res){
  res.send('show forum ' + req.params.forum);
};

module.exports.edit = function(req, res){
  res.send('edit forum ' + req.params.forum);
};

module.exports.update = function(req, res){
  res.send('update forum ' + req.params.forum);
};

module.exports.destroy = function(req, res){
  res.send('destroy forum ' + req.params.forum);
};

