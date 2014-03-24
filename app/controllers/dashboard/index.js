module.exports.beforeFilters = [
	{
		actions : ['index'],
		method : function(req,res,next)
		{
			if(req.isAuthenticated())
				next();
			else{
				console.log('The value of the current account is '+req.current_account);
				res.redirect('/login');
			}
		}
	}
]

module.exports.afterFilters = [
	// {
	// 	actions : ['index'],
	// 	method : logger1
	// },
	// {
	// 	actions : ['index'],
	// 	method : function(res)
	// 	{
	// 		console.log('Hello '+res.url);
	// 	}
	// }
]

module.exports.index = function(req, res,next){
  res.render('dashboard/index',{user:'krishnan'});
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

