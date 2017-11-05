var http = require('http');
var app = require('./config/express.js')();
require('./config/connect_db.js')('mongodb://localhost/cabelo');

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express rodando na porta ' + app.get('port'));
});
