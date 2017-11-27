module.exports = function(app) {
  var controllerProduto = app.controllers.produtoController;
  app.get('/produto', controllerProduto.find_all);
  app.get('/produto/:id', controllerProduto.find_One);
  app.post('/produto', controllerProduto.adicona);
  app.post('/editaProduto', controllerProduto.update_One);
  app.delete('/produto/:id', controllerProduto.apagar);

};
