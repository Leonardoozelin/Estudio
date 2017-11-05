module.exports = function(app) {
  var controllerServico = app.controllers.servicoController;
  app.get('/servicos', controllerServico.find_all);
  app.post('/servicos', controllerServico.adicona)
 /* app.route('/servicos/:id')
    .get(controllerServico.obtemContato)
    .delete(controllerServico.removeContato);*/
};
