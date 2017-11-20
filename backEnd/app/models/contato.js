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
      type: String,
      required: true
     },
     email:{
      type: String,
      required: true
    },
    endereco:{
      type: String,
      require: true
    },
     cidade:{
       type: String,
       require: true
     }
   });
   return mongoose.model('contato', schema);
};
