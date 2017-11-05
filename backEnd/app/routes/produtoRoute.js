module.exports = function(app) {
  var controllerProduto = app.controllers.produtoController;
  app.get('/produto', controllerProduto.find_all);
  app.post('/produto', controllerProduto.adicona)
 /* app.route('/servicos/:id')
    .get(controllerProduto.obtemContato)
    .delete(controllerProduto.removeContato);*/
};
