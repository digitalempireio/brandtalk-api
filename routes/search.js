var express = require('express'),
    https = require('https'),
    search = express.Router(),
    Twitter = require('twitter'),
    client = new Twitter(require('../env/credentials.js').twitter);

search.get('/:query', function(req, res){

  client.get('search/tweets', { q: req.params.query } , function(error, tweets, response){
    if (!error) {
      res.json(tweets);
    }
  });

});

search.get('/:query/positive', function(req, res){

  var query = req.params.query + ' :)';
  query = encodeURIComponent(query);
  
  client.get('search/tweets', { q: query } , function(error, tweets, response){
    if (!error) {
      res.json(tweets);
    }
  });

});

search.get('/:query/negative', function(req, res){

  var query = req.params.query + ' :(';
  query = encodeURIComponent(query);

  client.get('search/tweets', { q: query } , function(error, tweets, response){
    if (!error) {
      res.json(tweets);
    }
  });

});


module.exports = search;
