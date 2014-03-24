var express = require('express')
  , routes = require('./routes/index')
  , cons = require('consolidate')
  , envr = require('./environment')()
  , async = require('async')
  , view = require('./view')
  , passport = passportLog.passport
  , after_start = require('./after_start')
  , db  = require('./database')
  , User = db.User;

var app = express();


function startdb(app)
{
  db
  .sequelize
  .sync()
  .complete(function(err) {
    if (err) {
       console.log('we have an error here');  
      throw err;
    }
    else
    {
      console.log('I am in listen here');
    app.listen(envr.port);  
    }
  })
}

function setViewEngine()
{
  app.engine(view.engine,cons[view.engine]);
  app.set('template_engine',view.engine);
  app.set('view engine',view.engine);
}

function start()
{
  setViewEngine();

  app.use(express.cookieParser());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.multipart());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'so secret' }));
  passportLog.startPassport(app);
  routes.addRoutes(app);
  startdb(app);
  after_start.start(app);
  console.log('The app is listening in the port '+envr.port);
  return app
}

module.exports.start = start; 