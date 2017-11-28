module.exports = function (app) {
    
    var vendasController = app.models.vendas;
    
    vendasController.adiciona = function (req, res) {
        var corpo = new Array();
        req.body.array.forEach(element => {
            corpo.push({
                cliente: element.cliente,
                produto: element.produto,
                valor: element.valor
            });
        }, this);
        vendasController.create(corpo, function(err, data){
            if(err){
                res.status(500).json(err);
            }else{
                res.send(data);
            }
        })
    }
    vendasController.find_all = function (req, res){
        vendasController.find({}, (err, data) => {
            if(err){
                res.status(500).json(err)
            }else{
                res.send(data);
            }
        });
    }


    return vendasController;
}