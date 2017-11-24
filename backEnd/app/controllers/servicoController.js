module.exports = function(app){
  var controllerServico = app.models.servicos;

  controllerServico.adicona = function(req, res) {
      console.log(req.body);
      var corpo = req.body;
      controllerServico.create(corpo, function(err, data) {
          if (err) {
              res.status(500).json(err);

          } else {
              res.send(data);
          }
      });
  };
  controllerServico.find_all = (req, res)=>{
      controllerServico.find({},(err, data)=>{
          if (err) {
              res.status(500).json('err');
          } else {
              res.send(data);
          }
      });
    };
    controllerServico.update = function(req, res){
       var id = req.body._id;
      controllerServico.findByIdAndUpdate(id, req.body).then(
        function (data) {
          res.status(200).json(data);
        },
        function (error) {
          console.log(error);
          res.status(404).json('Servico não encontrado para atualizar');
        }
      );
    };
    controllerServico.delete = function (req, res) {
      var id = req.params.id;
      controllerServico.remove({ _id: id }).exec().then(
          function () {
              res.status(204).end();
          },
          function (error) {
              console.log(error);
          }
      )
    }


  return controllerServico;

};
