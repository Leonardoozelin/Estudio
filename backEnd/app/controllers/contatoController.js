module.exports = function(app){
  var controllerContato = app.models.contato;

  controllerContato.adicona = function(req, res) {
      console.log(req.body);
        corpo = req.body;
      //cria um objeto novo na collection
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
  }
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
  }

  return controllerContato;
  //app.delete('/contatos:id', controller.removeContato);
};
