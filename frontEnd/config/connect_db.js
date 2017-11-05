var mongoose = require('mongoose');

module.exports = function (uri) {
  mongoose.connect(uri, {useMongoClient: true});
  mongoose.connection.on('connected', function () {
    console.log('Mongoose conectado em ' + uri);
  });
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose desconectado em ' + uri);
  });
  mongoose.connection.on('error', function () {
    console.log('Mongoose erro na conexao em ' + error);
  });
};
