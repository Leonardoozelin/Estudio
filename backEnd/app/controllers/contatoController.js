module.exports = function(app){
  var controllerContato = app.models.contato;

  controllerContato.adicona = function(req, res) {
      console.log(req.body);
      var corpo = {
        id: req.body.id,
      	nome:req.body.nome,
      	telefone:req.body.telefone,
      	email: req.body.email
      }
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
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato){
      return contato._id == idContato;
    })[0];

    contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
  }
  controllerContato.removeContato = function (req, res){
    var idContato = req.params.id;
    console.log('API: removeContato: ' + idContato);
    contatos = contatos.filter(function(contato){
      return contato._id != idContato;
    });
    res.status(204).end();
  }

  return controllerContato;
  //app.delete('/contatos:id', controller.removeContato);
};
