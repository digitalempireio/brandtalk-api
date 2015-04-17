var express = require('express'),
    https = require('https'),
    search = express.Router(),
    Twitter = require('twitter'),
    client = new Twitter(require('../env/credentials.js').twitter),
    tweetParser = require('../util/tweetParser.js');

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
      res.json(tweetParser(tweets.statuses));
    }
  });

});

search.get('/:query/negative', function(req, res){

  var query = req.params.query + ' :(';
  query = encodeURIComponent(query);

  client.get('search/tweets', { q: query } , function(error, tweets, response){
    if (!error) {
      res.json(tweetParser(tweets.statuses, true));
    }
  });

});


module.exports = search;
