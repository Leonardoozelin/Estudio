module.exports = function (app) {   
    var controllerAgenda = app.models.agenda;
    controllerAgenda.adiciona = function (req, res) {
        var corpo = new Array();

        req.body.forEach(function (element) {
            corpo.push({
                id: element.id,
                nome: element.nome,
                horario: element.horario,
                servico: element.servico
            });
        }, this);

        controllerAgenda.create(corpo, function (err, data) {
            if (err) {
                res.status(500).json(err);
            } else {
                console.log(data);
                res.send(data);
            }
        });
    };
    controllerAgenda.find_all = (req, res) => {
        controllerAgenda.find({}, (err, data) => {
            if (err) {
                res.status(500).json('err');
            } else {
                res.send(data);
            }
        });
    };
    controllerAgenda.updateOne = function (req, res) {
        var id = req.body._id;
        controllerAgenda.findByIdAndUpdate(id, req.body).then(
            function (data) {
                res.status(200).json(data);
            },
            function (error) {
                console.log(error);
                res.status(404).json('Cliente não encontrado para atualizar');
            }
        );
    };
    controllerAgenda.apaga = function (req, res) {
        var id = req.params.id;
        controllerAgenda.remove({ _id: id }).exec().then(
            function () {
                res.status(204).end();
            },
            function (error) {
                console.log(error);
            }
        )
    };
    controllerAgenda.find_one = function (req, res) {

        controllerAgenda.findById(req.params.id, function (err, local) {
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
    return controllerAgenda;
    //app.delete('/contatos:id', controller.removeContato);
};
