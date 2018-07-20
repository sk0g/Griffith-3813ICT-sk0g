var express = require('express');
var app     = express();
var http    = require('http').Server(app);

app.use(express.static(__dirname + '/www'));

var server = http.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("My first nodejs server!");
    console.log("Server listening on: " + host + ", port: " + port);
});

app.get('\test', function(req, res) {
    res.sendFile(__dirname + '/www/test.html');
});
