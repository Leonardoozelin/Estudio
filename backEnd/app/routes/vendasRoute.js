 module.exports = function (app){
     var vendasController = app.controllers.vendasController;
     app.get('/vendas', vendasController.find_all);
 }