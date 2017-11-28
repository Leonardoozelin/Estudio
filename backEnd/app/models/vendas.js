var mongoose = require('mongoose');

module.exports = function (){
    var schema = mongoose.Schema({
        cliente:{
            type: String,
            require: true
        },
        protudo:{
            type: String,
            require: true
        },
        valor:{
            type: Number
        }
    });
    return mongoose.model('vendas', schema)
}