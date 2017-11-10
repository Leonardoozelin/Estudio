var express = require('express');
var load = require('express-load');
var bodyparser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport'); 
var passportConfig = require('./passaport')




module.exports = function() {
  var app = express();
  app.set('port', 3000);
  app.use(express.static('./public'));
  app.set('views', './app/views');
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(bodyparser.json());
  app.use(require('method-override')());
  app.use(cors());
  app.use(passport.initialize());
  app.use(passport.session());
  passportConfig();
  app.use(cookieParser());
  app.use(session({
    secret: 'Dota e melhor que lol',
    resave: true,
    saveUninitialized: true
  }));
  
  load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
  
  return app;
};
