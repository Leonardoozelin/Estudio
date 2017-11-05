module.exports = function(app){
  var controllerServico = app.models.servicos;

  controllerServico.adicona = function(req, res) {
      console.log(req.body);
      var corpo = {
        id: req.body.id,
      	nome:req.body.nome,
      	valor:req.body.valor,

      }
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


  return controllerServico;

};
