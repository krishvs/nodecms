var passport = require('passport') 
  , LocalStrategy = require('passport-local').Strategy
  , app = require('clayjs').app;

function execute(app)
{
  var User = require('clayjs').db.User
  console.log('>>> i am running the start pasppoert ',require('clayjs').db);
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use('local',new LocalStrategy(
    function(username, password, done) {
      User.find({ where: { 'username' : username.toString() } }).success(function (user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password !== password) {
          console.log('>>> Incorrect passwoprd');
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      }).error(function(err)
      {
        return done(null,false,{ message: 'Incorrect password' })
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.find({where : { 'id':id}}).success(function(user) {
      done(null, user);
    }).error(function(err)
    {
      done(null,false,{message:'Incorrect user'})
    });
  });
}

module.exports.passport = passport;
module.exports.execute = execute;