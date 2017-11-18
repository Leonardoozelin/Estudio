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
    controllerAgenda.findOne = function (req, res) {
        controllerAgenda.findById(req.params.id, function (error, data) {
            if (error) {
                console.log(error);
                return;
            } else {
                res.json(data);
            }
        });
    };
    controllerAgenda.updateOne = function (req, res) {
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
    return controllerAgenda;
    //app.delete('/contatos:id', controller.removeContato);
};
