var passport = require('../../middleware/passport/index.js').passport;
module.exports.beforeFilters = [
	{
		actions : ['create'],
		method : passport.authenticate('local', { successRedirect: '/dashboard/overview',
                                   failureRedirect: '/login'})
	}
]

module.exports.index = function(req, res){
  res.render('login/index');
};

module.exports.new = function(req, res){
  res.render('login/new');
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
  console.log('I am destroy here of session ');
  req.logout();
  res.redirect('/');
};

module.exports.logout = function(req,res){
  req.logout();
  res.redirect('/');
}

