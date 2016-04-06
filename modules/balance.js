var dollars = require('./dollars');
var random = require('./random');

var randomDollars = function(){
  return dollars(random(100, 1000000));
}

var textLabel = function(){
  return 'Account balance: \n';
}

exports.randomDollars = randomDollars;
exports.textLabel = textLabel;
