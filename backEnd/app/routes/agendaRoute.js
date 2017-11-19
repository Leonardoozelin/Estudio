module.exports = function(app){
  var controllerAgenda = app.controllers.agendaController;
  app.get('/agenda', controllerAgenda.find_all);
  app.get('/agenda/:id', controllerAgenda.find_one);
  app.post('/agenda', controllerAgenda.adiciona);
  app.post('/editaAgenda', controllerAgenda.updateOne);
  app.delete('/agenda/:id', controllerAgenda.apaga);
};
