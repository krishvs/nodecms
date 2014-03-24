
var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport("SMTP", {
    service: "Yahoo",
    auth: {
        user: "krishnan.venkat92@yahoo.com",
        pass: "rryd3pn3"
    }
});

module.exports.index = function(req, res){
  res.send('stupid ');
};

module.exports.new = function(req, res){
  res.send('new what');
};

module.exports.create = function(req, res){
	console.log(req.body);
	var User = require('clayjs').db.User;
	User.create({ username: req.body.username, password: req.body.password}).success(function(user) {
	  console.log('I have created a user');

	  var mailOptions = {
    from: "Krishnan ✔ <krishnan.venkat92@yahoo.com>", // sender address
    to: "krishnan@freshdesk.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
	}

	// send mail with defined transport object
	transport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }

	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	});

	  res.render('forums/index');
	}).error(function(err){
		console.log('>>> There was an error in creating the user ');
		res.render('login/index');
	})

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
