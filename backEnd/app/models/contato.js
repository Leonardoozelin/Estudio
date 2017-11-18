var mongoose = require('mongoose');

module.exports =  function () {
   var schema = mongoose.Schema({
     id:{
       type: Number,
       required: true
     },
     nome:{
       type: String,
       required: true
     },
     cpf:{
      type: String
     },
     telefone:{
       type: String,
       required: true
     },
     cidade:{
       type: String,
       require: true
     },
     endereco:{
       type: String,
       require: true
     },
     email:{
       type: String,
       required: true
     }
   });
   return mongoose.model('contato', schema);
};
