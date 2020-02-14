const mongoose = require('../database');

const ContatoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    ddd: {
        type: Number,
        require: true
    },
    telefone: {
        type: Number,
        unique: true,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Contato = mongoose.model('Contact', ContatoSchema);

module.exports = Contato;