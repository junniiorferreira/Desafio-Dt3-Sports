var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Contatos = require('./api/models/contatosModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/phonebook');

app.use(bodyParser.urlencoded({ 
    extended: true 
}));

app.use(bodyParser.json());

var routes = require('./api/routes/contatosRoutes');
routes(app);

app.listen(port);
console.log('Message RESTful API server started on: ' + port);