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
     horario:{
       type: String,
       required: true
     },
     servico:{
       type: String,
       required: true
     }
   });
   return mongoose.model('agenda', schema);
};
