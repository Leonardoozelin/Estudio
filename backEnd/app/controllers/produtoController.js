module.exports = function (app) {
    var controllerProduto = app.models.produto;

    controllerProduto.adicona = function (req, res) {
        var corpo = req.body;
        //cria um objeto novo na collection
        controllerProduto.create(corpo, function (err, data) {
            if (err) {
                res.status(500).json(err);

            } else {
                res.send(data);

            }
        });
    };
    controllerProduto.find_all = (req, res) => {
        controllerProduto.find({}, (err, data) => {
            if (err) {
                res.status(500).json('err');
            } else {
                res.send(data);
            }
        });
    };
    controllerProduto.find_One = function (req, res){
        controllerProduto.findById(req.params.id, function(err, data){
            if (err){
                console.log(err);
                res.status(500).json('err');
            }else{
                if(!data){
                    console.log("Produto não Encontrado");
                    res.status(404);
                }
                res.json(data);
            }
        });
    };
    controllerProduto.update_One = function (req, res){
        var id = req.body._id;
        controllerProduto.findByIdAndUpdate(id, req.body).then(
            function(data){
                res.status(200).json(data);
            },
            function (error){
                console.log(error);
                res.status(404).json("Produto nao encontrado para Ser Alterado");
            }
        );
    }
    controllerProduto.apagar = function (req, res){
        var id = req.params.id
        controllerProduto.remove({_id: id}).exec().then(
            function (){
                res.status(204).end();
            },
            function(error){
                res.status(500);
                console.log(error);
            }
        )
    }


    return controllerProduto;

};
