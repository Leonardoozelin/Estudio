module.exports = function(app){
  var controllerAgenda = app.controllers.agendaController;
  app.get('/agenda', controllerAgenda.find_all);
  app.post('/agenda', controllerAgenda.adiciona);
  app.route('/agenda/:id')
    .get(controllerAgenda.obtemAgenda)
    .delete(controllerAgenda.removeAgenda)
};
