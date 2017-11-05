module.exports = function(app) {
  var controllerContato = app.controllers.contatoController;
  app.get('/contatos', controllerContato.find_all);
  app.post('/contatos', controllerContato.adicona)
  app.route('/contatos/:id')
    .get(controllerContato.obtemContato)
    .delete(controllerContato.removeContato);
};
