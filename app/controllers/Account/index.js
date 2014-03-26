
var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport("SMTP", {
    service: "Yahoo",
    auth: {
        user: "krishnan.venkat92@yahoo.com",
        pass: "rryd3pn3"
    }
});

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
	var Account = require('clayjs').db.Account;
	var Subdomain = require('clayjs').db.SubDomain;
	var User = require('clayjs').db.User;
	Account.create({domain: req.body.domain}).success(function(account){
		Subdomain.create({domain: req.body.domain}).success(function(subdomain){
			account.addSubDomain(subdomain).success(function(){
				console.log('Subdomain associated to account');
			})
			console.log('The value of the req bosy is ',req.body);
			User.create({ username: req.body.username, password: req.body.password, email: req.body.email}).success(function(user){
				account.addUser(user).success(function(){
					console.log('User associated to account');
				})
				subdomain.addUser(user).success(function(){
					console.log('User associated to subdomain');
				})
				res.render('home/index');
			})
		})
	})

};

module.exports.redirect = function(req,res)
{
	res.redirect('/dashboard');
}

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
