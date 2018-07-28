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
    console.log("login Submitting");
    var email = req.body[0]['value'];
    var password = req.body[1]['value'];
    console.log(email, password);
});

function display_data() {
    console.log("data being logged", req.body.username);
}

function isValid(email, password) {
    var valid_items = [['admin', 'password'],
                       ['hacker', '1337pass'],
                       ['abcd', '1963']];
    
    valid_items.forEach(element => {
        if (element[0] === email && element[1] === password) {
            return true;
        }
    });
    return false;
}

function checkData(email, password) {
    if (isValid(email, password)) {
        return(JSON.stringify({"ok":true}));
    } else {
        return(JSON.stringify({"ok":false, errors:{}}));
    }
}