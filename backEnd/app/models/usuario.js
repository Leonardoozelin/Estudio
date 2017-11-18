var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function () {
    var schema = mongoose.Schema({
        login: {
            type: String,
            require: true
        },
        nome: {
            type: String,
            require: true
        },
        email: {
            type: String
        },
        dataInclisao: {
            type: Date,
            default: Date.now
        }
    });
    schema.plugin(findOrCreate);

    return mongoose.model('usuario', schema);
};
