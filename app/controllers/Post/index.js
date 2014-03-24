
module.exports.beforeFilters = [
	{
		actions : ['new','create','update','edit','distroy'],
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

module.exports.index = function(req, res){
  res.send('stupid ');
};

module.exports.new = function(req, res){
  res.render('post/new',{user:req.user});
};

module.exports.create = function(req, res){
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
