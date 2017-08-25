var express = require('express');
var app = express();

var port = process.env.PORT; // può essere impostato anche un numero Es. 5000

app.get('/', function(req, res){
    res.send('Hola risposta!');
});

app.get('/routing', function(req, res){
    res.send('Hola routing!');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});