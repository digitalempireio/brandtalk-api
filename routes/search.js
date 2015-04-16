var express = require('express'),
    https = require('https'),
    search = express.Router();

/*
var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'lvhjUPGtVpuHzCax46CBtIo4c',
  consumer_secret: 'NL2AeLwxiquiLLiFNQPEwZjrCg3K2SRtPLLaQrv8ClZahTKYo8',
  access_token_key: '2704130948-wy84GX2Aygezenm4iQbfW9MCMXwttGnmxHMj2pT',
  access_token_secret: 'epSZQ7VxVRVqnsB4JxVGrT5yBCJtKyX72S9F4Rm9DMzpQ'
});

twit.verifyCredentials(function(err, data){
  //console.log(data);
}).get('/search/tweets.json?q=micwosoft', {}, function(err, data) {
  console.log(err);
});*/

var Twitter = require('twitter');

var client = new Twitter(require('../env/credentials.js').twitter);

var params = {q: 'microsoft'};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

search.get('/:query', function(req, res){
  res.json({ message: 'hewwo!'});
});

module.exports = search;
