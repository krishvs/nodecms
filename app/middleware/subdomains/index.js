var app = require('clayjs').app
  , io      = require('socket.io');

function execute(app,server)
{
    var socket  = io.listen(server);
    socket.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
 console.log('I am going to execute the subdomain handler ');
 app.use(function(req,res,next){
  var domain = req.host;
  var Account = require('clayjs').db.Account
  Account.find({where: { 'domain' : domain }}).success(function(account){
    console.log('I have an account with that given url '+req.url);
    if(account || (req.host === 'lvh.me') ){
      req.current_account = account;
      next();
    }
    else{
      res.status(404).sendfile('404.html');
    }
  });
 })
}

module.exports.execute = execute;
