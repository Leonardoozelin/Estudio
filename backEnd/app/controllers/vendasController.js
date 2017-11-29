module.exports = function (app) {
    
    var vendasController = app.models.vendas;
    
    vendasController.adiciona = function (req, res) {
        var corpo = new Array();
        req.body.forEach(element => {
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
    };
    vendasController.find_all = function (req, res){
        vendasController.find({}, (err, data) => {
            if(err){
                res.status(500).json(err)
            }else{
                res.send(data);
            } 
        });
    };
    vendasController.update_One = function (req, res) {
        var id = req.body._id;
        vendasController.findByIdAndUpdate(id, req.body).then(
            function (data) {
                res.status(200).json(data);
            },
            function (error) {
                console.log(error);
                res.status(404).json('Venda não encontrado para atualizar');
            }
        );
    };
    vendasController.apaga = function (req, res) {
        var id = req.params.id;
        vendasController.remove({ _id: id }).exec().then(
            function () {
                res.status(204).end();
            },
            function (error) {
                console.log(error);
            }
        )
    };
    vendasController.find_one = function (req, res) {

        vendasController.findById(req.params.id, function (err, local) {
            if (err) {
                console.log("Deu erro");
                res.status(500).json(err);
            } else {
                if (!local) {
                    res.json('empty');
                }
                res.json(local);
            };
        });
    };


    return vendasController; 
}