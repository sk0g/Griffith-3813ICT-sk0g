var express = require('express');
var app     = express();
var parser  = require('body-parser');
var http    = require('http').Server(app);

app.use(parser.json());
app.use(express.static(__dirname + '/www'));

var server = http.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("My first nodejs server!");
    console.log("Server listening on: " + host + ", port: " + port);
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/www/test.html');
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/www/login.html');
});

app.get('/account', function(req, res) {
    res.sendFile(__dirname + '/www/account.html');
});

app.get('/getData', function(req, res) {
    res.send("<h1> HELLO! </h1>");
});

app.post('/loginSubmit', function(req, res) {
    var email = req.body[0]['value'];
    var password = req.body[1]['value'];

    if (isValid(email, password)) {
        return res.status(200).send({
            success: true
        });
    } else {
        return res.status(403).send({
            success: false,
            errors: "Incorrect credentials"
        });
    }
});

function isValid(email, password) {
    var valid_items = [['admin', 'password'],
                       ['hacker', '1337pass'],
                       ['abcd', '1963']];
    
    for (var i = 0; i < valid_items.length; i++) {
      var current = valid_items[i];

      if (current[0] === email && current[1] === password) {
        return true;
      }
    }
    return false;
}
