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
     valor:{
       type: String,
       required: true
     }
   });
   return mongoose.model('servico', schema);
};
