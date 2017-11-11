module.exports = function(app){
  var controllerAgenda = app.models.agenda;
  controllerAgenda.adiciona = function(req, res) {
      var corpo = new Array();

      req.body.forEach(function(element) {
          corpo.push({
            id: element.id,
            nome:element.nome,
            horario:element.horario,
            servico: element.servico
          });
      }, this);

      controllerAgenda.create(corpo, function(err, data) {
          if (err) {
              res.status(500).json(err);

          } else {
              console.log(data);
              res.send(data);

          }
      });
  };
  controllerAgenda.find_all = (req, res)=>{
      controllerAgenda.find({},(err, data)=>{
          if (err) {
              res.status(500).json('err');
          } else {
              res.send(data);
          }
      });
    };
  controllerAgenda.obtemAgenda = function(req, res) {
    var idAgenda = req.params.id;
    var agendaF = agenda.filter(function(agendaF){
      return agendaF._id == idAgenda;
    })[0];

    agendaF ? res.json(agendaF) : res.status(404).send('Agenda não encontrado!');
  }
  controllerAgenda.removeAgenda = function (req, res){
    var idAgenda = req.params.id;
    console.log('API: removeContato: ' + idAgenda);
    agenda = agenda.filter(function(agendaF){
      return agenda._id != idAgenda;
    });
    res.status(204).end();
  }

  return controllerAgenda;
  //app.delete('/contatos:id', controller.removeContato);
};
