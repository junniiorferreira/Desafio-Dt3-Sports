'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contatoSchema = new Schema({
   name: {
      type: String
   },
   body: {
      type: String
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
});
module.exports = mongoose.model('Contatos', contatoSchema);