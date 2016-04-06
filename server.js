

var express = require('express');
var path = require('path');
var balance = require('./modules/balance');

var app = express();

app.use(express.static('public'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/balance', function(req, res) {
  res.send(balance.textLabel() + '\n' + balance.randomDollars());
})

app.listen(3000, function() {
  console.log('Listening for requests on port 3000');
})
