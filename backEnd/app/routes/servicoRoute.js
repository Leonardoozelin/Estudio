module.exports = function(app) {
  var controllerServico = app.controllers.servicoController;
  app.get('/servicos', controllerServico.find_all);
  app.post('/servicos', controllerServico.adicona);
  app.put('/servicos/:id', controllerServico.update);
  app.delete('/servicos/:id', controllerServico.delete);
  app.get('/servicos/:id', controllerServico.find_One);
  app.post('/editaServico', controllerServico.update);
  return app;
};
