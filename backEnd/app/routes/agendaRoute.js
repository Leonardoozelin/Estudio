module.exports = function(app){
  var controllerAgenda = app.controllers.agendaController;
  app.get('/agenda', controllerAgenda.find_all);
  app.post('/agenda', controllerAgenda.adiciona);
  app.get('/agenda/:id', controllerAgenda.findOne);
  app.put('/agenda', controllerAgenda.update);
  app.delete('/agenda/:id', controllerAgenda.apaga);
};
