 module.exports = function (app){
     var vendasController = app.controllers.vendasController;
     app.get('/vendas', vendasController.find_all);
     app.get('/vendas/:id', vendasController.find_one);
     app.post('/vendas', vendasController.adiciona);
     app.post('/editaVenda', vendasController.update_One);
     app.delete('/vendas/:id', vendasController.apaga);
 }