'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contatoSchema = new Schema({
   name: {
      type: String
   },
   ddd: {
      type: Number
   },
   telefone: {
       type:Number
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
});
module.exports = mongoose.model('Contatos', contatoSchema);