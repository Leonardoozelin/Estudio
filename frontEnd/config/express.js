var express = require('express');
var load = require('express-load');
var bodyparser = require('body-parser');
var cors = require('cors');



module.exports = function() {
  var app = express();
  app.set('port', 3000);
  app.use(express.static('./public'));
  app.set('views', './app/views');
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(bodyparser.json());
  app.use(require('method-override')());
  app.use(cors());
  load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
  return app;
};
