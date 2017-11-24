module.exports = function(app){
  var controllerContato = app.models.contato;

  controllerContato.adicona = function(req, res) {
       corpo = req.body;
      controllerContato.create(corpo, function(err, data) {
          if (err) {
              res.status(500).json(err);

          } else {
              res.send(data);

          }
      });
  };
  controllerContato.find_all = (req, res)=>{
      controllerContato.find({},(err, data)=>{
          if (err) {
              res.status(500).json('err');
          } else {
              res.send(data);
          }
      });
    };
  controllerContato.obtemContato = function(req, res) {
    controllerContato.findById(req.params.id, function (err, local) {
        if(err){
            console.log("Deu erro");
            res.status(500).json(err);
        }else{
            if(!local){
                res.json('empty');
            }
            res.json(local);
        };
    });
  };
  controllerContato.removeContato = function (req, res){
    var id = req.params.id;
    controllerContato.remove({ _id: id }).exec().then(
        function () {
            res.status(204).end();
        },
        function (error) {
            console.log(error);
        }
    )
  };
  controllerContato.updateContato = function(req, res){
    var id = req.body._id;
    controllerContato.findByIdAndUpdate(id, req.body).then(
        function (data) {
          res.status(200).json(data);
        },
        function (error) {
          console.log(error);
          res.status(404).json('Cliente não encontrado para atualizar');
        }
      );
  };

  return controllerContato;
};
