'use strict';
module.exports = function(app) {   
    var contatos = require('../controllers/contatosController');
    
    // Rota Contatos
    app.route('/contatos')
        .get(contatos.all_contacts)
        .post(contatos.new_contact)
    ;

    app.route('/contatos/:contatoId')
        .get(contatos.get_contact)
        .put(contatos.att_contact)
        .delete(contatos.del_contact)
    ;
};