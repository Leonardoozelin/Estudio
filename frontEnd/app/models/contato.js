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
     telefone:{
       type: String,
       required: true
     },
     email:{
       type: String,
       required: true
     }
   });
   return mongoose.model('contato', schema);
};
