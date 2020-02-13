'use strict';

var mongoose = require('mongoose'),

Contato = mongoose.model('Contatos');

exports.all_contacts = function(req, res) {
   Contato.find({}, function(err, data) {
      if (err)
      res.send(err);
      res.json(data);
   });
};

exports.new_contact = function(req, res) {
   var new_contato = new Contato(req.body);
   new_contato.save(function(err, data) {
   if (err)
      res.send(err);
   res.json(data);
   });
};

exports.get_contact = function(req, res) {
   Contato.findById(req.params.contatoId, function(err, data) {
   if (err)
      res.send(err);
   res.json(data);
   });
};

exports.att_contato = function(req, res) {
   Contato.findOneAndUpdate({_id: req.params.contatoId}, req.body, {new: true}, function(err, data) {
   if (err)
      res.send(err);
   res.json(data);
   });
};

exports.del_contato = function(req, res) {
   Contato.remove({
      _id: req.params.contatoId
   }, function(err, msg) {
   if (err)
      res.send(err);
   res.json({ message: 'Contato removido com sucesso!' });
   });
};