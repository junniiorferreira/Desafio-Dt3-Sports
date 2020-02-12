var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function(req, res) {
    res.json({
        hello : 'world'
    });
})

console.log('Servidor Online na porta ' + port);