// server.js

const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("./db");
const dbName = "contacts";
const collectionName = "contact";

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // <<::Rota que recupera todos os contatos::>>
    server.get("/", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json('Bem vindo a DT3 Sports!');
        });
    });

    server.get("/contacts", (request, response) => {
        // return updated list
        dbCollection.find().toArray((error, result) => {
            if (error) throw error;
            response.json(result);
        });
    });
}, function(err) { // failureCallback
    throw (err);
});

server.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});