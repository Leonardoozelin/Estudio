module.exports = function(app) {
  var controllerContato = app.controllers.contatoController;
  app.get('/contatos', controllerContato.find_all);
  app.post('/contatos', controllerContato.adicona)
  app.post('/contatosEditar', controllerContato.updateContato); // Put nao funcina vai com o Post Mesmo...
  app.delete('/contatos/:id', controllerContato.removeContato);
  app.get('/contatos/:id', controllerContato.obtemContato);
  
};
