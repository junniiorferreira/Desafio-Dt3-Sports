const express = require('express');
const Contato = require('../models/Contato');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const contatos = await Contato.find({});
        return res.send({ contatos });
    } catch (err) {
        return res.status(400).send({ error: 'O banco de dados recusou a requisição' })
    }
});

router.post('/', async (req, res) => {
    const {telefone} = req.body;
    try {
        if ( await Contato.findOne({ telefone }) )
            return res.status(400).send({ erro: 'Esse Telefone Já Existe!' });
        const contato = await Contato.create(req.body);
        return res.send({ contato });
    } catch (err) {
        return res.status(400).send({ error: 'O banco de dados recusou a requisição' })
    }
});

module.exports = app => app.use('/contacts', router);