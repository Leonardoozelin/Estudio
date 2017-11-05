module.exports = function(app){
  var controllerProduto = app.models.produto;

  controllerProduto.adicona = function(req, res) {
      console.log(req.body);
      var corpo = {
        id: req.body.id,
      	nome:req.body.nome,
      	descricao:req.body.descricao,
      	valor: req.body.valor
      }
      //cria um objeto novo na collection
      controllerProduto.create(corpo, function(err, data) {
          if (err) {
              res.status(500).json(err);

          } else {
              res.send(data);

          }
      });
  };
  controllerProduto.find_all = (req, res)=>{
      controllerProduto.find({},(err, data)=>{
          if (err) {
              res.status(500).json('err');
          } else {
              res.send(data);
          }
      });
    };


  return controllerProduto;

};
