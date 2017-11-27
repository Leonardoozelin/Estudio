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
     descricao:{
       type: String,
       required: true
     },
     valor:{
       type: Number,
       required: true
     }
   });
   return mongoose.model('produto', schema);
}; 
