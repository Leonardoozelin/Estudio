module.exports = function(app) {
  var controllerServico = app.controllers.servicoController;
  app.get('/servicos', controllerServico.find_all);
  app.post('/servicos', controllerServico.adicona);
  app.put('/servicos/:id', controllerServico.update);
  return app;
};
